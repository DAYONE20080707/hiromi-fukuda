export interface AwardItem {
  competition: string; // コンクール名と部門
  award: string; // 受賞内容と受賞者名
}

export interface AwardYear {
  year: number;
  items: AwardItem[];
}

export const awardData: AwardYear[] = [
  {
    year: 2025,
    items: [
      {
        competition: "第4回世田谷音楽コンクール弦楽器部門 小学5,6年の部",
        award: "協会賞〈Kくん〉",
      },
      {
        competition: "第4回世田谷音楽コンクール弦楽器部門 中学生の部",
        award: "協会賞〈Hくん〉",
      },
      {
        competition:
          "第49回全日本ジュニアクラシック音楽コンクールヴァイオリン部門 小学6年生の部",
        award: "奨励賞〈Kくん〉",
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        competition:
          "第18回ベーテン音楽コンクール自由曲コース弦楽器部門中学生の部",
        award: "関東地区本選 優秀賞／全国大会 入選〈Aくん〉",
      },
      {
        competition:
          "第18回ベーテン音楽コンクール自由曲コース弦楽器部門小学5,6年の部",
        award: "関東地区本選 優秀賞／全国大会 入選〈Kくん〉",
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        competition: "第15回国際ジュニア音楽コンクール ヴァイオリンD部門",
        award: "第6位〈Hくん〉",
      },
    ],
  },
  {
    year: 2021,
    items: [
      {
        competition: "第5回代官山ジュニア音楽コンクール C2部門",
        award: "第2位 〈Aくん〉",
      },
      {
        competition: "第5回代官山ジュニア音楽コンクール C1部門",
        award: "参加賞〈K子ちゃん〉",
      },
      {
        competition:
          "第15回ベーテン音楽コンクール　自由曲コース弦楽器部門小学3,4年の部",
        award: "関東地区本選 最優秀賞／全国大会第3位〈Aくん〉",
      },
      {
        competition: "第14回国際ジュニア音楽コンクール ヴァイオリンC部門",
        award: "入選〈Hくん〉",
      },
    ],
  },
];
