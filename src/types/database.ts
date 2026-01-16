export interface Episode {
    id: string;
    youtube_id: string;
    title: string;
    description: string | null;
    summary: string | null;
    published_at: string;
    duration: string | null;
    thumbnail_url: string | null;
    created_at: string;
}

export interface Guest {
    id: string;
    episode_id: string;
    name: string;
    role: string | null;
    photo_url: string | null;
    bio: string | null;
    created_at: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string | null;
    content: string;
    published_at: string;
    author: string | null;
    image_url: string | null;
    category: string | null;
    created_at: string;
}

export interface Database {
    public: {
        Tables: {
            episodes: {
                Row: Episode;
                Insert: Omit<Episode, 'id' | 'created_at' | 'published_at'>;
                Update: Partial<Omit<Episode, 'id' | 'created_at'>>;
            };
            guests: {
                Row: Guest;
                Insert: Omit<Guest, 'id' | 'created_at'>;
                Update: Partial<Omit<Guest, 'id' | 'created_at'>>;
            };
            blog_posts: {
                Row: BlogPost;
                Insert: Omit<BlogPost, 'id' | 'created_at' | 'published_at'>;
                Update: Partial<Omit<BlogPost, 'id' | 'created_at'>>;
            };
        };
    };
}
