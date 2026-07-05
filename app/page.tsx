import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Gallery from "@/components/Gallery";
import FeaturedCollection from "@/components/FeaturedCollection";
import ProductDetail from "@/components/ProductDetail";
import AboutArtist from "@/components/AboutArtist";
import OrderFlow from "@/components/OrderFlow";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Concept />
        <Gallery />
        <FeaturedCollection />
        <ProductDetail />
        <AboutArtist />
        <OrderFlow />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
