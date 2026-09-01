import Navigation from './components/navigation/Navigation';
import Hero from './components/home/ui/Hero';
import TrustStrip from './components/home/ui/TrustStrip';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustStrip />
      </main>
    </>
  );
}
