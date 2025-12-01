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
        <section className="mx-auto relative h-screen flex items-center justify-center p-4 md:p-20">
          {/* 1枚の画像のみ表示 */}
          <div className="relative w-full h-full max-w-[1400px] max-h-[90vh] rounded-[20px] md:rounded-[40px] overflow-hidden">
            <Image
              src="/top/kv/kv_img1.jpg"
              alt="Key Visual"
              priority
              fill
              className="object-cover"
            />
          </div>
        </section>
        <TopPageHeadline
          mainTitle={<>福田ひろみ<br/>ヴァイオリン教室</>}
          description="Fukuda Hiromi Violin Lesson"
          className="w-full text-center absolute left-1/2  transform -translate-x-1/2 top-1/2 -translate-y-1/2 px-5"
        />
      </FirstViewContent>
    </>
  );
};

export default KeyVisual_04;
