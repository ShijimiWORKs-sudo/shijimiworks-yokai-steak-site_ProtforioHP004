import Reveal from "./Reveal";
import { collections } from "@/lib/content";
import styles from "./FeaturedCollection.module.css";

export default function FeaturedCollection() {
  return (
    <section id="collection" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal className={styles.intro}>
          <p className="eyebrow">Featured Collection</p>
          <h2 className="section-title">飾る場所から、選ぶ。</h2>
          <p className="lead">
            暮らしのシーンに合わせて、3つのコレクションをご用意しています。
          </p>
        </Reveal>

        <div className={styles.grid}>
          {collections.map((col, i) => (
            <Reveal
              key={col.slug}
              as="article"
              className={styles.card}
              delay={i * 100}
            >
              <div className={styles.media}>
                <img src={col.image} alt={col.alt} loading="lazy" width={1000} height={750} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{col.title}</h3>
                <p className={styles.jp}>{col.jp}</p>
                <p className={styles.desc}>{col.description}</p>
                <p className={styles.range}>
                  <span>価格帯</span>
                  {col.priceRange}
                </p>
                <div className={styles.actions}>
                  <a href="#gallery" className="link-arrow">
                    このコレクションを見る
                  </a>
                  <a href="#contact" className={styles.consult}>
                    相談する
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
