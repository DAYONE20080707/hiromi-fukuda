import Link from "next/link";
import Image from "next/image";

interface LineButtonFooterProps {
  href?: string;
  className?: string;
}

const LineButtonFooter = ({
  href = "/contact",
  className = "",
}: LineButtonFooterProps) => {
  return (
    <Link
      href={href}
      className={`w-[250px] bg-white text-baseColor cursor-pointer flex items-center justify-center px-6 py-4 gap-2 font-medium  ${className}`}
    >
      <Image
        src="/sns/line.svg"
        alt="LINE"
        width={20}
        height={20}
        className="w-5 h-5"
      />
      <span className="text-sm tracking-[0.03em]">LINEでお問い合わせ</span>
    </Link>
  );
};

export default LineButtonFooter;
