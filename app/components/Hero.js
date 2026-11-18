"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./css/Hero.module.css";

const roles = [
  "Front-End Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Next.js Expert",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate random particle styles strictly on the client to prevent hydration mismatch
  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${5 + Math.random() * 5}s`,
      width: `${4 + Math.random() * 6}px`,
      height: `${4 + Math.random() * 6}px`,
    }));

    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.slice(0, displayText.length - 1)
              : currentRole.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.particles}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={styles.particle}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
              width: particle.width,
              height: particle.height,
            }}
          />
        ))}
      </div>

      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.greeting} variants={itemVariants}>
          <span className={styles.greetingLine}></span>
          <span className={styles.greetingText}>Hello, I am</span>
        </motion.div>

        <motion.h1 className={styles.name} variants={itemVariants}>
          <span className={styles.firstName}>Ibrahim</span>
          <span className={styles.lastName}>Amera</span>
        </motion.h1>

        <motion.div className={styles.roleWrapper} variants={itemVariants}>
          <span className={styles.rolePrefix}>{"<"}</span>
          <span className={styles.roleText}>
            {displayText}
            <span className={styles.cursor}>|</span>
          </span>
          <span className={styles.roleSuffix}>{" />"}</span>
        </motion.div>

        <motion.p className={styles.description} variants={itemVariants}>
          I create exceptional web experiences with modern technologies.
          Passionate about design, animation, and performance.
        </motion.p>

        <motion.div className={styles.actions} variants={itemVariants}>
          <a href="#projects" className="btn btn-primary">
            View My Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </motion.div>

        <motion.div className={styles.stats} variants={itemVariants}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>3+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Projects Done</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>30+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
        </motion.div>
      </motion.div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot}></div>
        </div>
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}