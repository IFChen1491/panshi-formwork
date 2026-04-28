import { useEffect, useRef, useState } from 'react';
import { Check, X, Cpu, BarChart3, Shield, Zap } from 'lucide-react';

const comparisonData = [
  {
    feature: '組裝效率',
    traditional: '人工測量、切割、組裝',
    panshi: '模組化預製、快速拼裝',
    advantage: '50% 更快',
  },
  {
    feature: '品質管控',
    traditional: '經驗判斷、人為誤差',
    panshi: 'AI 視覺檢測、自動校正',
    advantage: '99.7% 精準度',
  },
  {
    feature: '材料追蹤',
    traditional: '紙本記錄、難以追溯',
    panshi: 'RFID 全生命周期追蹤',
    advantage: '100% 可視化',
  },
  {
    feature: '成本預測',
    traditional: '粗略估算、經常超支',
    panshi: '大數據分析、精準預測',
    advantage: '±5% 誤差率',
  },
  {
    feature: '永續表現',
    traditional: '高浪費、難回收',
    panshi: '循環設計、碳足跡追蹤',
    advantage: '60% 減廢',
  },
];

const coreTech = [
  {
    icon: Cpu,
    title: 'AIoT 智能感知',
    description: '嵌入式感測器即時監測模板狀態，預警潛在風險',
  },
  {
    icon: BarChart3,
    title: '數據驅動決策',
    description: '雲端平台彙整施工數據，優化每一次專案執行',
  },
  {
    icon: Shield,
    title: '品質標準化',
    description: 'SOP 數位化，確保每個工地達到相同高標準',
  },
  {
    icon: Zap,
    title: '即時協作',
    description: '建商、模主、監造三方即時同步，資訊零時差',
  },
];

export default function SolutionCompareSection() {
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
      id="solution"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-panshi-surface/50 -skew-x-12 translate-x-1/4" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div
          className={`max-w-3xl mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-panshi-lime/10 border border-panshi-lime/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-panshi-lime" />
            <span className="text-sm font-medium text-panshi-black">
              系統化解決方案
            </span>
          </div>
          <h2 className="section-title mb-6">
            磐石如何
            <span className="text-panshi-lime">重新定義</span>
            模板工程
          </h2>
          <p className="section-subtitle">
            我們不是提供更好的材料，而是提供完整的系統——
            從設計、製造、施工到數據分析的全流程革新。
          </p>
        </div>

        {/* Comparison Table */}
        <div
          className={`mb-20 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-structural overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-6 bg-panshi-black text-white">
              <div className="col-span-3 font-display font-semibold">比較項目</div>
              <div className="col-span-4 font-display font-semibold text-panshi-light">
                傳統模板
              </div>
              <div className="col-span-5 font-display font-semibold text-panshi-lime">
                磐石系統模板
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-panshi-cement">
              {comparisonData.map((item, index) => (
                <div
                  key={item.feature}
                  className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-panshi-surface/50 transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="col-span-3 font-medium text-panshi-black">
                    {item.feature}
                  </div>
                  <div className="col-span-4">
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-panshi-medium">
                        {item.traditional}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-5">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-panshi-lime flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm text-panshi-black font-medium">
                          {item.panshi}
                        </span>
                        <span className="inline-block ml-2 px-2 py-0.5 bg-panshi-lime/20 text-panshi-black text-xs font-semibold rounded">
                          {item.advantage}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Technology */}
        <div>
          <h3
            className={`text-2xl font-display font-bold text-panshi-black mb-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            四大核心技術
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTech.map((tech, index) => (
              <div
                key={tech.title}
                className={`group relative bg-panshi-surface rounded-2xl p-6 hover:bg-panshi-black transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="w-14 h-14 bg-panshi-lime/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-panshi-lime transition-colors duration-300">
                  <tech.icon className="w-7 h-7 text-panshi-lime group-hover:text-panshi-black transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-display font-semibold text-panshi-black mb-2 group-hover:text-white transition-colors duration-300">
                  {tech.title}
                </h4>
                <p className="text-sm text-panshi-medium group-hover:text-panshi-light transition-colors duration-300">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
