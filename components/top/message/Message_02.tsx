// components/message/Message_02.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";

// メッセージ
const Message_02 = () => {
  return (
    <>
      <SectionContent className="bg-bgLight">
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1200px] mx-auto ">
          <div className=" mt-16 flex justify-start space-x-20">
            <div className=" w-[520px] h-[666px] relative">
              <Image
                src="/top/about/about_img.jpg"
                alt="福田ひろみ"
                fill
                className="object-cover rounded-[40px]"
              />
            </div>
            <div className="max-w-[600px]">
              <div className="max-w-[480px]">
                <ContentHeadline
                  subTitle="福田ひろみについて"
                  mainTitle="About Teacher"
                  // subTitleClassName="text-center"
                  // titleClassName="text-center"
                />
              </div>
              <p className=" leading-[250%] tracking-[0.03em]">
                はじめまして。ヴァイオリニストの福田ひろみです。
                <br />
                初めてヴァイオリンを手にする方から､音大受験をめざす方まで､
                <br />
                おひとりおひとりの進度に合わせたカリキュラムを組んでいます。
                <br />
                1回ごとのレッスンを大切に､着実な上達をサポートします。
                <br />
                <br />
                東京音楽大学､大学院ともに首席で卒業
                <br />
                高嶋ちさ子12人のヴァイオリニスト元メンバー
                <br />
                日本音楽コンクール第3位
              </p>
              <div className="mt-10">
                <MoreLinkButton href="/" className="mt-10" variant="accent">
                  Profile
                </MoreLinkButton>
              </div>
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Message_02;
