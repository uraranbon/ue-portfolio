import Footer from '../../atoms/Footer/Footer';
import Header from '../../organism/Header/Header';
import MouseCursor from '../../atoms/MouseCursor/MouseCursor';
import { motion } from 'framer-motion';

export default function DefaultLayout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <main>
        <motion.div
          initial={{ opacity: 0, transition: { duration: 1 } }} // 初期状態
          animate={{ opacity: 1, transition: { duration: 1 } }} // マウント時
          exit={{ opacity: 0, transition: { duration: 1 } }} // アンマウント時
        >
          <MouseCursor />
          {children}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
