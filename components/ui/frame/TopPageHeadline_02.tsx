// components/ui/frame/TopPageHeadline_02.tsx
import classNames from "classnames";

interface TopPageHeadline_02Props {
  mainTitle: React.ReactNode;
  subtitleTop?: React.ReactNode;
  subtitleBottom?: React.ReactNode;
  description?: React.ReactNode;
  parentDirectoryName?: string;
  parentDirectoryLink?: string;
  className?: string; // 親要素のclassName
  titleClassName?: string; // h1用のclassName
  subtitleClassName?: string; // h2用のclassName
  descriptionClassName?: string; // p用のclassName
}

const TopPageHeadline_02: React.FC<TopPageHeadline_02Props> = ({
  mainTitle,
  subtitleTop,
  subtitleBottom,
  description,
  parentDirectoryName,
  parentDirectoryLink,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  descriptionClassName = "",
}) => {
  return (
    <section className={classNames("md:max-w-[600px] w-full text-accentColor", className)}>
      <p
        className={classNames(
          "font-en text-base md:text-2xl !leading-[160%] tracking-[0.05em] font-normal",
          descriptionClassName
        )}
      >
        {description}
      </p>
      <h1
        className={classNames(
          "md:mt-6 font-mincho text-[28px] font-medium md:text-[60px] !leading-[110%] tracking-[0.05em]",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>
    </section>
  );
};

export default TopPageHeadline_02;
