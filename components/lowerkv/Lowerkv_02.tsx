"use client";

import Breadcrumb from "@/components/ui/module/Breadcrumb";

interface Lowerkv_02Props {
  subtitle?: string;
  title: string;
  imageUrl?: string;
  parentDirectoryName?: string;
  parentDirectoryLink?: string;
}

// 私たちについて
const Lowerkv_02 = ({
  subtitle,
  title,
  imageUrl = "/common/lowerkv.jpg",
  parentDirectoryName,
  parentDirectoryLink,
}: Lowerkv_02Props) => {
  return (
    <div className="mt-[50px] md:mt-20">
      {(parentDirectoryName || title) && (
        <div className="">
          <div className="md:max-w-[1240px] mx-auto px-5">
            <Breadcrumb
              mainTitle={subtitle}
              parentDirectoryName={parentDirectoryName}
              parentDirectoryLink={parentDirectoryLink}
            />
          </div>
        </div>
      )}
      <div
        className="h-[200px] md:h-[600px] relative"
        style={{
          background: `url(${imageUrl}) lightgray 50% / cover no-repeat`,
        }}
      >
        <div className="md:max-w-[1240px] mx-auto px-5 relative h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-[72px] font-medium tracking-[0.03em] leading-[120%] text-accentColor">
            {subtitle && (
              <span className="block text-sm font-medium mb-2 ![line-height:120%] text-baseColor">
                {subtitle}
              </span>
            )}
            <span className=" font-en">{title}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Lowerkv_02;
