// components/faq/faq_01.tsx

"use client";

import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import FaqList from "@/components/ui/module/FaqList_01";
import MoreButton from "@/components/ui/button/MoreButton";
import SectionContent from "@/components/ui/frame/SectionContent";

const Faq_01 = () => {
  return (
    <SectionContent className="bg-bgLight">
      <section className="md:max-w-[1200px] mx-auto">
        <ContentHeadline
          subTitle="よくある質問"
          mainTitle="FAQ"
          // subTitleClassName="text-center"
          // titleClassName="text-center"
        />
        <FaqList hideTab />
       
      </section>
    </SectionContent>
  );
};

export default Faq_01;
