// components/message/About_01.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PageContent from "@/components/ui/frame/PageContent";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import AboutSection from "@/components/ui/module/AboutSection_01";
import { aboutCareerData } from "@/data/aboutData";

// メッセージ
const About_01 = () => {
  return (
    <>
      <SectionContent className="">
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1200px] mx-auto ">
          <div className="md:flex justify-start gap-20">
            <div className="max-w-[480px] md:hidden">
              <ContentHeadline
                subTitle="経歴"
                mainTitle="Profile"
                // subTitleClassName="text-center"
                // titleClassName="text-center"
              />
            </div>
            <div className="w-full h-[400px] md:w-[520px] md:h-[666px] relative">
              <Image
                src="/top/about/about_img.jpg"
                alt="福田ひろみ"
                fill
                className="object-cover rounded-[40px]"
              />
            </div>
            <div className="max-w-[540px] mt-10 md:mt-0">
              <div className="max-w-[480px] hidden md:block">
                <ContentHeadline
                  subTitle="経歴"
                  mainTitle="Profile"
                  // subTitleClassName="text-center"
                  // titleClassName="text-center"
                />
              </div>
              <div className="space-y-4">
                {aboutCareerData.map((career, index) => (
                  <p key={index} className=" leading-[160%] tracking-[0.03em]">
                    {career}
                  </p>
                ))}
              </div>
              <div className="mt-10 space-y-4">
                <h3 className="text-xl text-accentColor">
                  ヴァイオリンを始めたきっかけ
                </h3>
                <p className="leading-[200%]">
                  母のすすめで鈴木メソードの教室に通い始めたのが､ヴァイオリンとの出会いでした。
                  <br />
                  お教室で年上のお兄さんがかっこよく楽しそうに弾く姿に憧れ､「自分もあんなふうに弾きたい」と思ったのを覚えています。
                  <br />
                  小学校2年生で初めてコンクールに挑戦し､負けず嫌いな性格から「1位になりたい」と思うようになりました。厳しくも支えてくれた母､そして週末の朝にモーツァルトのレコードが流れる──そんな〈暮らしの中のクラシック〉がある家で､自然と音楽が身近になっていきました。
                  <br />
                  <br />
                  今はその経験を生かして､「ヴァイオリンを通して音楽の楽しさを感じてほしい」という思いで指導にあたっています。
                  <br />
                  上手になる喜びだけでなく､音を通して自分を表現する楽しさを伝えられるよう､ひとりひとりに寄り添ったレッスンを大切にしています。
                </p>
              </div>
              <div className="mt-10 space-y-4">
                <h3 className="text-xl text-accentColor">演奏依頼について</h3>
                <p className="leading-[200%]">
                  各種コンサートやイベント、アウトリーチにおける演奏のご依頼承ります。
                  <br />
                  老人ホームや小学校、アマチュアアンサンブルとの共演などご依頼を受けた実績があり、大変ご好評をいただいております。アンサンブルの楽器編成などもご希望に応じることができます。
                  <br />
                  詳しくはお問い合わせフォームよりお気軽にご連絡ください。
                </p>
              </div>
              <div className="mt-10">
                <MoreLinkButton
                  href="/contact"
                  className="mt-10"
                  variant="accent"
                  useJapaneseFont={true}
                >
                  メディアへの出演依頼はこちら
                </MoreLinkButton>
              </div>
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default About_01;
