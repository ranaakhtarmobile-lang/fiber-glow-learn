import { Helmet } from "react-helmet-async";
import FiberHero from "@/components/FiberHero";
import TopicCards from "@/components/TopicCards";
import AdvantagesSection from "@/components/AdvantagesSection";
import FAQSection from "@/components/FAQSection";
import BannerAd from "@/components/BannerAd";

const Index = () => (
  <>
    <Helmet>
      <title>Fiber Optic Guide – Learn Everything A to Z | Complete Knowledge Hub</title>
      <meta name="description" content="Master fiber optic technology from fundamentals to advanced concepts. Free comprehensive guide covering types, installation, tools, and real-world applications for students and engineers." />
      <meta property="og:title" content="Fiber Optic Guide – Learn Everything A to Z" />
      <meta property="og:description" content="Your complete knowledge hub for fiber optic technology. From basics to advanced concepts." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://fiberopticguide.com" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Fiber Optic Guide",
        "description": "Complete knowledge hub for fiber optic technology",
        "url": "https://fiberopticguide.com"
      })}</script>
    </Helmet>
    <FiberHero />
    <div className="container-content px-4 py-4">
      <BannerAd />
    </div>
    <TopicCards />
    <AdvantagesSection />
    <FAQSection />
  </>
);

export default Index;
