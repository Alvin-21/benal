import Navigation from './components/navigation/Navigation';
import Hero from './components/home/ui/Hero';
import TrustStrip from './components/home/ui/TrustStrip';
import Services from './components/home/ui/Services';
import WhyBenal from './components/home/ui/WhyBenal';
import Process from './components/home/ui/Process';
import CTA from './components/home/ui/CTA';
import Footer from './components/navigation/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyBenal />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
