import Reveal from "./Reveal";
import styles from "./Concept.module.css";

export default function Concept() {
  return (
    <section id="concept" className={`section ${styles.concept}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Concept</p>
            <h2 className="section-title">静かに、暮らしになじむ色を。</h2>
          </Reveal>
        </div>

        <div className={styles.body}>
          <Reveal delay={80}>
            <p className={styles.para}>
              ShijimiWORKs Art
              Collectionは、日常の中に小さな余白をつくるためのアート作品を制作・販売するオンラインギャラリーです。
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className={styles.para}>
              強い主張ではなく、部屋の空気になじむ色。生活の背景に静かに残る線。見るたびに少しだけ気持ちが整うような作品を目指しています。
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className={styles.para}>
              デジタルアート、抽象画、ポスター作品、インテリア向けアートなど、暮らしに置けるビジュアル作品を提案します。
            </p>
          </Reveal>
          <Reveal delay={320}>
            <ul className={styles.keywords} aria-label="コンセプトのキーワード">
              <li>余白</li>
              <li>静けさ</li>
              <li>暮らしになじむ色</li>
              <li>個人作家の手ざわり</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
