export const faqData = {
  category1: {
    name: "カテゴリ1",
    items: [
      {
        question: "出張レッスンは行っておりますか？",
        answer: "出張レッスンは行っておりません。",
      },
      {
        question: "男性でも通えますか？",
        answer:
          "はい（クラシックにご興味のある方、アマチュアオーケストラ経験者など）",
      },
      {
        question: "レッスンをお休みしたい場合はどうすればよいですか？",
        answer:
          "前日までにお知らせいただけましたら可能な限り振替をさせて頂いております。",
      },
      {
        question: "家での練習は親も見てあげる必要があるのでしょうか？",
        answer:
          "お子様の場合、レッスンで言われたことを家に帰ってから一人で練習して習得するのは難しいと思われます。小さい間は、レッスンでの指導を一緒に聞いていただき、家での練習を補助していただくのが理想的です。",
      },
      {
        question:
          "下の子がまだ小さいのですが､一緒に連れていっても大丈夫ですか？",
        answer: "レッスン時間中、座ってお待ちいただければ大丈夫です。",
      },
      {
        question: "ヴァイオリンは購入する必要がありますか？",
        answer:
          "ヴィアクレモナヴァイオリン工房さんにて月々2000円のレンタルで始めることができます。\n楽器購入でしたらまずは一度体験レッスンにてご相談のうえサイズなどご案内できます。",
        linkText: "詳しく見る",
        linkUrl: "/",
      },
      {
        question: "どのサイズのヴァイオリンを使用すればよいでしょうか？",
        answer: "ヴァイオリンのサイズについてはこちらです。\nVIOLIN_SIZE_TABLE",
      },
      {
        question: "初回レッスンで楽器の用意は必要ですか？",
        answer: "初回の体験レッスンでは無料で楽器をお貸出しております。",
      },
    ],
  },
  category2: {
    name: "カテゴリ2",
    items: [
      {
        question: "質問2-1",
        answer: "回答2-1が入ります",
      },
      {
        question: "質問2-2",
        answer: "回答2-2が入ります",
      },
    ],
  },
  // ... 他のカテゴリ
};

export type FaqItem = {
  question: string;
  answer: string;
  linkText?: string;
  linkUrl?: string;
};

export type FaqCategory = {
  name: string;
  items: FaqItem[];
};

export type FaqData = {
  [key: string]: FaqCategory;
};
