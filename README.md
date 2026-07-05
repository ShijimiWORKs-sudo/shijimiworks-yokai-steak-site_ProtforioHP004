# ShijimiWORKs Art Collection | Online Gallery

個人で制作したデジタルアート・抽象画・ビジュアル作品を紹介・販売するための、架空のアート系集客サイト（ポートフォリオ掲載用サンプル）です。

- **サイト名**: ShijimiWORKs Art Collection
- **管理番号**: 004
- **種別**: アート系用HP（作品販売・集客用ランディングページ）

---

## サイト概要

「日々の余白に、静かな色を飾る。」をコンセプトに、暮らしになじむアート作品を提案・販売するオンラインギャラリーを想定した1ページ完結型のLPです。
作品を大きく見せるギャラリー構成、余白を活かした静かなレイアウト、スクロールに合わせて作品がふわっと現れる演出を採用し、作品の世界観を伝えながら購入相談・オーダーメイド・展示相談への導線をつくっています。

EC感を出しすぎず、個人作家らしい静けさと高級感を保ちつつ、価格・サイズ・素材・購入フローといった購入前に必要な情報を分かりやすく整理しています。

## 使用技術

- [Next.js 15](https://nextjs.org/)（App Router）
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules + グローバル CSS（`app/globals.css`）
- スクロール演出: `IntersectionObserver`（`components/Reveal.tsx`）＋ Hero の軽量パララックス
- 画像: すべて自作の抽象アート SVG（`scripts/gen-art.mjs` で生成）

外部 UI ライブラリ・CSS フレームワークは使用していません。

## セクション構成

| # | セクション | 内容 |
|---|-----------|------|
| 1 | Header | 固定ヘッダー / ページ内アンカーナビ / モバイルメニュー |
| 2 | Hero | キャッチコピー・サブコピー・CTA（作品を見る / 購入相談）・パララックス背景 |
| 3 | Concept | サイトのコンセプト紹介 |
| 4 | Gallery | 架空作品 10 点（作品名・制作年・技法・サイズ・価格・ステータス） |
| 5 | Featured Collection | 3 コレクション（For Living Room / For Workspace / For Gift） |
| 6 | Product Detail | 代表作「Pale Window」の商品詳細（価格・素材・印刷・額装・納期・配送・注意事項） |
| 7 | About Artist | 作家紹介 |
| 8 | Order Flow | 購入・相談の 7 ステップ |
| 9 | FAQ | よくある質問（7 項目、`<details>` によるアコーディオン） |
| 10 | Contact / Order | 購入相談フォーム（フロントエンドのデモのみ・ダミー完了表示） |
| 11 | Footer | ナビ / 問い合わせ導線 / コピーライト |

グローバルナビゲーション: `Concept / Gallery / Collection / About / Order / FAQ / Contact`（すべてページ内アンカー）。

## 画像・イラスト素材について

本サイトの作品画像・ヒーロー画像・コレクション画像・OGP 画像・ファビコンは、**すべてこのプロジェクト用に自作したオリジナルの SVG** です。
外部サイトからダウンロードした写真・イラスト・アート作品は一切使用していません。参考サイトの画像・作品・ロゴ・固有名詞も使用していません。

### 生成方法

抽象アート SVG は、決定論的な擬似乱数を用いたスクリプトで生成しています。

```bash
node scripts/gen-art.mjs
```

出力先: `public/artworks/`（ギャラリー 10 点＋コレクション 3 点＋ヒーロー 1 点）
その他: `public/favicon.svg`、`public/og-image.svg` は手書きの SVG です。

### 使用した画像素材の出典 URL / 商用利用可否 / ライセンス確認先

| 素材 | 出典 | 商用利用 | ライセンス確認先 |
|------|------|----------|------------------|
| 作品・ヒーロー・コレクション画像（`public/artworks/*.svg`） | 自作（`scripts/gen-art.mjs` で生成） | 可（制作者オリジナル） | — |
| OGP 画像（`public/og-image.svg`） | 自作 | 可（制作者オリジナル） | — |
| ファビコン（`public/favicon.svg`） | 自作 | 可（制作者オリジナル） | — |

> **補足**: すべて自作素材のため、第三者の著作権・商標権・肖像権（モデルリリース／プロパティリリース）に抵触する要素はありません。
> 将来、写真素材を追加で利用する場合は、以下の商用利用可能な無料素材サイトを候補とし、各素材ページで CC0／商用利用可否を確認のうえ、出典 URL を本 README に追記してください。
>
> - Unsplash — https://unsplash.com/license
> - Pexels — https://www.pexels.com/license/
> - Pixabay — https://pixabay.com/service/license-summary/
> - StockSnap.io — https://stocksnap.io/license （CC0）
> - Shutterstock（Reshot 等） — https://www.shutterstock.com/ja/license （利用前に無料/商用可否を要確認）

## デザイン方針

- 色味: 白 / オフホワイト / 薄いグレー / 墨色 / 淡いベージュを基調に、淡いブルー・くすみピンク・黒をアクセントに使用
- 余白を大きく取り、作品を主役にした静かなアートギャラリーの雰囲気
- スクロールで作品がふわっと現れる軽い演出（`prefers-reduced-motion` に対応し、動きを抑制）
- レスポンシブ対応（PC / タブレット / スマホ 375px で横スクロールが出ないことを確認）

## アクセシビリティ

- 適切な見出し階層（h1 → h2 → h3）
- すべての作品画像に内容を説明する `alt` を設定
- ナビゲーション・フォームに `aria-label` / `aria-controls` / `aria-expanded` / ラベルを設定
- キーボード操作可能・フォーカスリング表示
- `prefers-reduced-motion: reduce` でアニメーションを無効化

## 起動方法

```bash
# 依存パッケージのインストール
npm install

# 開発サーバー起動（http://localhost:3000）
npm run dev
```

Windows 環境で `npm` が使えない場合は `npm.cmd` を使用してください。

## ビルド方法 / 確認コマンド

```bash
# 型チェック
npm run typecheck

# 本番ビルド
npm run build

# 本番サーバー起動
npm run start
```

Windows の場合:

```bash
npm.cmd run typecheck
npm.cmd run build
```

- `npm run typecheck` … 成功（エラーなし）
- `npm run build` … 成功（静的生成 4/4、`/` は静的プリレンダリング）

## GitHub リポジトリ

https://github.com/ShijimiWORKs-sudo/shijimiworks-yokai-steak-site_ProtforioHP004

## ディレクトリ構成

```text
004/
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx        # メタデータ / OGP / SEO
│  └─ page.tsx          # 各セクションの組み立て
├─ components/          # セクションごとのコンポーネント（CSS Modules 付き）
│  ├─ Header / Hero / Concept / Gallery / FeaturedCollection
│  ├─ ProductDetail / AboutArtist / OrderFlow / FAQ / Contact / Footer
│  └─ Reveal.tsx        # スクロール表示アニメーション
├─ lib/
│  └─ content.ts        # サイト内テキスト・作品データ
├─ public/
│  ├─ artworks/*.svg    # 自作の抽象アート画像
│  ├─ favicon.svg
│  └─ og-image.svg
├─ scripts/
│  └─ gen-art.mjs       # 抽象アート SVG 生成スクリプト
├─ next.config.mjs
├─ tsconfig.json
└─ package.json
```

---

*本サイトはポートフォリオ掲載用のサンプルであり、ShijimiWORKs は架空の屋号です。掲載している作品・価格・プロフィールはすべてサンプル用に新規作成したものです。Contact フォームは実送信を行いません。*
