import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CONTACT_INFO } from '../constants/contactInfo';

export default function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="contact" className="relative z-10 py-32 px-6 bg-grey">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ease-\[cubic-bezier\(0\.16\,1\,0\.3\,1\)\] ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold tracking-tighter mb-6 text-white uppercase"
          >
            Let's Build Your
            <br />
            <span className="text-white/40">
              Dream Home
            </span>
          </h2>
           <p
             className="text-xl font-sans font-light max-w-2xl mx-auto text-white/60 leading-relaxed uppercase tracking-tight"
           >
             Ready to find your perfect property? Our team is here to guide you
             every step of the way.
           </p>
        </div>
        
        {/* Contact grid */}
        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 ease-\[cubic-bezier\(0\.16\,1\,0\.3\,1\)\] delay-\[150ms\] ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          
          {/* Contact info panel */}
          <div
            className="relative overflow-hidden rounded-2xl p-8 md:p-10 bg-white/[0.03] border border-white/5 backdrop-blur-3xl shadow-2xl"
          >
            {/* Specular highlight */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent"
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-sans font-semibold text-white mb-8 tracking-tight uppercase">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-6 group transition-all duration-300">
                  
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 bg-white/5 border border-white/10"
                  >
                    <Phone className="w-6 h-6 text-taupe" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-widest uppercase mb-1 text-white/30">
                      Phone
                    </p>
                    <p className="font-sans text-xl text-white group-hover:text-taupe transition-colors tracking-tighter">
                      {CONTACT_INFO.phone}
                    </p>
                  </div>
                </a>
                
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-6 group transition-all duration-300">
                  
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 bg-white/5 border border-white/10"
                  >
                    <Mail className="w-6 h-6 text-taupe" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-widest uppercase mb-1 text-white/30">
                      Email
                    </p>
                    <p className="font-sans text-xl text-white group-hover:text-taupe transition-colors tracking-tighter">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </a>
                
                <div className="flex items-center gap-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10"
                  >
                    <MapPin className="w-6 h-6 text-taupe" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono tracking-widest uppercase mb-1 text-white/30">
                      Address
                    </p>
                    <p className="font-sans text-xl text-white tracking-tighter">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Office hours */}
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-[10px] font-mono tracking-widest uppercase mb-4 text-white/30">
                  Office Hours
                </p>
                <p className="font-sans text-white uppercase tracking-tight">
                  Monday – Friday: 8:00 AM – 5:00 PM
                </p>
                <p className="font-sans text-white/40 uppercase tracking-tight mt-1">
                  Saturday: 9:00 AM – 2:00 PM
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA panel */}
          <div
            className="relative overflow-hidden rounded-2xl p-8 md:p-10 flex flex-col justify-between bg-white/[0.03] border border-white/5 backdrop-blur-3xl shadow-2xl"
          >
            {/* Specular highlight */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent"
            />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6 tracking-tighter uppercase">
                Start Your <br /> Property <br /> Journey
              </h3>
                 <p
                   className="font-sans font-light leading-relaxed mb-12 text-white/60 text-xl md:text-2xl uppercase tracking-tight"
                 >
                   Whether you're looking to buy your first home, invest in real
                   estate, or need professional property management, EFAB
                   Properties is your trusted partner.
                 </p>
              
              <div className="flex flex-col gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-white text-black font-sans font-bold text-sm tracking-widest uppercase transition-all duration-500 hover:bg-taupe"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
