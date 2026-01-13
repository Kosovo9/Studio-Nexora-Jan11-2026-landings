import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, Sparkles, ShieldCheck } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { CURRENCY_MXN, CURRENCY_USD, ORIGINAL_MXN, ORIGINAL_USD } from '../constants';

interface ChatWidgetProps {
  lang: 'ES' | 'EN';
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastMessageTime, setLastMessageTime] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // NEXORA ANTI-SPAM: Mínimo 2 segundos entre mensajes
    const now = Date.now();
    if (now - lastMessageTime < 2000) {
      return;
    }
    setLastMessageTime(now);

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = lang === 'ES' 
        ? `Eres el Asistente Virtual de STUDIO NEXORA. Eres elegante y profesional. El paquete 'Socio Nexora' cuesta ${CURRENCY_MXN} (${CURRENCY_USD}). Su valor real es de ${ORIGINAL_MXN}. Entrega en 24h. Sin anticipo inicial para iniciar el diseño. Sé breve.`
        : `You are the STUDIO NEXORA Virtual Assistant. You are elegant and professional. The 'Socio Nexora' pack costs ${CURRENCY_USD} (${CURRENCY_MXN}). Real value is ${ORIGINAL_USD}. 24h delivery. No upfront payment to start the design. Be brief.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })), { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const aiText = response.text || (lang === 'ES' ? "Error de conexión." : "Connection error.");
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: lang === 'ES' ? "Error. Intenta de nuevo." : "Error. Try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-[998] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[400px] h-[500px] glass rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-white/10 animate-in fade-in slide-in-from-bottom-4">
          <div className="p-4 bg-gradient-to-r from-blue-700 to-blue-600 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-white" />
              <p className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Nexora Build OS Chat</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors"><X size={18} /></button>
          </div>

          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#050a14]/90 custom-scrollbar">
            {messages.length === 0 && (
              <div className="text-center py-10 space-y-4">
                <Sparkles size={24} className="text-amber-500/40 mx-auto animate-pulse" />
                <p className="text-slate-500 text-[11px] font-medium italic leading-relaxed px-4">
                  {lang === 'ES' 
                    ? 'Sistema Nexora OS activo. Consulta especificaciones sobre el paquete Elite.' 
                    : 'Nexora OS active. Ask about Elite package specifications.'}
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white/5 border border-white/10 text-slate-300'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <Loader2 size={16} className="text-blue-400 animate-spin" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-[#030711]">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'ES' ? "Escribe un mensaje..." : "Type a message..."}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading} 
                className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 active:scale-95 disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-90 bg-blue-600 text-white relative group"
      >
        <div className="absolute inset-0 rounded-2xl bg-blue-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
        {isOpen ? <X size={28} className="relative z-10" /> : <MessageSquare size={28} className="relative z-10" />}
      </button>
    </div>
  );
};