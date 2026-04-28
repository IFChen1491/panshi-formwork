import { useState } from 'react';
import { MapPin, Calendar, Building2, TrendingDown, TrendingUp, Download, Filter } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    name: '花蓮清水模住宅',
    location: '花蓮市',
    type: '住宅建案',
    year: '2024',
    status: '已完成',
    image: '/images/project-2.jpg',
    stats: [
      { label: '工期縮短', value: '20%', trend: 'down' },
      { label: '成本節省', value: '20%', trend: 'down' },
      { label: '碳減排', value: '32%', trend: 'down' },
    ],
    description: '以磐石系統模板打造清水混凝土質感，精準施工呈現建築師設計意圖，室內清水模面平整度達業界最高標準。',
    solutions: ['牆體模板', '樓板模板'],
    area: '1,200 m²',
    floors: 3,
  },
  {
    id: 2,
    name: '磐石高樓示範案場',
    location: '花蓮縣',
    type: '示範工程',
    year: '2024',
    status: '進行中',
    image: '/images/project-3.jpg',
    stats: [
      { label: '工期縮短', value: '15%', trend: 'down' },
      { label: '人力減少', value: '19%', trend: 'down' },
      { label: '重複使用率', value: '180+', trend: 'up' },
    ],
    description: '磐石系統模板高樓層施工示範，驗證 AIoT 智慧監控與高效組裝流程，背景為花蓮山脈全景。',
    solutions: ['牆體模板', '爬升模板'],
    area: '8,000 m²',
    floors: 12,
  },
  {
    id: 3,
    name: '系統模板牆體工程',
    location: '台灣',
    type: '牆體模板',
    year: '2023',
    status: '已完成',
    image: '/images/project-1.jpg',
    stats: [
      { label: '工期縮短', value: '15%', trend: 'down' },
      { label: '碳減排', value: '38%', trend: 'down' },
      { label: '品質合格率', value: '99%', trend: 'up' },
    ],
    description: '大面積牆體系統模板施工，高精度組裝確保結構品質與施工安全，採用 RFID 全程追蹤每片模板狀態。',
    solutions: ['牆體模板'],
    area: '15,000 m²',
    floors: 8,
  },
  {
    id: 4,
    name: '建案室內施工（清水模）',
    location: '花蓮',
    type: '室內工程',
    year: '2024',
    status: '已完成',
    image: '/images/cost-saving.jpg',
    stats: [
      { label: '工期縮短', value: '15%', trend: 'down' },
      { label: '精準度', value: '99.5%', trend: 'up' },
      { label: '安全事故', value: '0', trend: 'down' },
    ],
    description: '清水模室內空間施工，採光面一次到位，展現磐石系統模板的精密成型能力。',
    solutions: ['牆體模板', '樓板模板'],
    area: '2,000 m²',
    floors: 5,
  },
  {
    id: 5,
    name: '清水模建案夜景',
    location: '花蓮',
    type: '住宅建案',
    year: '2023',
    status: '已完成',
    image: '/images/esg-nature.jpg',
    stats: [
      { label: '工期縮短', value: '15%', trend: 'down' },
      { label: '成本節省', value: '20%', trend: 'down' },
      { label: '綠化覆蓋', value: '30%', trend: 'up' },
    ],
    description: '融合清水模結構與自然景觀的住宅案場，夜間立面展現建築質感，ESG 表現卓越。',
    solutions: ['牆體模板', '樓板模板'],
    area: '3,500 m²',
    floors: 3,
  },
  {
    id: 6,
    name: '清水模建案效率展示',
    location: '花蓮',
    type: '住宅建案',
    year: '2022',
    status: '已完成',
    image: '/images/efficiency.jpg',
    stats: [
      { label: '工期縮短', value: '20%', trend: 'down' },
      { label: '人力節省', value: '19%', trend: 'down' },
      { label: '整體滿意度', value: '4.9/5', trend: 'up' },
    ],
    description: '磐石系統模板高樓施工實績，驗證系統化作業流程帶來的效率提升與品質保障。',
    solutions: ['牆體模板', '爬升模板'],
    area: '15,000 m²',
    floors: 4,
  },
];

const filters = ['全部', '進行中', '已完成', '商業大樓', '住宅大樓', '公共工程'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeFilter === '全部'
      ? projects
      : projects.filter(
          (p) =>
            p.status === activeFilter ||
            p.type === activeFilter
        );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-panshi-black overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-panshi-lime" />
              <span className="text-sm font-medium text-white">案例展示</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              數據化的<span className="text-panshi-lime">成功</span>
            </h1>
            <p className="text-xl text-panshi-light max-w-2xl leading-relaxed">
              從北到南，磐石系統模板已在全台多個指標性建案證明價值。
              每個數字背後，都是效率、成本與永續的實際提升。
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-panshi-lime">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '150+', label: '完成專案' },
              { value: '2M+', label: '模板組數' },
              { value: 'NT$50B+', label: '專案總值' },
              { value: '98%', label: '客戶滿意度' },
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

      {/* Projects Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <Filter className="w-5 h-5 text-panshi-medium" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-panshi-black text-white'
                    : 'bg-panshi-surface text-panshi-medium hover:bg-panshi-cement'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-structural transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panshi-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === '進行中'
                          ? 'bg-panshi-lime text-panshi-black'
                          : 'bg-white/90 text-panshi-black'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white text-sm mb-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-panshi-medium mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                    <span>{project.type}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-panshi-cement">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="flex items-center gap-1">
                          <span className="text-lg font-display font-bold text-panshi-black">
                            {stat.value}
                          </span>
                          {stat.trend === 'down' ? (
                            <TrendingDown className="w-4 h-4 text-green-500" />
                          ) : (
                            <TrendingUp className="w-4 h-4 text-panshi-lime" />
                          )}
                        </div>
                        <span className="text-xs text-panshi-medium">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-display font-bold">
                  {selectedProject.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="mt-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-panshi-medium">
                    <MapPin className="w-4 h-4" />
                    {selectedProject.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-panshi-medium">
                    <Calendar className="w-4 h-4" />
                    {selectedProject.year}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-panshi-medium">
                    <Building2 className="w-4 h-4" />
                    {selectedProject.type}
                  </div>
                </div>

                <p className="text-panshi-medium mb-6">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-panshi-surface rounded-lg p-4">
                    <div className="text-sm text-panshi-medium mb-1">建築面積</div>
                    <div className="text-lg font-display font-semibold text-panshi-black">
                      {selectedProject.area}
                    </div>
                  </div>
                  <div className="bg-panshi-surface rounded-lg p-4">
                    <div className="text-sm text-panshi-medium mb-1">樓層數</div>
                    <div className="text-lg font-display font-semibold text-panshi-black">
                      {selectedProject.floors} 層
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-panshi-medium mb-2">使用方案</div>
                  <div className="flex gap-2">
                    {selectedProject.solutions.map((solution) => (
                      <span
                        key={solution}
                        className="px-3 py-1 bg-panshi-lime/20 text-panshi-black text-sm rounded-full"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {selectedProject.stats.map((stat) => (
                    <div key={stat.label} className="text-center bg-panshi-surface rounded-lg p-4">
                      <div className="text-2xl font-display font-bold text-panshi-black mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-panshi-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <button className="btn-panshi-primary w-full">
                  <Download className="w-4 h-4 mr-2" />
                  下載案例研究
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
