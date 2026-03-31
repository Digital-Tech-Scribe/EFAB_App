import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageHeroMenu from '../components/PageHeroMenu';
import { projects } from '../data/projects';
import { estatePortfolioItems, projectCategories } from '../data/siteContent';
import { fetchEstateDetailBySlug, type EstateDetail } from '../lib/efabPortfolio';

function getProjectCategoryRoute(projectCategory: string) {
  if (projectCategory.toLowerCase() === 'estates') {
    return '/projects/estates';
  }

  if (projectCategory.toLowerCase() === 'rentals') {
    return '/projects/rentals';
  }

  if (projectCategory.toLowerCase() === 'commercials' || projectCategory.toLowerCase() === 'commercial') {
    return '/projects/commercials';
  }

  return '/projects/luxury-homes';
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const estateSummary = estatePortfolioItems.find((item) => item.id === slug);
  const fallbackProject = projects.find((item) => item.id === slug);
  const [estateDetail, setEstateDetail] = useState<EstateDetail | null>(null);
  const [estateStatus, setEstateStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>(
    estateSummary ? 'loading' : 'idle',
  );

  useEffect(() => {
    if (!slug || !estateSummary) {
      setEstateDetail(null);
      setEstateStatus('idle');
      return;
    }

    let active = true;
    setEstateStatus('loading');

    fetchEstateDetailBySlug(slug)
      .then((detail) => {
        if (!active) {
          return;
        }

        setEstateDetail(detail);
        setEstateStatus(detail ? 'ready' : 'error');
      })
      .catch(() => {
        if (!active) {
          return;
        }

        setEstateStatus('error');
      });

    return () => {
      active = false;
    };
  }, [slug, estateSummary]);

  if (!estateSummary && !fallbackProject) {
    return (
      <div className="relative z-10 flex min-h-screen items-center justify-center bg-cream px-6 pb-32 pt-40">
        <div className="text-center">
          <h1 className="font-sans text-3xl tracking-tighter uppercase">Project Not Found</h1>
          <Link to="/projects" className="mt-8 inline-flex font-mono text-[10px] uppercase tracking-[0.2em] underline">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  const activeEstate = estateDetail ?? null;
  const projectTitle = activeEstate?.title ?? estateSummary?.title ?? fallbackProject!.title;
  const projectLocation = activeEstate?.location ?? estateSummary?.location ?? fallbackProject!.location;
  const projectImage = activeEstate?.heroImage ?? estateSummary?.image ?? fallbackProject!.imageUrl;
  const projectCategory = estateSummary ? 'Estates' : fallbackProject!.category;
  const categoryRoute = estateSummary ? '/projects/estates' : getProjectCategoryRoute(fallbackProject!.category);
  const siblingLinks = [
    { label: 'Projects', to: '/projects' },
    ...projectCategories.map((item) => ({
      label: item.title,
      to: item.route,
      current: item.route === categoryRoute,
    })),
  ];

  const relatedProjects = estateSummary
    ? estatePortfolioItems.filter((item) => item.id !== estateSummary.id).slice(0, 3)
    : projects
        .filter((item) => item.id !== fallbackProject!.id && (item.category === fallbackProject!.category || item.location === fallbackProject!.location))
        .slice(0, 3);

  return (
    <div className="relative z-10 min-h-screen bg-cream pb-32 pt-28">
      <section className="overflow-hidden border-b border-black/10">
        <PageHeroMenu
          eyebrow={`${projectCategory} / ${projectLocation}`}
          title={projectTitle}
          intro={
            activeEstate?.summary ??
            estateSummary?.summary ??
            'A project page that stays within the same portfolio family, connecting the live category system back to the specific development.'
          }
          items={siblingLinks}
          align="left"
          mediaImage={projectImage}
          mediaAlt={projectTitle}
          mediaOverlayOpacity={0.42}
        />
      </section>

      {estateSummary ? (
        <section className="container mx-auto px-6 pt-8">
          <div className="grid grid-cols-1 gap-8 border-y border-black/10 py-8 md:grid-cols-[0.24fr_0.76fr]">
              <div className="space-y-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/38">Location</div>
                <div className="font-sans text-2xl tracking-[-0.04em] text-black">{projectLocation}</div>
                <div className="pt-8 font-mono text-[10px] uppercase tracking-[0.28em] text-black/42">
                  Estate Details
                </div>
              </div>

            <div>
              {estateStatus === 'loading' && !activeEstate ? (
                <div className="space-y-5 opacity-70">
                  <p className="max-w-[34rem] font-sans text-lg leading-relaxed text-black/55 md:text-[1.15rem]">
                    Preparing the estate narrative, imagery, and specification blocks for this page.
                  </p>
                  <div className="space-y-3">
                    <div className="h-3 w-40 bg-black/6" />
                    <div className="h-3 w-full max-w-[30rem] bg-black/6" />
                    <div className="h-3 w-full max-w-[36rem] bg-black/6" />
                  </div>
                </div>
              ) : activeEstate ? (
                <div className="estate-richtext" dangerouslySetInnerHTML={{ __html: activeEstate.html }} />
              ) : (
                <div>
                  <h2 className="font-sans text-[clamp(2.6rem,4.8vw,4.8rem)] leading-[0.94] tracking-[-0.05em] text-black">
                    Estate Details
                  </h2>
                  <p className="mt-6 max-w-[40rem] font-sans text-lg leading-relaxed text-black/63 md:text-[1.28rem]">
                    This estate page currently presents the available archive overview while the fuller detail layout is being prepared.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className="container mx-auto px-6 pt-8">
          <div className="grid grid-cols-1 gap-8 border-y border-black/10 py-8 md:grid-cols-[0.28fr_0.72fr]">
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/38">Location</div>
              <div className="font-sans text-2xl tracking-[-0.04em] text-black">{projectLocation}</div>
            </div>

            <div>
              <h2 className="font-sans text-[clamp(2.6rem,4.8vw,4.8rem)] leading-[0.94] tracking-[-0.05em] text-black">
                Built with
                <br />
                long-term value
              </h2>
              <p className="mt-6 max-w-[40rem] font-sans text-lg leading-relaxed text-black/63 md:text-[1.28rem]">
                EFAB projects are framed through durability, accessibility, and community-conscious delivery, with each development positioned within a larger residential system.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center border border-black px-7 py-4 font-mono text-[11px] uppercase tracking-[0.32em] text-black transition-colors hover:bg-black hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="container mx-auto px-6 pt-14">
          <div className="border-b border-black/10 pb-4 font-mono text-[10px] uppercase tracking-[0.38em] text-black/42">
            Related Projects
          </div>

          <div className="grid grid-cols-1 gap-4 pt-10 md:grid-cols-3">
            {relatedProjects.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.72, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden border border-black/10 bg-white/40"
              >
                <div className="aspect-[1.08] overflow-hidden bg-black/5">
                  <img
                    src={'image' in item ? item.image : item.imageUrl}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/36">{item.location}</div>
                  <h3 className="mt-4 font-sans text-2xl leading-[0.96] tracking-[-0.045em] text-black">{item.title}</h3>
                  <Link
                    to={`/projects/${item.id}`}
                    className="mt-6 inline-flex font-mono text-[11px] uppercase tracking-[0.28em] text-black/58 transition-opacity hover:text-black"
                  >
                    View Project
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
