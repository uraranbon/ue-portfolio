import styles from './WorksBox.module.scss';
import { motion } from 'framer-motion';

export default function WorksBox({ language, year, title, ja }) {
  return (
    <motion.article
      className={styles.worksBox}
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
      initial='offscreen' // 初期表示はoffscreen
      whileInView='onscreen' // 画面内に入ったらonscreen
      viewport={{ once: false, amount: 0 }}
    >
      <div className={styles.info}>
        <div className={styles.tagDateWrap}>
          <span className={styles.tag}>{language}</span>
          <time className={styles.date}>{year}</time>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{ja}</p>
      </div>
    </motion.article>
  );
}
