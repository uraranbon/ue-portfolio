import styles from './SkillBox.module.scss';

export default function SkillBox({icon, text, name}) {
  return (
    <div className={`${styles.skillBox} ${styles[name]}`}>
      <div className={styles.percent}>
        <svg className={styles.graph}>
          <circle className={`${styles.base} ${styles.circle}`}cx='50' cy='50' r='45'></circle>
          <circle className={`${styles.line} ${styles.circle}`} cx='50' cy='50' r='45'></circle>
        </svg>
        <div className={styles.icon}>{icon}</div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}