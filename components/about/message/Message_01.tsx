// components/message/Message_01.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import AboutSection from "@/components/ui/module/AboutSectionMessage";

// メッセージ
const Message_01 = () => {
  return (
    <>
      <AboutSection
        title="基礎から丁寧に。もっとヴァイオリンを好きになる。"
        description={`初めてヴァイオリンを手にする方から、音大受験やコンクール上位を目指す方まで、それぞれのペースに寄り添いながら、確かな基礎力と豊かな表現力を育てていきます。
          正しいフォームや基礎を丁寧に見直し積み重ねることで、音がぐっと変わり、コンクールの上位を目指せる力も自然と身についていきます。
          そして何より、みなさん一人ひとりが持っている「自分らしさ」を音にのせて、弾くことそのものを楽しんでもらえるような時間をつくっていきたいと思っています。ぜひ一緒に、あなたの音を育てていきましょう。`}
        name="福田ひろみ"
        // 以下は任意
        // buttonHref="/about"
        // imageUrl="/path/to/image.jpg"
      />
    </>
  );
};

export default Message_01;
