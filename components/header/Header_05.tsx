// components/header/Header_05

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Menu from "@/components/ui/navigation/Menu";
import ContactButton from "@/components/ui/button/ContactButton";
import LineButton from "@/components/ui/button/LineButton";
import CompanyInfo from "@/components/ui/navigation/CompanyInfo";
import HeaderContent from "../ui/frame/HeaderContent";
import SnsIconButton from "@/components/ui/button/SnsIconButton";
import { SnsButton } from "@/components/ui/button/SnsButton";

const Header_05 = () => {
  const { companyName } = CompanyInfo[0];

  // スクロール状態とメニュー開閉状態を管理
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // メニュー開閉状態
  const [isAnimating, setIsAnimating] = useState(false); // フェードアニメーション用状態

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 200); // アニメーションの長さに合わせて調整
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <HeaderContent
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-10 w-full transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-90" : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-[1200px] w-full h-full flex items-center justify-between mx-auto md:py-0 md:px-2 rounded-full transition-all duration-300 `}
      >
        {/* ロゴ */}
        <Link href="/" className="w-[36px] md:w-[57px] flex-shrink-0">
          {CompanyInfo[0].companyName("tertiary")}
        </Link>

        {/* デスクトップ用メニュー */}
        <nav className="hidden lg:flex items-center gap-4 flex-1 justify-center">
          {Menu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-baseColor text-sm md:text-base hover:text-accentColor transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* 右側：SNSアイコンとボタン */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          {/* SNSアイコン */}
          <div className="flex items-center">
            {SnsButton.map((sns, index) => (
              <SnsIconButton
                key={index}
                href={sns.href}
                src={sns.src}
                alt={sns.name}
                className="p-2 hover:opacity-70 transition-opacity"
              />
            ))}
          </div>

          {/* ボタン */}
          <div className="flex items-center gap-3">
            <ContactButton className="whitespace-nowrap">
              お問い合わせ
            </ContactButton>
            <LineButton className="whitespace-nowrap" />
          </div>
        </div>

        {/* ハンバーガーメニューボタン */}
        <button
          className={`block lg:hidden text-baseColor transition-transform duration-300 ${
            isMenuOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* スマホ用メニュー */}
      <div
        className={`absolute top-full left-0 w-full bg-white bg-opacity-90 lg:hidden transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 max-h-screen"
            : "opacity-0 max-h-0 overflow-hidden"
        } ${isAnimating ? "pointer-events-auto" : ""}`}
      >
        <ul className="flex flex-col items-center space-y-6 py-10 px-6">
          {Menu.map((item, index) => (
            <li key={index} className="w-full">
              <Link
                href={item.href}
                onClick={handleMenuToggle}
                className="block text-baseColor text-center hover:text-accentColor transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <div className="flex items-center justify-center gap-4 pt-4">
            {SnsButton.map((sns, index) => (
              <SnsIconButton
                key={index}
                href={sns.href}
                src={sns.src}
                alt={sns.name}
                className="p-2 hover:opacity-70 transition-opacity"
              />
            ))}
          </div>
          <div className="flex flex-col gap-3 w-full pt-4 items-center">
            <ContactButton className="whitespace-nowrap">
              お問い合わせ
            </ContactButton>
            <LineButton className="whitespace-nowrap" />
          </div>
        </ul>
      </div>
    </HeaderContent>
  );
};

export default Header_05;
