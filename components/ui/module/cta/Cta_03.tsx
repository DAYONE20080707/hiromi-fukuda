// components/module/cta/Cta_03.tsx
"use client";

import SectionContent from "../../frame/SectionContent";
import CtaCard from "../../ItemCard/CtaCard";

interface Cta_03Props {
  variant?: "pink" | "white";
}

const Cta_03 = ({ variant = "pink" }: Cta_03Props) => {
  const sectionVariant = variant === "white" ? "default" : "light";

  return (
    <>
      <SectionContent className="!py-0 !px-0" variant={sectionVariant}>
        <section className="mx-auto rounded-t-[40px] overflow-hidden bg-accentColor p-5 md:p-20">
          <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-6 md:gap-10">
            <CtaCard
              subTitle="メールでのお問い合わせ"
              title="Contact"
              description={
                <>
                  ワンコイン体験レッスンのお申込み･ご質問は
                  <br className="hidden md:block"/>
                  こちらからお気軽にご連絡ください。
                </>
              }
              buttonHref="/contact"
              buttonText="View more"
              buttonVariant="accent"
            />
            <CtaCard
              subTitle="ラインでのお問い合わせ"
              title="LINE"
              description={
                <>
                  ワンコイン体験レッスンのお申込み･ご質問は
                  <br className="hidden md:block"/>
                  こちらからお気軽にご連絡ください。
                </>
              }
              buttonHref="https://lin.ee/rt5XaEnP"
              buttonText="View more"
              buttonVariant="accent"
              icon="/common/line_brown.svg"
              iconAlt="LINE"
            />
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Cta_03;
