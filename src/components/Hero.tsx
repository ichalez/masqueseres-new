'use client';

import React from 'react';
import Link from 'next/link';
import { Episode, Guest } from '@/types/database';

interface HeroProps {
    featured: Episode & { guests?: Guest[] };
}

export const Hero: React.FC<HeroProps> = ({ featured }) => {
    const guest = featured.guests?.[0];

    return (
        <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-cyan-100 rounded-full blur-[140px] opacity-30 -z-10"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[120px] opacity-40 -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Branding Line */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-8 animate-fade-in">
                        Podcast Oficial
                    </div>
                    <h1 className="font-serif text-6xl md:text-9xl font-bold text-slate-900 tracking-tighter leading-none mb-4">
                        Más que <span className="text-cyan-600 italic">seres</span>.
                    </h1>
                    <p className="text-slate-500 max-w-xl text-lg md:text-xl font-light">
                        Historias, ciencia y filosofía para conectar con nuestra esencia humana en la era digital.
                    </p>
                </div>

                {/* Featured Video Card */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-slate-200 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-white flex flex-col lg:flex-row min-h-[500px]">

                        {/* Left: Video Area */}
                        <div className="w-full lg:w-3/5 relative aspect-video lg:aspect-auto overflow-hidden">
                            <img
                                src={featured.thumbnail_url || ''}
                                alt={featured.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>

                            {/* Floating Badge */}
                            <div className="absolute top-8 left-8 flex gap-3">
                                <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 shadow-lg">
                                    NUEVO EPISODIO
                                </span>
                                <span className="px-4 py-2 bg-cyan-600/90 backdrop-blur-md rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-2">
                                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    VIDEO DISPONIBLE
                                </span>
                            </div>

                            {/* Play Button Overlay */}
                            <Link
                                href={`/episodios/${featured.id}`}
                                className="absolute inset-0 flex items-center justify-center group/play"
                            >
                                <div className="w-24 h-24 bg-white/95 backdrop-blur-xl rounded-full flex items-center justify-center text-cyan-600 shadow-2xl group-hover/play:scale-110 transition-all duration-300">
                                    <svg className="w-12 h-12 translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                            </Link>
                        </div>

                        {/* Right: Info & Guest Area */}
                        <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-between bg-white">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-cyan-600 transition-colors">
                                        {featured.title}
                                    </h2>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        {featured.summary}
                                    </p>
                                </div>

                                {/* Guest Highlight Section */}
                                {guest && (
                                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={guest.photo_url || ''}
                                                alt={guest.name}
                                                className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-white"
                                            />
                                            <div>
                                                <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-1">Invitado Especial</p>
                                                <p className="text-lg font-bold text-slate-900">{guest.name}</p>
                                                <p className="text-sm text-slate-500">{guest.role}</p>
                                            </div>
                                        </div>
                                        {guest.bio && (
                                            <p className="text-sm text-slate-500 leading-relaxed italic">
                                                "{guest.bio}"
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="pt-8 flex items-center justify-between border-t border-slate-100">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span className="text-sm font-medium text-slate-400">{featured.duration} min</span>
                                </div>
                                <Link
                                    href={`/episodios/${featured.id}`}
                                    className="inline-flex items-center gap-3 text-sm font-bold text-slate-900 group/btn"
                                >
                                    Ver episodio completo
                                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover/btn:bg-cyan-600 transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Links / Platforms */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
                    <p className="text-xs font-bold tracking-[0.3em] text-slate-400 w-full text-center mb-4 lg:mb-0 lg:w-auto">DISPONIBLE EN</p>
                    <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="Spotify" className="h-6" />
                    </a>
                    <a href="https://www.youtube.com/@Masqueserespodcast" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" className="h-5" />
                    </a>
                    <a href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Apple_Podcasts_logo.svg" alt="Apple Podcasts" className="h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
};
