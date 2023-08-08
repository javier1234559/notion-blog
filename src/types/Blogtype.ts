export interface Post {
    id:string;
    title?: string;
    description?: string;
    date?: string;
    author?: string;
    slug: string;
    timeToRead?: string;
    category: Category[];
}

export interface Category {
    id: string;
    name: string;
    color: string;
}

export interface PostDetail {
    title?: string;
    description?: string;
    date?: string;
    author?:string;
    image?: string;
    slug:string;
    timeToRead?:string;
    category: Category[];
    content?: string;
}