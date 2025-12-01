import "./globals.css";
import type { Metadata, Viewport } from "next";
import ToastProvider from "@/components/providers/ToastProvider";
import {
  Sorts_Mill_Goudy,
  Zen_Kaku_Gothic_New,
  Shippori_Mincho,
} from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

// Sorts Mill Goudy フォントの設定（英字用）
const sortsMillGoudy = Sorts_Mill_Goudy({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-en",
});

// Zen Kaku Gothic New フォントの設定（デフォルト）
const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-kaku-gothic-new",
});

// Shippori Mincho フォントの設定（明朝体）
const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shippori-mincho",
});

export const metadata: Metadata = {
  title: {
    template: "%s | チョイスWeb制作",
    default: "チョイスのWeb制作は",
  },
  description: "チョイスは、",
  icons: {
    icon: "/common/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body
        className={`text-baseColor ${zenKakuGothicNew.variable} ${sortsMillGoudy.variable} ${shipporiMincho.variable}`}
      >
        <GoogleTagManager gtmId="GTM-5VZQPT43" />
        <ToastProvider />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
