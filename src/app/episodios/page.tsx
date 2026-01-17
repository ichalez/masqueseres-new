import { EpisodeCard } from "@/components/EpisodeCard";
import { EpisodeService } from "@/lib/services";

export const revalidate = 60; // Actualizar cada minuto

export default async function EpisodiosPage() {
    const episodes = await EpisodeService.getAll();

    return (
        <div className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full min-h-screen">
            <div className="mb-16">
                <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-slate-900">Archivo de <span className="text-cyan-600 italic">Episodios</span></h1>
                <p className="text-slate-500 max-w-2xl text-lg font-light">
                    Explora todas nuestras conversaciones y descubre nuevas perspectivas sobre la vida y el ser.
                </p>
                <div className="h-1 w-24 bg-cyan-500 rounded-full mt-6"></div>
            </div>

            {episodes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {episodes.map((episode) => (
                        <EpisodeCard key={episode.id} episode={episode} />
                    ))}
                </div>
            ) : (
                <div className="bg-white p-20 text-center rounded-[3rem] border border-slate-100 italic text-slate-400">
                    Aún no hemos publicado episodios en este archivo.
                </div>
            )}
        </div>
    );
}
