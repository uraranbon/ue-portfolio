import styles from './Heading01.module.scss';

//font
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-en',
});

export default function Heading01({ title }) {
  return <h2 className={`${styles.heading01} ${poppins.className}`}>{title}</h2>;
}
