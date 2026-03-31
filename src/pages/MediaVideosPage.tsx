import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeroMenu from '../components/PageHeroMenu';
import { mediaVideos } from '../data/siteContent';
import { galleryImages } from '../data/projects';

function VideoBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2d3133] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.26em] text-white">
      <span className="text-[8px]">✦</span>
      {children}
    </span>
  );
}

export default function MediaVideosPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 420], [0, -24]);
  const featureY = useTransform(scrollY, [0, 860], [0, 48]);

  return (
    <div className="relative z-10 min-h-screen bg-cream pb-32 pt-28">
      <motion.div style={{ y: heroY }}>
        <PageHeroMenu
          eyebrow="Media / Videos"
          title={
            <>
              Moving images
              <br />
              with space
            </>
          }
          intro="Video stays quieter here too: one featured film first, then a measured archive of brand and project stories underneath."
          items={[
            { label: 'Media', to: '/media' },
            { label: 'Photos', to: { pathname: '/', hash: '#gallery' } },
            { label: 'Videos', current: true, to: '/media/videos' },
          ]}
          align="left"
          mediaImage={galleryImages[1]}
          mediaAlt="EFAB video archive hero"
          mediaOverlayOpacity={0.42}
        />
      </motion.div>

      <section className="container mx-auto px-6 pt-8">
        <motion.div
          style={{ y: featureY }}
          className="grid grid-cols-1 gap-4 lg:grid-cols-[1.22fr_0.78fr]"
        >
          <motion.article
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border border-black/10 bg-white"
          >
            <div className="relative aspect-[1.34] overflow-hidden bg-black">
              <div className="absolute right-4 top-4 z-10">
                <VideoBadge>Featured</VideoBadge>
              </div>
              <iframe
                className="h-full w-full"
                src={mediaVideos.featured.embedUrl}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={mediaVideos.featured.title}
              />
            </div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.78, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between border border-black/10 bg-white/40 p-8 md:p-10"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/38">Featured Film</div>
              <h2 className="mt-6 font-sans text-[clamp(2.8rem,4.8vw,4.8rem)] leading-[0.94] tracking-[-0.05em] text-black">
                {mediaVideos.featured.title}
              </h2>
              <p className="mt-6 max-w-[28rem] font-sans text-lg leading-relaxed text-black/63 md:text-[1.22rem]">
                {mediaVideos.featured.description}
              </p>
            </div>

            <div className="mt-10 border-t border-black/10 pt-5">
              <Link
                to="/contact"
                className="font-mono text-[11px] uppercase tracking-[0.28em] text-black/58 transition-opacity hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </motion.aside>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 pt-16 md:pt-20">
        <div className="border-b border-black/10 pb-4 font-mono text-[10px] uppercase tracking-[0.38em] text-black/42">
          Film Archive
        </div>

        <div className="grid grid-cols-1 gap-4 pt-10 lg:grid-cols-3">
          {mediaVideos.library.map((video, index) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.74, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border border-black/10 bg-white/40"
            >
              <div className="aspect-[1.18] overflow-hidden bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope"
                  allowFullScreen
                  title={video.title}
                />
              </div>
              <div className="p-6">
                <VideoBadge>Film</VideoBadge>
                <h3 className="mt-5 font-sans text-[clamp(2rem,2.6vw,2.7rem)] leading-[0.95] tracking-[-0.045em] text-black">
                  {video.title}
                </h3>
                <p className="mt-4 font-sans text-base leading-relaxed text-black/62 md:text-lg">
                  Project storytelling through development, design, and delivery.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
