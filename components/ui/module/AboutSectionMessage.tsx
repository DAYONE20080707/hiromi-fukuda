import React from "react";
import MoreButton from "@/components/ui/button/MoreButton";
import Image from "next/image";
import ContentHeadline from "../frame/ContentHeadline";
import SectionContent from "../frame/SectionContent";

interface AboutSectionMessageProps {
  title: string; // 見出しテキスト
  description: string; // 本文
  buttonHref?: string; // ボタンリンク先（任意）
  imageUrl?: string; // 画像URL（任意）
  name?: string; // 氏名（任意）
}

const AboutSectionMessage = ({
  title,
  description,
  buttonHref,
  imageUrl,
  name,
}: AboutSectionMessageProps) => {
  // 文字列内の\nを<br />に変換する関数
  const convertNewLines = (text: string) => {
    return text.split("\\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i !== text.split("\\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <SectionContent className="bg-bgLight">
      <div className="md:flex items-start justify-between md:max-w-[1240px] mx-auto gap-10">
        <div className="max-w-[480px]">
          <ContentHeadline
            subTitle="ご挨拶"
            mainTitle="Message"
            subTitleClassName=""
            titleClassName=""
          />
        </div>

        <div>
          <h3 className="w-full md:max-w-[581px] text-2xl md:text-[40px] leading-[160%] tracking-[0.03em]">
            {convertNewLines(title)}
          </h3>
          <p className="w-full md:max-w-[581px] !leading-[200%] text-base md:text-base mt-10 md:mt-10 whitespace-pre-line tracking-[0.03em]">
            {description}
          </p>
          {name && (
            <p className="mt-10 text-base md:text-base !leading-[200%] tracking-[0.03em]">
              {name}
            </p>
          )}
          {buttonHref && (
            <MoreButton href={buttonHref} className="mt-10" variant="accent">
              About us
            </MoreButton>
          )}
        </div>
      </div>
    </SectionContent>
  );
};

export default AboutSectionMessage;
