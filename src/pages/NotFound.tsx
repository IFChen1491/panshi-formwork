import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 bg-panshi-black flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-panshi-lime text-8xl font-display font-bold mb-4">404</div>
        <h1 className="text-4xl font-display font-bold text-white mb-4">
          找不到此頁面
        </h1>
        <p className="text-panshi-light text-lg mb-8 max-w-md mx-auto">
          您造訪的頁面不存在或已移除。請確認網址是否正確，或返回首頁。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-panshi-lime text-panshi-black font-semibold px-6 py-3 rounded-xl hover:bg-panshi-lime/90 transition-colors"
          >
            <Home className="w-5 h-5" />
            返回首頁
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            上一頁
          </button>
        </div>
      </div>
    </div>
  );
}
