//components/ui/navigation/CompanyInfo.tsx
import Image from "next/image"
export const CompanyInfo = [
  {
    companyName: (type: "primary" | "secondary" | "tertiary") => (
      <Image
        src={
          type === "primary"
            ? "/common/logo_header.png" // 1つ目のロゴパス（白色ロゴ）
            : type === "secondary"
            ? "/common/logo_wh.png" // 2つ目のロゴパス（黒色ロゴ）
            : "/common/logo.png" // 3つ目のロゴパス（テキストなし）
        }
        alt="logo"
        width={200} // 適切な幅を指定
        height={40} // 適切な高さを指定
        className="w-full h-full object-contain"
      />
    ),
    companyNameText: "福田ひろみ　ヴァイオリン教室",
    companyPostalCode: "〒150-0046",
    companyAddress: "東京都渋谷区松濤1",
    companyTel: "000-000-0000",
    companyTelHref: "tel:0000000000",
    companyEmail: "lncjgi9606@yahoo.co.jp",
  },
]

export default CompanyInfo
