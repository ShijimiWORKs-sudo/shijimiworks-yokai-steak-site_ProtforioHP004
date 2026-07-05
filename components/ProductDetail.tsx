import Reveal from "./Reveal";
import { productDetail } from "@/lib/content";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const p = productDetail;
  return (
    <section id="product" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.media}>
          <div className={styles.frame}>
            <img src={p.image} alt={p.alt} loading="lazy" width={900} height={1200} />
          </div>
          <p className={styles.caption}>Representative work — Pale Window</p>
        </Reveal>

        <Reveal className={styles.info} delay={100}>
          <p className="eyebrow">Product Detail</p>
          <h2 className={styles.title}>{p.title}</h2>
          <p className={styles.price}>{p.price}</p>

          <dl className={styles.table}>
            {p.rows.map((row) => (
              <div key={row.label} className={styles.row}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.notes}>
            <h3 className={styles.notesTitle}>注意事項</h3>
            <ul>
              {p.notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </div>

          <a href="#contact" className={`btn btn--solid ${styles.cta}`}>
            この作品を購入相談する
          </a>
        </Reveal>
      </div>
    </section>
  );
}
