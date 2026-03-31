import PageHeroMenu from '../components/PageHeroMenu';
import ContactSection from '../components/ContactSection';
import { CONTACT_HERO_IMAGE, contactDetails, getAboutHeroItems } from '../data/aboutContent';

export default function ContactPage() {
  return (
    <div className="relative z-10 min-h-screen bg-cream pt-28">
      <PageHeroMenu
        eyebrow="Contact"
        title="contact"
        intro="Reach the EFAB team directly for property enquiries, office visits, documentation support, and guided next steps."
        items={getAboutHeroItems('contact')}
        align="left"
        mediaImage={CONTACT_HERO_IMAGE}
        mediaAlt="EFAB contact hero"
        mediaOverlayOpacity={0.46}
      />

      <section className="container mx-auto px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-px bg-black/10 md:grid-cols-2 xl:grid-cols-4">
          <article className="bg-cream p-8 md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/42">Location</div>
            <p className="mt-6 font-sans text-[1.18rem] leading-relaxed text-black/70">{contactDetails.address}</p>
          </article>
          <article className="bg-cream p-8 md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/42">Call Us</div>
            <div className="mt-6 space-y-3">
              {contactDetails.phones.map((phone) => (
                <p key={phone} className="font-sans text-[1.4rem] leading-none tracking-[-0.04em] text-black">
                  {phone}
                </p>
              ))}
            </div>
          </article>
          <article className="bg-cream p-8 md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/42">Email</div>
            <p className="mt-6 font-sans text-[1.25rem] leading-relaxed tracking-[-0.03em] text-black">{contactDetails.email}</p>
          </article>
          <article className="bg-cream p-8 md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-black/42">Website</div>
            <p className="mt-6 font-sans text-[1.25rem] leading-relaxed tracking-[-0.03em] text-black">{contactDetails.website}</p>
            <p className="mt-6 font-sans text-base leading-relaxed text-black/58">{contactDetails.intro}</p>
          </article>
        </div>
      </section>

      <div className="pt-16">
        <ContactSection />
      </div>
    </div>
  );
}
