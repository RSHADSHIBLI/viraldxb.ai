import React, { useState } from 'react';
import { 
  Share2, 
  Video, 
  Sparkles, 
  Wand2, 
  ArrowRight, 
  Camera, 
  MapPin, 
  Image as ImageIcon,
  Cpu,
  Zap,
  ChevronRight,
  Play,
  Shirt,
  Music,
  Trophy,
  Crown,
  Layers,
  Heart,
  Eye,
  Users
} from 'lucide-react';

const LuxuriousAIStudio = () => {
  const [lang, setLang] = useState('ar');
  const [selectedLocation, setSelectedLocation] = useState('burj');
  const [selectedQuality, setSelectedQuality] = useState('cinematic');
  const [selectedOutfit, setSelectedOutfit] = useState('formal');
  const [selectedAudio, setSelectedAudio] = useState('epic');

  const t = {
    ar: {
      dir: 'rtl',
      brand: 'VIRALDXB',
      heroTag: 'الجيل الثالث من محركات الـ AI',
      heroTitle: 'اصنع واقعك السينمائي في دبي',
      heroDesc: 'منصة احترافية تدمج بين تصوير الدرون، تغيير الملابس بالذكاء الاصطناعي، والهندسة الصوتية المحيطة.',
      uploadPhoto: 'ارفع صورتك (AI Face Swap)',
      chooseLocation: 'موقع التصوير المرجعي',
      chooseQuality: 'معالجة الإضاءة والظلال',
      wardrobe: 'الخزانة الرقمية (AI Wardrobe)',
      audio: 'الموسيقى التصويرية والبيئة',
      generateBtn: 'توليد الفيديو النهائي',
      previewTitle: 'استوديو المعاينة الحيّة',
      exportTitle: 'تصدير للمنصات العالمية',
      galleryTitle: 'تحف المبدعين (Elite Gallery)',
      galleryDesc: 'شاهد كيف حوّل المبدعون صورهم إلى لقطات سينمائية عالمية.',
      tryStyle: 'تجربة هذا النمط',
      locations: {
        burj: { name: 'قمة برج خليفة', desc: 'نزول رأسي من ارتفاع 828 متر مع تأثيرات رياح واقعية.' },
        fountain: { name: 'نوافير دبي مول', desc: 'دوران 360 درجة مع مزامنة كاملة لحركة المياه.' }
      },
      outfits: {
        formal: 'بدلة رسمية / فستان سهرة',
        traditional: 'زي وطني فاخر',
        casual: 'أزياء عصرية (Casual)'
      },
      audios: {
        epic: 'أوركسترا سينمائية',
        ambient: 'أصوات طبيعية هادئة',
        modern: 'إيقاعات دبي الحديثة'
      },
      qualities: {
        cinematic: 'Golden Hour (4K)',
        standard: 'Blue Hour (HD)',
        vlog: 'Daylight (Vlog)'
      },
      status: 'معالج NVIDIA H100 يعمل الآن...',
      footer: '© 2026 VIRALDXB-AI. الخيار الأول للمشاهير وصناع المحتوى.'
    },
    en: {
      dir: 'ltr',
      brand: 'VIRALDXB',
      heroTag: 'Next-Gen AI Rendering',
      heroTitle: 'Create Your Cinematic Reality',
      heroDesc: 'Professional platform merging drone footage, AI clothing swap, and spatial audio engineering.',
      uploadPhoto: 'Upload Photo (AI Face Swap)',
      chooseLocation: 'Reference Location',
      chooseQuality: 'Lighting & Shaders',
      wardrobe: 'AI Digital Wardrobe',
      audio: 'Soundscape & Music',
      generateBtn: 'Generate Masterpiece',
      previewTitle: 'Live Preview Studio',
      exportTitle: 'One-Click Viral Export',
      galleryTitle: 'Masterpiece Gallery',
      galleryDesc: 'See how creators transformed their photos into world-class cinema.',
      tryStyle: 'Try This Style',
      locations: {
        burj: { name: 'Burj Khalifa Peak', desc: 'Vertical descent from 828m with realistic wind physics.' },
        fountain: { name: 'Dubai Fountains', desc: '360 degree orbit with water synchronization.' }
      },
      outfits: {
        formal: 'Black Tie / Evening Gown',
        traditional: 'Premium Heritage',
        casual: 'High-End Streetwear'
      },
      audios: {
        epic: 'Cinematic Orchestra',
        ambient: 'Natural Ambience',
        modern: 'Modern Dubai Beats'
      },
      qualities: {
        cinematic: 'Golden Hour (4K)',
        standard: 'Blue Hour (HD)',
        vlog: 'Daylight (Vlog)'
      },
      status: 'NVIDIA H100 Cluster Active...',
      footer: '© 2026 VIRALDXB-AI. The Choice of Influencers.'
    }
  };

  const galleryItems = [
    { id: 1, name: 'Ahmed K.', location: 'Burj Khalifa', likes: '12.4K', views: '150K', style: 'Formal' },
    { id: 2, name: 'Sara L.', location: 'Dubai Fountain', likes: '8.9K', views: '92K', style: 'Heritage' },
    { id: 3, name: 'Marcus G.', location: 'Burj Khalifa', likes: '24.1K', views: '310K', style: 'Casual' },
    { id: 4, name: 'Elena V.', location: 'Dubai Fountain', likes: '15.2K', views: '205K', style: 'Evening Gown' },
  ];

  const current = t[lang];

  return (
    <div className="min-h-screen bg-[#020202] text-zinc-100 font-sans antialiased selection:bg-purple-500/30 overflow-x-hidden" dir={current.dir}>
      {/* Premium Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-5%] w-[60%] h-[60%] bg-purple-600/5 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-blue-600/5 blur-[180px] rounded-full" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/70 border-b border-white/[0.03] px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-11 h-11 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/20 group-hover:scale-105 transition-all">
            <Crown className="text-white w-6 h-6" />
          </div>
          <span className="font-black text-2xl text-white tracking-tighter">
            {current.brand}<span className="text-purple-500">AI</span>
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-1.5 rounded-full">
             <Trophy size={14} className="text-yellow-500" />
             <span className="text-[10px] font-black text-yellow-500 tracking-widest uppercase">Elite Member</span>
          </div>
          <div className="flex bg-white/5 border border-white/10 p-1 rounded-full">
            <button onClick={() => setLang('ar')} className={`px-5 py-1.5 text-[10px] font-black rounded-full transition-all ${lang === 'ar' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}>AR</button>
            <button onClick={() => setLang('en')} className={`px-5 py-1.5 text-[10px] font-black rounded-full transition-all ${lang === 'en' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}>EN</button>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-6 pt-16 pb-32">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-zinc-400 text-[10px] font-black mb-8 tracking-[0.2em] uppercase">
            <Layers size={14} />
            {current.heroTag}
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
            {current.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto font-medium">
            {current.heroDesc}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start mb-32">
          {/* Controls - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-zinc-900/30 backdrop-blur-3xl border border-white/[0.05] rounded-[3rem] p-10 shadow-2xl transition-all hover:border-white/10">
              <form className="space-y-10">
                {/* Upload Section */}
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2">
                     <ImageIcon size={14} /> {current.uploadPhoto}
                  </label>
                  <div className="w-full h-48 border-2 border-dashed border-white/5 rounded-[2rem] flex flex-col items-center justify-center gap-3 bg-white/[0.01] hover:bg-white/[0.03] hover:border-purple-500/20 transition-all cursor-pointer group">
                    <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Camera className="text-zinc-400" size={24} />
                    </div>
                    <span className="text-[11px] text-zinc-600 font-bold uppercase tracking-widest">Select Image</span>
                  </div>
                </div>

                {/* Grid for Options */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2">
                       <Shirt size={14} /> {current.wardrobe}
                    </label>
                    <div className="space-y-2">
                      {Object.entries(current.outfits).map(([id, label]) => (
                        <button key={id} type="button" onClick={() => setSelectedOutfit(id)} className={`w-full p-4 rounded-2xl border text-start text-xs font-bold transition-all ${selectedOutfit === id ? 'bg-white text-black border-white' : 'bg-white/5 border-white/5 text-zinc-500 hover:border-white/10'}`}>
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2">
                       <Music size={14} /> {current.audio}
                    </label>
                    <div className="space-y-2">
                      {Object.entries(current.audios).map(([id, label]) => (
                        <button key={id} type="button" onClick={() => setSelectedAudio(id)} className={`w-full p-4 rounded-2xl border text-start text-xs font-bold transition-all ${selectedAudio === id ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-white/5 border-white/5 text-zinc-500 hover:border-white/10'}`}>
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button type="submit" className="group w-full py-7 bg-white text-black font-black rounded-[2rem] text-xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] flex items-center justify-center gap-4 transition-all hover:bg-zinc-200 active:scale-95">
                  {current.generateBtn}
                  <ArrowRight size={24} className={`${lang === 'ar' ? 'rotate-180' : ''} group-hover:translate-x-2 transition-transform`} />
                </button>
              </form>
            </div>
          </div>

          {/* Preview & Export - 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-[3rem] p-8 md:p-10 sticky top-28">
              <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                <Video size={20} className="text-purple-500" />
                {current.previewTitle}
              </h3>

              <div className="aspect-[9/16] md:aspect-video w-full bg-zinc-900 rounded-[2rem] overflow-hidden relative mb-10 border border-white/10 group shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10" />
                 <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 transition-transform">
                      <Play fill="white" size={32} />
                    </div>
                 </div>
                 <div className="absolute bottom-6 left-6 right-6 z-30">
                    <div className="flex items-center gap-2 mb-3">
                       <span className="px-2 py-0.5 bg-purple-600 rounded text-[8px] font-black uppercase">Active Style</span>
                       <span className="text-[10px] text-zinc-400 font-bold tracking-widest uppercase">{current.locations[selectedLocation].name}</span>
                    </div>
                    <p className="text-sm text-white font-bold mb-1 italic">"{current.heroTitle}"</p>
                    <p className="text-[10px] text-zinc-500 leading-relaxed">{current.locations[selectedLocation].desc}</p>
                 </div>
              </div>

              <div className="space-y-4">
                 <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">{current.exportTitle}</p>
                 <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-3 py-4 bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-2xl text-[10px] font-black text-white shadow-xl shadow-red-500/10 hover:scale-105 transition-transform">
                       <Share2 size={16} /> INSTAGRAM
                    </button>
                    <button className="flex items-center justify-center gap-3 py-4 bg-white text-black rounded-2xl text-[10px] font-black hover:scale-105 transition-transform">
                       <Video size={16} /> TIKTOK
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Gallery Section */}
        <section className="pt-20 border-t border-white/5">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">{current.galleryTitle}</h2>
              <p className="text-zinc-500 text-lg font-medium">{current.galleryDesc}</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryItems.map((item) => (
                <div key={item.id} className="group relative bg-zinc-900/40 border border-white/[0.03] rounded-[2.5rem] overflow-hidden hover:border-purple-500/30 transition-all">
                   <div className="aspect-[9/16] bg-zinc-800 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                      {/* Play Button Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-transform">
                            <Play fill="black" size={20} />
                         </div>
                      </div>
                      
                      <div className="absolute bottom-5 left-5 right-5 space-y-3">
                         <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center font-bold text-[10px] text-white">
                               {item.name[0]}
                            </div>
                            <span className="text-xs font-bold text-white">{item.name}</span>
                         </div>
                         <div className="flex items-center justify-between text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                            <div className="flex items-center gap-1"><Heart size={12} className="text-red-500" /> {item.likes}</div>
                            <div className="flex items-center gap-1"><Eye size={12} /> {item.views}</div>
                         </div>
                         <button className="w-full py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-[10px] font-black text-white hover:bg-white hover:text-black transition-all">
                            {current.tryStyle}
                         </button>
                      </div>
                   </div>
                </div>
              ))}
           </div>
           
           <div className="mt-16 flex justify-center">
              <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-xs font-black tracking-[0.2em] uppercase hover:bg-white/10 transition-all flex items-center gap-3">
                 <Users size={16} /> Explore All Creators
              </button>
           </div>
        </section>
      </main>
      
      <footer className="border-t border-white/[0.03] py-16 px-6 text-center text-zinc-600">
        <div className="flex justify-center gap-8 mb-6 opacity-30 grayscale">
           <span className="text-[10px] font-black tracking-tighter italic">NVIDIA</span>
           <span className="text-[10px] font-black tracking-tighter italic">PYTORCH</span>
           <span className="text-[10px] font-black tracking-tighter italic">OPENAI</span>
        </div>
        <p className="text-xs font-bold tracking-widest uppercase">{current.footer}</p>
      </footer>
    </div>
  );
};

export default LuxuriousAIStudio;
