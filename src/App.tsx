import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import { lazy, Suspense } from 'react';
import ServicesPage from './pages/ServicesPage';
import MediaVideosPage from './pages/MediaVideosPage';
import OffersPage from './pages/OffersPage';
import ProjectCategoryPage from './pages/ProjectCategoryPage';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const MediaPage = lazy(() => import('./pages/MediaPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ManagementTeamPage = lazy(() => import('./pages/about/ManagementTeamPage'));
const CSRPage = lazy(() => import('./pages/about/CSRPage'));
const FAQPage = lazy(() => import('./pages/about/FAQPage'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const timer = window.setTimeout(() => {
      const target = document.querySelector(hash);

      if (!(target instanceof HTMLElement)) {
        window.scrollTo(0, 0);
        return;
      }

      const top = target.getBoundingClientRect().top + window.scrollY - 136;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }, 90);

    return () => window.clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/EFAB_App">
        <ScrollToTop />
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Home */}
              <Route index element={<HomePage />} />

              {/* About + sub-pages */}
              <Route path="about" element={<AboutPage />} />
              <Route path="about/team" element={<ManagementTeamPage />} />
              <Route path="about/csr" element={<CSRPage />} />
              <Route path="about/faq" element={<FAQPage />} />

              {/* Projects */}
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="projects/estates" element={<ProjectCategoryPage categoryKey="estates" />} />
              <Route path="projects/rentals" element={<ProjectCategoryPage categoryKey="rentals" />} />
              <Route path="projects/commercials" element={<ProjectCategoryPage categoryKey="commercials" />} />
              <Route path="projects/luxury-homes" element={<ProjectCategoryPage categoryKey="luxury-homes" />} />
              <Route path="projects/:slug" element={<ProjectDetailPage />} />
              <Route path="collection" element={<Navigate to="/projects" replace />} />

              {/* Media */}
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="media" element={<MediaPage />} />
              <Route path="media/videos" element={<MediaVideosPage />} />

              {/* News */}
              <Route path="news" element={<NewsPage />} />
              <Route path="news/offers" element={<OffersPage />} />

              {/* Contact */}
              <Route path="contact" element={<ContactPage />} />

              {/* Alias routes */}
              <Route path="services" element={<ServicesPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
