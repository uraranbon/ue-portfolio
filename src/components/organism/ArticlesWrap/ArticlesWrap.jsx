import styles from './ArticlesWrap.module.scss';

export default function ArticlesWrap(props) {
  const { children } = props;

  return <div className={styles.articlesWrap}>{children}</div>;
}
