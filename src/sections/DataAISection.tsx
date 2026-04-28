import { useEffect, useRef, useState } from 'react';
import { Brain, Database, LineChart, Wifi } from 'lucide-react';

const techStack = [
  {
    icon: Wifi,
    title: 'IoT 感測網路',
    description: '千級感測器即時採集壓力、位移、溫濕度數據',
  },
  {
    icon: Database,
    title: '雲端數據湖',
    description: 'PB 級數據存儲，支持毫秒級查詢與分析',
  },
  {
    icon: Brain,
    title: 'AI 預測引擎',
    description: '深度學習模型預測風險、優化排程、自動決策',
  },
  {
    icon: LineChart,
    title: '可視化儀表板',
    description: '即時掌握全專案狀態，數據驅動管理決策',
  },
];

const dataMetrics = [
  { label: '每日數據點', value: '50M+' },
  { label: '預測準確率', value: '99.2%' },
  { label: '響應時間', value: '<50ms' },
  { label: '系統可用性', value: '99.99%' },
];

export default function DataAISection() {
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
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-panshi-surface to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-panshi-lime/10 rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-panshi-blue/10 border border-panshi-blue/30 rounded-full mb-6">
            <Brain className="w-4 h-4 text-panshi-blue" />
            <span className="text-sm font-medium text-panshi-black">
              數據與人工智慧
            </span>
          </div>
          <h2 className="section-title mb-6">
            未來的建築
            <span className="text-panshi-blue">由數據驅動</span>
          </h2>
          <p className="section-subtitle mx-auto">
            每一組模板都是數據資產。磐石 SaaS 平台將施工現場轉化為
            即時數據流，以 AI 預測風險、優化決策。
          </p>
        </div>

        {/* Dashboard Preview */}
        <div
          className={`relative mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative bg-panshi-black rounded-2xl overflow-hidden shadow-structural">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-sm text-panshi-light">
                PanShi Smart Dashboard v2.0
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-green-500">LIVE</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Chart 1 */}
              <div className="bg-panshi-dark rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-panshi-light">施工進度</span>
                  <span className="text-xs text-panshi-lime">+12%</span>
                </div>
                <div className="h-24 flex items-end gap-1">
                  {[40, 55, 45, 70, 65, 80, 75, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-panshi-lime/30 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Chart 2 */}
              <div className="bg-panshi-dark rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-panshi-light">設備狀態</span>
                  <span className="text-xs text-panshi-blue">98.5%</span>
                </div>
                <div className="relative h-24 flex items-center justify-center">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      fill="none"
                      stroke="#333"
                      strokeWidth="8"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="8"
                      strokeDasharray="220"
                      strokeDashoffset="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-lg font-bold text-white">
                    98.5%
                  </span>
                </div>
              </div>

              {/* Chart 3 */}
              <div className="bg-panshi-dark rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-panshi-light">碳排放追蹤</span>
                  <span className="text-xs text-green-400">-32%</span>
                </div>
                <div className="h-24 relative">
                  <svg className="w-full h-full">
                    <path
                      d="M0,80 Q50,60 100,70 T200,40"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,80 Q50,60 100,70 T200,40 L200,100 L0,100 Z"
                      fill="url(#gradient)"
                      opacity="0.3"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Real-time Data Ticker */}
            <div className="px-6 py-3 border-t border-white/10 bg-panshi-dark/50">
              <div className="flex items-center gap-8 overflow-hidden">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="w-2 h-2 bg-panshi-lime rounded-full animate-pulse" />
                  <span className="text-xs text-panshi-light">
                    即時數據流連接中...
                  </span>
                </div>
                <div className="flex items-center gap-6 text-xs text-panshi-medium">
                  <span>模板組件: 2,847 組</span>
                  <span>活動感測器: 156 個</span>
                  <span>數據點/秒: 1,247</span>
                  <span>AI 預測: 正常</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techStack.map((tech, index) => (
            <div
              key={tech.title}
              className={`group relative bg-panshi-surface rounded-2xl p-6 hover:bg-panshi-black transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-14 h-14 bg-panshi-blue/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-panshi-blue transition-colors duration-300">
                <tech.icon className="w-7 h-7 text-panshi-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-display font-semibold text-panshi-black mb-2 group-hover:text-white transition-colors duration-300">
                {tech.title}
              </h3>
              <p className="text-sm text-panshi-medium group-hover:text-panshi-light transition-colors duration-300">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {dataMetrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-panshi-black mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-panshi-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
