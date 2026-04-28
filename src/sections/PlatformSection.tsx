import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Building2, HardHat, ArrowRight, Star, Shield, Wallet } from 'lucide-react';

const platformFeatures = [
  {
    icon: HardHat,
    title: '認證模主',
    description: '嚴格技能認證與培訓體系，確保每位模主具備專業能力',
    highlight: '500+ 認證模主',
  },
  {
    icon: Building2,
    title: '智能配對',
    description: 'AI 演算法根據專案需求、地理位置、技能匹配最佳模主',
    highlight: '98% 配對成功率',
  },
  {
    icon: Wallet,
    title: '透明報酬',
    description: '即時工時記錄、自動薪資計算，每分努力都有回報',
    highlight: 'T+1 快速結算',
  },
  {
    icon: Shield,
    title: '安全保障',
    description: '完整保險覆蓋、安全培訓、法律支援，工作無後顧之憂',
    highlight: '零事故紀錄',
  },
];

const testimonials = [
  {
    name: '陳建明',
    role: '資深模主',
    content: '加入磐石平台後，收入穩定增加 40%，再也不用擔心找不到案子。',
    avatar: 'CM',
  },
  {
    name: '林雅芳',
    role: '建商專案經理',
    content: '模主品質穩定，配合度高，專案執行效率提升顯著。',
    avatar: 'LY',
  },
];

export default function PlatformSection() {
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
      className="relative py-24 lg:py-32 bg-panshi-surface overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-panshi-lime/10 border border-panshi-lime/30 rounded-full mb-6">
            <Users className="w-4 h-4 text-panshi-lime" />
            <span className="text-sm font-medium text-panshi-black">
              平台經濟模式
            </span>
          </div>
          <h2 className="section-title mb-6">
            加入
            <span className="text-panshi-lime">模主平台</span>
          </h2>
          <p className="section-subtitle mx-auto">
            磐石模主平台連結頂尖模板專家與優質建案。
            無論你是資深師傅或是專業建商，這裡都是你的最佳選擇。
          </p>
        </div>

        {/* Platform Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platformFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-structural transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-panshi-lime/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-panshi-lime transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-panshi-black" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-panshi-black mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-panshi-medium leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Highlight */}
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-panshi-lime/20 rounded-full">
                <Star className="w-3 h-3 text-panshi-lime fill-panshi-lime" />
                <span className="text-xs font-medium text-panshi-black">
                  {feature.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - For 模主 */}
          <div
            className={`bg-panshi-black rounded-2xl p-8 lg:p-10 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-panshi-lime rounded-xl flex items-center justify-center">
                <HardHat className="w-6 h-6 text-panshi-black" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">
                  成為模主
                </h3>
                <p className="text-sm text-panshi-light">For Formwork Masters</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                '穩定案源，不再為生計煩惱',
                '專業培訓，技能持續升級',
                '透明報酬，即時到帳',
                '保險保障，工作安心',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-panshi-lime/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-panshi-lime"
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
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/platform"
              className="btn-panshi-primary w-full justify-center group"
            >
              立即加入模主
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Right - For 建商 */}
          <div
            className={`bg-white rounded-2xl p-8 lg:p-10 shadow-structural transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-panshi-black rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-panshi-lime" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-panshi-black">
                  建商合作
                </h3>
                <p className="text-sm text-panshi-medium">For Construction Firms</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                '認證模主，品質有保障',
                '智能配對，快速找到合適團隊',
                '即時監控，掌握施工進度',
                '數據分析，持續優化效率',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-panshi-lime/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-panshi-lime"
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
                  <span className="text-panshi-black">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="btn-panshi-secondary w-full justify-center group"
            >
              洽詢合作方案
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Testimonials */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-panshi-lime rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-panshi-black font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-panshi-black mb-3">「{testimonial.content}」</p>
                  <div>
                    <p className="font-medium text-panshi-black">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-panshi-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
