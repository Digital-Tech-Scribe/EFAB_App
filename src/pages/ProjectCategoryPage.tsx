import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import PageHeroMenu from '../components/PageHeroMenu';
import {
  estatePortfolioItems,
  getProjectCategoryConfig,
  projectCategories,
  rentalHero,
  rentalLocations,
  type ProjectCategoryKey,
} from '../data/siteContent';
import { galleryImages } from '../data/projects';

interface ProjectCategoryPageProps {
  categoryKey: ProjectCategoryKey;
}

const ESTATE_PAGE_SIZE = 6;

function RentalMedia({ videos, galleryImages = [] }: { videos: string[]; galleryImages?: string[] }) {
  if (galleryImages.length > 0) {
    return (
      <div className="mt-8 border-t border-black/10 pt-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/44">Image Gallery</div>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={`${image}-${index}`} className="overflow-hidden border border-black/10 bg-white/35">
              <img
                src={image}
                alt={`Rental gallery ${index + 1}`}
                className="aspect-[1.18] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (videos.length > 0) {
    return (
      <div className="mt-8 border-t border-black/10 pt-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/44">YouTube Videos</div>
        <div className="mt-4 flex flex-wrap gap-3">
          {videos.map((videoUrl, videoIndex) => (
            <a
              key={videoUrl}
              href={videoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center border border-black px-4 py-3 font-mono text-[10px] uppercase tracking-[0.28em] text-black transition-colors hover:bg-black hover:text-white"
            >
              Video 0{videoIndex + 1}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

export default function ProjectCategoryPage({ categoryKey }: ProjectCategoryPageProps) {
  const category = getProjectCategoryConfig(categoryKey);
  const [searchParams, setSearchParams] = useSearchParams();
  const siblingLinks = [
    { label: 'Projects', to: '/projects' },
    ...projectCategories.map((item) => ({
      label: item.title,
      to: item.route,
      current: item.key === categoryKey,
    })),
  ];

  if (categoryKey === 'estates') {
    const requestedPage = Number(searchParams.get('page') ?? '1');
    const totalPages = Math.ceil(estatePortfolioItems.length / ESTATE_PAGE_SIZE);
    const currentPage = Number.isFinite(requestedPage) ? Math.min(Math.max(requestedPage, 1), totalPages) : 1;
    const visibleProjects = estatePortfolioItems.slice((currentPage - 1) * ESTATE_PAGE_SIZE, currentPage * ESTATE_PAGE_SIZE);

    return (
      <div className="relative z-10 min-h-screen bg-cream pb-32">
        <PageHeroMenu
          eyebrow="Portfolio"
          title="Estates"
          intro="The estate archive stays local here, but every card opens into its own EFAB-backed detail page instead of sending users away."
          items={siblingLinks}
          align="left"
          mediaImage={category.image}
          mediaAlt="EFAB estates hero"
          mediaOverlayOpacity={0.42}
        />

        <section className="container mx-auto px-6 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.38em] text-black/42">Estate Portfolio Archive</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/42">
              Page {currentPage} / {totalPages}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-10 md:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.76, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden border border-black/10 bg-white/35"
              >
                <Link to={`/projects/${project.id}`} className="group block">
                  <div className="aspect-[1.18] overflow-hidden bg-black/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-8 px-7 py-7 md:min-h-[17rem] md:grid-cols-[0.26fr_0.74fr] md:px-8">
                    <div className="flex flex-col justify-between gap-5">
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/36">
                        0{(currentPage - 1) * ESTATE_PAGE_SIZE + index + 1} / {project.location}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/48">Open Estate</div>
                    </div>

                    <div>
                      <h2 className="font-sans text-[clamp(2.4rem,4.6vw,4.5rem)] leading-[0.94] tracking-[-0.05em] text-black">
                        {project.title}
                      </h2>
                      <p className="mt-5 max-w-[28rem] font-sans text-base leading-relaxed text-black/62 md:text-[1.08rem]">
                        {project.summary}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-black/10 pt-5">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => setSearchParams(page === 1 ? {} : { page: String(page) })}
                  className={`inline-flex min-w-[3rem] items-center justify-center border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.28em] transition-colors ${
                    page === currentPage
                      ? 'border-black bg-black text-white'
                      : 'border-black/15 bg-white/35 text-black/60 hover:border-black hover:text-black'
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
        </section>
      </div>
    );
  }

  if (categoryKey === 'rentals') {
    return (
      <div className="relative z-10 min-h-screen bg-cream pb-32">
        <PageHeroMenu
          eyebrow={rentalHero.eyebrow}
          title={rentalHero.title}
          intro={rentalHero.description}
          items={siblingLinks}
          align="left"
          mediaVideoId={rentalHero.heroVideoId}
          mediaOverlayOpacity={0.18}
          showPlayButton
          playVideoId={rentalHero.heroVideoId}
          playVideoTitle="EFAB Rentals Hero Video"
        />

        <section className="container mx-auto px-6 pt-6">
          <div className="border-b border-black/10 pb-4 font-mono text-[10px] uppercase tracking-[0.38em] text-black/42">
            {rentalHero.sectionLabel}
          </div>

          <div className="space-y-4 pt-10">
            {rentalLocations.map((location, index) => (
              <motion.article
                key={location.id}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.76, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-8 border border-black/10 bg-white/28 px-7 py-8 md:grid-cols-[0.28fr_0.72fr] md:px-8 md:py-9"
              >
                <div className="flex flex-col justify-between gap-8">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/36">
                      {String(index + 1).padStart(2, '0')} / {location.location}
                    </div>
                    <h2 className="mt-5 max-w-[12rem] font-sans text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.9] tracking-[-0.055em] text-black">
                      {location.name}
                    </h2>
                  </div>

                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/56">Rental Archive</div>
                </div>

                <div>
                  <p className="max-w-[34rem] font-sans text-[1.1rem] leading-relaxed text-black/70 md:text-[1.22rem]">
                    {location.specification}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-px border border-black/10 bg-black/10 lg:grid-cols-2">
                    {location.houseTypes.map((houseType) => (
                      <div
                        key={`${location.id}-${houseType}`}
                        className="bg-cream px-5 py-4 font-sans text-base leading-relaxed text-black/74 md:text-lg"
                      >
                        {houseType}
                      </div>
                    ))}
                  </div>

                  <RentalMedia videos={location.videos} galleryImages={location.galleryImages} />
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="relative z-10 min-h-screen bg-cream pb-32">
      <PageHeroMenu
        eyebrow={category.eyebrow}
        title={category.title}
        intro={category.description}
        items={siblingLinks}
        align="left"
        mediaImage={category.image ?? galleryImages[2]}
        mediaAlt={`EFAB ${category.title} hero`}
        mediaOverlayOpacity={0.44}
      />

      <section className="container mx-auto px-6 pt-6">
        <div className="border-b border-black/10 pb-4 font-mono text-[10px] uppercase tracking-[0.38em] text-black/42">
          {category.title}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 border border-black/10 bg-white/35 px-8 py-12 md:px-12 md:py-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/42">Archive Status</div>
          <h2 className="mt-5 font-sans text-[clamp(2.5rem,5vw,4.6rem)] leading-[0.94] tracking-[-0.05em] text-black">
            No published items
          </h2>
          <p className="mt-5 max-w-[34rem] font-sans text-lg leading-relaxed text-black/62 md:text-[1.2rem]">
            No Published Yet
          </p>
        </motion.div>
      </section>
    </div>
  );
}
