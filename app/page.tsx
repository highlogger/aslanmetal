import Hero from '@/components/Home/Hero';
import Stats from '@/components/Home/Stats';
import ServicesSection from '@/components/Home/ServicesSection';
import ScrapTypesPreview from '@/components/Home/ScrapTypesPreview';
import WhyUs from '@/components/Home/WhyUs';
import Process from '@/components/Home/Process';
import Fleet from '@/components/Home/Fleet';
import Testimonials from '@/components/Home/Testimonials';
import Districts from '@/components/Home/Districts';
import Partners from '@/components/Home/Partners';
import CTABanner from '@/components/Home/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSection />
      <WhyUs />
      <Process />
      <ScrapTypesPreview />
      <Fleet />
      <Testimonials />
      <Districts />
      <Partners />
      <CTABanner />
    </>
  );
}
