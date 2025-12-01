import Link from "next/link";
import Image from "next/image";

const LineButton = ({
  className = "",
  href = "/contact",
}: {
  className?: string;
  href?: string;
}) => {
  return (
    <Link
      href="/contact"
      className={`bg-accentColor text-white cursor-pointer flex items-center justify-center w-[180px] px-2 py-2 rounded-full text-base tracking-[0.05em] gap-1 ${className}`}
    >
      <Image
        src="/sns/line_w.svg"
        alt="LINE"
        width={20}
        height={20}
        className="w-[18px] h-[18px]"
      />
      <span className="text-sm tracking-[0.03em]">LINEでお問い合わせ</span>
    </Link>
  );
};

export default LineButton;
