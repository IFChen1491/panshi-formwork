import { useState } from 'react';
import { Check, ArrowRight, Star, Shield, Wallet, GraduationCap, MapPin, Clock } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const benefits = [
  {
    icon: Wallet,
    title: '穩定收入',
    description: '平台派案，收入穩定可預期，告別「有上頓沒下頓」的困境',
    stat: '平均收入 +40%',
  },
  {
    icon: GraduationCap,
    title: '專業培訓',
    description: '免費技能培訓與認證，持續提升專業能力與市場價值',
    stat: '50+ 課程',
  },
  {
    icon: Shield,
    title: '完善保障',
    description: '完整保險覆蓋、安全培訓、法律支援，工作無後顧之憂',
    stat: '零事故紀錄',
  },
  {
    icon: MapPin,
    title: '就近派案',
    description: '智能配對系統，優先指派住家附近的專案，減少通勤',
    stat: '< 10km 平均',
  },
  {
    icon: Clock,
    title: '彈性工時',
    description: '自主選擇接案時間，工作與生活平衡',
    stat: '自由排程',
  },
  {
    icon: Star,
    title: '信用評級',
    description: '優質工作表現累積信用，高評級優先獲派優質案件',
    stat: '五星模主',
  },
];

const requirements = [
  '年滿 20 歲，具備模板施工經驗',
  '持有相關職業證照（無證照者可參加培訓）',
  '通過磐石技能認證考試',
  '具備基本智能手機操作能力',
  '無重大犯罪紀錄',
];

const process = [
  { step: '01', title: '線上申請', description: '填寫基本資料與工作經歷' },
  { step: '02', title: '技能評估', description: '參加線上測驗與實作考試' },
  { step: '03', title: '培訓認證', description: '完成必修課程與安全訓練' },
  { step: '04', title: '正式上線', description: '開始接案，開啟新生涯' },
];

