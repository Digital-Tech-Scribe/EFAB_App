import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeroMenu from '../components/PageHeroMenu';
import { galleryImages } from '../data/projects';
import { offerCards } from '../data/siteContent';

export default function NewsPage() {
  return (
    <div className="relative z-10 min-h-screen bg-cream pb-32 pt-28">
      <PageHeroMenu
        eyebrow="News"
        title={
          <>
            A quieter
            <br />
            update feed
          </>
        }
        intro="News stays lean and deliberate here, with the live source routing most activity through the offers stream rather than a crowded newsroom."
        items={[
          { label: 'News', current: true },
          { label: 'Offers', targetId: 'offers' },
        ]}
        align="left"
        mediaImage={galleryImages[3]}
        mediaAlt="EFAB news hero"
        mediaOverlayOpacity={0.46}
      />

      <section id="offers" className="container mx-auto px-6 pt-6">
        <div className="border-b border-black/10 pb-4 font-mono text-[10px] uppercase tracking-[0.38em] text-black/42">
          Offers
        </div>

        <div className="space-y-px pt-10">
          {offerCards.map((offer, index) => (
            <motion.article
              key={offer.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.72, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-1 gap-6 border-t border-black/10 py-12 md:grid-cols-[0.22fr_0.58fr_0.2fr] md:items-end"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/36">0{index + 1}</div>
              <div>
                <h2 className="font-sans text-[clamp(2.5rem,4.6vw,4.7rem)] leading-[0.94] tracking-[-0.05em] text-black">
                  {offer.title}
                </h2>
                <p className="mt-4 max-w-[34rem] font-sans text-lg leading-relaxed text-black/64 md:text-[1.22rem]">
                  {offer.description}
                </p>
              </div>
              <div className="md:text-right">
                <Link
                  to="/news/offers"
                  className="font-mono text-[11px] uppercase tracking-[0.28em] text-black/54 transition-all group-hover:text-black"
                >
                  View Offer
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
