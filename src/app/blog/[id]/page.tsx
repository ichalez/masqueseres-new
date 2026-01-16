import { BlogService } from "@/lib/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
    const { id } = await params;
    const post = await BlogService.getById(id);

    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors mb-12 group"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Volver a la bitácora
            </Link>

            <article className="space-y-12">
                <header className="space-y-8">
                    <div className="flex items-center gap-4">
                        <span className="px-4 py-1 bg-cyan-50 text-cyan-600 rounded-full text-xs font-bold uppercase tracking-widest">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 py-6 border-y border-slate-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-bold">
                                {post.author?.[0]}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">{post.author}</p>
                                <p className="text-xs text-slate-500 uppercase tracking-widest">Autor</p>
                            </div>
                        </div>
                        <div className="h-8 w-px bg-slate-100"></div>
                        <div className="flex items-center gap-2 text-slate-500">
                            <Calendar size={16} />
                            <span className="text-sm">{new Date(post.published_at).toLocaleDateString()}</span>
                        </div>
                    </div>
                </header>

                <div className="aspect-[16/9] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                    <img
                        src={post.image_url || ''}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="prose prose-slate prose-lg max-w-none">
                    <p className="text-xl text-slate-600 leading-relaxed font-light mb-12 italic border-l-4 border-cyan-500 pl-8 py-2">
                        {post.excerpt}
                    </p>

                    <div className="text-slate-700 leading-relaxed space-y-6 text-lg whitespace-pre-wrap">
                        {post.content}
                    </div>

                    <div className="bg-slate-50 p-12 rounded-[3rem] mt-16 border border-slate-100 text-center">
                        <p className="font-serif text-2xl text-slate-600 italic">
                            "La verdadera conexión humana no se encuentra en las similitudes, sino en la profundidad con la que aceptamos nuestras diferencias."
                        </p>
                    </div>
                </div>

                <footer className="pt-12 flex items-center justify-between border-t border-slate-100">
                    <div className="flex gap-4">
                        <button className="p-3 rounded-2xl bg-slate-50 text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                            <Share2 size={20} />
                        </button>
                    </div>
                    <Link href="/blog" className="text-sm font-bold text-cyan-600 hover:underline">
                        Leer más reflexiones
                    </Link>
                </footer>
            </article>
        </div>
    );
}
