import { BlogCard } from "@/components/BlogCard";
import { BlogService } from "@/lib/services";

export const revalidate = 60; // Actualizar cada minuto

export default async function BlogPage() {
    const posts = await BlogService.getAll();

    return (
        <div className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full min-h-screen">
            <div className="mb-16">
                <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-slate-900">Nuestra <span className="text-cyan-600 italic">Bitácora</span></h1>
                <p className="text-slate-500 max-w-2xl text-lg font-light">
                    Reflexiones profundas, artículos y pensamientos sobre el camino del autoconocimiento.
                </p>
                <div className="h-1 w-24 bg-cyan-500 rounded-full mt-6"></div>
            </div>

            {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="bg-white p-20 text-center rounded-[3rem] border border-slate-100 italic text-slate-400">
                    Aún no hay reflexiones publicadas en nuestra bitácora.
                </div>
            )}
        </div>
    );
}
