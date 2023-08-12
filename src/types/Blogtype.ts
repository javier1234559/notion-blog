export interface IPost {
    id:string;
    title?: string;
    description: string;
    date?: string;
    author?: string;
    slug: string;
    timeToRead?: string;
    category: ICategory[];
}

export interface ICategory {
    id: string;
    name: string;
    color: string;
}

export interface IPostDetail {
    title?: string;
    description?: string;
    date?: string;
    author?:string;
    image: string;
    slug:string;
    timeToRead?:string;
    category: ICategory[];
    content?: string;
}