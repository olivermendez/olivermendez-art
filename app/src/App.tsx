import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ServicesSection from './sections/ServicesSection';
import EducationSection from './sections/EducationSection';
import CTABanner from './sections/CTABanner';
import Footer from './sections/Footer';
import { useSeo } from './lib/useSeo';
import { I18nProvider, useI18n } from './i18n/I18nProvider';
import { ui } from './i18n/ui';

// La página de detalle vive en su propio chunk (no lastra la carga inicial).
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

function HomePage() {
  const { lang, t } = useI18n();
  useSeo({
    lang,
    title: t(ui.seo.homeTitle),
    description: t(ui.seo.homeDescription),
    path: '/',
  });

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ServicesSection />
        <EducationSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <div className="min-h-screen bg-cream">
          <Suspense fallback={<div className="min-h-screen bg-cream" />}>
            <Routes>
              {/* Español (idioma principal) en la raíz */}
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:id" element={<ProjectPage />} />
              {/* Inglés bajo /en */}
              <Route path="/en" element={<HomePage />} />
              <Route path="/en/project/:id" element={<ProjectPage />} />
            </Routes>
          </Suspense>
        </div>
      </I18nProvider>
    </BrowserRouter>
  );
}

export default App;
