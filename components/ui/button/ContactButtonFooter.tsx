import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

interface ContactButtonFooterProps {
  href?: string;
  className?: string;
}

const ContactButtonFooter = ({
  href = "/contact",
  className = "",
}: ContactButtonFooterProps) => {
  return (
    <Link
      href={href}
      className={`w-[250px] bg-white text-baseColor cursor-pointer flex items-center justify-center px-6 py-4 gap-2 font-medium  ${className}`}
    >
      <EnvelopeIcon className="w-4 h-3" />
      <span className="text-sm tracking-[0.03em]">お問い合わせ</span>
    </Link>
  );
};

export default ContactButtonFooter;
