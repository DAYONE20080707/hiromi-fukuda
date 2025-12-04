// components/about/request/Request_01.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";

// 演奏依頼セクション
const Request_01 = () => {
  return (
    <>
      <SectionContent className="">
        <section className="md:max-w-[1200px] mx-auto">
          {/* 3つの画像パネル */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* パネル1: 女性バイオリニストたち */}
            <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden">
              <Image
                src="/about/request_01.jpg"
                alt="女性バイオリニストたちの演奏"
                fill
                className="object-cover"
              />
            </div>

            {/* パネル2: オーケストラのリハーサル */}
            <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden">
              <Image
                src="/about/request_02.jpg"
                alt="オーケストラのリハーサル"
                fill
                className="object-cover"
              />
            </div>

            {/* パネル3: バイオリニストとピアニスト */}
            <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden">
              <Image
                src="/about/request_03.jpg"
                alt="バイオリニストとピアニストの演奏"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* テキストとボタン */}
          <div className="mt-10 md:mt-10 space-y-10">
            <p className="text-base md:text-2xl leading-[150%] text-center text-accentColor">
              各種コンサートやイベントにおける様々な演奏のご依頼を承ります
            </p>
            <div className="flex justify-center">
              <MoreLinkButton
                href="/contact"
                variant="accent"
                useJapaneseFont={true}
              >
                ご依頼はこちら
              </MoreLinkButton>
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Request_01;
