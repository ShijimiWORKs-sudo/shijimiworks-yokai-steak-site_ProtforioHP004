import Reveal from "./Reveal";
import { faqs } from "@/lib/content";
import styles from "./FAQ.module.css";

export default function FAQ() {
  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">よくあるご質問。</h2>
            <p className={styles.note}>
              解決しない場合は、お気軽に
              <a href="#contact">Contact</a>
              からご相談ください。
            </p>
          </Reveal>
        </div>

        <Reveal className={styles.list} delay={80}>
          {faqs.map((faq, i) => (
            <details key={i} className={styles.item} name="faq">
              <summary className={styles.summary}>
                <span className={styles.q}>{faq.q}</span>
                <span className={styles.icon} aria-hidden="true" />
              </summary>
              <div className={styles.answer}>
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
