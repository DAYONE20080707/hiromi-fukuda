// components/message/About_01.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import Image from "next/image"
import AboutSection from "@/components/ui/module/AboutSection_01"
import SectionContent from "@/components/ui/frame/SectionContent"

// メッセージ
const About_01 = () => {
  return (
    <>
      <SectionContent id="about" className="!py-0 !px-0">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full md:max-w-[1240px] mx-auto px-5 ">
       
        </section>
        <AboutSection
          title="子供も、大人も。\n
音を奏でる楽しさ。音楽を身近に。"
          description={`東京都渋谷区（最寄り渋谷駅徒歩7分）の福田ひろみヴァイオリン教室。豊富なコンクール実績と指導経験をもつ講師が、誰でも楽しく継続できるレッスンを。
            はじめてヴァイオリンにふれる方からコンクール・プロを目指す方まで工夫を重ねたオリジナルメソッドで基礎から丁寧に指導。
            まずはワンコイン体験レッスンから。`}
          buttonHref="/about"
          // 以下は任意
          // imageUrl="/path/to/image.jpg"
          // position="代表取締役"
          // name="山田太郎"
        />
      </SectionContent>
    </>
  )
}

export default About_01
