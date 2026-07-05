"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} aria-label={`${site.brand} ホームへ`}>
          <span className={styles.brandMark} aria-hidden="true">
            <svg viewBox="0 0 40 40" width="28" height="28">
              <rect x="6" y="6" width="28" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="15" cy="15" r="4" fill="var(--blue)" />
              <path d="M9 30 L18 22 L23 26 L30 19 L30 30 Z" fill="var(--pink)" />
            </svg>
          </span>
          <span className={styles.brandText}>
            <strong>ShijimiWORKs</strong>
            <em>Art Collection</em>
          </span>
        </a>

        <nav className={styles.desktopNav} aria-label="グローバルナビゲーション">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className={`btn btn--solid ${styles.navCta}`}>
            購入相談
          </a>
        </nav>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.bar} ${open ? styles.bar1 : ""}`} />
          <span className={`${styles.bar} ${open ? styles.bar2 : ""}`} />
          <span className={`${styles.bar} ${open ? styles.bar3 : ""}`} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`${styles.mobileNav} ${open ? styles.mobileOpen : ""}`}
        hidden={!open}
      >
        <nav aria-label="モバイルナビゲーション">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`btn btn--solid ${styles.mobileCta}`}
            onClick={() => setOpen(false)}
          >
            購入について相談する
          </a>
        </nav>
      </div>
    </header>
  );
}
