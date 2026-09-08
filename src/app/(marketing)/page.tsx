import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import PayLater from "@/components/sections/PayLater";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";
import OurStory from "@/components/sections/OurStory";
import Faq from "@/components/sections/Faq";
import Waitlist from "@/components/sections/Waitlist";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <PayLater />
      <Pricing />
      <About />
      <OurStory />
      <Faq />
      <Waitlist />
      <Footer />
    </>
  );
}
