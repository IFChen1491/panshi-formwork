import { Leaf, Recycle, TrendingDown, Sun, Droplets, TreePine, Award, FileText } from 'lucide-react';

const esgPillars = [
  {
    icon: Leaf,
    title: '環境永續',
    subtitle: 'Environment',
    description: '減少碳排放、降低廢棄物、推動循環經濟',
    stats: [
      { value: '40%', label: '碳排放減少' },
      { value: '60%', label: '廢棄物減少' },
      { value: '100%', label: '可回收材質' },
    ],
  },
  {
    icon: Sun,
    title: '社會責任',
    subtitle: 'Social',
    description: '保障勞工權益、提升職業安全、培育產業人才',
    stats: [
      { value: '500+', label: '認證模主' },
      { value: '零', label: '重大職災' },
      { value: '50+', label: '培訓課程' },
    ],
  },
  {
    icon: Award,
    title: '公司治理',
    subtitle: 'Governance',
    description: '透明營運、誠信經營、永續發展策略',
    stats: [
      { value: 'ISO', label: '多項認證' },
      { value: '100%', label: '供應商審查' },
      { value: '年度', label: 'ESG 報告' },
    ],
  },
];

const initiatives = [
  {
    icon: Recycle,
    title: '循環經濟設計',
    description: '模板模組化設計，單組可重複使用 200 次以上，大幅降低材料浪費',
  },
  {
    icon: TrendingDown,
    title: '碳足跡追蹤',
    description: '每個專案完整記錄碳排放數據，協助客戶達成減碳目標',
  },
  {
    icon: Droplets,
    title: '節水施工',
    description: '優化施工流程，減少混凝土養護用水量 30%',
  },
  {
    icon: TreePine,
    title: '綠色供應鏈',
    description: '優先選用低碳材料，與供應商共同推動永續',
  },
];

const certifications = [
  { name: 'ISO 14001', description: '環境管理系統' },
  { name: 'ISO 45001', description: '職業安全衛生' },
  { name: 'ISO 27001', description: '資訊安全管理' },
  { name: '綠建築標章', description: '材料與工法認證' },
];

export default function ESG() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-green-900 to-panshi-black overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <Leaf className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-white">ESG 永續發展</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              建築的<span className="text-green-400">綠色</span>
              <br />
              未來
            </h1>
            <p className="text-xl text-panshi-light max-w-2xl leading-relaxed">
              磐石系統模板將永續理念融入產品設計與營運模式，
              以實際行動響應全球淨零目標，創造環境、社會、經濟的三贏價值。
            </p>
          </div>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">ESG 三大支柱</h2>
            <p className="section-subtitle mx-auto">
              以永續為核心，推動產業正向改變
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {esgPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-panshi-surface rounded-2xl p-8 hover:shadow-structural transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <pillar.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-sm text-green-600 uppercase tracking-wider mb-2">
                  {pillar.subtitle}
                </div>
                <h3 className="text-2xl font-display font-bold text-panshi-black mb-4">
                  {pillar.title}
                </h3>
                <p className="text-panshi-medium mb-8">{pillar.description}</p>

                <div className="grid grid-cols-3 gap-4">
                  {pillar.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-display font-bold text-green-600 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-panshi-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-24 lg:py-32 bg-panshi-surface">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">永續行動</h2>
              <p className="text-lg text-panshi-medium mb-8">
                從產品設計到施工執行，每個環節都融入永續思維
              </p>

              <div className="space-y-6">
                {initiatives.map((initiative) => (
                  <div
                    key={initiative.title}
                    className="flex gap-4 bg-white rounded-xl p-5 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <initiative.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-panshi-black mb-1">
                        {initiative.title}
                      </h3>
                      <p className="text-sm text-panshi-medium">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-50 rounded-2xl overflow-hidden">
                <img
                  src="/images/esg-nature.jpg"
                  alt="永續建築與自然共生"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-structural">
                <div className="text-4xl font-display font-bold text-green-600 mb-1">
                  2,500+
                </div>
                <div className="text-sm text-panshi-medium">噸 CO₂ 減排量</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Calculator */}
      <section className="py-24 lg:py-32 bg-panshi-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              碳減排計算器
            </h2>
            <p className="text-lg text-panshi-light mb-12">
              使用磐石系統模板，您的專案可以減少多少碳排放？
            </p>

            <div className="bg-panshi-dark rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm text-panshi-light mb-2">
                    建築面積 (m²)
                  </label>
                  <input
                    type="number"
                    className="input-panshi-dark text-center text-2xl"
                    placeholder="1,000"
                  />
                </div>
                <div>
                  <label className="block text-sm text-panshi-light mb-2">
                    樓層數
                  </label>
                  <input
                    type="number"
                    className="input-panshi-dark text-center text-2xl"
                    placeholder="10"
                  />
                </div>
                <div>
                  <label className="block text-sm text-panshi-light mb-2">
                    專案類型
                  </label>
                  <select className="input-panshi-dark text-center">
                    <option>住宅大樓</option>
                    <option>商業大樓</option>
                    <option>工業廠房</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-panshi-black rounded-xl p-6">
                  <div className="text-sm text-panshi-light mb-2">預估碳減排</div>
                  <div className="text-3xl font-display font-bold text-green-400">
                    120 噸
                  </div>
                </div>
                <div className="bg-panshi-black rounded-xl p-6">
                  <div className="text-sm text-panshi-light mb-2">相當於種植</div>
                  <div className="text-3xl font-display font-bold text-panshi-lime">
                    5,400 棵
                  </div>
                  <div className="text-xs text-panshi-medium">樹木一年的吸碳量</div>
                </div>
                <div className="bg-panshi-black rounded-xl p-6">
                  <div className="text-sm text-panshi-light mb-2">綠建築加分</div>
                  <div className="text-3xl font-display font-bold text-panshi-blue">
                    +8 分
                  </div>
                  <div className="text-xs text-panshi-medium">綠建築標章申請</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">認證與標章</h2>
            <p className="section-subtitle mx-auto">
              國際認可的永續承諾
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-panshi-surface rounded-xl p-6 text-center hover:shadow-structural transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-display font-semibold text-panshi-black mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-panshi-medium">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Report CTA */}
      <section className="py-24 lg:py-32 bg-green-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              下載 ESG 報告
            </h2>
            <p className="text-lg text-green-100 mb-8">
              了解磐石系統模板在永續發展方面的完整承諾與成果
            </p>
            <button className="btn-panshi-primary bg-white text-green-900 hover:bg-green-100">
              下載 2024 ESG 報告
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
