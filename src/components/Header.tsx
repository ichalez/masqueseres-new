'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
    const pathname = usePathname();
    const LOGO_URL = "/images/logo.png";

    const navItems = [
        { name: 'Inicio', href: '/' },
        { name: 'Episodios', href: '/episodios' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <header className="sticky top-0 z-50 glass-nav border-b border-cyan-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link
                        href="/"
                        className="flex items-center gap-3 cursor-pointer group"
                    >
                        <img
                            src={LOGO_URL}
                            alt="Más que seres Logo"
                            className="h-12 w-auto group-hover:scale-105 transition-transform"
                        />
                        <div className="hidden sm:block">
                            <span className="font-serif text-xl font-bold text-slate-900 tracking-tight">Más que seres</span>
                            <p className="text-[10px] text-cyan-600 uppercase tracking-widest font-medium leading-tight">Un podcast para la profundidad,<br /> instrospección y conexión humana.</p>
                        </div>
                    </Link>

                    <nav className="flex gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-cyan-600 ${pathname === item.href ? 'text-cyan-600' : 'text-slate-600'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://spotify.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-[#1DB954] text-white rounded-full text-xs font-bold hover:bg-[#1ed760] transition-colors"
                        >
                            Spotify
                        </a>
                        <Link
                            href="/asistente"
                            className="px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
                        >
                            Asistente AI
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
