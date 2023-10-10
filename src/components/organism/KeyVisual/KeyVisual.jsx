import React from "react";
import styles from "./KeyVisual.module.scss";
import { motion } from "framer-motion";
import InfoBox from "../../atoms/InfoBox/InfoBox";

//font
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-en",
});

const KeyVisual = () => {
  return (
    <section className={`${styles.keyBlock} ${poppins.className} sectionArea`}>
      <motion.h2
        className={styles.keyTitle}
        initial={{
          opacity: 0,
          y: 30,
          transition: { duration: 0.3, delay: 0.2 },
        }} // 初期状態
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.2 },
        }} // マウント時
        exit={{
          opacity: 0,
          y: 0,
          transition: { duration: 0.3, delay: 0.2 },
        }} // アンマウント時
      >
        urara enomoto
      </motion.h2>
      <div className="innerArea">
        <motion.div
          className={styles.summaryWrap}
          initial={{
            opacity: 0,
            y: 30,
            transition: { duration: 0.3, delay: 0.4 },
          }} // 初期状態
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.4 },
          }} // マウント時
          exit={{
            opacity: 0,
            y: 0,
            transition: { duration: 0.3, delay: 0.4 },
          }} // アンマウント時
        >
          <InfoBox
            title="Engineering Work Experience"
            content="5 years (since 2018)"
          />
          <InfoBox title="Currently Learning" content="React & Next.js" />
          <InfoBox title="Location" content="Tokyo" />
          <InfoBox title="Languages" content="Japanese & English" />
        </motion.div>
      </div>
    </section>
  );
};

export default KeyVisual;
