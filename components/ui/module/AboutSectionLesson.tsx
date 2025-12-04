import React from "react";
import MoreButton from "@/components/ui/button/MoreButton";
import Image from "next/image";

interface SectionItem {
  subHeading: string; // サブ見出し
  description: string; // 説明文
}

interface AboutSectionLessonProps {
  subTitle?: string; // 小見出し（例：「教室について」）
  mainTitle?: string; // メインタイトル（例：「About」）
  headline?: string; // ヘッドライン（太字の見出し）
  sections?: SectionItem[]; // セクションの配列
  buttonHref?: string; // ボタンリンク先（任意）
  imageUrl?: string; // 画像URL（任意）
  // 後方互換性のため残す
  title?: string; // 見出しテキスト（後方互換性）
  description?: string; // 本文（後方互換性）
  position?: string; // 役職（任意）
  name?: string; // 氏名（任意）
}

const AboutSectionLesson = ({
  subTitle = "教室について",
  mainTitle = "About",
  headline,
  sections,
  buttonHref,
  imageUrl,
  title,
  description,
  position,
  name,
}: AboutSectionLessonProps) => {
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
    <div className="flex flex-col-reverse md:flex-row justify-start md:gap-20">
      <div className="md:w-[36vw] md:max-w-[520px] h-[300px] md:h-auto relative mt-10 md:mt-0">
        <Image
          src={imageUrl || "/top/message/message_img.png"}
          alt={name || "message"}
          fill
          className="object-cover w-full h-full rounded-[40px]"
        />
      </div>
      <div className="md:max-w-[540px]">
        {subTitle && (
          <p className="text-sm md:text-base font-medium text-baseColor mb-1">
            {subTitle}
          </p>
        )}
        {mainTitle && (
          <h2 className="text-3xl md:text-[72px] font-en font-normal leading-[120%] text-accentColor mb-6">
            {mainTitle}
          </h2>
        )}
        {headline && (
          <h3 className="text-xl md:text-[40px] font-medium leading-[160%] tracking-[0.03em] mb-8">
            {convertNewLines(headline)}
          </h3>
        )}
        {sections && sections.length > 0 ? (
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-base md:text-xl font-medium text-accentColor mb-3">
                  {section.subHeading}
                </h4>
                <p className="text-sm md:text-base !leading-[200%] tracking-[0.03em] whitespace-pre-line">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <>
            {title && (
              <h3 className="text-3xl md:text-[40px] font-light leading-[160%] tracking-[0.03em]">
                {convertNewLines(title)}
              </h3>
            )}
            {description && (
              <p className="mt-10 !leading-[250%] tracking-[0.03em] md:text-lg whitespace-pre-line">
                {description}
              </p>
            )}
            {(position || name) && (
              <p className="mt-10 text-lg !leading-[250%]">
                {position}
                <br />
                {name}
              </p>
            )}
          </>
        )}
        {buttonHref && (
          <MoreButton href={buttonHref} className="mt-10" variant="accent" />
        )}
      </div>
    </div>
  );
};

export default AboutSectionLesson;
