import SEOHead from "@/components/SEOHead";
import FiberHero from "@/components/FiberHero";
import TopicCards from "@/components/TopicCards";
import AdvantagesSection from "@/components/AdvantagesSection";
import FAQSection from "@/components/FAQSection";
import BannerAd from "@/components/BannerAd";
import InArticleAd from "@/components/InArticleAd";
import SponsoredLink from "@/components/SponsoredLink";

const Index = () => (
  <>
    <SEOHead
      title="Fiber Optic Guide – Learn Everything A to Z"
      description="Master fiber optic technology from fundamentals to advanced concepts. Free comprehensive guide covering types, installation, tools, and real-world applications."
      path="/"
      type="website"
    />
    <FiberHero />
    <div className="container-content px-4 py-4">
      <BannerAd />
    </div>
    <TopicCards />
    <InArticleAd />
    <SponsoredLink variant={0} className="mx-auto my-2" />
    <AdvantagesSection />
    <InArticleAd />
    <SponsoredLink variant={1} className="mx-auto my-2" />
    <FAQSection />
  </>
);

export default Index;
