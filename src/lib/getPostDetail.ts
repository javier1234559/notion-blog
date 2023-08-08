import { PostDetail } from "@/types/Blogtype";


export default async function getPostDetail(slug: string): Promise<PostDetail> {
    const response = await fetch(`${process.env.URL}/.netlify/functions/getPostDetailMarkdown?slug=${slug}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data:PostDetail = await response.json();
    const postDetail: PostDetail = {
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        image: data.image,
        slug: data.slug,
        timeToRead: data.timeToRead,
        category: data.category,
        content: data.content,
    }
    return postDetail;
}
