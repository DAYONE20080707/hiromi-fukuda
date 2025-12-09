// components/ui/frame/ContentHeadline.tsx
import React from "react"
import classNames from "classnames"
import { ContentHeadlineProps } from "@/types"
import Image from "next/image"

const ContentHeadline: React.FC<ContentHeadlineProps> = ({
  mainTitle,
  description,
  subTitle,
  className = "",
  titleClassName = "",
  subTitleClassName = "",
  ImageSrc,
  ImageWidth,
  ImageHeight,
  id,
}) => {
  return (
    <section
      id={id}
      className={classNames(
        "w-full md:max-w-[1200px] mb-4 md:mb-16 tracking-wide",
        className
      )}
    >
      {ImageSrc && (
        <Image
          src={ImageSrc}
          width={ImageWidth}
          height={ImageHeight}
          alt={String(mainTitle)}
          className="mb-4"
        />
      )}
      <p
        className={classNames(
          "text-sm md:text-sm font-medium tracking-[0.03em] leading-[200%] text-baseColor",
          subTitleClassName
        )}
      >
       {subTitle}
      </p>
      <h1
        className={classNames(
          "font-en text-4xl md:text-[72px] leading-[120%] mt-2 tracking-[0.03em] font-normal text-accentColor",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>

      {description && <h2>{description}</h2>}
    </section>
  )
}

export default ContentHeadline
