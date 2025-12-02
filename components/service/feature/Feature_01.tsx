// components/message/Feature_01.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import AboutSection from "@/components/ui/module/AboutSection_01";

// メッセージ
const Feature_01 = () => {
  return (
    <>
      <SectionContent className="![padding-bottom:0]">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full md:max-w-[1200px] mx-auto">
          <ContentHeadline
            subTitle="教室の特徴"
            mainTitle="Feature"
            // subTitleClassName="text-center"
            // titleClassName="text-center"
          />
        </section>
      </SectionContent>
    </>
  );
};

export default Feature_01;
