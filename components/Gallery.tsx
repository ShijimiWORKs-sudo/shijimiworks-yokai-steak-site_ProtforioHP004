import Reveal from "./Reveal";
import { artworks, type Status } from "@/lib/content";
import styles from "./Gallery.module.css";

const statusClass: Record<Status, string> = {
  Available: "badge--available",
  "Sold Out": "badge--sold",
  "Order Made": "badge--order",
  "Print Available": "badge--print",
};

export default function Gallery() {
  return (
    <section id="gallery" className={`section ${styles.gallery}`}>
      <div className="container">
        <Reveal className={styles.intro}>
          <p className="eyebrow">Gallery</p>
          <h2 className="section-title">作品を、ゆっくりと。</h2>
          <p className="lead">
            スクロールに合わせて、一点ずつ作品が現れます。気になる作品はそのままお問い合わせへ。
          </p>
        </Reveal>

        <div className={styles.grid}>
          {artworks.map((art, i) => (
            <Reveal
              key={art.slug}
              as="article"
              className={`${styles.card} ${i % 3 === 1 ? styles.offset : ""}`}
              delay={(i % 3) * 90}
            >
              <a href="#contact" className={styles.frame} aria-label={`${art.title} について相談する`}>
                <img
                  src={`/artworks/${art.slug}.svg`}
                  alt={art.alt}
                  loading="lazy"
                  width={900}
                  height={1200}
                />
                <span className={styles.hover} aria-hidden="true">
                  相談する →
                </span>
              </a>
              <div className={styles.meta}>
                <div className={styles.metaTop}>
                  <h3 className={styles.title}>{art.title}</h3>
                  <span className={`badge ${statusClass[art.status]}`}>{art.status}</span>
                </div>
                <dl className={styles.specs}>
                  <div>
                    <dt>Year</dt>
                    <dd>{art.year}</dd>
                  </div>
                  <div>
                    <dt>Technique</dt>
                    <dd>{art.technique}</dd>
                  </div>
                  <div>
                    <dt>Size</dt>
                    <dd>{art.size}</dd>
                  </div>
                  <div>
                    <dt>Price</dt>
                    <dd className={styles.price}>{art.price}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
