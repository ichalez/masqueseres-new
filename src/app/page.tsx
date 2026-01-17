import { Hero } from "@/components/Hero";
import { EpisodeCard } from "@/components/EpisodeCard";
import { BlogCard } from "@/components/BlogCard";
import { EpisodeService, BlogService } from "@/lib/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const revalidate = 60; // Actualizar cada minuto

export default async function Home() {
  const latestEpisodes = await EpisodeService.getLatest(3);
  const latestPosts = await BlogService.getLatest(2);

  // Use the first episode as featured for the Hero
  const featuredEpisode = latestEpisodes[0];

  return (
    <div className="pb-24">
      {featuredEpisode ? (
        <Hero featured={featuredEpisode} />
      ) : (
        <div className="py-20 text-center">
          <p className="text-slate-400">Cargando contenido...</p>
        </div>
      )}

      {/* Featured Episodes Grid */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Últimos <span className="text-cyan-600 italic">Episodios</span></h2>
              <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
            </div>
            <Link href="/episodios" className="text-cyan-600 font-bold text-sm hover:underline flex items-center gap-2">
              Ver todos los episodios
              <ArrowRight size={16} />
            </Link>
          </div>

          {latestEpisodes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {latestEpisodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 text-center rounded-3xl border border-slate-100 italic text-slate-400">
              No hay episodios publicados todavía.
            </div>
          )}
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Nuestra <span className="text-cyan-600 italic">Bitácora</span></h2>
              <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
            </div>
            <Link href="/blog" className="text-cyan-600 font-bold text-sm hover:underline flex items-center gap-2">
              Ver todos los artículos
              <ArrowRight size={16} />
            </Link>
          </div>

          {latestPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {latestPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-slate-50 p-12 text-center rounded-3xl border border-slate-100 italic text-slate-400">
              No hay artículos en el blog todavía.
            </div>
          )}
        </div>
      </section>

      {/* AI Assistant Promo */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">¿Tienes dudas sobre lo que has escuchado?</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Nuestro asistente de Inteligencia Artificial ha analizado cada episodio para ayudarte a profundizar en los temas tratados y encontrar respuestas a tus inquietudes.
            </p>
            <Link href="/asistente" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-cyan-50 transition-colors">
              Hablar con el Asistente AI
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
