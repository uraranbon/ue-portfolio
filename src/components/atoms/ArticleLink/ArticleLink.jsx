import styles from './ArticleLink.module.scss';

export default function ArticleLink({ link, date, text }) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className={styles.articleLink}
    >
      <p className={styles.text}>
        {date && <time className={styles.time}>{date}</time>}
        {text}
      </p>
    </a>
  );
}
