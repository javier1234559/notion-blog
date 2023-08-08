import { Post ,Category } from "@/types/Blogtype";

export default async function getPost(): Promise<Post[]> {
    const response = await fetch(`${process.env.URL}/.netlify/functions/getPostFunction`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    const posts: Post[] = data.results.map((result: any) => ({
        id: result.id,
        title: result.properties.Title.title[0]?.plain_text ?? "",
        date: result.properties.Date.date?.start ?? "No date",
        author: result.properties.Author.people[0]?.name ?? "Anonymous",
        description: result.properties.Description.rich_text[0]?.plain_text ?? "",
        slug: result.properties.Slug.rich_text[0]?.plain_text ?? "",
        timeToRead: result.properties.TimeToRead.rich_text[0]?.plain_text ?? "",
        category: result.properties.Category.multi_select as Category[] ?? [],
    }));

    return posts;
}
