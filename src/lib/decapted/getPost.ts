//THIS FILE IS NOT TYPE SAFE
import { IPost, ICategory } from "@/types/Blogtype";
import { fetchPages } from "@/lib/decapted/notion";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export default async function getI(): Promise<IPost[]> {
    const response: QueryDatabaseResponse = await fetchPages();
    // const data = await response.json();

    const posts: IPost[] = response.results.map((result: any) => ({
        id: result,
        title: result.properties.Title.title[0]?.plain_text ?? "",
        date: result.properties.Date.date?.start ?? "No date",
        author: result.properties.Author.people[0]?.name ?? "Anonymous",
        description: result.properties.Description.rich_text[0]?.plain_text ?? "",
        slug: result.properties.Slug.rich_text[0]?.plain_text ?? "",
        timeToRead: result.properties.TimeToRead.rich_text[0]?.plain_text ?? "",
        category: result.properties.Category.multi_select as ICategory[] ?? [],
    }));

    return posts;
}
