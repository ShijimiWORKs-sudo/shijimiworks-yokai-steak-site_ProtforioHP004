import Reveal from "./Reveal";
import { orderSteps } from "@/lib/content";
import styles from "./OrderFlow.module.css";

export default function OrderFlow() {
  return (
    <section id="order" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal className={styles.intro}>
          <p className="eyebrow">Order Flow</p>
          <h2 className="section-title">購入・相談の流れ。</h2>
          <p className="lead">
            初めての方も安心してご相談いただけるよう、到着までの流れをまとめました。
          </p>
        </Reveal>

        <ol className={styles.steps}>
          {orderSteps.map((step, i) => (
            <Reveal key={step.n} as="li" className={styles.step} delay={(i % 3) * 80}>
              <span className={styles.num}>{step.n}</span>
              <div className={styles.text}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
