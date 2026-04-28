import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Clock, DollarSign, Users, XCircle } from 'lucide-react';

const painPoints = [
  {
    icon: Clock,
    title: '工期延誤',
    description: '傳統模板組裝耗時，人力調度困難，平均延誤 20-30%',
    stat: '30%',
    statLabel: '工期損失',
  },
  {
    icon: DollarSign,
    title: '成本失控',
    description: '材料浪費嚴重，重複利用率低，隱藏成本難以追蹤',
    stat: '25%',
    statLabel: '成本超支',
  },
  {
    icon: Users,
    title: '人力短缺',
    description: '熟練模板工難覓，年輕世代不願投入傳統營建',
    stat: '40%',
    statLabel: '人力缺口',
  },
  {
    icon: AlertTriangle,
    title: '安全風險',
    description: '人為失誤導致安全事故，品質難以標準化管控',
    stat: '15x',
    statLabel: '事故風險',
  },
];

export default function PainPointsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-panshi-surface overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
            <XCircle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-red-600">
              傳統模板的困境
            </span>
          </div>
          <h2 className="section-title mb-6">
            為什麼傳統模板
            <span className="text-red-500">正在失敗</span>
          </h2>
          <p className="section-subtitle mx-auto">
            營建業面臨數十年來最大的轉型挑戰。傳統模板系統已無法滿足
            現代建築對效率、品質與永續的要求。
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-structural transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors duration-300">
                <point.icon className="w-7 h-7 text-red-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-panshi-black mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-panshi-medium leading-relaxed mb-5">
                {point.description}
              </p>

              {/* Stat */}
              <div className="pt-5 border-t border-panshi-cement">
                <div className="text-3xl font-display font-bold text-red-500 mb-1">
                  {point.stat}
                </div>
                <div className="text-xs text-panshi-light">{point.statLabel}</div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-200 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-panshi-medium mb-4">
            是時候改變了。磐石系統模板提供全新解決方案。
          </p>
          <a
            href="#solution"
            className="inline-flex items-center gap-2 text-panshi-black font-medium hover:text-panshi-lime transition-colors duration-300"
          >
            了解我們的解決方案
            <span className="w-6 h-6 rounded-full bg-panshi-lime flex items-center justify-center">
              <svg
                className="w-3 h-3 text-panshi-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
