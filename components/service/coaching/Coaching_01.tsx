// components/message/Coaching_01.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import AboutSection from "@/components/ui/module/AboutSection_01";

// メッセージ
const Coaching_01 = () => {
  return (
    <>
      <SectionContent className="">
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1200px] mx-auto ">
          <div className=" md:mt-16 md:flex justify-start gap-20">
            <div className="max-w-[480px] md:hidden">
              <ContentHeadline
                subTitle="福田ひろみについて"
                mainTitle="About Teacher"
                // subTitleClassName="text-center"
                // titleClassName="text-center"
              />
            </div>
            <div className="w-full h-[400px] md:w-[540px] md:h-[500px] relative">
              <Image
                src="/service/coaching.jpg"
                alt="福田ひろみ"
                fill
                className="object-cover rounded-[20px] md:rounded-[40px]"
              />
            </div>
            <div className="max-w-[600px] mt-10 md:mt-0">
              <div className="max-w-[480px] hidden md:block">
                <ContentHeadline
                  subTitle="講師指導歴"
                  mainTitle="Coaching Carreer"
                  // subTitleClassName="text-center"
                  // titleClassName="text-center"
                />
              </div>
              <p className=" leading-[200%] tracking-[0.03em] font-medium">
              ・第4回世田谷音楽コンクール指導者賞受賞<br />
              ・第7回代官山ジュニア音楽コンクール指導者賞受賞<br />
              ・日本クラシック音楽コンクール全国大会審査員
              </p>
              <p className="mt-10 leading-[200%] tracking-[0.03em] font-medium">
              音楽では勉強のような点数評価が出るのがコンクールとなるため、コンクールへのチャレンジをおすすめします。コンクールで成果が出ると生徒さまの自信にも繋がると思います！
              </p>
              
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Coaching_01;
