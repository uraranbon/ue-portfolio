import styles from './SkillsWrap.module.scss';

export default function SkillsWrap(props) {
  const { children } = props;

  return <div className={styles.skillsWrap}>{children}</div>;
}
