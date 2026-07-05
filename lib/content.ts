// All site content for the ShijimiWORKs Art Collection sample site (management no. 004).
// Copy and works are original, written for this fictional gallery.

export const site = {
  name: "ShijimiWORKs",
  brand: "ShijimiWORKs Art Collection",
  title: "ShijimiWORKs Art Collection | Online Gallery",
  description:
    "ShijimiWORKs Art Collectionは、個人で制作したデジタルアート、抽象画、ビジュアル作品を紹介・販売するオンラインギャラリーです。",
  url: "https://shijimiworks-art.example.com",
  ogImage: "/og-image.svg",
};

export const nav = [
  { label: "Concept", href: "#concept" },
  { label: "Gallery", href: "#gallery" },
  { label: "Collection", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Order", href: "#order" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export type Status = "Available" | "Sold Out" | "Order Made" | "Print Available";

export interface Artwork {
  slug: string;
  title: string;
  year: string;
  technique: string;
  size: string;
  price: string;
  status: Status;
  alt: string;
}

export const artworks: Artwork[] = [
  {
    slug: "quiet-morning",
    title: "Quiet Morning",
    year: "2025",
    technique: "Digital Painting",
    size: "A2 / 420 × 594 mm",
    price: "¥22,000",
    status: "Available",
    alt: "淡いベージュと灰青色の帯が静かに重なる、朝の光をイメージした抽象画",
  },
  {
    slug: "pale-window",
    title: "Pale Window",
    year: "2025",
    technique: "Giclée Print",
    size: "A3 / A2",
    price: "¥18,000",
    status: "Available",
    alt: "白い壁とくすんだピンクの矩形が窓辺のように配置された抽象作品",
  },
  {
    slug: "blue-silence",
    title: "Blue Silence",
    year: "2024",
    technique: "Generative Graphic",
    size: "A2 / 420 × 594 mm",
    price: "¥24,000",
    status: "Print Available",
    alt: "淡いブルーの層が静かに広がるジェネレーティブな抽象グラフィック",
  },
  {
    slug: "room-and-light",
    title: "Room and Light",
    year: "2024",
    technique: "Acrylic Texture",
    size: "F6 / 410 × 318 mm",
    price: "¥32,000",
    status: "Sold Out",
    alt: "ベージュの面と光の円が室内の情景を思わせるアクリルテクスチャ作品",
  },
  {
    slug: "paper-moon",
    title: "Paper Moon",
    year: "2025",
    technique: "Mixed Media",
    size: "A3 / 297 × 420 mm",
    price: "¥16,000",
    status: "Available",
    alt: "紙のような質感の上に淡い月を思わせる円を描いたミクストメディア作品",
  },
  {
    slug: "small-garden",
    title: "Small Garden",
    year: "2024",
    technique: "Digital Painting",
    size: "A3 / A2",
    price: "¥18,000",
    status: "Print Available",
    alt: "くすんだ緑と生成りの筆致で小さな庭を表した抽象デジタルペインティング",
  },
  {
    slug: "soft-boundary",
    title: "Soft Boundary",
    year: "2025",
    technique: "Canvas Print",
    size: "F8 / 455 × 380 mm",
    price: "¥38,000",
    status: "Available",
    alt: "淡いピンクとベージュの領域がやわらかく溶け合うキャンバスプリント",
  },
  {
    slug: "slow-scrolling",
    title: "Slow Scrolling",
    year: "2025",
    technique: "Generative Graphic",
    size: "A2 / 420 × 594 mm",
    price: "¥24,000",
    status: "Available",
    alt: "灰色と青みを帯びた層が縦にゆっくり流れるジェネレーティブグラフィック",
  },
  {
    slug: "warm-shadow",
    title: "Warm Shadow",
    year: "2024",
    technique: "Acrylic Texture",
    size: "F6 / 410 × 318 mm",
    price: "¥30,000",
    status: "Order Made",
    alt: "暖色のベージュとブラウンの陰影が重なるアクリルテクスチャの抽象画",
  },
  {
    slug: "inner-landscape",
    title: "Inner Landscape",
    year: "2025",
    technique: "Poster Print",
    size: "B2 / 515 × 728 mm",
    price: "¥14,000",
    status: "Print Available",
    alt: "グレーと青のミニマルな面で心象風景を表したポスター作品",
  },
];

export interface Collection {
  slug: string;
  title: string;
  jp: string;
  description: string;
  priceRange: string;
  image: string;
  alt: string;
}

export const collections: Collection[] = [
  {
    slug: "for-living-room",
    title: "For Living Room",
    jp: "リビングのための一枚",
    description:
      "リビングに飾りやすい、落ち着いた色の作品。部屋の空気になじみ、家族が集まる時間をやさしく包みます。",
    priceRange: "¥22,000 – ¥38,000",
    image: "/artworks/for-living-room.svg",
    alt: "リビング向けの落ち着いた色合いのアートコレクションのイメージ",
  },
  {
    slug: "for-workspace",
    title: "For Workspace",
    jp: "働く場所のための一枚",
    description:
      "デスク周りや仕事部屋に合う、集中を邪魔しない作品。視界の端に置いても静かに佇む色を選んでいます。",
    priceRange: "¥14,000 – ¥24,000",
    image: "/artworks/for-workspace.svg",
    alt: "ワークスペース向けの淡いブルー基調のアートコレクションのイメージ",
  },
  {
    slug: "for-gift",
    title: "For Gift",
    jp: "贈りものとしての一枚",
    description:
      "引っ越し祝いや記念日に贈れる、小さめのアート作品。額装オプションと一緒に、贈る相手の空間を想いながら。",
    priceRange: "¥14,000 – ¥22,000",
    image: "/artworks/for-gift.svg",
    alt: "ギフト向けのくすみピンク基調の小さなアートコレクションのイメージ",
  },
];

export const productDetail = {
  slug: "pale-window",
  title: "Pale Window",
  image: "/artworks/pale-window.svg",
  alt: "白い壁とくすんだピンクの矩形が窓辺のように配置された代表作品 Pale Window",
  price: "¥18,000（税込）",
  rows: [
    { label: "サイズ", value: "A3（297 × 420 mm）/ A2（420 × 594 mm）" },
    { label: "素材", value: "ファインアート紙（マット・厚手）" },
    { label: "印刷方法", value: "ジークレープリント（高精細顔料インク）" },
    { label: "額装", value: "オプションで対応（木製・アルミ／白・黒・生成り）" },
    { label: "納期目安", value: "ご注文から約2〜3週間" },
    { label: "配送について", value: "全国対応。厚紙保護のうえ折れ防止梱包で発送します。" },
  ],
  notes: [
    "モニター環境により、実際の色味と印象が異なる場合があります。",
    "手作業による軽微な質感の個体差は作品の味としてお楽しみください。",
    "額装ありをご希望の場合は、額装込みの納期・お見積りを別途ご案内します。",
  ],
};

export const orderSteps = [
  { n: "01", title: "作品を選ぶ", text: "ギャラリーやコレクションから気になる作品を選びます。" },
  { n: "02", title: "サイズ・額装を相談する", text: "飾る場所や用途に合わせて、サイズと額装をご相談ください。" },
  { n: "03", title: "お見積り", text: "作品・サイズ・額装・送料を含めたお見積りをお送りします。" },
  { n: "04", title: "お支払い", text: "内容にご納得いただいたうえで、お支払い手続きに進みます。" },
  { n: "05", title: "制作・印刷", text: "一点ずつ丁寧に制作・印刷し、仕上がりを確認します。" },
  { n: "06", title: "発送", text: "折れ防止の梱包で全国へ発送します。追跡番号をご案内します。" },
  { n: "07", title: "到着・設置", text: "お手元に届いたら、選んだ場所に飾って空間の変化をお楽しみください。" },
];

export const faqs = [
  {
    q: "作品は購入できますか？",
    a: "はい。Available / Print Available の作品はオンラインでご購入いただけます。Contactフォームから作品名を添えてご相談ください。",
  },
  {
    q: "オーダーメイド制作は可能ですか？",
    a: "可能です。飾る空間の写真やイメージ、ご希望の色味を伺い、Order Madeとして一点物を制作します。",
  },
  {
    q: "額装はできますか？",
    a: "オプションで対応しています。木製・アルミフレーム、白・黒・生成りなどからお選びいただけます。",
  },
  {
    q: "サイズ変更はできますか？",
    a: "多くの作品でサイズ変更に対応しています。作品の構図により推奨サイズをご案内する場合があります。",
  },
  {
    q: "配送は全国対応ですか？",
    a: "全国に対応しています。折れ防止の梱包で発送し、追跡番号をご案内します。海外配送はご相談ください。",
  },
  {
    q: "商業施設や店舗用の相談もできますか？",
    a: "はい。カフェ・オフィス・クリニックなど、空間や用途に合わせた作品選び・複数点のご提案も承ります。",
  },
  {
    q: "返品・交換はできますか？",
    a: "オーダー・プリント制作の性質上、原則として返品はお受けしていません。輸送中の破損は到着後7日以内にご連絡ください。",
  },
];

export const contactFields = {
  workOptions: [
    "Quiet Morning",
    "Pale Window",
    "Blue Silence",
    "Paper Moon",
    "Small Garden",
    "Soft Boundary",
    "Slow Scrolling",
    "Inner Landscape",
    "オーダーメイド制作",
    "まだ決めていない",
  ],
  sizeOptions: ["A3", "A2", "B2", "F6", "F8", "サイズ相談したい"],
};