export default function Platform() {
  const [showMasterForm, setShowMasterForm] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-panshi-black overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <Star className="w-4 h-4 text-panshi-lime" />
              <span className="text-sm font-medium text-white">模主平台</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              加入<span className="text-panshi-lime">模主</span>生態系
            </h1>
            <p className="text-xl text-panshi-light max-w-2xl leading-relaxed mb-8">
              磐石模主平台連結頂尖模板專家與優質建案。
              成為認證模主，開啟穩定、有保障的職業新篇章。
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowMasterForm(true)}
                className="btn-panshi-primary"
              >
                立即申請加入
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => setShowPartnerForm(true)}
                className="btn-panshi-outline-white"
              >
                建商合作洽詢
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-panshi-lime">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: '認證模主' },
              { value: '1,200+', label: '每月派案' },
              { value: 'NT$8萬+', label: '平均月收入' },
              { value: '98%', label: '滿意度' },
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

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">成為模主的優勢</h2>
            <p className="section-subtitle mx-auto">
              磐石平台為模主提供全方位的支持與保障
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group bg-panshi-surface rounded-2xl p-6 hover:bg-panshi-black transition-all duration-300"
              >
                <div className="w-14 h-14 bg-panshi-lime/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-panshi-lime transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-panshi-black" />
                </div>
                <h3 className="text-xl font-display font-semibold text-panshi-black mb-2 group-hover:text-white transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-panshi-medium mb-4 group-hover:text-panshi-light transition-colors duration-300">
                  {benefit.description}
                </p>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-panshi-lime/20 rounded-full">
                  <span className="text-xs font-medium text-panshi-black">
                    {benefit.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 lg:py-32 bg-panshi-surface">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">申請條件</h2>
              <p className="text-lg text-panshi-medium mb-8">
                只要符合以下條件，歡迎加入磐石模主平台：
              </p>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-panshi-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-panshi-black" />
                    </div>
                    <span className="text-panshi-black">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-structural">
              <h3 className="text-2xl font-display font-bold text-panshi-black mb-6">
                加入流程
              </h3>
              <div className="space-y-6">
                {process.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-12 h-12 bg-panshi-lime rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-panshi-black">
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-panshi-black mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-panshi-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-panshi-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              準備好開始了嗎？
            </h2>
            <p className="text-lg text-panshi-light mb-8">
              填寫申請表，我們將在 3 個工作天內與您聯繫
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowMasterForm(true)}
                className="btn-panshi-primary"
              >
                申請成為模主
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => setShowPartnerForm(true)}
                className="btn-panshi-outline-white"
              >
                建商合作洽詢
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Master Application Dialog */}
      <Dialog open={showMasterForm} onOpenChange={setShowMasterForm}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold">
              申請成為模主
            </DialogTitle>
            <DialogDescription>
              填寫以下資料，我們將盡快與您聯繫
            </DialogDescription>
          </DialogHeader>
          <form action="https://formsubmit.co/adolph0306@gmail.com" method="POST" target="_blank" className="space-y-4 mt-4" onSubmit={() => setTimeout(() => setShowMasterForm(false), 500)}>
            <input type="hidden" name="_subject" value="磐石系統模板 - 新模主申請" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://f7i6vatmst46g.kimi.page/platform" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-panshi-black mb-1">
                  姓名 *
                </label>
                <input type="text" name="姓名" className="input-panshi" placeholder="您的姓名" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-panshi-black mb-1">
                  電話 *
                </label>
                <input type="tel" name="電話" className="input-panshi" placeholder="聯絡電話" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-panshi-black mb-1">
                電子郵件 *
              </label>
              <input type="email" name="email" className="input-panshi" placeholder="your@email.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-panshi-black mb-1">
                居住地區 *
              </label>
              <select name="居住地區" className="input-panshi">
                <option>請選擇地區</option>
                <option>台北市</option>
                <option>新北市</option>
                <option>桃園市</option>
                <option>台中市</option>
                <option>台南市</option>
                <option>高雄市</option>
                <option>其他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-panshi-black mb-1">
                模板施工經驗 *
              </label>
              <select name="模板施工經驗" className="input-panshi">
                <option>請選擇年資</option>
                <option>1 年以下</option>
                <option>1-3 年</option>
                <option>3-5 年</option>
                <option>5-10 年</option>
                <option>10 年以上</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-panshi-black mb-1">
                相關證照
              </label>
              <input type="text" name="相關證照" className="input-panshi" placeholder="請列出您持有的相關證照" />
            </div>
            <div>
              <label className="block text-sm font-medium text-panshi-black mb-1">
                其他說明
              </label>
              <textarea name="其他說明" className="input-panshi h-24" placeholder="有任何想補充的資訊..." />
            </div>
            <button type="submit" className="btn-panshi-primary w-full">
              提交申請
            </button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Partner Dialog */}
      <Dialog open={showPartnerForm} onOpenChange={setShowPartnerForm}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold">
              建商合作洽詢
            </DialogTitle>
            <DialogDescription>
              告訴我們您的需求，我們將提供專屬解決方案
            </DialogDescription>
          </DialogHeader>
          <form action="https://formsubmit.co/adolph0306@gmail.com" method="POST" target="_blank" className="space-y-4 mt-4" onSubmit={() => setTimeout(() => setShowPartnerForm(false), 500)}>
            <input type="hidden" name="_subject" value="磐石系統模板 - 新建商合作洽詢" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://f7i6vatmst46g.kimi.page/platform" />
            <div>
              <label className="block text-sm font-medium text-panshi-black mb-1">
                公司名稱 *
              </label>
              <input type="text" name="公司名稱" className="input-panshi" placeholder="貴公司名稱" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-panshi-black mb-1">
                  聯絡人姓名 *
                </label>
                <input type="text" name="聯絡人姓名" className="input-panshi" placeholder="聯絡人姓名" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-panshi-black mb-1">
                  職稱
                </label>
                <input type="text" name="職稱" className="input-panshi" placeholder="例如：專案經理" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-panshi-black mb-1">
                聯絡電話 *
              </label>
              <input type="tel" name="聯絡電話" className="input-panshi" placeholder="聯絡電話" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-panshi-black mb-1">
                電子郵件 *
              </label>
              <input type="email" name="email" className="input-panshi" placeholder="company@email.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-panshi-black mb-1">
                專案類型
              </label>
              <select name="專案類型" className="input-panshi">
                <option>請選擇專案類型</option>
                <option>住宅大樓</option>
                <option>商業大樓</option>
                <option>工業廠房</option>
                <option>公共工程</option>
                <option>其他</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-panshi-black mb-1">
                需求說明
              </label>
              <textarea name="需求說明" className="input-panshi h-24" placeholder="請簡述您的專案需求..." />
            </div>
            <button type="submit" className="btn-panshi-primary w-full">
              送出洽詢
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
