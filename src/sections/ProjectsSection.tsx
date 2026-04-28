import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Building2, TrendingDown, TrendingUp } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: '花蓮清水模住宅',
    location: '花蓮市',
    type: '住宅建案',
    year: '2024',
    image: '/images/project-2.jpg',
    stats: [
      { label: '工期縮短', value: '20%', trend: 'down' },
      { label: '成本節省', value: '20%', trend: 'down' },
      { label: '碳減排', value: '32%', trend: 'down' },
    ],
    description: '以磐石系統模板打造清水混凝土質感，精準施工呈現建築師設計意圖。',
  },
  {
    id: 2,
    name: '磐石示範案場',
    location: '花蓮縣',
    type: '示範工程',
    year: '2024',
    image: '/images/project-3.jpg',
    stats: [
      { label: '工期縮短', value: '15%', trend: 'down' },
      { label: '人力減少', value: '19%', trend: 'down' },
      { label: '重複使用率', value: '180+', trend: 'up' },
    ],
    description: '磐石系統模板高樓層施工示範，驗證 AIoT 智慧監控與高效組裝流程。',
  },
  {
    id: 3,
    name: '系統模板牆體工程',
    location: '台灣',
    type: '牆體模板',
    year: '2023',
    image: '/images/project-1.jpg',
    stats: [
      { label: '工期縮短', value: '15%', trend: 'down' },
      { label: '碳減排', value: '38%', trend: 'down' },
      { label: '品質合格率', value: '99%', trend: 'up' },
    ],
    description: '大面積牆體系統模板施工，高精度組裝確保結構品質與施工安全。',
  },
];

export default function ProjectsSection() {
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
      className="relative py-24 lg:py-32 bg-panshi-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-panshi-lime" />
              <span className="text-sm font-medium text-white">實績案例</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              數據化的<span className="text-panshi-lime">成功實證</span>
            </h2>
            <p className="text-lg text-panshi-light">
              從北到南，磐石系統模板已在全台多個指標性建案證明價值。
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-panshi-lime font-medium hover:gap-3 transition-all duration-300"
          >
            查看全部案例
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-panshi-dark rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-structural ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panshi-dark via-transparent to-transparent" />
                
                {/* Year Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  <Calendar className="w-3 h-3 text-white" />
                  <span className="text-xs text-white">{project.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-panshi-light mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                  <span className="mx-2">·</span>
                  <span>{project.type}</span>
                </div>
                
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-sm text-panshi-light mb-5 line-clamp-2">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/10">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-lg font-display font-bold text-panshi-lime">
                          {stat.value}
                        </span>
                        {stat.trend === 'down' ? (
                          <TrendingDown className="w-4 h-4 text-green-400" />
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

        {/* Overall Stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '150+', label: '完成專案' },
            { value: '2M+', label: '模板組數' },
            { value: 'NT$50B+', label: '專案總值' },
            { value: '98%', label: '客戶滿意度' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-panshi-lime mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-panshi-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
