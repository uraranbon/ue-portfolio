import React from "react";
import TwoColumn from "../organism/TwoColumn/TwoColumn";
import SkillBox from "../atoms/SkillBox/SkillBox";
import ExperienceBox from "../organism/ExperienceBox/ExperienceBox";
import WorksBox from "../organism/WorksBox/WorksBox";
import { motion } from "framer-motion";

//atoms
import ArticleLink from "../atoms/ArticleLink/ArticleLink";
import Heading01 from "../atoms/Heading01/Heading01";
import Heading02 from "../atoms/Heading02/Heading02";

//organism
import KeyVisual from "../organism/KeyVisual/KeyVisual";
import ArticlesWrap from "../organism/ArticlesWrap/ArticlesWrap";

//icon
import {
  BiLogoHtml5,
  BiLogoSass,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoJquery,
  BiLogoVuejs,
  BiLogoReact,
  BiLogoWordpress,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaNode, FaFigma } from "react-icons/fa";
import { HiLanguage } from "react-icons/hi2";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobepremierepro,
} from "react-icons/si";

//templates
import DefaultLayout from "../templates/DefaultLayout/DefaultLayout";

//image
import mafumi from "../../image/mafumi.webp";

//data
import { articles01 } from "../../data/articlesEn";
import { articles02 } from "../../data/articlesEn";
import ContentWrap from "../organism/ContentWrap/ContentWrap";
import SkillsWrap from "../organism/SkillsWrap/SkillsWrap";

