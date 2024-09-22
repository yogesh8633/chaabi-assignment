// app/routes/index.tsx

import Header from "~/components/Header";
import HeroSection from "~/components/HeroSection";
import TabsSection from "~/components/TabsSection";
import Testimonials from "~/components/Testimonials";

export default function Index() {
  return (
    <>
      <div className=" bg-custom mt-3 mr-3 rounded-xl">
        <div className="ellipse ellipse-1"></div>
        <div className="ellipse ellipse-2"></div>
        <div className="ellipse ellipse-3"></div>
        <div className="ellipse ellipse-4"></div>
        <Header />
        <HeroSection />
      </div>
      <TabsSection />
      <Testimonials />
    </>
  );
}
