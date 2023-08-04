export interface PostDetail {
    content: string;
}

export default async function getPostDetail(slug: string): Promise<PostDetail> {
    const response = await fetch(`${process.env.URL}/.netlify/functions/getPostDetailMarkdown?slug=${slug}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const postDetail :PostDetail = {
        content :data.content, 
    }
    return postDetail;
}
