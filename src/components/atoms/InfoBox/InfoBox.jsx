import styles from './InfoBox.module.scss';

export default function InfoBox({ title, content }) {
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>{title}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
