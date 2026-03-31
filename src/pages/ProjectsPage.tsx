import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeroMenu from '../components/PageHeroMenu';
import { projectCategories } from '../data/siteContent';

export default function ProjectsPage() {
  return (
    <div className="relative z-10 min-h-screen bg-cream pb-32 pt-28">
      <PageHeroMenu
        eyebrow="Projects"
        title={
          <>
            Built places for
            <br />
            life and work
          </>
        }
        intro="Projects open as an archive of categories first, letting users move across estates, rentals, commercials, and luxury homes with the same broad visual rhythm as the home page."
        items={[
          { label: 'Projects', current: true },
          { label: 'Estates', targetId: 'estates' },
          { label: 'Rentals', targetId: 'rentals' },
          { label: 'Commercials', targetId: 'commercials' },
          { label: 'Luxury Homes', targetId: 'luxury-homes' },
        ]}
        align="center"
        mediaImage={projectCategories[0]?.image}
        mediaAlt="EFAB projects hero"
        mediaOverlayOpacity={0.42}
      />

      <section className="container mx-auto px-6 pt-6">
        <div className="border-b border-black/10 pb-4 font-mono text-[10px] uppercase tracking-[0.38em] text-black/42">
          Category Archive
        </div>

        <div className="space-y-4 pt-10">
          {projectCategories.map((category, index) => (
            <motion.article
              key={category.key}
              id={category.sectionId}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.78, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border border-black/10 bg-white/45"
            >
              <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-[0.88fr_1.12fr]' : 'lg:grid-cols-[1.12fr_0.88fr]'}`}>
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} min-h-[24rem] overflow-hidden bg-black/5`}>
                  {category.image ? (
                    <img src={category.image} alt={category.title} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="flex h-full min-h-[23rem] items-end bg-black/[0.03] p-8">
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40">No published items</div>
                    </div>
                  )}
                </div>

                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} px-8 py-9 md:px-10 md:py-10`}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/38">
                    0{index + 1} / {category.eyebrow}
                  </div>
                  <h2 className="mt-6 font-sans text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.94] tracking-[-0.05em] text-black">
                    {category.title}
                  </h2>
                  {category.description && (
                    <p className="mt-6 max-w-[34rem] font-sans text-lg leading-relaxed text-black/64 md:text-[1.28rem]">
                      {category.description}
                    </p>
                  )}

                  {category.highlights.length > 0 ? (
                    <div className="mt-8 space-y-3">
                      {category.highlights.map((highlight) => (
                        <div key={highlight} className="border-t border-black/10 pt-3 font-sans text-base leading-relaxed text-black/72 md:text-lg">
                          {highlight}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-8 border-t border-black/10 pt-3 font-sans text-base leading-relaxed text-black/52 md:text-lg">
                      No Published Yet
                    </div>
                  )}

                  <Link
                    to={category.route}
                    className="mt-9 inline-flex items-center border border-black px-7 py-4 font-mono text-[11px] uppercase tracking-[0.32em] text-black transition-colors hover:bg-black hover:text-white"
                  >
                    {category.isEmpty ? 'Open Category' : 'View Project'}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
