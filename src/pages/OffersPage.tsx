import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeroMenu from '../components/PageHeroMenu';
import { galleryImages } from '../data/projects';
import { offerCards } from '../data/siteContent';

export default function OffersPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 420], [0, -22]);

  return (
    <div className="relative z-10 min-h-screen bg-cream pb-32 pt-28">
      <motion.div style={{ y: heroY }}>
        <PageHeroMenu
          eyebrow="News / Offers"
          title={
            <>
              Offers as a
              <br />
              quiet archive
            </>
          }
          intro="This page stays editorial rather than promotional, giving each offer its own measured block and breathing room."
          items={[
            { label: 'News', to: '/news' },
            { label: 'Offers', current: true },
          ]}
          align="left"
          mediaImage={galleryImages[3]}
          mediaAlt="EFAB offers hero"
          mediaOverlayOpacity={0.46}
        />
      </motion.div>

      <section className="container mx-auto px-6 pt-8">
        <div className="space-y-px border-y border-black/10">
          {offerCards.map((offer, index) => (
            <motion.article
              key={offer.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.76, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-8 border-b border-black/10 py-12 md:grid-cols-[0.16fr_0.58fr_0.26fr] md:items-start"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/36">0{index + 1}</div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/40">Offer</div>
                <h2 className="mt-6 font-sans text-[clamp(2.6rem,4.8vw,5rem)] leading-[0.94] tracking-[-0.05em] text-black">
                  {offer.title}
                </h2>
                <p className="mt-5 max-w-[35rem] font-sans text-lg leading-relaxed text-black/63 md:text-[1.22rem]">
                  {offer.description}
                </p>
              </div>

              <div className="border-t border-black/10 pt-5 md:border-t-0 md:pt-0 md:text-right">
                <Link
                  to="/contact"
                  className="font-mono text-[11px] uppercase tracking-[0.28em] text-black/58 transition-opacity hover:text-black"
                >
                  Contact Us
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="border border-black/10 bg-white/35 p-8 md:p-10"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-black/36">Need Details?</div>
          <h2 className="mt-7 max-w-[11ch] font-sans text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] tracking-[-0.055em] text-black">
            Reach out for
            <br />
            current terms
          </h2>
          <p className="mt-6 max-w-[36rem] font-sans text-lg leading-relaxed text-black/62 md:text-[1.25rem]">
            EFAB’s offer path is strongest when it funnels into an actual conversation, so this page ends with a direct contact step instead of more filler.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center border border-black px-7 py-4 font-mono text-[11px] uppercase tracking-[0.32em] text-black transition-colors hover:bg-black hover:text-white"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
