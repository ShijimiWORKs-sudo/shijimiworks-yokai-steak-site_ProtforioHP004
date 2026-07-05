"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY, 700) * 0.12;
        el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.04)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className={styles.hero} id="top" aria-label="ヒーロー">
      <div className={styles.figure}>
        <div className={`${styles.parallax} parallax-img`} ref={imgRef}>
          {/* Original abstract artwork rendered as a decorative background. */}
          <img src="/artworks/hero.svg" alt="" aria-hidden="true" />
        </div>
        <div className={styles.veil} aria-hidden="true" />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>ShijimiWORKs Art Collection</p>
        <h1 className={styles.title}>
          日々の余白に、
          <br />
          静かな色を飾る。
        </h1>
        <p className={styles.sub}>
          個人で制作したデジタルアート、抽象画、ビジュアル作品を販売する
          <br className={styles.brDesktop} />
          オンラインギャラリーです。
        </p>
        <div className={styles.actions}>
          <a href="#gallery" className="btn btn--solid">
            作品を見る
          </a>
          <a href="#contact" className="btn">
            購入について相談する
          </a>
        </div>
      </div>

      <a href="#concept" className={styles.scrollHint} aria-label="下へスクロール">
        <span>Scroll</span>
        <span className={styles.scrollLine} aria-hidden="true" />
      </a>
    </section>
  );
}
