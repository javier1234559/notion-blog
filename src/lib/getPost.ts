export interface Post {
    id: string;
    title: string;
    date: string;
    description: string;
    assign: string;
    imageUrl: string;
    slug: string;
}


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
        assign: result.properties.Assign.people[0]?.name ?? "Unassigned",
        description: result.properties.Description.rich_text[0]?.plain_text ?? "",
        imageUrl: result.properties.Image.files[0]?.file.url ?? "", // Provide a default image URL if not available
        slug: result.properties.Slug.rich_text[0]?.plain_text ?? "",
    }));

    return posts;
}
