import PageHeroMenu from '../../components/PageHeroMenu';
import { CSR_HERO_IMAGE, csrFocusAreas, csrParagraphs, getAboutHeroItems } from '../../data/aboutContent';

export default function CSRPage() {
  return (
    <div className="relative z-10 min-h-screen bg-cream pb-32 pt-28">
      <PageHeroMenu
        eyebrow="Community"
        title="CSR"
        intro={csrParagraphs[0]}
        items={getAboutHeroItems('csr')}
        align="left"
        mediaImage={CSR_HERO_IMAGE}
        mediaAlt="EFAB CSR hero"
        mediaOverlayOpacity={0.46}
      />

      <section className="container mx-auto px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-16 border-t border-black/10 pt-8 md:grid-cols-[0.44fr_0.56fr] md:gap-20">
          <div className="space-y-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/42">01. CSR</div>
            <h2 className="max-w-[9ch] font-sans text-[clamp(3rem,7vw,6rem)] uppercase leading-[0.9] tracking-[-0.055em] text-black">
              Building
              <br />
              beyond
              <br />
              our sites.
            </h2>
          </div>

          <div className="space-y-6">
            {csrParagraphs.map((paragraph) => (
              <p key={paragraph} className="font-sans text-lg leading-relaxed text-black/68 md:text-[1.26rem]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-px bg-black/10 md:grid-cols-2 xl:grid-cols-4">
          {csrFocusAreas.map((item, index) => (
            <article key={item} className="bg-cream p-8 md:p-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/34">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="mt-6 font-sans text-[1.45rem] uppercase leading-[1.04] tracking-[-0.04em] text-black md:text-[1.7rem]">
                {item}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
