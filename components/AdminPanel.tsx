import React, { useState, useEffect } from 'react';
import { X, Users, TrendingUp, ShieldCheck, Wallet, Activity, Globe, Zap } from 'lucide-react';

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
}

interface LiveStepProps {
  num: string;
  text: string;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onClose, lang }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'partners' | 'payouts'>('overview');
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
          <AdminNavItem active={activeTab === 'partners'} onClick={() => setActiveTab('partners')} icon={<Users size={18}/>} label="Red de Socios" />
          <AdminNavItem active={activeTab === 'payouts'} onClick={() => setActiveTab('payouts')} icon={<Wallet size={18}/>} label="Finanzas / Pagos" />
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
              {activeTab === 'overview' ? 'Nexora Operations' : activeTab === 'partners' ? 'Partner Management' : 'Global Treasury'}
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Globe size={20} className="text-blue-500" />
            </div>
          </div>
        </header>

        {activeTab === 'overview' && (
          <div className="space-y-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard label="Live Visitors (24h)" value="1" trend="+100%" />
              <StatCard label="Active Referrals" value="0" trend="-" />
              <StatCard label="Estimated Revenue" value="$0 MXN" color="text-slate-500" />
            </div>

            <div className="glass p-10 rounded-[3rem] border border-blue-500/30 bg-blue-600/[0.02] overflow-hidden group relative">
               <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-blue-400">
                      <Zap size={24} className="fill-blue-500/20" />
                      <h3 className="text-3xl font-black uppercase tracking-tighter">Socio Elite: MODO LIVE</h3>
                    </div>
                    <p className="text-slate-400 text-sm max-w-xl leading-relaxed font-medium">
                      {lang === 'ES' ? 'El sistema está listo. Comisiones activas 20%.' : 'System ready. 20% active commissions.'}
                    </p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="glass p-10 rounded-[2.5rem] border border-white/5">
                  <h4 className="text-white font-black mb-6 uppercase text-xs tracking-[0.3em]">Protocolo Activo</h4>
                  <div className="space-y-6">
                    <LiveStep num="1" text="Comparte el link con ?ref=CÓDIGO" />
                    <LiveStep num="2" text="WhatsApp Bridge Auto-pega" />
                    <LiveStep num="3" text="Comisión Automatizada" />
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AdminNavItem: React.FC<AdminNavItemProps> = ({ active, onClick, icon, label }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-500 hover:text-white group'}`}>
    <div className={`${active ? 'text-white' : 'text-slate-600 group-hover:text-blue-400'} transition-colors`}>{icon}</div>
    <span className="text-xs font-black uppercase tracking-widest">{label}</span>
  </button>
);

const StatCard: React.FC<StatCardProps> = ({ label, value, trend, color = "text-white" }) => (
  <div className="glass p-10 rounded-[2.5rem] border border-white/5 flex flex-col justify-between h-44 group hover:border-blue-500/30 transition-all">
    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">{label}</p>
    <div className="flex items-end justify-between">
      <h3 className={`text-4xl font-black ${color} tracking-tighter`}>{value}</h3>
      {trend && <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-lg">{trend}</span>}
    </div>
  </div>
);

const LiveStep: React.FC<LiveStepProps> = ({ num, text }) => (
  <div className="flex items-center gap-4">
    <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-500 font-black text-xs">{num}</div>
    <span className="text-xs font-bold text-slate-400 uppercase tracking-tight">{text}</span>
  </div>
);