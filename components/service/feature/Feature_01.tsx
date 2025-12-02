// components/service/feature/Feature_01.tsx

"use client";

import React from "react";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import { featureData } from "@/data/featureData";

const Feature_01 = () => {
  // 文字列内の\nを<br />に変換する関数
  const convertNewLines = (text: string) => {
    return text.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i !== text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      <SectionContent className="bg-bgLight">
        <section className="w-full md:max-w-[1200px] mx-auto">
          <ContentHeadline
            subTitle="教室の特徴"
            mainTitle="Feature"
            subTitleClassName="text-center"
            titleClassName="text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
            {featureData.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-[10px] overflow-hidden p-6 "
              >
                <h3 className="text-lg md:text-xl font-medium leading-[160%] text-accentColor text-center">
                  {convertNewLines(feature.title)}
                </h3>
                <div className="mt-4 relative w-full h-[200px] md:h-[200px]">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-sm md:text-base leading-[160%] whitespace-pre-line">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Feature_01;
