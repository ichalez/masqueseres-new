'use client';

import React from 'react';
import Link from 'next/link';
import { Episode } from '@/types/database';

interface EpisodeCardProps {
    episode: Episode;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={episode.thumbnail_url || ''}
                    alt={episode.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-white text-[10px] font-bold">
                    {episode.duration}
                </div>
                <div className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100 duration-300">
                        <svg className="w-6 h-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                </div>
            </div>
            <div className="p-8">
                <p className="text-xs font-bold text-cyan-600 mb-3 tracking-widest uppercase">
                    {new Date(episode.published_at).toLocaleDateString()}
                </p>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                    {episode.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-6">
                    {episode.description}
                </p>
                <Link
                    href={`/episodios/${episode.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:gap-3 transition-all"
                >
                    Ver detalles
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
            </div>
        </div>
    );
};
