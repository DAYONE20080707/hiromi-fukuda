// components/service/award/Award_01.tsx

"use client";

import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import { awardData } from "@/data/awardData";

const Award_01 = () => {
  return (
    <>
      <SectionContent className="bg-bgLight">
        <section className="w-full md:max-w-[1200px] mx-auto">
          <ContentHeadline
            subTitle="生徒さんコンクール実績"
            mainTitle="Awards"
          />
          <div className="mt-10 md:mt-16 space-y-8 md:space-y-12 font-medium">
            {awardData.map((yearData) => (
              <div key={yearData.year} className="">
                <h3 className="text-lg md:text-xl text-accentColor mb-6">
                  {yearData.year}年
                </h3>
                <div className="space-y-0">
                  {yearData.items.map((item, index) => (
                    <div key={index}>
                      <div className="text-left py-4">
                        <p className="text-sm md:text-base text-baseColor leading-relaxed">
                          {item.competition}
                        </p>
                        <p className="text-base md:text-lg text-baseColor mt-1 leading-relaxed">
                          {item.award}
                        </p>
                      </div>
                      <div className="border-b border-[#EFEFEF]"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Award_01;
