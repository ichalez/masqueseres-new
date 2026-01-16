import { supabase } from './supabase';
import { Episode, BlogPost, Guest } from '@/types/database';

export const EpisodeService = {
    async getAll() {
        const { data, error } = await supabase
            .from('episodes')
            .select('*, guests(*)')
            .order('published_at', { ascending: false });

        if (error) {
            console.error('Error fetching episodes:', error);
            return [];
        }
        return data as (Episode & { guests: Guest[] })[];
    },

    async getLatest(limit = 3) {
        const { data, error } = await supabase
            .from('episodes')
            .select('*, guests(*)')
            .order('published_at', { ascending: false })
            .limit(limit);

        if (error) {
            console.error('Error fetching latest episodes:', error);
            return [];
        }
        return data as (Episode & { guests: Guest[] })[];
    },

    async getById(id: string) {
        const { data, error } = await supabase
            .from('episodes')
            .select('*, guests(*)')
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error fetching episode by id:', error);
            return null;
        }
        return data as (Episode & { guests: Guest[] });
    }
};

export const BlogService = {
    async getAll() {
        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .order('published_at', { ascending: false });

        if (error) {
            console.error('Error fetching blog posts:', error);
            return [];
        }
        return data as BlogPost[];
    },

    async getLatest(limit = 2) {
        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .order('published_at', { ascending: false })
            .limit(limit);

        if (error) {
            console.error('Error fetching latest blog posts:', error);
            return [];
        }
        return data as BlogPost[];
    },

    async getById(id: string) {
        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error fetching blog post by id:', error);
            return null;
        }
        return data as BlogPost;
    }
};
