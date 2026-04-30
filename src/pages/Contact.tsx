import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building2, HardHat, HelpCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const contactInfo = [
  {
    icon: MapPin,
    title: '總部地址',
    content: '花蓮市中華路186號',
    subContent: '磐石系統模板總部',
  },
  {
    icon: Phone,
    title: '聯絡電話',
    content: '03-835-7308',
    subContent: '週一至週五 9:00-18:00',
  },
  {
    icon: Mail,
    title: '電子郵件',
    content: 'adolph0306@gmail.com',
    subContent: '24 小時內回覆',
  },
  {
    icon: Clock,
    title: '營業時間',
    content: '週一至週五 9:00-18:00',
    subContent: '例假日休息',
  },
];

const inquiryTypes = [
  { value: 'general', label: '一般諮詢', icon: HelpCircle },
  { value: 'partner', label: '建商合作', icon: Building2 },
  { value: 'master', label: '加入模主', icon: HardHat },
];

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-panshi-black overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <Mail className="w-4 h-4 text-panshi-lime" />
              <span className="text-sm font-medium text-white">聯絡我們</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              開始您的
              <span className="text-panshi-lime">轉型</span>
              <br />
              之旅
            </h1>
            <p className="text-xl text-panshi-light max-w-2xl leading-relaxed">
              無論您有任何問題或合作想法，我們的團隊隨時為您服務。
              填寫表單，我們將在 24 小時內與您聯繫。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-panshi-lime">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-panshi-lime/20 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-panshi-black" />
                </div>
                <h3 className="text-sm text-panshi-medium mb-1">{info.title}</h3>
                <p className="text-lg font-display font-semibold text-panshi-black">
                  {info.content}
                </p>
                <p className="text-sm text-panshi-medium mt-1">
                  {info.subContent}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="section-title mb-6">傳送訊息</h2>
              <p className="text-panshi-medium mb-8">
                填寫以下表單，選擇您感興趣的服務類型
              </p>

              <form className="space-y-6" onSubmit={async (e) => { e.preventDefault(); const form = e.target as HTMLFormElement; const data = new FormData(form); const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data }); if (res.ok) { setShowSuccess(true); form.reset(); } }}>
                <input type="hidden" name="access_key" value="d7f8ab13-7379-4c43-8108-834eb93d4d81" />
                <input type="hidden" name="subject" value="磐石系統模板｜新諮詢表單" />
                <input type="hidden" name="from_name" value="磐石系統模板官網" />
                <input type="hidden" name="redirect" value="false" />
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-panshi-black mb-3">
                    諮詢類型 *
                  </label>
                  <select name="inquiry_type" className="input-panshi" defaultValue="general">
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.label}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-panshi-black mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="input-panshi"
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-panshi-black mb-2">
                      公司名稱
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="input-panshi"
                      placeholder="貴公司名稱"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-panshi-black mb-2">
                      電子郵件 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="input-panshi"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-panshi-black mb-2">
                      聯絡電話 *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="input-panshi"
                      placeholder="+886"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-panshi-black mb-2">
                    訊息內容 *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="input-panshi"
                    placeholder="請描述您的需求或問題..."
                  />
                </div>

                <button type="submit" className="btn-panshi-primary w-full">
                  <Send className="w-4 h-4 mr-2" />
                  送出訊息
                </button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="section-title mb-6">造訪我們</h2>
              <p className="text-panshi-medium mb-8">
                歡迎預約參觀磐石智慧營科大樓，親身體驗智慧模板系統
              </p>

              <div className="relative aspect-[4/3] bg-panshi-surface rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.8!2d121.6039!3d23.9911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34687282a3cb6513%3A0x4e81e4a2a68a2ffa!2z6Iqx6YWs5biC5Lit5Y2W6Lev186O6Jmf!5e0!3m2!1szh-TW!2stw!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>

              <div className="mt-6 p-6 bg-panshi-surface rounded-xl">
                <h3 className="font-display font-semibold text-panshi-black mb-2">
                  交通資訊
                </h3>
                <ul className="space-y-2 text-sm text-panshi-medium">
                  <li>• 花蓮火車站：搭乘計程車約 10 分鐘</li>
                  <li>• 花蓮機場：搭乘計程車約 15 分鐘</li>
                  <li>• 自行開車：中華路沿線，門口設有停車位</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-panshi-surface">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">常見問題</h2>
            <p className="section-subtitle mx-auto">
              找不到答案？歡迎直接與我們聯繫
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: '磐石系統模板適用於哪些類型的建築？',
                a: '磐石系統適用於各種建築類型，包括住宅大樓、商業大樓、工業廠房、公共工程等。我們提供牆體、樓板、爬升等多種模板系統，可根據專案需求客製化解決方案。',
              },
              {
                q: '如何成為認證模主？',
                a: '請填寫模主申請表，通過技能評估與培訓課程後即可成為認證模主。我們歡迎各種經驗程度的模板師傅加入，並提供完整的培訓與認證體系。',
              },
              {
                q: '磐石系統的價格如何計算？',
                a: '價格根據專案規模、模板類型、施工週期等因素計算。我們提供免費的專案評估與報價服務，請聯絡我們的業務團隊了解詳情。',
              },
              {
                q: '如何追蹤專案進度？',
                a: '客戶可透過磐石 SaaS 平台即時追蹤專案進度、模板狀態、施工數據等資訊。我們也提供行動 App，讓您隨時隨地掌握專案狀況。',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-display font-semibold text-panshi-black mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-panshi-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <span className="text-2xl font-display font-bold">
                訊息已送出
              </span>
            </DialogTitle>
            <DialogDescription className="text-center">
              感謝您的來信，我們將在 24 小時內與您聯繫。
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={() => setShowSuccess(false)}
            className="btn-panshi-primary w-full mt-4"
          >
            確定
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
