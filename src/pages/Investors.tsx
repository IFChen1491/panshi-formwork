import { TrendingUp, Users, Building2, Globe, FileText, ArrowRight, Target, Lightbulb } from 'lucide-react';

const milestones = [
  { year: '2018', event: '公司成立，獲得種子輪投資 NT$5M' },
  { year: '2019', event: '完成 A 輪融資 NT$30M' },
  { year: '2020', event: 'AIoT 平台上線，獲 B 輪融資 NT$100M' },
  { year: '2021', event: '模主平台推出，營收成長 300%' },
  { year: '2022', event: '獲 C 輪融資 NT$300M，估值達 NT$1.5B' },
  { year: '2023', event: '進軍東南亞市場，新加坡據點成立' },
  { year: '2024', event: '啟動 IPO 計畫，目標 2026 年上市' },
];

const growthData = [
  { year: '2020', revenue: 50, projects: 20 },
  { year: '2021', revenue: 150, projects: 45 },
  { year: '2022', revenue: 380, projects: 85 },
  { year: '2023', revenue: 720, projects: 120 },
  { year: '2024', revenue: 1200, projects: 150 },
];

const visionPoints = [
  {
    icon: Globe,
    title: '全球擴張',
    description: '2026 年前進軍日本、澳洲、中東市場，成為亞太區領導品牌',
  },
  {
    icon: Lightbulb,
    title: '技術領先',
    description: '持續投入 AI 與機器人技術，開發全自動模板系統',
  },
  {
    icon: Users,
    title: '平台規模',
    description: '2028 年達成 10,000 名認證模主，服務 1,000 家建商',
  },
  {
    icon: Target,
    title: '永續目標',
    description: '2030 年協助客戶減少 100 萬噸碳排放，達成淨零承諾',
  },
];

export default function Investors() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-panshi-black overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-panshi-lime" />
              <span className="text-sm font-medium text-white">投資者關係</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              邁向<span className="text-panshi-lime">上市</span>
              <br />
              的旅程
            </h1>
            <p className="text-xl text-panshi-light max-w-2xl leading-relaxed">
              磐石系統模板正處於快速成長期，我們誠摯邀請認同智慧營建願景的投資者，
              共同參與這場產業革命。
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-panshi-lime">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 'NT$12億', label: '2024 營收' },
              { value: '150+', label: '年度專案' },
              { value: 'NT$15億', label: '公司估值' },
              { value: '300%', label: '年複合成長率' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-panshi-black mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-panshi-black/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Chart */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">強勁成長動能</h2>
            <p className="section-subtitle mx-auto">
              營收與專案數持續創新高，展現市場領導地位
            </p>
          </div>

          <div className="bg-panshi-surface rounded-2xl p-8">
            <div className="flex items-end justify-between h-64 gap-4">
              {growthData.map((data) => (
                <div key={data.year} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex gap-1 items-end justify-center h-48">
                    <div
                      className="w-1/2 bg-panshi-black rounded-t transition-all duration-500"
                      style={{ height: `${(data.revenue / 1200) * 100}%` }}
                    />
                    <div
                      className="w-1/2 bg-panshi-lime rounded-t transition-all duration-500"
                      style={{ height: `${(data.projects / 150) * 100}%` }}
                    />
                  </div>
                  <div className="mt-4 text-sm font-medium text-panshi-black">
                    {data.year}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-panshi-black rounded" />
                <span className="text-sm text-panshi-medium">營收 (百萬)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-panshi-lime rounded" />
                <span className="text-sm text-panshi-medium">專案數</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding History */}
      <section className="py-24 lg:py-32 bg-panshi-surface">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">融資歷程</h2>
            <p className="section-subtitle mx-auto">
              獲得頂尖創投與產業投資者的認可與支持
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-panshi-cement transform md:-translate-x-1/2" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col md:flex-row items-start ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <div className="bg-white rounded-xl p-5 shadow-sm">
                        <span className="text-panshi-lime font-display font-bold text-lg">
                          {milestone.year}
                        </span>
                        <p className="text-panshi-black mt-1">{milestone.event}</p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-panshi-lime rounded-full border-4 border-white shadow-md" />

                    {/* Empty Space */}
                    <div className="hidden md:block w-5/12" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24 lg:py-32 bg-panshi-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              未來願景
            </h2>
            <p className="text-lg text-panshi-light max-w-2xl mx-auto">
              2026 年上市目標，邁向全球智慧營建領導者
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionPoints.map((point) => (
              <div
                key={point.title}
                className="bg-panshi-dark rounded-2xl p-6 hover:bg-panshi-gray transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-panshi-lime/20 rounded-xl flex items-center justify-center mb-5">
                  <point.icon className="w-7 h-7 text-panshi-lime" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-panshi-light">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">投資亮點</h2>
              <div className="space-y-6">
                {[
                  {
                    title: '市場領導地位',
                    description: '台灣智慧模板市佔率第一，品牌認知度最高',
                  },
                  {
                    title: '技術護城河',
                    description: '50+ 項專利，AIoT 技術領先同業 3-5 年',
                  },
                  {
                    title: '平台網路效應',
                    description: '模主與建商雙邊平台，規模越大價值越高',
                  },
                  {
                    title: 'ESG 趨勢受惠',
                    description: '全球淨零趨勢，綠色營建需求持續成長',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-2 h-2 bg-panshi-lime rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-panshi-black mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-panshi-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-panshi-surface rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-panshi-black mb-6">
                聯絡投資者關係
              </h3>
              <p className="text-panshi-medium mb-6">
                如需更多財務資訊或投資說明，請與我們聯繫
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-panshi-lime/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-panshi-black" />
                  </div>
                  <div>
                    <div className="text-sm text-panshi-medium">投資人簡報</div>
                    <a
                      href="#"
                      className="text-panshi-black font-medium hover:text-panshi-lime transition-colors"
                    >
                      下載 PDF
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-panshi-lime/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-panshi-black" />
                  </div>
                  <div>
                    <div className="text-sm text-panshi-medium">公司年報</div>
                    <a
                      href="#"
                      className="text-panshi-black font-medium hover:text-panshi-lime transition-colors"
                    >
                      下載 2023 年報
                    </a>
                  </div>
                </div>
              </div>
              <button className="btn-panshi-primary w-full mt-6">
                聯絡投資者關係
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
