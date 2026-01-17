'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AssistantPage() {
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
        { role: 'assistant', text: 'Bienvenido a tu espacio de introspección. Soy el asistente de "Más que seres". ¿Qué hay hoy en tu mente que te gustaría explorar con mayor profundidad?' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim() || isTyping) return;

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsTyping(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: userMsg }),
            });

            const data = await response.json();

            if (data.error) {
                const errorText = data.details
                    ? `Error: ${data.details}`
                    : "Lo siento, el asistente no está disponible en este momento. Por favor, asegúrate de que la clave de API GEMINI_API_KEY esté correctamente configurada en Vercel.";
                setMessages(prev => [...prev, { role: 'assistant', text: errorText }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', text: data.text }]);
            }
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, { role: 'assistant', text: "Ocurrió un error al conectar con el asistente. Inténtalo de nuevo más tarde." }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col min-h-[calc(100vh-160px)]">
            <div className="mb-8 flex items-center justify-between">
                <Link href="/" className="text-slate-500 hover:text-cyan-600 transition-colors flex items-center gap-2 text-sm font-bold">
                    <ArrowLeft size={16} />
                    Volver al inicio
                </Link>
                <div className="flex items-center gap-2 px-4 py-1.5 bg-cyan-50 text-cyan-600 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    <Sparkles size={12} />
                    IA Generativa
                </div>
            </div>

            <div className="text-center mb-10">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4 italic">Asistente de Introspección</h1>
                <p className="text-slate-500 max-w-lg mx-auto">Un espacio seguro y profundo para reflexionar sobre los temas que tocamos en cada episodio.</p>
            </div>

            <div
                className="flex-1 bg-white border border-slate-100 rounded-[3rem] p-6 md:p-10 mb-8 overflow-y-auto max-h-[600px] shadow-2xl shadow-slate-200/50"
                ref={scrollRef}
            >
                <div className="space-y-8">
                    {messages.map((m, i) => (
                        <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} gap-4`}>
                            {m.role === 'assistant' && (
                                <div className="w-10 h-10 rounded-2xl bg-slate-900 flex-shrink-0 flex items-center justify-center text-white">
                                    <Bot size={20} />
                                </div>
                            )}
                            <div className={`max-w-[80%] p-5 rounded-3xl text-sm leading-relaxed ${m.role === 'user'
                                ? 'bg-cyan-600 text-white rounded-tr-none'
                                : 'bg-slate-50 text-slate-700 rounded-tl-none border border-slate-100'
                                }`}>
                                {m.text}
                            </div>
                            {m.role === 'user' && (
                                <div className="w-10 h-10 rounded-2xl bg-cyan-100 flex-shrink-0 flex items-center justify-center text-cyan-600">
                                    <User size={20} />
                                </div>
                            )}
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start gap-4">
                            <div className="w-10 h-10 rounded-2xl bg-slate-900 flex-shrink-0 flex items-center justify-center text-white">
                                <Bot size={20} />
                            </div>
                            <div className="bg-slate-50 p-5 rounded-3xl rounded-tl-none border border-slate-100 flex gap-1 items-center">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-slate-200 rounded-[2rem] blur opacity-20 transition duration-1000 group-focus-within:opacity-40"></div>
                <div className="relative flex gap-3 p-2 bg-white rounded-[2rem] border border-slate-100 shadow-xl">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Escribe tu reflexión o pregunta aquí..."
                        className="flex-1 px-6 py-4 rounded-2xl focus:outline-none text-slate-900 placeholder:text-slate-400"
                    />
                    <button
                        onClick={handleSend}
                        disabled={isTyping}
                        className="p-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-cyan-600 transition-all disabled:opacity-50 flex items-center justify-center"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
