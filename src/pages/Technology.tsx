import { useState } from 'react';
import { Cpu, Wifi, Cloud, Database, Brain, Shield, Smartphone, BarChart3, Layers } from 'lucide-react';

const techCategories = [
  {
    id: 'iot',
    icon: Wifi,
    title: 'IoT 感測網路',
    description: '千級感測器即時採集模板壓力、位移、溫濕度等關鍵數據',
    features: [
      '無線傳輸，免佈線安裝',
      '電池壽命 3 年以上',
      'IP67 防水防塵等級',
      '毫秒級數據採集頻率',
    ],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: '雲端平台',
    description: '磐石 SaaS 平台提供全生命週期的模板管理與數據分析',
    features: [
      '即時監控儀表板',
      '專案進度追蹤',
      '模主績效管理',
      '自動報表生成',
    ],
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI 預測引擎',
    description: '深度學習模型預測風險、優化排程、自動決策建議',
    features: [
      '結構安全預警',
      '最佳拆模時間預測',
      '材料需求預測',
      '異常自動偵測',
    ],
  },
  {
    id: 'rfid',
    icon: Database,
    title: 'RFID 追蹤系統',
    description: '每組模板內建 RFID 晶片，實現全生命週期追蹤管理',
    features: [
      '唯一識別碼管理',
      '使用次數自動記錄',
      '維修歷史追蹤',
      '庫存即時盤點',
    ],
  },
];

const dashboardFeatures = [
  {
    icon: BarChart3,
    title: '即時數據視覺化',
    description: '直觀的圖表與儀表板，一眼掌握全專案狀態',
  },
  {
    icon: Smartphone,
    title: '行動 App',
    description: 'iOS/Android 雙平台支援，隨時隨地掌握現場',
  },
  {
    icon: Shield,
    title: '企業級安全',
    description: 'ISO 27001 認證，資料加密傳輸與儲存',
  },
  {
    icon: Layers,
    title: 'API 整合',
    description: '開放 API 介面，輕鬆整合現有系統',
  },
];

export default function Technology() {
  const [activeTab, setActiveTab] = useState('iot');
  const activeTech = techCategories.find((t) => t.id === activeTab) || techCategories[0];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-panshi-black overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <Cpu className="w-4 h-4 text-panshi-lime" />
              <span className="text-sm font-medium text-white">技術與系統</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              <span className="text-panshi-lime">AIoT</span> 驅動的
              <br />
              智慧營建
            </h1>
            <p className="text-xl text-panshi-light max-w-2xl leading-relaxed">
              磐石系統模板整合物聯網、雲端運算與人工智慧，
              將傳統模板工程轉型為數據驅動的智慧系統。
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">技術架構</h2>
            <p className="section-subtitle mx-auto">
              四大核心技術，打造完整的智慧模板生態系
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {techCategories.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(tech.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tech.id
                    ? 'bg-panshi-black text-white'
                    : 'bg-panshi-surface text-panshi-black hover:bg-panshi-cement'
                }`}
              >
                <tech.icon className="w-5 h-5" />
                <span className="font-medium">{tech.title}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-panshi-surface rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-panshi-lime/20 rounded-2xl flex items-center justify-center mb-6">
                  <activeTech.icon className="w-8 h-8 text-panshi-black" />
                </div>
                <h3 className="text-3xl font-display font-bold text-panshi-black mb-4">
                  {activeTech.title}
                </h3>
                <p className="text-lg text-panshi-medium mb-8">
                  {activeTech.description}
                </p>
                <ul className="space-y-3">
                  {activeTech.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-panshi-lime flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-panshi-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-panshi-black">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square bg-panshi-black rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <activeTech.icon className="w-32 h-32 text-panshi-lime/30" />
                  </div>
                  {/* Simulated Data Visualization */}
                  <div className="absolute inset-4">
                    {activeTab === 'iot' && (
                      <div className="grid grid-cols-3 gap-2">
                        {[...Array(9)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-panshi-lime/20 rounded-lg p-3 animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            <div className="text-xs text-panshi-lime mb-1">
                              Sensor {i + 1}
                            </div>
                            <div className="text-lg font-bold text-white">
                              {(Math.random() * 100).toFixed(1)}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {activeTab === 'cloud' && (
                      <div className="space-y-3">
                        <div className="bg-panshi-dark rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-panshi-light">系統狀態</span>
                            <span className="text-xs text-green-400">正常</span>
                          </div>
                          <div className="h-2 bg-panshi-gray rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-panshi-lime rounded-full" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-panshi-dark rounded-lg p-3">
                            <div className="text-xs text-panshi-light">專案數</div>
                            <div className="text-2xl font-bold text-white">24</div>
                          </div>
                          <div className="bg-panshi-dark rounded-lg p-3">
                            <div className="text-xs text-panshi-light">活躍模主</div>
                            <div className="text-2xl font-bold text-white">156</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 'ai' && (
                      <div className="space-y-3">
                        <div className="bg-panshi-dark rounded-lg p-4">
                          <div className="text-sm text-panshi-light mb-3">風險預測</div>
                          <div className="flex items-end gap-1 h-20">
                            {[30, 45, 35, 60, 40, 55, 35, 30].map((h, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-panshi-lime/30 rounded-t"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                          <div className="text-sm text-green-400">✓ 系統正常運作</div>
                          <div className="text-xs text-panshi-light mt-1">
                            無異常預測
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 'rfid' && (
                      <div className="grid grid-cols-2 gap-3">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="bg-panshi-dark rounded-lg p-3">
                            <div className="w-8 h-8 bg-panshi-lime/20 rounded mb-2" />
                            <div className="text-xs text-panshi-light">ID: {1000 + i}</div>
                            <div className="text-sm text-white">使用 {50 + i * 10} 次</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 lg:py-32 bg-panshi-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              磐石 SaaS 平台
            </h2>
            <p className="text-lg text-panshi-light max-w-2xl mx-auto">
              一站式管理平台，從專案規劃到完工驗收，全程數位化
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative bg-panshi-dark rounded-2xl overflow-hidden shadow-structural mb-12">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-sm text-panshi-light">
                PanShi Smart Dashboard
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-green-500">LIVE</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Chart 1 */}
              <div className="bg-panshi-black rounded-xl p-4">
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
              <div className="bg-panshi-black rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-panshi-light">設備狀態</span>
                  <span className="text-xs text-panshi-blue">98.5%</span>
                </div>
                <div className="relative h-24 flex items-center justify-center">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r="35" fill="none" stroke="#333" strokeWidth="8" />
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
                  <span className="absolute text-lg font-bold text-white">98.5%</span>
                </div>
              </div>

              {/* Chart 3 */}
              <div className="bg-panshi-black rounded-xl p-4">
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
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-panshi-dark rounded-xl p-6 hover:bg-panshi-gray transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-panshi-lime/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-panshi-lime" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-panshi-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">技術規格</h2>
            <p className="section-subtitle mx-auto">
              企業級架構，確保系統穩定與安全
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: '系統可用性', value: '99.99%' },
              { label: '數據響應時間', value: '< 50ms' },
              { label: '同時在線用戶', value: '10,000+' },
              { label: '數據備份', value: '即時異地' },
              { label: '安全認證', value: 'ISO 27001' },
              { label: 'API 可用率', value: '99.9%' },
            ].map((spec) => (
              <div
                key={spec.label}
                className="bg-panshi-surface rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-display font-bold text-panshi-black mb-2">
                  {spec.value}
                </div>
                <div className="text-sm text-panshi-medium">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
