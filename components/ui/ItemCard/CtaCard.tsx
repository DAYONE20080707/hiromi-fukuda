import MoreLinkButton from "@/components/ui/button/MoreButton";
import Image from "next/image";

interface CtaCardProps {
  subTitle: string;
  title: string;
  description: string | React.ReactNode;
  buttonText?: string;
  buttonHref: string;
  buttonVariant?: "white" | "accent" | "black";
  buttonClassName?: string;
  backgroundColor?: "white" | "accent";
  textColor?: "base" | "white";
  className?: string;
  icon?: string;
  iconAlt?: string;
}

const CtaCard = ({
  subTitle,
  title,
  description,
  buttonText,
  buttonHref,
  buttonVariant = "white",
  buttonClassName = "md:!w-[350px]",
  backgroundColor = "white",
  textColor = "base",
  className = "",
  icon,
  iconAlt = "",
}: CtaCardProps) => {
  const bgColorClass =
    backgroundColor === "accent" ? "bg-accentColor" : "bg-white";
  const textColorClass =
    textColor === "white" ? "text-white" : "text-baseColor";

  return (
    <div
      className={`${bgColorClass} ${textColorClass} text-center py-10 md:py-16 px-5 rounded-[20px] ${className}`}
    >
      <p className="md:text-sm font-medium mb-2 leading-[200%]">{subTitle}</p>
      <h4 className="text-3xl md:text-[72px] font-en font-normal leading-[120%] text-accentColor flex items-start justify-center gap-2">
        {icon && (
          <div className="pt-3">
            <Image
              src={icon}
              alt={iconAlt}
              width={60}
              height={60}
              className="w-[40px] h-[40px] md:w-[45px] md:h-[45px]"
            />
          </div>
        )}
        {title}
      </h4>
      <p className="md:text-lg my-3 md:my-6 leading-[160%]">{description}</p>
      <div className="flex justify-center">
        <MoreLinkButton
          href={buttonHref}
          variant={buttonVariant}
          className={buttonClassName}
        >
          {buttonText || title}
        </MoreLinkButton>
      </div>
    </div>
  );
};

export default CtaCard;
