import React from "react";
import classNames from "classnames";

interface SubmitButtonProps {
  loading: boolean;
  variant?: "white" | "accent" | "black";
  useJapaneseFont?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  loading,
  variant = "accent",
  useJapaneseFont = true,
}) => {
  // バリエーションに基づくスタイルを決定
  const getVariantStyles = () => {
    switch (variant) {
      case "accent":
        return "bg-accentColor text-white border-accentColor";
      case "black":
        return "bg-transparent text-baseColor border-baseColor";
      default: // white
        return "bg-transparent text-white border-white";
    }
  };

  // 矢印の色を決定
  const getArrowColor = () => {
    switch (variant) {
      case "accent":
        return "white";
      case "black":
        return "black";
      default: // white
        return "white";
    }
  };

  return (
    <button
      type="submit"
      disabled={loading}
      className={classNames(
        "border tracking-[0.03em] font-normal cursor-pointer flex items-center justify-between w-full md:w-[320px] px-6 py-4 relative group",
        useJapaneseFont ? "font-zenKaku" : "font-en",
        getVariantStyles(),
        loading && "opacity-50 cursor-not-allowed"
      )}
    >
      <span>{loading ? "送信中..." : "送信する"}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="12" fill="white" />
        <path d="M6.25 12H17.75" stroke="#A78144" />
        <path d="M13.75 8L17.75 12L13.75 16" stroke="#A78144" />
      </svg>
    </button>
  );
};

export default SubmitButton;
