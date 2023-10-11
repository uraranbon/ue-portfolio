import styles from './TwoColumn.module.scss';

export default function TwoColumn(props) {
  const { children } = props;
  return <div className={styles.twoColumn}>{children}</div>;
}
