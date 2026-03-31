import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import PageHeroMenu from '../../components/PageHeroMenu';
import { ABOUT_HERO_IMAGE, faqEntries, getAboutHeroItems } from '../../data/aboutContent';

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="relative z-10 min-h-screen bg-cream pb-32 pt-28">
      <PageHeroMenu
        eyebrow="Support"
        title="FAQ"
        intro="Practical answers around enquiry, payment plans, required documents, estate management, and change of ownership."
        items={getAboutHeroItems('faq')}
        align="left"
        mediaImage={ABOUT_HERO_IMAGE}
        mediaAlt="EFAB FAQ hero"
        mediaOverlayOpacity={0.46}
      />

      <section className="container mx-auto px-6 pt-16 md:pt-20">
        <div className="border-t border-black/10 pt-4">
          {faqEntries.map((faq, index) => {
            const isOpen = openIdx === index;
            const isList = faq.answer.length > 1;

            return (
              <div key={faq.question} className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left md:py-8"
                >
                  <span className="font-sans text-[1.35rem] uppercase leading-[1.02] tracking-[-0.04em] text-black md:text-[2rem]">
                    {faq.question}
                  </span>
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-black/15 text-black transition-colors hover:bg-black hover:text-white">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-8 md:pb-10">
                    {isList ? (
                      <ul className="max-w-[52rem] space-y-3 pl-5">
                        {faq.answer.map((item) => (
                          <li key={item} className="font-sans text-lg leading-relaxed text-black/66 md:text-[1.12rem]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="max-w-[52rem] font-sans text-lg leading-relaxed text-black/66 md:text-[1.12rem]">
                        {faq.answer[0]}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
