import "./globals.css";
import type { Metadata, Viewport } from "next";
import ToastProvider from "@/components/providers/ToastProvider";
import {
  Sorts_Mill_Goudy,
  Zen_Kaku_Gothic_New,
  Shippori_Mincho,
  EB_Garamond,
} from "next/font/google";
import { GoogleTagManager } from '@/components/ui/module/GoogleTagManager'


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

// EB Garamond フォントの設定
const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb-garamond",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 福田ひろみ ヴァイオリン教室",
    default: "福田ひろみ ヴァイオリン教室 | Fukuda Hiromi Violin Lesson",
  },
  description:
    "福田ひろみ ヴァイオリン教室は、初心者から上級者まで、一人ひとりに合わせた丁寧な指導を行っています。ワンコイン体験レッスンも実施中。東京都渋谷区で開講。",
  keywords: [
    "渋谷区",
    "目黒区",
    "港区",
    "ヴァイオリンレッスン",
    "ヴァイオリン教室",
    "千代田区",
    "世田谷区",
    "福田ひろみ",
    "体験レッスン",
    "初心者",
    "Fukuda Hiromi",
    "Violin Lesson",
  ],
  authors: [{ name: "福田ひろみ" }],
  creator: "福田ひろみ",
  publisher: "福田ひろみ ヴァイオリン教室",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "福田ひろみ ヴァイオリン教室 | Fukuda Hiromi Violin Lesson",
    description:
      "福田ひろみ ヴァイオリン教室は、初心者から上級者まで、一人ひとりに合わせた丁寧な指導を行っています。ワンコイン体験レッスンも実施中。",
    url: "/",
    siteName: "福田ひろみ ヴァイオリン教室",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "福田ひろみ ヴァイオリン教室",
    description:
      "初心者から上級者まで、一人ひとりに合わせた丁寧な指導を行っています。ワンコイン体験レッスンも実施中。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        className={`text-baseColor ${zenKakuGothicNew.variable} ${sortsMillGoudy.variable} ${shipporiMincho.variable} ${ebGaramond.variable}`}
      >
  <GoogleTagManager gtmId="GTM-NRBCWBBM" />
        <ToastProvider />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
