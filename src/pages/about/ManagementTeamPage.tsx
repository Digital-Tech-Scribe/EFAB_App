import PageHeroMenu from '../../components/PageHeroMenu';
import { getAboutHeroItems, TEAM_HERO_IMAGE, teamProfiles } from '../../data/aboutContent';

export default function ManagementTeamPage() {
  const [founder, ...leaders] = teamProfiles;

  return (
    <div className="relative z-10 min-h-screen bg-cream pb-32 pt-28">
      <PageHeroMenu
        eyebrow="Leadership"
        title="Team"
        intro={founder.details[0]}
        items={getAboutHeroItems('team')}
        align="left"
        mediaImage={TEAM_HERO_IMAGE}
        mediaAlt="EFAB management team hero"
        mediaOverlayOpacity={0.48}
      />

      <section className="container mx-auto px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-12 border-t border-black/10 pt-8 md:grid-cols-[0.48fr_0.52fr] md:gap-16">
          <div className="overflow-hidden border border-black/10 bg-white/35">
            {founder.image && (
              <img src={founder.image} alt={founder.name} className="h-[24rem] w-full object-cover md:h-[38rem]" />
            )}
          </div>

          <div className="flex flex-col justify-between gap-8 border border-black/10 bg-white/35 p-8 md:p-10">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/42">{founder.role}</div>
              <h2 className="mt-5 font-sans text-[clamp(2.8rem,6vw,5.5rem)] uppercase leading-[0.92] tracking-[-0.05em] text-black">
                {founder.name}
              </h2>
            </div>

            <div className="space-y-5">
              {founder.details.map((detail) => (
                <p key={detail} className="font-sans text-lg leading-relaxed text-black/68 md:text-[1.16rem]">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-px bg-black/10 md:grid-cols-2 xl:grid-cols-3">
          {leaders.map((member, index) => (
            <article key={member.name} className="bg-cream p-8 md:p-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/34">
                {String(index + 2).padStart(2, '0')}
              </div>
              <div className="mt-5 border-b border-black/10 pb-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/44">{member.role}</div>
                <h3 className="mt-4 font-sans text-[1.9rem] uppercase leading-[0.96] tracking-[-0.045em] text-black md:text-[2.25rem]">
                  {member.name}
                </h3>
              </div>
              <div className="mt-6 space-y-4">
                {member.details.map((detail) => (
                  <p key={detail} className="font-sans text-[1.02rem] leading-relaxed text-black/64">
                    {detail}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
