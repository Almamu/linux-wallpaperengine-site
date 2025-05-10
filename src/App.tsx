import { BackgroundShowcaseSection } from './components/BackgroundShowcaseSection.tsx';
import { ContributorsSection } from './components/ContributorsSection.tsx';
import { FeatureSection } from './components/FeatureSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InstallationSection } from './components/InstallationSection';
import { StatusSection } from './components/StatusSection';

export function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <InstallationSection />
      <FeatureSection />
      <StatusSection />
      <BackgroundShowcaseSection />
      <ContributorsSection />
      {/*<DownloadSection />*/}
      <Footer />
    </div>
  );
}
