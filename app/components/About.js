"use client";

import { motion } from "framer-motion";
import styles from "./css/About.module.css";

const highlights = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    title: "Clean Code",
    desc: "I write maintainable, scalable, and well-structured code.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    ),
    title: "UI/UX Design",
    desc: "Intuitive and aesthetic interfaces focused on the user.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    ),
    title: "Performance",
    desc: "Fast and SEO-optimized applications for the best experience.",
  },
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About</span>
          <h2 className="section-title">
            Who <span className="gradient-text">am I</span> ?
          </h2>
          <p className="section-subtitle">
            A passionate Front-End Developer with 3+ years of experience in
            creating modern and responsive web applications.
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.textSection}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.text}>
              I am a Front-End Developer based in Paris, specialized in
              creating exceptional web experiences. My journey started
              3 years ago, and since then, I've had the chance to work on a
              variety of projects ranging from landing pages to complex
              web applications.
            </p>
            <p className={styles.text}>
              My passion for web development drives me to constantly
              learn and master the latest technologies. I firmly believe
              that code quality and user experience go hand in hand.
            </p>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Name</span>
                <span className={styles.infoValue}>Ibrahim Amera</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>ibrahim@example.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Paris, France</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Availability</span>
                <span className={`${styles.infoValue} ${styles.available}`}>
                  Freelance / Full-Time
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.highlightsSection}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className={styles.highlightCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className={styles.highlightIcon}>{item.icon}</div>
                <div>
                  <h3 className={styles.highlightTitle}>{item.title}</h3>
                  <p className={styles.highlightDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}