'use client';

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/types/database';

interface BlogCardProps {
    post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={post.image_url || ''}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {post.category}
                    </span>
                </div>
            </div>

            <div className="p-8">
                <div className="flex items-center gap-4 py-4 mb-4 border-b border-slate-50">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                        {post.author?.[0]}
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">{post.author}</p>
                        <p className="text-xs text-slate-500">{new Date(post.published_at).toLocaleDateString()}</p>
                    </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors leading-tight">
                    {post.title}
                </h3>

                <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-6">
                    {post.excerpt}
                </p>


                <Link
                    href={`/blog/${post.id}`}
                    className="text-xs font-bold uppercase tracking-widest text-cyan-600 border-b-2 border-cyan-100 pb-1 hover:border-cyan-600 transition-colors"
                >
                    Leer artículo
                </Link>
            </div>
        </div>
    );
};
