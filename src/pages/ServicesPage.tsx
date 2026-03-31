import { motion, useScroll, useTransform } from 'framer-motion';
import { galleryImages } from '../data/projects';
import { projectManagementStages, serviceBlocks, serviceStats } from '../data/siteContent';
import PageHeroMenu from '../components/PageHeroMenu';

export default function ServicesPage() {
  const { scrollY } = useScroll();
  const heroCopyY = useTransform(scrollY, [0, 500], [0, -28]);
  const artworkY = useTransform(scrollY, [0, 700], [0, 92]);

  return (
    <div className="relative z-10 min-h-screen bg-cream pb-32">
      <motion.div style={{ y: heroCopyY }}>
        <PageHeroMenu
          eyebrow="Our Services"
          title={
            <>
              Where vision meets
              <br />
              execution
            </>
          }
          intro="EFAB’s service model blends planning, engineering, quantity surveying, and delivery management into one disciplined real estate pipeline."
          align="center"
          mediaImage={galleryImages[8]}
          mediaAlt="EFAB services hero"
          mediaOverlayOpacity={0.38}
        />
      </motion.div>

      <motion.div style={{ y: artworkY }}>
        <section className="container mx-auto px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 md:grid-cols-3">
          {serviceStats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="bg-cream px-8 py-8 md:px-10"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/40">{stat.label}</div>
              <div className="mt-4 font-sans text-5xl tracking-[-0.06em] text-black md:text-6xl">{stat.value}</div>
            </motion.div>
          ))}
        </div>
        </section>
      </motion.div>

      <section className="container mx-auto px-6 pt-16 md:pt-20">
        <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.38em] text-black/36">Capabilities</div>
        <div className="space-y-px border-y border-black/10">
          {serviceBlocks.map((block, index) => (
            <motion.article
              key={block.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.72, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-8 border-b border-black/10 py-10 md:grid-cols-[0.32fr_0.68fr] md:py-14"
            >
              <div className="pr-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/34">
                  0{index + 1} / {block.title}
                </div>
              </div>

              <div>
                <h2 className="font-sans text-3xl leading-[0.94] tracking-[-0.045em] text-black md:text-[4rem]">
                  {block.title}
                </h2>
                <p className="mt-6 max-w-[42rem] font-sans text-lg leading-relaxed text-black/64 md:text-[1.35rem]">
                  {block.description}
                </p>
                <div className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-2">
                  {block.bullets.map((bullet) => (
                    <div key={bullet} className="border-t border-black/10 pt-3 font-sans text-base leading-relaxed text-black/72 md:text-lg">
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="border border-black/10 bg-white/35 p-8 md:p-10"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-black/36">Project Management</div>
          <h2 className="mt-7 max-w-[12ch] font-sans text-[clamp(3rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.055em] text-black">
            Managed in
            <br />
            five stages
          </h2>
          <p className="mt-6 max-w-[46rem] font-sans text-lg leading-relaxed text-black/62 md:text-[1.35rem]">
            EFAB recognizes the need for projects to be managed, planned, and carefully monitored from the earliest brief through completion and maintenance planning.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-px border border-black/10 bg-black/10 lg:grid-cols-5">
            {projectManagementStages.map((stage, index) => (
              <div key={stage.title} className="bg-cream px-6 py-7 md:px-7 md:py-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/32">0{index + 1}</div>
                <h3 className="mt-4 font-sans text-2xl tracking-[-0.04em] text-black">{stage.title}</h3>
                <p className="mt-4 font-sans text-base leading-relaxed text-black/64">{stage.summary}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