export const English = () => {
  return (
    <DefaultLayout>
      <KeyVisual />
      <motion.section
        id="profile"
        className="sectionArea"
        initial={{
          opacity: 0,
          y: 30,
          transition: { duration: 1, delay: 1.4 },
        }} // 初期状態
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 1.4 },
        }} // マウント時
        exit={{ opacity: 0, y: 0, transition: { duration: 1, delay: 1.4 } }} // アンマウント時
      >
        <div className="innerArea">
          <TwoColumn>
            <Heading01 title="profile" />
            <ContentWrap>
              <div className="profile-box">
                <p className="text">
                  I joined web development company, LIG Inc., as an intern
                  during my third year of university. After graduating, I
                  officially joined the company in 2015. With a passion for
                  writing and a desire to become a professional writer, I became
                  an editor involved in managing LIG's owned media, which had a
                  monthly traffic of 4 million PV at the time. Later in 2016, I
                  joined the DevRel team, and when the team transitioned to an
                  independent company called dotstudio Inc., I followed along.
                  At dotstudio, I contributed to the operation of media
                  platforms focusing on IoT-related content.
                  <br />
                  <br />
                  During my time at LIG Inc., I became close with a senior
                  colleague who was a Chief Engineer. Through our conversations,
                  I developed an interest in web development, leading me to
                  create my own website through self-study. The challenge of
                  creating a website where the screen changes exactly as I
                  inputted intrigued me, as even a small mistake would result in
                  no change on the screen. This simplicity and complexity of web
                  development fascinated me, motivating me to deepen my
                  knowledge in the field. In August 2018, I joined BRISK Inc., a
                  web development company, as a Front-End Engineer, where I
                  utilized HTML, CSS, JavaScript, PHP, and other tools to create
                  various web projects.
                </p>
              </div>
            </ContentWrap>
          </TwoColumn>
        </div>
      </motion.section>

      <motion.section
        id="experience"
        className="sectionArea"
        variants={{
          offscreen: {
            y: 30,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          },
        }}
        initial="offscreen" // 初期表示はoffscreen
        whileInView="onscreen" // 画面内に入ったらonscreen
        viewport={{ once: false, amount: 0 }}
      >
        <div className="innerArea">
          <TwoColumn>
            <Heading01 title="experience" />
            <ContentWrap>
              <ExperienceBox
                date="2013.7～2015.3"
                company="LIG Inc."
                position="Internship - Editor"
                ja="I operated an entertainment media platform, which eventually grew to reach 1 million monthly page views. I took on the role of overseeing a team of five interns and also managed the articles contributed by external writers."
              />
              <ExperienceBox
                date="2015.3"
                company={"Graduated from Dokkyo University"}
              />
              <ExperienceBox
                date="2015.4~2016.7"
                company="LIG Inc."
                position="Media Department - Editor"
                ja="I joined the company as a new graduate and worked as an editor involved in managing an owned media platform with a monthly traffic of 4 million PV. My responsibilities included editing web development-related articles, creating sponsored content, accompanying interviews, as well as handling tasks such as photography and design."
              />
              <ExperienceBox
                date="2016.7~2016.11"
                company="dotstudio Inc."
                position="Technical Editor"
                ja='I independently joined dotstudio Inc., separating from the team at LIG Co., and engaged in promoting IoT-related businesses. As part of the business, I handled the distribution of domestic IoT products and wrote articles related to IoT. These articles were not only published on our own media but also contributed to "CodeZine," a web media operated by Shuwa System Co. Additionally, I participated in events in China, such as Maker Faire ShenZhen 2016, and conducted negotiations for exploring business partners and distribution of IoT products in New York."
                  enCompany="dotstudio Inc.'
              />
              <ExperienceBox
                date="2018.8~2023.4"
                company="BRISK Inc."
                position="Front-End Engineer"
                ja="As a front-end engineer, I worked on projects using HTML, SCSS, JavaScript, PHP, and other technologies. I also took part in project direction and was responsible for the entire process from estimation to delivery in most of the projects I was involved in."
              />
            </ContentWrap>
          </TwoColumn>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="sectionArea"
        variants={{
          offscreen: {
            y: 30,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          },
        }}
        initial="offscreen" // 初期表示はoffscreen
        whileInView="onscreen" // 画面内に入ったらonscreen
        viewport={{ once: false, amount: 0 }}
      >
        <div className="innerArea">
          <Heading01 title="Skills" />
          <Heading02 title="Experienced in business" />
          <SkillsWrap>
            <SkillBox
              icon={<BiLogoHtml5 />}
              text="HTML5"
              name="threeQuarters"
            />
            <SkillBox icon={<BiLogoCss3 />} text="CSS3" name="threeQuarters" />
            <SkillBox
              icon={<BiLogoSass />}
              text="Sass（SCSS）"
              name="threeQuarters"
            />
            <SkillBox
              icon={<BiLogoJavascript />}
              text="JavaScript"
              name="threeQuarters"
            />
            <SkillBox
              icon={<BiLogoJquery />}
              text="jQuery"
              name="threeQuarters"
            />
            <SkillBox icon={<FaNode />} text="Node.js" name="threeQuarters" />
            <SkillBox icon={<span>EJS</span>} text="EJS" name="half" />
            <SkillBox icon={<BiLogoVuejs />} text="Vue.js" name="half" />
            <SkillBox
              icon={<BiLogoWordpress />}
              text="WordPress"
              name="threeQuarters"
            />
            <SkillBox icon={<span>EC-CUBE</span>} text="EC-CUBE" name="quarter" />
          </SkillsWrap>
          <Heading02 title="Personal project" />
          <SkillsWrap>
            <SkillBox
              icon={<BiLogoTypescript />}
              text="TypeScript"
              name="half"
            />
            <SkillBox
              icon={<BiLogoReact />}
              text="React.js"
              name="threeQuarters"
            />
            <SkillBox
              icon={<BiLogoReact />}
              text={
                <span>
                  React Native
                  <small>(Expo)</small>
                </span>
              }
              name="quarter"
            />
            <SkillBox icon={<TbBrandNextjs />} text="Next.js" name="quarter" />
            <SkillBox
              icon={<span>microCMS</span>}
              text="microCMS"
              name="quarter"
            />
          </SkillsWrap>
          <Heading02 title="Adobe" />
          <SkillsWrap>
            <SkillBox icon={<FaFigma />} text="Figma" name="threeQuarters" />
            <SkillBox
              icon={<SiAdobexd />}
              text="Adobe XD"
              name="threeQuarters"
            />
            <SkillBox
              icon={<SiAdobephotoshop />}
              text="Photoshop"
              name="threeQuarters"
            />
            <SkillBox
              icon={<SiAdobeillustrator />}
              text="Illustrator"
              name="quarter"
            />
            <SkillBox
              icon={<SiAdobepremierepro />}
              text="Premiere Pro"
              name="quarter"
            />
          </SkillsWrap>
          <Heading02 title="Language" />
          <SkillsWrap>
            <SkillBox icon={<HiLanguage />} text="Japanese" name="full" />
            <SkillBox
              icon={<HiLanguage />}
              text={
                <span>
                  English
                  <br />
                  <small>2023.3 TOEIC 910</small>
                </span>
              }
              name="threeQuarters"
            />
            <SkillBox icon={<HiLanguage />} text="Korean" name="quarter" />
            <SkillBox icon={<HiLanguage />} text="Spanish" name="quarter" />
          </SkillsWrap>
        </div>
      </motion.section>

      <motion.section
        id="works"
        className="sectionArea"
        variants={{
          offscreen: {
            y: 30,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          },
        }}
        initial="offscreen" // 初期表示はoffscreen
        whileInView="onscreen" // 画面内に入ったらonscreen
        viewport={{ once: false, amount: 0 }}
      >
        <div className="innerArea">
          <TwoColumn>
            <Heading01 title="works" />
            <ContentWrap>
              <WorksBox
                image={mafumi}
                language="React × Next.js"
                year="2023"
                title="Mafumi Coffee official website (under construction)"
                ja="A cafe website. Created with Next.js (SSG), animating with Framer Motion."
              />
              <WorksBox
                language="jQuery"
                year="2022"
                title="University Quiz Content"
                ja="I made a site for high school students seeking university info. With 10 random questions, results appear in question order. Agency made design, and I handled development. Used Ajax to save quiz responses to DB. Added admin page feature for exporting responses to Excel."
              />
              <WorksBox
                language="Vue.js"
                year="2021"
                title="Pre-diagnosis of car manufacturers"
                ja="I built a site diagnosing whether users can charge EVs sold by a carmaker at home/work. Using 10 questions, it shows charging feasibility results and costs. Agency handled planning/design; I managed production and served as project contact. I oversaw direction, development, and delivery. Implemented URL parameters for result retrieval. Enabled PDF output for printing and store use."
              />
              <WorksBox
                language="ejs"
                year="2019~2021"
                title="Campaign website for home improvement store"
                ja="I developed a dedicated site for seasonal events hosted by a home center. Planning/design were by another company; I managed development. I served as the project point of contact, overseeing direction, development, and delivery. While needing to register around 30 products, CMS was not feasible due to server constraints. I introduced ejs for easier product deployment. I received assistance from team members for inputting product info, while handling other development tasks alone."
              />
              <WorksBox
                language="HTML, SCSS, JavaScript"
                year="2018~2023"
                title="Creation of a securities firm website (including around 20 LPs and a site for new graduates)."
                ja="I developed a securities firm campaign LP and new graduate site. Planning/design were by another company; I handled development. I served as the project point of contact, overseeing direction, development, and delivery. Creating around 6 landing pages per year, I used JavaScript for accordions, modals, and animations."
              />
            </ContentWrap>
          </TwoColumn>
        </div>
      </motion.section>

      <motion.section
        id="articles"
        className="sectionArea"
        variants={{
          offscreen: {
            y: 30,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          },
        }}
        f
        initial="offscreen" // 初期表示はoffscreen
        whileInView="onscreen" // 画面内に入ったらonscreen
        viewport={{ once: false, amount: 0 }}
      >
        <div className="innerArea">
          <TwoColumn>
            <Heading01 title="articles" />
            <div>
              <Heading02 title="BRISK Inc." />
              <ArticlesWrap>
                {articles01.map((article, index) => (
                  <ArticleLink
                    key={index}
                    link={article.link}
                    date={article.date}
                    text={article.text}
                  />
                ))}
              </ArticlesWrap>
              <Heading02 title="Other" />
              <ArticlesWrap>
                {articles02.map((article, index) => (
                  <ArticleLink
                    key={index}
                    link={article.link}
                    date={article.date}
                    text={article.text}
                  />
                ))}
              </ArticlesWrap>
            </div>
          </TwoColumn>
        </div>
      </motion.section>
    </DefaultLayout>
  );
};
