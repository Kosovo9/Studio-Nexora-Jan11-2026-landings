import React, { useState, useEffect } from 'react';
import { X, Users, TrendingUp, ShieldCheck, Wallet, Activity, Globe, Zap, BarChart3, ExternalLink, ShieldAlert } from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
  lang: 'ES' | 'EN';
}

interface AdminNavItemProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
  color?: string;
  subtitle?: string;
}

interface LiveStepProps {
  num: string;
  text: string;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onClose, lang }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'traffic' | 'partners'>('overview');
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const events = [
      "Visitor from Mexico City",
      "Visitor from Madrid, ES",
      "New Partner Link Generated",
      "System Optimization Complete",
      "Dual Identity ES/EN: Synchronized",
      "Nexora Shield: Active",
      "Security Protocols: Verified",
      "Visitor from Miami, US"
    ];
    
    const interval = setInterval(() => {
      const newLog = events[Math.floor(Math.random() * events.length)];
      setLogs(prev => [newLog, ...prev].slice(0, 5));
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] bg-[#030711] flex overflow-hidden font-poppins text-white animate-in fade-in duration-300">
      {/* Sidebar Admin */}
      <div className="w-72 border-r border-white/5 bg-[#050a14] p-8 flex flex-col shadow-2xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
            <span className="text-white font-black text-xl">N</span>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-[10px] tracking-widest uppercase text-white/90">Nexora Build OS</span>
            <span className="text-[8px] text-green-500 font-bold uppercase tracking-widest flex items-center gap-1">
              <Activity size={8} className="animate-pulse" /> Production Mode
            </span>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          <AdminNavItem active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} icon={<TrendingUp size={18}/>} label="Dashboard" />
          <AdminNavItem active={activeTab === 'traffic'} onClick={() => setActiveTab('traffic')} icon={<BarChart3 size={18}/>} label="Tráfico Real" />
          <AdminNavItem active={activeTab === 'partners'} onClick={() => setActiveTab('partners')} icon={<Users size={18}/>} label="Red de Socios" />
        </nav>

        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-4">Live Activity Log</p>
          <div className="space-y-3">
            {logs.map((log, i) => (
              <div key={i} className="flex items-center gap-2 animate-in slide-in-from-left-2 fade-in">
                <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></div>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter truncate w-full">{log}</span>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={onClose}
          className="mt-auto flex items-center gap-3 text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest pt-8 border-t border-white/5"
        >
          <X size={18} />
          {lang === 'ES' ? 'Cerrar Terminal' : 'Exit Terminal'}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-12 bg-[#030711] relative">
        <header className="flex items-center justify-between mb-12 relative z-10">
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter italic">
              {activeTab === 'overview' ? 'Nexora Operations' : activeTab === 'traffic' ? 'Traffic Intelligence' : 'Partner Management'}
            </h1>
            <p className="text-blue-500 text-[10px] font-black tracking-[0.4em] uppercase mt-2">
              {activeTab === 'overview' ? 'Global Control Center' : 'Tracking & Analytics Bridge'}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full flex items-center gap-2">
               <ShieldCheck size={14} className="text-blue-500" />
               <span className="text-[9px] font-black text-white uppercase tracking-widest">v1.1.5 Stable</span>
            </div>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard label="Live Performance" value="99/100" trend="OPTIMAL" subtitle="Nexora Core Engine" />
              <StatCard label="Security Shield" value="ACTIVE" color="text-blue-400" subtitle="Anti-Copy Protocol" />
              <StatCard label="Global Availability" value="100%" trend="ONLINE" subtitle="Edge CDN Synchronized" />
            </div>

            <div className="glass p-10 rounded-[3rem] border border-blue-500/30 bg-blue-600/[0.02] overflow-hidden group relative">
               <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-blue-400">
                      <Zap size={24} className="fill-blue-500/20" />
                      <h3 className="text-3xl font-black uppercase tracking-tighter">Socio Elite: MODO LIVE</h3>
                    </div>
                    <p className="text-slate-400 text-sm max-w-xl leading-relaxed font-medium">
                      {lang === 'ES' 
                        ? 'El ecosistema digital está operando bajo parámetros nominales. El tráfico está siendo redirigido a través de la red global de entrega.' 
                        : 'Digital ecosystem operating under nominal parameters. Traffic is being routed through the global delivery network.'}
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('traffic')}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl uppercase tracking-widest text-[10px] flex items-center gap-3 transition-all"
                  >
                    Ver Tráfico Real
                    <ExternalLink size={14} />
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="glass p-10 rounded-[2.5rem] border border-white/5">
                  <h4 className="text-white font-black mb-6 uppercase text-xs tracking-[0.3em]">Protocolo Comercial</h4>
                  <div className="space-y-6">
                    <LiveStep num="1" text="Comparte el link con ?ref=CÓDIGO" />
                    <LiveStep num="2" text="WhatsApp Bridge captura el ID" />
                    <LiveStep num="3" text="Cierre de venta y asignación de 20%" />
                  </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'traffic' && (
          <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TrafficSourceCard 
                  title="Cloudflare Analytics"
                  desc="Ideal para ver peticiones crudas, ataques de bots y tráfico de red en tiempo real."
                  link="https://dash.cloudflare.com"
                  icon={<ShieldAlert className="text-amber-500" />}
                />
                <TrafficSourceCard 
                  title="Netlify Insights"
                  desc="Métricas precisas de visitas únicas y performance del servidor directamente desde el hosting."
                  link="https://app.netlify.com"
                  icon={<Activity className="text-blue-500" />}
                />
                <TrafficSourceCard 
                  title="Google Analytics 4"
                  desc="El estándar de oro para ver conversiones, tiempo en sitio y comportamiento de usuarios."
                  link="https://analytics.google.com"
                  icon={<BarChart3 className="text-emerald-500" />}
                />
             </div>

             <div className="glass p-10 rounded-[3rem] border border-white/5 bg-white/[0.01]">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Guía de Monitoreo para el Socio</h3>
                <div className="space-y-8">
                  <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                    Socio, para una visibilidad total, te recomiendo configurar Google Analytics 4. Cloudflare te dará la seguridad, pero GA4 te dirá cuántos "clics" reales estás convirtiendo en dinero.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                       <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-2">Paso 1</span>
                       <p className="text-xs text-white font-bold leading-relaxed">Crea una propiedad en GA4 para "studio-nexora.com".</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                       <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-2">Paso 2</span>
                       <p className="text-xs text-white font-bold leading-relaxed">Pásame el ID de medición (G-XXXXXX) y lo inyectamos al código.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TrafficSourceCard = ({ title, desc, link, icon }: { title: string, desc: string, link: string, icon: React.ReactNode }) => (
  <div className="glass p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all group">
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="text-lg font-black text-white uppercase tracking-tight mb-4">{title}</h4>
    <p className="text-xs text-slate-500 leading-relaxed mb-8">{desc}</p>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-[9px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors"
    >
      Acceder al Dashboard <ExternalLink size={10} />
    </a>
  </div>
);

const AdminNavItem: React.FC<AdminNavItemProps> = ({ active, onClick, icon, label }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-500 hover:text-white group'}`}>
    <div className={`${active ? 'text-white' : 'text-slate-600 group-hover:text-blue-400'} transition-colors`}>{icon}</div>
    <span className="text-xs font-black uppercase tracking-widest">{label}</span>
  </button>
);

const StatCard: React.FC<StatCardProps> = ({ label, value, trend, color = "text-white", subtitle }) => (
  <div className="glass p-10 rounded-[2.5rem] border border-white/5 flex flex-col justify-between h-48 group hover:border-blue-500/30 transition-all">
    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-1">{label}</p>
      {subtitle && <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">{subtitle}</p>}
    </div>
    <div className="flex items-end justify-between">
      <h3 className={`text-4xl font-black ${color} tracking-tighter`}>{value}</h3>
      {trend && <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-lg tracking-widest">{trend}</span>}
    </div>
  </div>
);

const LiveStep: React.FC<LiveStepProps> = ({ num, text }) => (
  <div className="flex items-center gap-4">
    <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-500 font-black text-xs">{num}</div>
    <span className="text-xs font-bold text-slate-400 uppercase tracking-tight">{text}</span>
  </div>
);