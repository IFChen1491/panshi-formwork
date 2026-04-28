import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Leaf, Clock } from 'lucide-react';

const advantages = [
  {
    id: 'efficiency',
    icon: Clock,
    title: '效率革新',
    subtitle: 'Efficiency',
    headline: '15% 工期縮短',
    description:
      '模組化預製設計，現場僅需拼裝。搭配 AI 排程系統，最大化人力與設備利用率。',
    stats: [
      { value: '15%', label: '工期縮短' },
      { value: '3x', label: '組裝速度' },
      { value: '24h', label: '即時調度' },
    ],
    image: '/images/efficiency.jpg',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'cost',
    icon: TrendingUp,
    title: '成本優化',
    subtitle: 'Cost Optimization',
    headline: '20% 成本節省',
    description:
      '精準材料預測、高重複利用率、減少現場浪費。數據驅動的成本控制，讓預算不再失控。',
    stats: [
      { value: '20%', label: '成本降低' },
      { value: '200+', label: '重複使用' },
      { value: '\u00b15%', label: '預算精準度' },
    ],
    image: '/images/cost-saving.jpg',
    color: 'lime',
    gradient: 'from-panshi-lime to-green-400',
  },
  {
    id: 'esg',
    icon: Leaf,
    title: 'ESG 永續',
    subtitle: 'Sustainability',
    headline: '60% 減廢減碳',
    description:
      '循環經濟設計、碳足跡追蹤、綠色認證。不只是合規，更是企業永續競爭力。',
    stats: [
      { value: '60%', label: '廢棄物減少' },
      { value: '40%', label: '碳排放降低' },
      { value: '100%', label: '可回收材質' },
    ],
    image: '/images/esg-nature.jpg',
    color: 'green',
    gradient: 'from-green-500 to-emerald-400',
  },
];

export default function AdvantagesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('efficiency');

  const activeAdvantage = advantages.find((a) => a.id === activeTab) || advantages[0];

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
      className="relative py-24 lg:py-32 bg-panshi-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-panshi-lime/5 to-transparent rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-panshi-lime rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">三大核心優勢</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            效率 · 成本 · 永續
          </h2>
          <p className="text-lg text-panshi-light max-w-2xl mx-auto">
            磐石系統模板同時實現三大目標，不再是權衡取捨，而是全面升級。
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {advantages.map((advantage) => (
            <button
              key={advantage.id}
              onClick={() => setActiveTab(advantage.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === advantage.id
                  ? 'bg-white text-panshi-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <advantage.icon
                className={`w-5 h-5 ${
                  activeTab === advantage.id ? 'text-panshi-black' : 'text-panshi-lime'
                }`}
              />
              <span className="font-medium">{advantage.title}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-4">
                <span className="text-xs text-panshi-light uppercase tracking-wider">
                  {activeAdvantage.subtitle}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                {activeAdvantage.headline}
              </h3>
              <p className="text-lg text-panshi-light mb-8 leading-relaxed">
                {activeAdvantage.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {activeAdvantage.stats.map((stat) => (
                  <div key={stat.label}>
                    <div
                      className={`text-3xl md:text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r ${activeAdvantage.gradient} mb-1`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-panshi-light">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual with Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Main Card with Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-panshi-dark to-panshi-black border border-white/10 shadow-structural">
                  <img
                    src={activeAdvantage.image}
                    alt={activeAdvantage.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${activeAdvantage.gradient} opacity-30`}
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 left-6 glass-dark rounded-lg px-4 py-2">
                    <span className="text-sm text-white font-medium">
                      {activeAdvantage.title}
                    </span>
                  </div>
                  <div className="absolute bottom-6 right-6 glass-dark rounded-lg px-4 py-2">
                    <span className="text-2xl font-display font-bold text-panshi-lime">
                      {activeAdvantage.stats[0].value}
                    </span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-panshi-lime/30 rounded-xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-panshi-dark rounded-xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
