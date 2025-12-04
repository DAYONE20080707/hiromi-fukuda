// components/service/class/Class_01.tsx

"use client";

import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import { classData } from "@/data/classData";
import React from "react";

// 文字列内の\nを<br />に変換する関数
const convertNewLines = (text: string) => {
  return text.split("\n").map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i !== text.split("\n").length - 1 && <br />}
    </React.Fragment>
  ));
};

const Class_01 = () => {
  return (
    <>
      <SectionContent className="">
        <section className="w-full md:max-w-[1200px] mx-auto">
          <ContentHeadline subTitle="レッスン･料金" mainTitle="Class" />
          <div className="mt-10 md:mt-16 space-y-8 md:space-y-12 font-medium">
            {classData.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-lg md:text-xl text-accentColor mb-6">
                  {section.title}
                </h3>
                <div className="space-y-0">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <div className="py-4 border-b border-[#efefef]">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="md:flex-1">
                            <h4 className="text-lg md:text-[22px] font-medium text-baseColor">
                              {item.name}
                              {item.attention && (
                                <span className="text-sm md:text-base">
                                  {convertNewLines(item.attention)}
                                </span>
                              )}
                            </h4>
                            {item.description && (
                              <span className="block mt-1 text-xs md:text-base">
                                {convertNewLines(item.description)}
                              </span>
                            )}
                          </div>
                          <div className="md:text-right flex-shrink-0 flex flex-col gap-4">
                            {item.priceOptions.map((option, optionIndex) => (
                              <div
                                key={optionIndex}
                                className="text-right flex w-[350px] justify-between"
                              >
                                <p className="text-sm md:text-[22px] whitespace-pre-line">
                                  {option.details}
                                  {option.detailsAttention && (
                                    <span className="text-sm md:text-base">
                                      {option.detailsAttention}
                                    </span>
                                  )}
                                </p>
                                <p className="text-base md:text-[32px] font-ebGaramond">
                                  {option.price && (
                                    <span className="text-lg">¥</span>
                                  )}

                                  <span className="text-[32px]">
                                    {option.price}
                                  </span>
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
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

export default Class_01;
