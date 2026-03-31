import PageHeroMenu from '../components/PageHeroMenu';
import {
  ABOUT_HERO_IMAGE,
  ABOUT_MISSION_IMAGE,
  aboutMission,
  aboutNarrative,
  getAboutHeroItems,
} from '../data/aboutContent';

export default function AboutPage() {
  return (
    <div className="relative z-10 min-h-screen bg-cream pb-32 pt-28">
      <PageHeroMenu
        eyebrow="About Us"
        title="About Us"
        intro={aboutNarrative[0]}
        items={getAboutHeroItems('about')}
        align="left"
        mediaImage={ABOUT_HERO_IMAGE}
        mediaAlt="EFAB about hero"
        mediaOverlayOpacity={0.44}
      />

      <section className="container mx-auto px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-16 border-t border-black/10 pt-8 md:grid-cols-[0.54fr_0.46fr] md:gap-20">
          <div className="space-y-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/42">01. About EFAB</div>
            <h2 className="max-w-[11ch] font-sans text-[clamp(3rem,7vw,6.25rem)] uppercase leading-[0.9] tracking-[-0.055em] text-black">
              A family,
              <br />
              a roof.
            </h2>

            <div className="max-w-[42rem] space-y-6">
              {aboutNarrative.slice(0, 2).map((paragraph) => (
                <p key={paragraph} className="font-sans text-lg leading-relaxed text-black/66 md:text-[1.28rem]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden border border-black/10">
              <img src={ABOUT_MISSION_IMAGE} alt="EFAB mission" className="h-[24rem] w-full object-cover md:h-[31rem]" />
            </div>

            <div className="border border-black/10 bg-white/35 p-8 md:p-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/42">02. Our Mission</div>
              <p className="mt-6 font-sans text-xl leading-relaxed tracking-[-0.02em] text-black/76 md:text-[1.55rem]">
                {aboutMission}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-10 border-t border-black/10 pt-8 md:grid-cols-[0.25fr_0.75fr]">
          <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/42">03. Community Impact</div>
          <div className="grid grid-cols-1 gap-px bg-black/10 md:grid-cols-2">
            {aboutNarrative.slice(2).map((paragraph, index) => (
              <div key={paragraph} className="bg-cream p-8 md:p-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/34">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="mt-6 font-sans text-lg leading-relaxed text-black/68 md:text-[1.15rem]">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
