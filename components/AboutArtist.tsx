import Reveal from "./Reveal";
import styles from "./AboutArtist.module.css";

export default function AboutArtist() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.media}>
          <div className={styles.frame}>
            <img
              src="/artworks/inner-landscape.svg"
              alt="ShijimiWORKs のアトリエをイメージした、グレーと青の落ち着いた抽象作品"
              loading="lazy"
              width={900}
              height={1200}
            />
          </div>
          <div className={styles.tag}>
            <span>ShijimiWORKs</span>
            <em>Artist / Visual Designer</em>
          </div>
        </Reveal>

        <div className={styles.body}>
          <Reveal>
            <p className="eyebrow">About Artist</p>
            <h2 className="section-title">つくる人のこと。</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.para}>
              ShijimiWORKsは、Web制作やビジュアル制作を行いながら、日常の中に置けるアート作品を制作しています。
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className={styles.para}>
              デジタルツールと手描きの質感を組み合わせ、静かな色、余白、生活になじむ構図を大切にしています。
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className={styles.para}>
              作品は、部屋を飾るためだけではなく、日々の気持ちを少し整えるための存在として制作しています。
            </p>
          </Reveal>
          <Reveal delay={340}>
            <dl className={styles.facts}>
              <div>
                <dt>拠点</dt>
                <dd>日本（オンライン中心）</dd>
              </div>
              <div>
                <dt>制作</dt>
                <dd>デジタルアート / 抽象画 / プリント作品</dd>
              </div>
              <div>
                <dt>対応</dt>
                <dd>作品販売 / オーダーメイド / 空間提案</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
