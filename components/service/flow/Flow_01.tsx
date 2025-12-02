// components/flow/Flow_01.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import FlowCard from "@/components/ui/ItemCard/FlowCard_01";
import SectionContent from "@/components/ui/frame/SectionContent";

const Flow_01 = ({ className = "" }) => {
  return (
    <>
      <SectionContent className={`bg-bgLight ${className}`}>
        <section className="md:max-w-[1200px] mx-auto">
          <ContentHeadline
            subTitle="クラス選びの目安"
            mainTitle="How to Choose"
            // subTitleClassName="text-center"
            // titleClassName="text-center"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6">
            <FlowCard
              number="01"
              title={`まずは楽しく
キッズ／ジュニア／大人クラス`}
              description={`初めての方も安心。
バイオリンの持ち方、弓の持ち方、ボーイング、音の出し方などバイオリンの奏法の基礎を学びます。 音階の練習をしながら、親しみやすい曲を中心に練習します。`}
              index={1}
            />
            <FlowCard
              number="02"
              title={`しっかり上達
スタンダードクラス`}
              description={`ポジション移動やヴィブラート奏法など演奏に必要なテクニックを学びながら、曲に合わせた表現力を身につけられます。
テクニックを習得しつつ、曲に合わせた表現力も磨けるレッスンです。`}
              index={2}
            />
            <FlowCard
              number="03"
              title={`目標に向けて本気で頑張る
特別クラス`}
              description={`コンクールや音大受験に挑戦したい方、より上位の結果を目指す方向け。
曲目選びから始まり、技術・表現力の向上、音階の徹底など、勝つためのレッスンです。`}
              index={3}
            />
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Flow_01;
