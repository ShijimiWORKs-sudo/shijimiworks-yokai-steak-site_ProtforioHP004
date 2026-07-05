import { nav } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <a href="#top" className={styles.brand}>
            <strong>ShijimiWORKs</strong>
            <em>Art Collection</em>
          </a>
          <p className={styles.tagline}>日々の余白に、静かな色を飾る。</p>
        </div>

        <nav className={styles.nav} aria-label="フッターナビゲーション">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.contactCol}>
          <p className={styles.label}>Contact</p>
          <a href="#contact" className={styles.mail}>
            作品購入・オーダーのご相談
          </a>
          <p className={styles.small}>オンラインギャラリー / 全国配送対応</p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} ShijimiWORKs Art Collection. All artworks are original.</p>
        <p className={styles.sample}>Portfolio sample site — management no. 004</p>
      </div>
    </footer>
  );
}
