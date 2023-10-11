import styles from './Footer.module.scss';

//font
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-en',
});

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${poppins.className}`}>
      <small className={styles.copyright}>Copyright &copy; uraraenomoto</small>
    </footer>
  );
}
