import styles from './ContentWrap.module.scss';

export default function ContentWrap(props) {
  const { children } = props;

  return <div className={styles.contentWrap}>{children}</div>;
}
