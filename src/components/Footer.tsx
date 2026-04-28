import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  company: [
    { name: '關於磐石', path: '/about' },
    { name: '核心團隊', path: '/about#team' },
    { name: '發展歷程', path: '/about#history' },
    { name: '新聞中心', path: '/about#news' },
  ],
  solutions: [
    { name: '牆體模板', path: '/solutions#wall' },
    { name: '樓板模板', path: '/solutions#slab' },
    { name: '爬升模板', path: '/solutions#climbing' },
    { name: '特殊結構', path: '/solutions#special' },
  ],
  platform: [
    { name: '模主制度', path: '/platform' },
    { name: '加入模主', path: '/platform#join' },
    { name: '建商合作', path: '/platform#partner' },
    { name: '常見問題', path: '/platform#faq' },
  ],
  resources: [
    { name: '技術文件', path: '/technology' },
    { name: 'ESG報告', path: '/esg' },
    { name: '案例研究', path: '/projects' },
    { name: '投資者關係', path: '/investors' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-panshi-black text-white">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-panshi-lime rounded-lg flex items-center justify-center">
                <span className="text-panshi-black font-display font-bold text-xl">
                  磐
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-xl leading-tight">
                  磐石系統模板
                </span>
                <span className="block text-xs text-panshi-light font-medium">
                  PanShi Smart Formwork
                </span>
              </div>
            </Link>
            <p className="text-panshi-light text-sm leading-relaxed mb-6 max-w-sm">
              建築業的作業系統。以 AIoT 技術革新傳統模板工程，
              建立智慧營建新標準。
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-panshi-dark flex items-center justify-center hover:bg-panshi-lime hover:text-panshi-black transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-panshi-dark flex items-center justify-center hover:bg-panshi-lime hover:text-panshi-black transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-panshi-dark flex items-center justify-center hover:bg-panshi-lime hover:text-panshi-black transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-display font-semibold text-white mb-4">公司</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-panshi-light hover:text-panshi-lime transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-white mb-4">解決方案</h4>
                <ul className="space-y-3">
                  {footerLinks.solutions.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-panshi-light hover:text-panshi-lime transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-white mb-4">平台</h4>
                <ul className="space-y-3">
                  {footerLinks.platform.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-panshi-light hover:text-panshi-lime transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-white mb-4">資源</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-panshi-light hover:text-panshi-lime transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-panshi-gray">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-panshi-dark flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-panshi-lime" />
              </div>
              <div>
                <p className="text-xs text-panshi-light mb-1">總部地址</p>
                <p className="text-sm text-white">970 花蓮市中華路186號</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-panshi-dark flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-panshi-lime" />
              </div>
              <div>
                <p className="text-xs text-panshi-light mb-1">聯絡電話</p>
                <p className="text-sm text-white">03-8333164</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-panshi-dark flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-panshi-lime" />
              </div>
              <div>
                <p className="text-xs text-panshi-light mb-1">電子郵件</p>
                <p className="text-sm text-white">adolph0306@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-panshi-gray">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-panshi-light">
              © 2024 磐石系統模板 PanShi Smart Formwork. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-sm text-panshi-light hover:text-white transition-colors duration-300"
              >
                隱私政策
              </Link>
              <Link
                to="/terms"
                className="text-sm text-panshi-light hover:text-white transition-colors duration-300"
              >
                使用條款
              </Link>
              <Link
                to="/sitemap"
                className="text-sm text-panshi-light hover:text-white transition-colors duration-300"
              >
                網站地圖
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
