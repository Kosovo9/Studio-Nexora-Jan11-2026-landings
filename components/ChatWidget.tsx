
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, Sparkles } from 'lucide-react';
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

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
          <div className="p-4 bg-blue-600 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-white" />
              <p className="text-xs font-bold text-white uppercase tracking-widest">Nexora AI Assistant</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white"><X size={18} /></button>
          </div>

          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#050a14]/60">
            {messages.length === 0 && (
              <p className="text-center py-10 text-slate-500 text-xs italic">
                {lang === 'ES' ? 'Escribe tu duda sobre el paquete Socio Nexora.' : 'Ask anything about the Socio Nexora pack.'}
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-[13px] ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white/5 border border-white/10 text-slate-300'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && <Loader2 size={16} className="text-blue-400 animate-spin mx-auto" />}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
              <button onClick={handleSend} disabled={isLoading} className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white"><Send size={16} /></button>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all transform hover:scale-105 active:scale-95 bg-blue-600 text-white">
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};
