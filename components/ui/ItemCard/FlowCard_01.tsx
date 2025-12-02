// components/ui/itemCard/FlowCard_01.tsx
import Image from "next/image";
import Link from "next/link";

interface FlowCardProps {
  number: string;
  title: string;
  description: string;
  index: number; // 新しく index プロパティを追加
}

const FlowCard = ({ number, title, description, index }: FlowCardProps) => {
  const isLast = index === 3;
  return (
    <div
      className={`relative rounded-xl p-6 flex justify-center flex-col items-center bg-white ${
        isLast
          ? "before:content-[''] before:bg-[url('/flow/arrow-right.svg')] before:bg-no-repeat before:inline-block before:w-[20px] before:h-[40px] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[40px] before:rotate-90 md:before:hidden max-md:before:hidden"
          : "after:content-[''] after:bg-[url('/flow/arrow-right.svg')] after:bg-no-repeat after:inline-block after:w-[20px] after:h-[40px] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[34px] max-md:after:hidden before:content-[''] before:bg-[url('/flow/arrow-right.svg')] before:bg-no-repeat before:inline-block before:w-[20px] before:h-[40px] before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-[40px] before:rotate-90 md:before:hidden"
      }`}
    >
      <p className="font-en text-lg font-extrabold text-accentColor tracking-wide">
        Level
      </p>
      <p className="font-ebGaramond text-5xl font-medium text-accentColor tracking-wider pt-1">
        {number}
      </p>
      <h3 className="text-lg font-medium text-accentColor mt-4 tracking-wide text-center whitespace-pre-line">
        {title}
      </h3>
      <p className="mt-2 whitespace-pre-line">{description}</p>
    </div>
  );
};

export default FlowCard;
