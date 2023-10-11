"use client";

import React from "react";
import { motion } from "framer-motion";

//atoms
import ArticleLink from "../components/atoms/ArticleLink/ArticleLink";
import Heading01 from "../components/atoms/Heading01/Heading01";
import Heading02 from "../components/atoms/Heading02/Heading02";
import SkillBox from "../components/atoms/SkillBox/SkillBox";

//organism
import KeyVisual from "../components/organism/KeyVisual/KeyVisual";
import ArticlesWrap from "../components/organism/ArticlesWrap/ArticlesWrap";
import ContentWrap from "../components/organism/ContentWrap/ContentWrap";
import SkillsWrap from "../components/organism/SkillsWrap/SkillsWrap";
import ExperienceBox from "../components/organism/ExperienceBox/ExperienceBox";
import WorksBox from "../components/organism/WorksBox/WorksBox";
import TwoColumn from "../components/organism/TwoColumn/TwoColumn";

//templates
import DefaultLayout from "../components/templates/DefaultLayout/DefaultLayout";

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

//data
import { articles01 } from "../data/articles";
import { articles02 } from "../data/articles";

const Home = () => {
  return (
    <DefaultLayout>
      <KeyVisual />
      <motion.section
        id="profile"
        className="sectionArea"
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 1.4 },
        }}
      >
        <div className="innerArea">
          <TwoColumn>
            <Heading01 title="profile" />
            <ContentWrap>
              <div className="profile-box">
                <p className="text">
                  大学3年生のときにWeb制作会社の株式会社LIGへインターンとして参加し、卒業後の2015年に入社しました。文章が好きでライターになりたいと考えており、LIGが運営していた当時月間400万PVのオウンドメディアの運営に編集者として携わりました。その後、2016年にDevRelチームに所属していましたが、メンバーそのままでdotstudio株式会社として独立することになり、ついていきました。この会社でもIoT関連のメディア運用に携わりました。
                  <br />
                  <br />
                  株式会社LIG時代に仲良くなった先輩の一人がチーフエンジニアであり、話しているうちにウェブ制作に興味が出たことから、独学でウェブサイトをひとつ作りました。そのとき、入力した通りに画面が変わる反面、間違えると画面が何も変わらないというシンプルかつ難しい制作に面白さを感じ、もっと知識を深めたいと考え、2018年8月にWeb制作会社の株式会社BRISKへ入社しました。フロントエンドエンジニアとしてHTML、CSS、JavaScript、PHPなどを用いた制作をおこないました。
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
                company="株式会社LIG"
                position="インターンシップ - 編集者"
                ja="エンタメメディアを運営し、最終的には月間100万PVのメディアに発展しました。インターン生5名をまとめる立場になり、外部のライターの記事管理も担当しました。"
              />
              <ExperienceBox
                date="2015.3"
                company={"獨協大学外国語学部交流文化学科 卒業"}
                position=""
                ja=""
              />
              <ExperienceBox
                date="2015.4~2016.7"
                company="株式会社LIG"
                position="メディア事業部 - 編集者"
                ja="新卒入社し、当時月間400万PVのオウンドメディアの運営に編集者として携わりました。ウェブ制作に関する記事の編集や記事広告の作成、インタビューへの同行などに伴い写真撮影やデザイン制作などもおこないました。"
              />
              <ExperienceBox
                date="2016.7~2016.11"
                company="dotstudio株式会社"
                position="テクニカルエディター"
                ja="株式会社LIGで所属していたチームごと独立し、dotstudio株式会社にてIoTを推し進める事業に携わりました。事業の一環として、国内のIoT製品の代理販売をおこなったり、IoTに関する記事の執筆をおこないました。記事は自社メディアだけではなく、株式会社翔泳社が運営するWebメディア「CodeZine」にも寄稿しています。また、中国でのイベント出展（Maker Faire ShenZhen 2016）や、ニューヨークへIoT製品の取引先開拓・代理販売の交渉などをおこないました。"
              />
              <ExperienceBox
                date="2018.8~2023.4"
                company="株式会社BRISK"
                position="フロントエンドエンジニア"
                ja="HTML、SCSS、JavaScriptなどを用いた制作や、WordPressを用いたサイト構築などをおこないました。ディレクションもおこない、制作で関わったほとんどの案件で見積もりから納品までを担当しました。"
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
          <Heading01 title="skills" />
          <Heading02 title="実務経験あり" />
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
              text={
                <span>
                  WordPress
                  <small>30サイト程構築</small>
                </span>
              }
              name="threeQuarters"
            />
            <SkillBox
              icon={<span>EC-CUBE</span>}
              text="EC-CUBE"
              name="quarter"
            />
          </SkillsWrap>
          <Heading02 title="個人開発" />
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
                  <small>2023.3 TOEIC 910点</small>
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
                language="React × Next.js"
                year="2023"
                title="眞踏珈琲店 公式サイト（制作中）"
                ja="喫茶店のサイトリニューアルを担当しています。Next.js（SSG）で作りました。アニメーションはFramer Motionでつけています。"
              />
              <WorksBox
                language="jQuery"
                year="2022"
                title="大学の高校生向け特設サイト（クイズコンテンツ）"
                ja="大学の高校生向け特設サイトの制作を担当しました。全10問の質問をランダムに表示し、結果ページには出題順に開設を載せる仕様です。企画・デザインは代理店で、開発を担当しました。開発では、ajaxを利用し、クイズの回答をDBに保存するようにしました。管理者ページから回答の一覧をエクセルで出力できるようにしました。"
              />
              <WorksBox
                language="Vue.js"
                year="2021"
                title="車メーカーの事前診断チェックサイト"
                ja="車メーカーが販売している電気自動車の充電を自宅や職場でおこなえるか、事前に診断するサイトの構築を担当しました。全10問の質問をもとに充電可否の結果や費用を出します。企画・デザインは代理店で、制作や案件の窓口を担当し、ディレクションから開発、納品までを1人で担当しました。開発では、URLにパラメータを振り、そのURLを保存し後日ページへ入力すると診断結果を再度表示できるようにしました。結果を印刷して店舗にもっていけるよう、PDF出力ができるようにしています。"
              />
              <WorksBox
                language="ejs"
                year="2019~2021"
                title="ホームセンターのイベント特設サイト（全5回）"
                ja="ホームセンターが季節ごとにおこなうイベントの特設サイトを構築しました。企画・デザインは他社で、開発を担当しました。案件の窓口も担当し、ディレクションから開発、納品までを担当しました。30種類ほどの商品を登録する必要がありましたが、サーバーの関係でCMSを使うことができず、商品を展開しやすいようejsを導入しました。商品情報の入力のみ他メンバーに手伝ってもらい、他の開発は一人で担当しました。"
              />
              <WorksBox
                language="HTML, SCSS, JavaScript"
                year="2018~2023"
                title="証券会社のサイト制作（LP（全20回程）と新卒向けサイト）"
                ja="証券会社のキャンペーンLPと新卒向けサイトを構築しました。企画・デザインは他社で、開発を担当しました。案件の窓口も担当し、ディレクションから開発、納品までを担当しました。LPは年に6枚ほど制作し、アコーディオンやモーダル、アニメーションにJavaScriptを活用しました。"
              />
              <WorksBox
                language="Next.js"
                year="2023 ※個人開発"
                title="テックブログ"
                ja={
                  <>
                    microCMSとNext.jsを使い<a href="https://yaco-web.com/" target="_blank">ブログ</a>を作成しました。
                  </>
                }
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
        initial="offscreen" // 初期表示はoffscreen
        whileInView="onscreen" // 画面内に入ったらonscreen
        viewport={{ once: false, amount: 0 }}
      >
        <div className="innerArea">
          <TwoColumn>
            <Heading01 title="articles" />
            <div>
              <Heading02 title="株式会社BRISK" />
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
              <Heading02 title="他" />
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

export default Home;
