import Hotjar from "@hotjar/browser";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import CTA from "./components/CTA";
import TESTIMONIALS from "./components/testimonials";
import FOOTER from "./components/footer";
import FAQ from "./components/faq";
import CTA2 from "./components/CTA2";

export default function Home() {
  const siteId = 4989152;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion);

  // Initializing with `debug` option:
  Hotjar.init(siteId, hotjarVersion, {
    debug: true,
  });
  return (
    <>
      <div className="max-w-[1920px] mx-auto font-[sans-serif] text-[#333] text-sm">
        <div className="bg-white">
          <NavBar />
          <Hero />
          <CTA />
          <CTA2 />
          <TESTIMONIALS />
          <FAQ />
          <FOOTER />
        </div>
      </div>
    </>
  );
}
