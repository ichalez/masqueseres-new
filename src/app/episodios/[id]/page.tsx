import { EpisodeService } from "@/lib/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function EpisodeDetailPage({ params }: PageProps) {
    const { id } = await params;
    const episode = await EpisodeService.getById(id);

    if (!episode) {
        notFound();
    }

    const guest = episode.guests?.[0];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Link
                href="/episodios"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors mb-12 group"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Volver a todos los episodios
            </Link>

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1">
                    <div className="aspect-video w-full rounded-[3rem] overflow-hidden shadow-2xl glow-cyan bg-slate-100 mb-10">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${episode.youtube_id}?autoplay=0`}
                            title={episode.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-xs font-bold text-cyan-600 uppercase tracking-widest">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(episode.published_at).toLocaleDateString()}</span>
                            <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                            <span className="flex items-center gap-1"><Clock size={14} /> {episode.duration} min</span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            {episode.title}
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed font-light">
                            {episode.description}
                        </p>

                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 italic text-slate-600 leading-relaxed">
                            {episode.summary}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="px-8 py-4 bg-[#1DB954] text-white rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-[#1ed760] transition-all hover:scale-105">
                                Escuchar en Spotify
                            </button>
                            <Link
                                href="/asistente"
                                className="px-8 py-4 bg-slate-900 text-white rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-all hover:scale-105"
                            >
                                <Sparkles size={18} />
                                Reflexionar con AI
                            </Link>
                        </div>
                    </div>
                </div>

                {guest && (
                    <aside className="w-full lg:w-80">
                        <div className="sticky top-32 p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl">
                            <h3 className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-6">Invitado Especial</h3>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={guest.photo_url || ''}
                                    alt={guest.name}
                                    className="w-32 h-32 rounded-3xl object-cover shadow-lg border-4 border-white mb-6"
                                />
                                <h4 className="font-serif text-xl font-bold text-slate-900 mb-1">{guest.name}</h4>
                                <p className="text-sm text-slate-500 mb-6">{guest.role}</p>
                                <div className="h-px w-12 bg-slate-100 mb-6"></div>
                                <p className="text-sm text-slate-600 leading-relaxed font-light italic">
                                    "{guest.bio}"
                                </p>
                            </div>
                        </div>
                    </aside>
                )}
            </div>
        </div>
    );
}
