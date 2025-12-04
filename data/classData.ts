export interface PriceOption {
  details: string; // レッスン詳細（時間・回数など）
  detailsAttention?: string; // 詳細の注意事項（任意、小さく表示）
  price: string; // 料金
}

export interface ClassItem {
  name: string; // コース名
  attention?: string; // 注意事項（任意）
  description?: string; // 説明（任意）
  priceOptions: PriceOption[]; // 料金オプション（必須）
  features?: string[]; // 特徴・詳細項目（任意）
}

export interface ClassSection {
  title: string; // セクションタイトル
  items: ClassItem[];
}

export const classData: ClassSection[] = [
  {
    title: "楽しくヴァイオリンをやりたい方",
    items: [
      {
        name: "キッズコース",
        attention: "※未就学児限定",
        priceOptions: [
          {
            details: "30分×月3回",
            price: "11,000",
          },
        ],
      },
      {
        name: "ジュニアコース",
        attention: "※3歳〜小学3年生",
        priceOptions: [
          {
            details: "45分×月3回",
            price: "16,000",
          },
        ],
      },
      {
        name: "スタンダードコース",
        priceOptions: [
          {
            details: "60分×月3回",
            price: "21,000",
          },
        ],
      },
      {
        name: "大人のヴァイオリンクラス",
        priceOptions: [
          {
            details: "60分×月2回",
            price: "15,000",
          },
        ],
      },
    ],
  },
  {
    title: "本格的にコンクールや音大を目指す★特別クラス",
    items: [
      {
        name: "コンクール、音高音大受験クラス",
        description:
          "課題曲・エチュード・音階の徹底／レッスンプランを毎月作成\n動画添削込み（月1回〜）／コンクール選曲サポート",

        priceOptions: [
          {
            details: "ワンレッスン制",
            detailsAttention: "(要相談)",
            price: "9,000",
          },
          {
            details: "60分×月4回",
            price: "31,000",
          },
        ],
      },
    ],
  },
  {
    title: "",
    items: [
      {
        name: "アンサンブルレッスン",
        description: "レベル別クラスでどなた様でもご参加できます",
        attention: "※未就学児~大人まで",
        priceOptions: [
          {
            details: "ワンレッスン制",
            price: "",
          },
          {
            details: "1回",
            price: "3,500",
          },
        ],
      },
    ],
  },
];
