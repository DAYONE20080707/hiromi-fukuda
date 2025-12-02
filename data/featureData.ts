export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const featureData: FeatureItem[] = [
  {
    id: 1,
    title: "渋谷/松濤の\n落ち着いた環境でレッスン",
    description:
      "渋谷駅から徒歩5分、Bunkamuraから徒歩1分の好立地にありながら、街の喧騒を感じさせない落ち着いた静かな環境です。\n周囲の雑音に邪魔されず、レッスンにしっかり集中することができます。",
    imageUrl: "/service/feature_01.jpg",
  },
  {
    id: 2,
    title: "一人ひとりのペースに合わせた\n丁寧な指導",
    description:
      "お月謝制レッスンは未就学児から大人まで､各年齢･目的に合わせて通いやすいプランをお選びいただけます。\nまたコンクールに向けた動画添削や単発レッスンなどもございます。",
    imageUrl: "/service/feature_02.jpg",
  },
  {
    id: 3,
    title: "初心者から上級者、受験生まで\n幅広く対応",
    description:
      "初心者の方から音大受験を目指す方まで､レベルに合わせて学べます。\n学ぶべき技術をわかりやすく整理し､教材や曲選びから､練習方法､仕上げ方まで１つ１つ丁寧にサポートします。",
    imageUrl: "/service/feature_03.jpg",
  },
  {
    id: 4,
    title: "小さなお子さまも安心して通える\nカリキュラム",
    description:
      "ヴァイオリンを始めてから、ヴィブラートを始めるタイミングやポジション移動の時期、練習曲の選び方など、小さなお子さまも安心して学べるよう、年齢や成長に合わせたカリキュラムを提供しています。",
    imageUrl: "/service/feature_04.jpg",
  },
  {
    id: 5,
    title: "｢楽しく続ける｣×｢きちんと上達｣\nが両立できる教室",
    description:
      "年に2回の発表会や2か月毎の合奏イベントをご用意。\n発表会という｢目標(締切)｣で､練習に自然とメリハリが生まれたり､やりきった達成感と新しいモチベーションにつながります。",
    imageUrl: "/service/feature_05.jpg",
  },
  {
    id: 6,
    title: "コンクール指導の実績、\n受験サポートも充実",
    description:
      "コンクールでの入賞には、基礎を丁寧に、また練習方法の工夫がかかせません。\n講師自身のコンクール経験と現役審査員としての視点を生かし、着実なレベルアップへと指導します。",
    imageUrl: "/service/feature_06.jpg",
  },
];
