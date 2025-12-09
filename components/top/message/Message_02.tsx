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
          <div className="md:flex justify-start gap-20">
            <div className="max-w-[480px] md:hidden">
              <ContentHeadline
                subTitle="福田ひろみについて"
                mainTitle="About Teacher"
                // subTitleClassName="text-center"
                // titleClassName="text-center"
              />
            </div>
            <div className="w-full h-full md:w-[520px] md:h-[666px] relative">
              <Image
                src="/top/about/about_img.jpg"
                alt="福田ひろみ"
                width={520}
                height={666}
                className="object-cover rounded-[20px] md:rounded-[40px] aspect-[520/666]"
              />
            </div>
            <div className="max-w-[600px] mt-10 md:mt-0">
              <div className="max-w-[480px] hidden md:block">
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
                <br className="hidden md:block"/>
                おひとりおひとりの進度に合わせたカリキュラムを組んでいます。
                <br className="hidden md:block"/>
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
                <MoreLinkButton href="/about" className="mt-10" variant="accent">
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
