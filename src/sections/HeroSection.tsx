import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 concrete-texture" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-panshi-lime/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-panshi-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="order-2 lg:order-1 pb-12 lg:pb-0">
            {/* Tag */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-panshi-lime/10 border border-panshi-lime/30 rounded-full mb-6 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 bg-panshi-lime rounded-full animate-pulse" />
              <span className="text-sm font-medium text-panshi-black">
                Construction OS 2.0
              </span>
            </div>

            {/* Main Title */}
            <h1
              className={`section-title mb-6 transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="block">建築業的</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-panshi-lime to-panshi-blue">
                作業系統
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg md:text-xl text-panshi-medium max-w-lg mb-8 leading-relaxed transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              磐石系統模板以 AIoT 技術重新定義模板工程。
              從材料到數據資產，從工班到智慧平台。
            </p>

            {/* Stats */}
            <div
              className={`flex flex-wrap gap-8 mb-10 transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div>
                <div className="stat-number">20%</div>
                <div className="text-sm text-panshi-medium">成本節省</div>
              </div>
              <div>
                <div className="stat-number">15%</div>
                <div className="text-sm text-panshi-medium">工期縮短</div>
              </div>
              <div>
                <div className="stat-number">19%</div>
                <div className="text-sm text-panshi-medium">人力減少</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link
                to="/solutions"
                className="btn-panshi-primary group"
              >
                探索解決方案
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/platform"
                className="btn-panshi-outline"
              >
                加入模主平台
              </Link>
              <button className="w-12 h-12 rounded-full border-2 border-panshi-cement flex items-center justify-center hover:border-panshi-lime hover:bg-panshi-lime/10 transition-all duration-300">
                <Play className="w-5 h-5 text-panshi-black ml-0.5" />
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div
            className={`order-1 lg:order-2 relative transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-structural">
                <img
                  src="/images/hero-main.jpg"
                  alt="磐石系統模板 - 工地現場施工"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-panshi-black/30 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-panshi-medium mb-1">智能監測中</p>
                      <p className="text-sm font-semibold text-panshi-black">智慧營建建案</p>
                    </div>
                    <div className="w-10 h-10 bg-panshi-lime rounded-lg flex items-center justify-center">
                      <span className="text-panshi-black font-bold text-xs">AI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-panshi-lime rounded-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-panshi-surface rounded-xl -z-10" />
              
              {/* Data Points */}
              <div className="absolute top-8 -left-8 glass rounded-lg p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-panshi-lime/20 rounded-lg flex items-center justify-center">
                    <span className="text-panshi-lime text-xs font-bold">RFID</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-panshi-black">2,847</p>
                    <p className="text-[10px] text-panshi-medium">組件追蹤中</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -right-4 glass rounded-lg p-3 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-panshi-blue/20 rounded-lg flex items-center justify-center">
                    <span className="text-panshi-blue text-xs font-bold">CO₂</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-panshi-black">-32%</p>
                    <p className="text-[10px] text-panshi-medium">碳排放減少</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs text-panshi-medium">向下滾動</span>
        <ChevronDown className="w-5 h-5 text-panshi-medium animate-bounce" />
      </div>
    </section>
  );
}
