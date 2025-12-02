// components/message/Award_01.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import AboutSection from "@/components/ui/module/AboutSection_01";

// メッセージ
const Award_01 = () => {
  return (
    <>
      <SectionContent className="![padding-bottom:0]">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full md:max-w-[1200px] mx-auto">
          <ContentHeadline
            subTitle="生徒さんコンクール実績"
            mainTitle="Awards"
            // subTitleClassName="text-center"
            // titleClassName="text-center"
          />
        </section>
        
      </SectionContent>
    </>
  );
};

export default Award_01;
