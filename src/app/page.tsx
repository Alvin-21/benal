import Navigation from './components/navigation/Navigation';
import Hero from './components/home/ui/Hero';
import TrustStrip from './components/home/ui/TrustStrip';
import Services from './components/home/ui/Services';
import WhyBenal from './components/home/ui/WhyBenal';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyBenal />
      </main>
    </>
  );
}
