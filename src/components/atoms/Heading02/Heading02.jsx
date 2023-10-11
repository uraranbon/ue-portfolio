import styles from './Heading02.module.scss';

//font
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-en',
});

export default function Heading02({ title }) {
  return <h3 className={`${styles.heading02} ${poppins.className}`}>{title}</h3>;
}
