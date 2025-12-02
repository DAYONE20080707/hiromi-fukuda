// components/message/About_02.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import AboutSection from "@/components/ui/module/AboutSectionLesson";

// メッセージ
const About_02 = () => {
  return (
    <>
      <SectionContent className="">
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1200px] mx-auto ">
          <AboutSection
            subTitle="教室について"
            mainTitle="About"
            headline="体験レッスンは手ぶらで！\n楽器貸出しございます。"
            sections={[
              {
                subHeading: "ヴァイオリンを始めてみたい方・楽しく学びたい方",
                description: `どなた様でもドレミを読めるようになるところからはじめ、基礎から丁寧に教えます。音を通して自分を表現する楽しさを伝えられるよう、ひとりひとりに寄り添ったレッスンを大切にしています。`,
              },
              {
                subHeading: "コンクール・音高音大受験クラス",
                description: `コンクールや音大へ挑戦したい、より上位へと結果を求めたい方。現役コンクール審査員ならではのコンクールへの勝ち方、曲目選びから技術・表現力アップへ向けて熱心に指導いたします。すでに先生に習っているという方も基礎からの学び直しや環境を変えてみたいなどご相談ください。`,
              },
            ]}
            imageUrl="/service/about.jpg"
          />
        </section>
      </SectionContent>
    </>
  );
};

export default About_02;
