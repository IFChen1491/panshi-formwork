import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, HardHat, FileText, Sparkles } from 'lucide-react';

const ctaOptions = [
  {
    icon: Building2,
    title: '建商合作',
    description: '了解磐石系統如何為您的專案創造價值',
    cta: '洽詢合作',
    link: '/contact',
    type: 'primary',
  },
  {
    icon: HardHat,
    title: '加入模主',
    description: '成為認證模主，開啟穩定收入新篇章',
    cta: '立即加入',
    link: '/platform',
    type: 'secondary',
  },
  {
    icon: FileText,
    title: '下載白皮書',
    description: '深入了解磐石系統的技術架構與商業模式',
    cta: '免費下載',
    link: '/investors',
    type: 'outline',
  },
];

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-panshi-surface to-white" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-panshi-lime/10 rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-panshi-lime/10 border border-panshi-lime/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-panshi-lime" />
            <span className="text-sm font-medium text-panshi-black">
              開始您的轉型之旅
            </span>
          </div>
          <h2 className="section-title mb-6">
            準備好<span className="text-panshi-lime">改變</span>了嗎？
          </h2>
          <p className="section-subtitle mx-auto">
            無論您是建商尋求效率提升，或是模板師傅追求更好發展，
            磐石系統都為您準備了最佳方案。
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ctaOptions.map((option, index) => (
            <div
              key={option.title}
              className={`group relative transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <Link
                to={option.link}
                className={`block h-full rounded-2xl p-8 transition-all duration-300 ${
                  option.type === 'primary'
                    ? 'bg-panshi-black text-white hover:shadow-structural'
                    : option.type === 'secondary'
                    ? 'bg-panshi-lime text-panshi-black hover:shadow-glow'
                    : 'bg-white border-2 border-panshi-cement text-panshi-black hover:border-panshi-lime'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                    option.type === 'primary'
                      ? 'bg-white/10'
                      : option.type === 'secondary'
                      ? 'bg-panshi-black/10'
                      : 'bg-panshi-surface'
                  }`}
                >
                  <option.icon
                    className={`w-8 h-8 ${
                      option.type === 'primary'
                        ? 'text-panshi-lime'
                        : option.type === 'secondary'
                        ? 'text-panshi-black'
                        : 'text-panshi-black'
                    }`}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`text-2xl font-display font-bold mb-3 ${
                    option.type === 'primary'
                      ? 'text-white'
                      : 'text-panshi-black'
                  }`}
                >
                  {option.title}
                </h3>
                <p
                  className={`text-sm mb-8 ${
                    option.type === 'primary'
                      ? 'text-panshi-light'
                      : 'text-panshi-medium'
                  }`}
                >
                  {option.description}
                </p>

                {/* CTA Button */}
                <div
                  className={`inline-flex items-center gap-2 font-medium ${
                    option.type === 'primary'
                      ? 'text-panshi-lime'
                      : 'text-panshi-black'
                  }`}
                >
                  {option.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-panshi-medium mb-4">
            還有其他問題？我們的團隊隨時為您服務
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="tel:+886038357308"
              className="flex items-center gap-2 text-panshi-black hover:text-panshi-lime transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              03-835-7308
            </a>
            <a
              href="mailto:adolph0306@gmail.com"
              className="flex items-center gap-2 text-panshi-black hover:text-panshi-lime transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              adolph0306@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
