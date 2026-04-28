import { useState } from 'react';
import { Check, ArrowRight, Layers, Box, Mountain, Star } from 'lucide-react';

const solutions = [
  {
    id: 'wall',
    icon: Layers,
    title: '牆體模板系統',
    subtitle: 'Wall Formwork',
    description: '針對各種牆體結構設計的模組化模板系統，從一般住宅到超高層建築皆適用。',
    features: [
      '模組化設計，快速拼裝',
      '高精度鋁合金材質',
      '內建 RFID 追蹤晶片',
      'AI 壓力監測系統',
      '最高可達 5 米單次澆置',
    ],
    specs: [
      { label: '最大高度', value: '5.0m' },
      { label: '最大長度', value: '3.6m' },
      { label: '材質', value: '鋁合金 6061-T6' },
      { label: '重複使用率', value: '200+' },
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 'slab',
    icon: Box,
    title: '樓板模板系統',
    subtitle: 'Slab Formwork',
    description: '輕量化設計的樓板模板，大幅降低人力需求，提升施工效率。',
    features: [
      '輕量化設計，單人可搬運',
      '快速支撐系統',
      '平整度誤差 < 2mm',
      '與牆體系統無縫整合',
      '自動拆模提醒',
    ],
    specs: [
      { label: '最大跨度', value: '6.0m' },
      { label: '載重能力', value: '5kN/m²' },
      { label: '材質', value: '鋁合金 + 鋼材' },
      { label: '重量', value: '15kg/m²' },
    ],
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 'climbing',
    icon: Mountain,
    title: '爬升模板系統',
    subtitle: 'Climbing Formwork',
    description: '專為超高層建築設計的液壓爬升系統，實現自動化、連續施工。',
    features: [
      '液壓自動爬升',
      '單層爬升時間 < 4hr',
      '整合施工平台',
      '全天候作業能力',
      '遠端監控系統',
    ],
    specs: [
      { label: '最大高度', value: '無限制' },
      { label: '爬升速度', value: '0.3m/min' },
      { label: '載重能力', value: '10kN/m²' },
      { label: '風速限制', value: '60km/h' },
    ],
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 'special',
    icon: Star,
    title: '特殊結構模板',
    subtitle: 'Special Formwork',
    description: '針對橋樑、隧道、曲面結構等特殊需求的客製化模板解決方案。',
    features: [
      '3D 建模設計',
      'CNC 精密切割',
      '現場組裝指導',
      '結構計算驗證',
      '專屬專案管理',
    ],
    specs: [
      { label: '設計週期', value: '2-4 週' },
      { label: '精度', value: '±1mm' },
      { label: '材質選項', value: '多種' },
      { label: '支援', value: '全程駐場' },
    ],
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=600&fit=crop&q=80',
  },
];

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(solutions[0]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-panshi-black overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="text-sm font-medium text-white">解決方案</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              全方位<span className="text-panshi-lime">模板系統</span>
            </h1>
            <p className="text-xl text-panshi-light max-w-2xl leading-relaxed">
              從牆體到樓板，從一般建築到超高層，磐石提供完整的模板解決方案，
              滿足各種施工需求。
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveSolution(solution)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeSolution.id === solution.id
                    ? 'bg-panshi-black text-white'
                    : 'bg-panshi-surface text-panshi-black hover:bg-panshi-cement'
                }`}
              >
                <solution.icon className="w-5 h-5" />
                <span className="font-medium">{solution.title}</span>
              </button>
            ))}
          </div>

          {/* Solution Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-structural">
                <img
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-panshi-lime/20 rounded-xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-panshi-lime/10 rounded-full mb-4">
                <span className="text-xs text-panshi-medium uppercase tracking-wider">
                  {activeSolution.subtitle}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-panshi-black mb-4">
                {activeSolution.title}
              </h2>
              <p className="text-lg text-panshi-medium mb-8">
                {activeSolution.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {activeSolution.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-panshi-lime/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-panshi-lime" />
                    </div>
                    <span className="text-panshi-black">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {activeSolution.specs.map((spec) => (
                  <div key={spec.label} className="bg-panshi-surface rounded-lg p-4">
                    <div className="text-xs text-panshi-medium mb-1">
                      {spec.label}
                    </div>
                    <div className="text-lg font-display font-semibold text-panshi-black">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              <button className="btn-panshi-primary group">
                諮詢此方案
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 lg:py-32 bg-panshi-surface">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">方案比較</h2>
            <p className="section-subtitle mx-auto">
              選擇最適合您專案的模板系統
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-structural overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-panshi-black text-white">
                    <th className="px-6 py-4 text-left font-display font-semibold">
                      比較項目
                    </th>
                    {solutions.map((solution) => (
                      <th
                        key={solution.id}
                        className="px-6 py-4 text-left font-display font-semibold"
                      >
                        {solution.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-panshi-cement">
                  {[
                    { label: '適用高度', key: 'height' },
                    { label: '組裝速度', key: 'speed' },
                    { label: '人力需求', key: 'labor' },
                    { label: '重複使用率', key: 'reuse' },
                    { label: '智能監測', key: 'iot' },
                    { label: '成本效益', key: 'cost' },
                  ].map((row) => (
                    <tr key={row.key} className="hover:bg-panshi-surface/50">
                      <td className="px-6 py-4 font-medium text-panshi-black">
                        {row.label}
                      </td>
                      {solutions.map((solution) => (
                        <td key={solution.id} className="px-6 py-4 text-panshi-medium">
                          {row.key === 'height' &&
                            (solution.id === 'wall'
                              ? ' up to 5m'
                              : solution.id === 'slab'
                              ? ' up to 6m'
                              : solution.id === 'climbing'
                              ? ' 無限制'
                              : ' 依設計')}
                          {row.key === 'speed' &&
                            (solution.id === 'wall'
                              ? ' 快'
                              : solution.id === 'slab'
                              ? ' 極快'
                              : solution.id === 'climbing'
                              ? ' 自動化'
                              : ' 依設計')}
                          {row.key === 'labor' &&
                            (solution.id === 'wall'
                              ? ' 中等'
                              : solution.id === 'slab'
                              ? ' 低'
                              : solution.id === 'climbing'
                              ? ' 極低'
                              : ' 依設計')}
                          {row.key === 'reuse' &&
                            (solution.id === 'special'
                              ? ' 依設計'
                              : ' 200+')}
                          {row.key === 'iot' &&
                            (solution.id === 'special' ? ' 選配' : ' 標配')}
                          {row.key === 'cost' &&
                            (solution.id === 'climbing'
                              ? ' 高'
                              : solution.id === 'special'
                              ? ' 依設計'
                              : ' 優')}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
