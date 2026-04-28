import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Lightbulb, Users, Award } from 'lucide-react';

const milestones = [
  { year: '2018', title: '磐石成立', description: '在台中創立，開始研發智能模板系統' },
  { year: '2019', title: '首項專利', description: '獲得第一項模板結構專利' },
  { year: '2020', title: 'AIoT 整合', description: '導入 IoT 感測與雲端監控系統' },
  { year: '2021', title: '模主平台', description: '推出模主配對平台，連結供需雙方' },
  { year: '2022', title: 'ESG 認證', description: '獲得 ISO 14001 環境管理認證' },
  { year: '2023', title: '海外擴張', description: '進軍東南亞市場，設立新加坡據點' },
  { year: '2024', title: 'IPO 準備', description: '啟動上市計畫，邁向國際資本市場' },
];

const values = [
  {
    icon: Target,
    title: '精準',
    description: '每一個細節都追求極致，每一次施工都精準到位',
  },
  {
    icon: Lightbulb,
    title: '創新',
    description: '以科技重新定義傳統，持續推動產業革新',
  },
  {
    icon: Users,
    title: '共贏',
    description: '建商、模主、環境三方共贏，創造永續價值',
  },
  {
    icon: Award,
    title: '卓越',
    description: '以世界級標準自我要求，樹立產業標竿',
  },
];

const team = [
  {
    name: '張建國',
    role: '創辦人暨執行長',
    background: '前中鋼結構總工程師，30年營建經驗',
    avatar: '張',
  },
  {
    name: '李慧君',
    role: '技術長',
    background: 'MIT 土木博士，AIoT 專家',
    avatar: '李',
  },
  {
    name: '王志明',
    role: '營運長',
    background: '前 McKinsey 顧問，平台經濟專家',
    avatar: '王',
  },
  {
    name: '陳雅芳',
    role: '永續長',
    background: 'LEED Fellow，ESG 策略顧問',
    avatar: '陳',
  },
];

export default function About() {
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
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-panshi-black overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="text-sm font-medium text-white">關於磐石</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              建築業的
              <span className="text-panshi-lime">作業系統</span>
            </h1>
            <p className="text-xl text-panshi-light max-w-2xl leading-relaxed">
              磐石系統模板成立於 2018 年，使命是以 AIoT 技術重新定義模板工程，
              建立智慧營建的新標準。我們相信，科技與工藝的結合，能夠創造更高效、
              更永續的建築未來。
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Vision */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-panshi-lime/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-panshi-lime" />
              </div>
              <h2 className="text-3xl font-display font-bold text-panshi-black mb-4">
                願景
              </h2>
              <p className="text-lg text-panshi-medium leading-relaxed">
                成為全球智慧營建的領導者，以科技賦能每一位建築從業者，
                讓每一棟建築都更高效、更安全、更永續。
              </p>
            </div>

            {/* Mission */}
            <div
              className={`transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-panshi-blue/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-panshi-blue" />
              </div>
              <h2 className="text-3xl font-display font-bold text-panshi-black mb-4">
                使命
              </h2>
              <p className="text-lg text-panshi-medium leading-relaxed">
                以系統化、數據化、智能化的方式，革新傳統模板工程，
                為建商創造價值，為模主創造機會，為環境創造永續。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-panshi-surface">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">核心價值</h2>
            <p className="section-subtitle mx-auto">
              這些價值觀指引我們的每一個決策與行動
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-structural transition-all duration-300"
              >
                <div className="w-14 h-14 bg-panshi-lime/20 rounded-xl flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-panshi-black" />
                </div>
                <h3 className="text-xl font-display font-semibold text-panshi-black mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-panshi-medium">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">發展歷程</h2>
            <p className="section-subtitle mx-auto">
              從新創到產業領導者的關鍵里程碑
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-panshi-cement" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="inline-block bg-white rounded-xl p-6 shadow-sm">
                      <span className="text-panshi-lime font-display font-bold text-lg">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-display font-semibold text-panshi-black mt-1 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-panshi-medium">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-panshi-lime rounded-full border-4 border-white shadow-md" />

                  {/* Empty Space */}
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 bg-panshi-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              核心團隊
            </h2>
            <p className="text-lg text-panshi-light max-w-2xl mx-auto">
              由營建、科技、商業領域的頂尖人才組成
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-panshi-dark rounded-2xl p-6 text-center"
              >
                <div className="w-20 h-20 bg-panshi-lime rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold text-panshi-black">
                    {member.avatar}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-panshi-lime text-sm mb-3">{member.role}</p>
                <p className="text-sm text-panshi-light">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
