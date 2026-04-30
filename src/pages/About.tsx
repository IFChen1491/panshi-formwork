import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Lightbulb, Users, Award, Heart } from 'lucide-react';

const milestones = [
  {
    year: '2023',
    emoji: '🏗️',
    title: '磐石智慧系統模板創立',
    description: '磐石智慧系統模板在花蓮創立，開始研發智能模板系統，推動台灣營建數位轉型',
    future: false,
  },
  {
    year: '2024',
    emoji: '🌱',
    title: '低碳工法認證',
    description: '獲得台灣首位低碳工法認證，樹立台灣營建業綠色施工新標竿',
    future: false,
  },
  {
    year: '2025',
    emoji: '📜',
    title: '專利與綠建築認證',
    description: '取得台灣新型式樣及發明專利、台灣首位綠建築工法認證',
    future: false,
  },
  {
    year: '2026',
    emoji: '🌏',
    title: 'AIoT 整合與國際專利',
    description: '取得日本及中國新型式樣及發明專利、AIoT 整合及導入 SaaS 系統，SaaS 派工平台全面上線',
    future: false,
  },
  {
    year: '2027',
    emoji: '🚀',
    title: 'Pre-A 輪募資',
    description: '完成 Pre-A 輪募資，BU 擴展覆蓋台灣主要都會區，年施工量達 13 萬㎡',
    future: true,
  },
  {
    year: '2030',
    emoji: '🌐',
    title: '進軍亞洲市場',
    description: 'A/B 輪募資完成，進軍日本、新加坡、馬來西亞，導入 BIM 與數位孿生技術',
    future: true,
  },
  {
    year: '2034',
    emoji: '🏛️',
    title: 'IPO 上市',
    description: '台灣證交所 IPO 掛牌，亞太 5 國設立據點，年施工量 330 萬㎡，市值突破百億',
    future: true,
  },
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
    description: '以科技重新定義傳統，持續推動營建產業數位轉型',
  },
  {
    icon: Users,
    title: '共贏',
    description: '建商、模主、環境三方共贏，創造永續價值',
  },
  {
    icon: Award,
    title: '卓越',
    description: '以世界級標準自我要求，樹立台灣營建業標竿',
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
              磐石智慧系統模板成立於 2023 年，使命是以 AIoT 物聯網技術重新定義模板工程，
              建立智慧營建的新標準。我們以低碳工法認證、專利智能模板系統及 SaaS 派工平台，
              推動台灣營建業數位轉型，志在成為華人營建業的作業系統。
            </p>
          </div>
        </div>
      </section>

      {/* Purpose / Vision / Mission */}
      <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">我們為何存在</h2>
            <p className="section-subtitle mx-auto">
              宗旨、願景與使命，是磐石每一個決策的基石
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Purpose */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="h-full bg-panshi-lime rounded-2xl p-8 flex flex-col">
                <div className="w-16 h-16 bg-panshi-black/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-panshi-black" />
                </div>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-panshi-black/60 uppercase tracking-widest">Purpose</span>
                  <h2 className="text-2xl font-display font-bold text-panshi-black mt-1">
                    宗旨
                  </h2>
                  <p className="text-sm text-panshi-black/60 mt-0.5">為什麼我們存在</p>
                </div>
                <blockquote className="text-xl font-display font-semibold text-panshi-black leading-relaxed mt-auto">
                  「讓每一個在工地的人，都能驕傲地說出自己在蓋什麼。」
                </blockquote>
              </div>
            </div>

            {/* Vision */}
            <div
              className={`transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="h-full bg-panshi-black rounded-2xl p-8 flex flex-col">
                <div className="w-16 h-16 bg-panshi-lime/20 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-panshi-lime" />
                </div>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-panshi-light/60 uppercase tracking-widest">Vision</span>
                  <h2 className="text-2xl font-display font-bold text-white mt-1">
                    願景
                  </h2>
                  <p className="text-sm text-panshi-light/60 mt-0.5">十年後的世界長什麼樣</p>
                </div>
                <blockquote className="text-xl font-display font-semibold text-panshi-lime leading-relaxed mt-auto">
                  「成為華人營建業的作業系統，每一個工地都在磐石的標準上運作。」
                </blockquote>
              </div>
            </div>

            {/* Mission */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="h-full bg-panshi-surface rounded-2xl p-8 flex flex-col">
                <div className="w-16 h-16 bg-panshi-lime/20 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-panshi-black" />
                </div>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-panshi-medium/60 uppercase tracking-widest">Mission</span>
                  <h2 className="text-2xl font-display font-bold text-panshi-black mt-1">
                    使命
                  </h2>
                </div>
                <ul className="space-y-4 mt-auto">
                  <li className="flex gap-3">
                    <span className="text-panshi-lime font-bold text-lg leading-snug">→</span>
                    <p className="text-sm text-panshi-medium leading-relaxed">
                      把營建的 Know-how 從「師傅的腦袋」搬到「系統的資料庫」——解決產業最大的痛點：<strong className="text-panshi-black">經驗無法傳承</strong>
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-panshi-lime font-bold text-lg leading-snug">→</span>
                    <p className="text-sm text-panshi-medium leading-relaxed">
                      讓每一個工地決策都有數據支撐——從<strong className="text-panshi-black">感覺管理走向科學管理</strong>
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-panshi-lime font-bold text-lg leading-snug">→</span>
                    <p className="text-sm text-panshi-medium leading-relaxed">
                      建立亞洲第一個營建人才的升級通道——<strong className="text-panshi-black">技術工人 → 模主 → 區域主管 → 股東</strong>
                    </p>
                  </li>
                </ul>
              </div>
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
              這些價值觀指引磐石智慧系統模板的每一個決策與行動
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
                  key={milestone.year + milestone.title}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`inline-block rounded-xl p-6 shadow-sm ${milestone.future ? 'bg-panshi-surface border-2 border-dashed border-panshi-cement' : 'bg-white'}`}>
                      <div className="flex items-center gap-2 justify-end flex-row-reverse">
                        <span className="text-panshi-lime font-display font-bold text-lg">
                          {milestone.year}
                        </span>
                        <span className="text-xl">{milestone.emoji}</span>
                      </div>
                      {milestone.future && (
                        <span className="inline-block text-xs font-semibold text-panshi-medium bg-panshi-cement/40 px-2 py-0.5 rounded-full mb-1">
                          展望目標
                        </span>
                      )}
                      <h3 className="text-lg font-display font-semibold text-panshi-black mt-1 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-panshi-medium">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md ${milestone.future ? 'bg-panshi-cement' : 'bg-panshi-lime'}`} />

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
              由營建、科技、商業領域的頂尖人才組成，共同推動磐石智慧系統模板的發展
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
