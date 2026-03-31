import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { galleryImages } from '../data/projects';
import { mediaVideos } from '../data/siteContent';
import PageHeroMenu from '../components/PageHeroMenu';

function MediaBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2d3133] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.26em] text-white">
      <span className="text-[8px]">✦</span>
      {children}
    </span>
  );
}

export default function MediaPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 420], [0, -26]);
  const photosY = useTransform(scrollY, [0, 900], [0, -32]);

  return (
    <div className="relative z-10 min-h-screen bg-cream pb-32 pt-28">
      <motion.div style={{ y: heroY }}>
        <PageHeroMenu
          eyebrow="Media Collection"
          title={
            <>
              Stills and
              <br />
              moving image
            </>
          }
          intro="EFAB’s media archive moves between still imagery and film, using calm spacing and modular panels to hold each story."
          items={[
            { label: 'Media', current: true, to: '/media' },
            { label: 'Photos', to: { pathname: '/', hash: '#gallery' } },
            { label: 'Videos', to: '/media/videos' },
          ]}
          align="center"
          mediaImage={galleryImages[0]}
          mediaAlt="EFAB media hero"
          mediaOverlayOpacity={0.4}
        />
      </motion.div>

      <section className="container mx-auto px-6 pt-6">
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.38em] text-black/42">Photos</div>
          <Link
            to={{ pathname: '/', hash: '#gallery' }}
            className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/56 transition-opacity hover:text-black"
          >
            Open Home Gallery
          </Link>
        </div>

        <motion.div style={{ y: photosY }} className="grid grid-cols-1 gap-4 pt-10 md:grid-cols-3">
          {galleryImages.slice(0, 3).map((image, index) => (
            <motion.article
              key={`${image}-${index}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.72, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden bg-white"
            >
              <div className="absolute right-4 top-4 z-10">
                <MediaBadge>Archive</MediaBadge>
              </div>
              <div className="aspect-[0.86] overflow-hidden bg-black/5">
                <img
                  src={image}
                  alt={`EFAB media gallery ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="container mx-auto px-6 pt-16 md:pt-20">
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.38em] text-black/42">Videos</div>
          <Link
            to="/media/videos"
            className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/56 transition-opacity hover:text-black"
          >
            View Video Library
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-10 lg:grid-cols-[1.32fr_0.68fr]">
          <motion.article
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.76, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden bg-white"
          >
            <div className="absolute right-4 top-4 z-10">
              <MediaBadge>Featured</MediaBadge>
            </div>
            <div className="aspect-[1.34] overflow-hidden bg-black">
              <iframe
                className="h-full w-full"
                src={mediaVideos.featured.embedUrl}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={mediaVideos.featured.title}
              />
            </div>
          </motion.article>

          <div className="grid grid-cols-1 gap-4">
            {mediaVideos.library.slice(0, 2).map((video, index) => (
              <motion.article
                key={video.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.72, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-between border border-black/10 bg-white/60 p-6"
              >
                <MediaBadge>Film</MediaBadge>
                <div className="pt-20">
                  <h2 className="font-sans text-3xl leading-[0.96] tracking-[-0.045em] text-black">{video.title}</h2>
                  <p className="mt-4 font-sans text-base leading-relaxed text-black/62">
                    Project storytelling through development, design, and delivery.
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
