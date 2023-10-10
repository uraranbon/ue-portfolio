import styles from "./ExperienceBox.module.scss";
import { motion } from "framer-motion";

export default function ExperienceBox({
  date,
  company,
  position,
  ja,
}) {
  return (
    <motion.article
      className={styles.experienceBox}
      variants={{
        offscreen: {
          y: 30,
          opacity: 0,
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      }}
      initial="offscreen" // 初期表示はoffscreen
      whileInView="onscreen" // 画面内に入ったらonscreen
      viewport={{ once: false, amount: 0 }}
    >
      <time className={styles.year}>{date}</time>
      <h3 className={styles.company}>
        <small>{company}</small>
        <br />
        {position}
      </h3>
      {ja && <p className={styles.text}>{ja}</p>}
    </motion.article>
  );
}
