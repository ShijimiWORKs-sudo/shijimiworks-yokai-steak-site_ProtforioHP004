"use client";

import { useState, type FormEvent } from "react";
import { contactFields } from "@/lib/content";
import Reveal from "./Reveal";
import styles from "./Contact.module.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Front-end demo only — no data is transmitted.
    setSent(true);
  };

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.intro}>
          <p className="eyebrow">Contact / Order</p>
          <h2 className="section-title">作品のこと、お気軽に。</h2>
          <p className={styles.lead}>
            作品購入、サイズ変更、額装、オーダーメイド制作について、お気軽にご相談ください。空間や用途に合わせた作品選びもお手伝いします。
          </p>
          <ul className={styles.points}>
            <li>作品購入・在庫の確認</li>
            <li>サイズ変更・額装のご相談</li>
            <li>オーダーメイド・空間提案</li>
          </ul>
        </Reveal>

        <Reveal className={styles.formWrap} delay={100}>
          {sent ? (
            <div className={styles.done} role="status" aria-live="polite">
              <div className={styles.doneMark} aria-hidden="true">
                <svg viewBox="0 0 48 48" width="48" height="48">
                  <circle cx="24" cy="24" r="22" fill="none" stroke="var(--blue-deep)" strokeWidth="1.5" />
                  <path d="M15 24 l6 6 l12 -13" fill="none" stroke="var(--blue-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>送信ありがとうございました</h3>
              <p>
                内容を確認のうえ、2〜3営業日以内にご返信します。
                <br />
                （これはデモ表示です。実際の送信は行われません。）
              </p>
              <button type="button" className="btn btn--ghost" onClick={() => setSent(false)}>
                フォームに戻る
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="name">
                  お名前<span className={styles.req}>必須</span>
                </label>
                <input id="name" name="name" type="text" autoComplete="name" required placeholder="示海 しじみ" />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">
                  メールアドレス<span className={styles.req}>必須</span>
                </label>
                <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
              </div>

              <div className={styles.field}>
                <label htmlFor="work">気になる作品名</label>
                <select id="work" name="work" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  {contactFields.workOptions.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="size">希望サイズ</label>
                <select id="size" name="size" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  {contactFields.sizeOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <span className={styles.groupLabel} id="frame-label">
                  額装希望
                </span>
                <div className={styles.radios} role="radiogroup" aria-labelledby="frame-label">
                  <label className={styles.radio}>
                    <input type="radio" name="frame" value="yes" defaultChecked />
                    <span>希望する</span>
                  </label>
                  <label className={styles.radio}>
                    <input type="radio" name="frame" value="no" />
                    <span>希望しない</span>
                  </label>
                  <label className={styles.radio}>
                    <input type="radio" name="frame" value="undecided" />
                    <span>相談したい</span>
                  </label>
                </div>
              </div>

              <div className={`${styles.field} ${styles.full}`}>
                <label htmlFor="message">
                  相談内容<span className={styles.req}>必須</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="飾りたい場所の雰囲気やご予算、ご希望の納期などをお書きください。"
                />
              </div>

              <button type="submit" className={`btn btn--solid ${styles.submit}`}>
                この内容で送信する
              </button>
              <p className={styles.disclaimer}>
                ※ 本フォームはポートフォリオ用のデモです。送信ボタンを押しても実際の送信は行われません。
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
