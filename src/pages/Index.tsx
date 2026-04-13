import SEOHead from "@/components/SEOHead";
import FiberHero from "@/components/FiberHero";
import TopicCards from "@/components/TopicCards";
import AdvantagesSection from "@/components/AdvantagesSection";
import FAQSection from "@/components/FAQSection";

const Index = () => (
  <>
    <SEOHead
      title="Fiber Optic Guide – Learn Everything A to Z"
      description="Master fiber optic technology from fundamentals to advanced concepts. Free comprehensive guide covering types, installation, tools, and real-world applications."
      path="/"
      type="website"
    />
    <FiberHero />
    <TopicCards />
    <AdvantagesSection />
    <FAQSection />
  </>
);

export default Index;
