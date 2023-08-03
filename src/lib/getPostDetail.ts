export interface PostDetail {
    content: string;
}

export default async function getPostDetail(slug: string): Promise<PostDetail> {
    const response = await fetch(`${process.env.URL}/.netlify/functions/getPostDetailMarkdown?slug=${slug}`);
    console.log(response);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    const postDetail :PostDetail = {
        content :data.content, 
    }
    console.log(postDetail);
    return postDetail;
}
