// components/kv/KeyVisual_04.tsx
"use client";

import FirstViewContent from "@/components/top/kv/FirstViewContent";
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline_02";
import ScrollButton from "@/components/ui/button/ScrollButton";
import Image from "next/image";

// キービジュアル
const KeyVisual_04 = () => {
  const scrollToNextSection = () => {
    const kvElement = document.getElementById("kv-section");
    if (kvElement && kvElement.nextElementSibling) {
      kvElement.nextElementSibling.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <FirstViewContent className="relative">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="mx-auto relative h-[500px] md:h-screen flex items-center justify-center px-4 py-[50px] md:p-20">
          {/* 1枚の画像のみ表示 */}
          <div className="relative w-full h-full max-w-[1680px] max-h-[90vh] rounded-[20px] md:rounded-[40px] overflow-hidden">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/top/kv/kv_img1_sp.jpg"
              />
              <source media="(min-width: 768px)" srcSet="/top/kv/kv_img1.jpg" />
              <Image
                src="/top/kv/kv_img1.jpg"
                alt="Key Visual"
                priority
                fill
                className="object-cover"
              />
            </picture>
          </div>
        </section>
        <TopPageHeadline
          mainTitle={
            <>
              福田ひろみ
              <br />
              ヴァイオリン教室
            </>
          }
          description={<>Fukuda Hiromi <br className="md:hidden"/>Violin Lesson</>}
          className="w-fit md:w-full text-left md:text-center absolute right-3 md:left-1/2  md:transform md:-translate-x-1/2 top-[80px] md:top-1/2 md:-translate-y-1/2 px-5"
        />
      </FirstViewContent>
    </>
  );
};

export default KeyVisual_04;
