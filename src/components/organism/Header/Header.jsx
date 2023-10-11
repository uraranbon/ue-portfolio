import { useState } from 'react';
import styles from './Header.module.scss';
import { Link as Scroll } from 'react-scroll';
import Link from 'next/link';
import { motion } from 'framer-motion';

//font
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-en',
});

//icon
import { TfiNewWindow } from 'react-icons/tfi';

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
    setLanguageMenuOpen(false);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen((prev) => !prev);
    setNavIsOpen(false);
  };

  return (
    <motion.header
      className={`${styles.header} ${poppins.className}`}
      initial={{
        opacity: 0,
        y: -30,
        transition: { duration: 0.3, delay: 0.4 },
      }} // 初期状態
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.4 } }} // マウント時
      exit={{ opacity: 0, y: 0, transition: { duration: 0.3, delay: 0.4 } }} // アンマウント時
    >
      <nav className={navIsOpen ? styles.isOpen : styles.isClose}>
        <h1 className={styles.name}>
          <Link href='/'>urara enomoto</Link>
        </h1>
        <button
          className={styles.button}
          onClick={toggleNav}
          tabIndex={0}
          aria-label={navIsOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={navIsOpen ? 'true' : 'false'}
        >
          <span className={styles.bar}></span>
        </button>
        <ul className={styles.links}>
          <li>
            <Scroll
              href='#'
              aria-label='profileへスクロール'
              smooth={true}
              to='profile'
              duration={600}
              onClick={closeNav}
              tabIndex={0}
            >
              profile
            </Scroll>
          </li>
          <li>
            <Scroll
              href='#'
              aria-label='experienceへスクロール'
              smooth={true}
              to='experience'
              duration={600}
              onClick={closeNav}
              tabIndex={0}
            >
              experiences
            </Scroll>
          </li>
          <li>
            <Scroll
              href='#'
              aria-label='skillsへスクロール'
              smooth={true}
              to='skills'
              duration={600}
              onClick={closeNav}
              tabIndex={0}
            >
              skills
            </Scroll>
          </li>
          <li>
            <Scroll
              href='#'
              aria-label='worksへスクロール'
              smooth={true}
              to='works'
              duration={600}
              onClick={closeNav}
              tabIndex={0}
            >
              works
            </Scroll>
          </li>
          <li>
            <Scroll
              href='#'
              aria-label='articlesへスクロール'
              smooth={true}
              to='articles'
              duration={600}
              onClick={closeNav}
              tabIndex={0}
            >
              articles
            </Scroll>
          </li>
          <li>
            <a
              href='https://www.yaco-web.com/'
              target='_blank'
            >
              blog
              <span className={styles.icon}>
                <TfiNewWindow />
              </span>
            </a>
          </li>
        </ul>
        <div className={styles.languageSelector}>
          <button
            className={styles.languageButton}
            onClick={toggleLanguageMenu}
            aria-expanded={languageMenuOpen ? 'true' : 'false'}
            aria-haspopup='menu'
            aria-label='Language Setting'
          >
            language
          </button>
          <ul className={languageMenuOpen ? styles.isOpen : styles.isClose}>
            <li>
              <Link
                href='/en/'
                onClick={() => {
                  setLanguageMenuOpen(false);
                }}
              >
                English
              </Link>
            </li>
            <li>
              <Link
                href='/'
                onClick={() => {
                  setLanguageMenuOpen(false);
                }}
              >
                日本語
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}
