import { extractPostDetail, extractPosts } from "@/types/Apitype";
import { IPostDetail } from "@/types/Blogtype";
import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export async function getPostItem(slug: string): Promise<IPostDetail> {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter: {
            property: "Slug",
            rich_text: {
                equals: slug,
            },
        },
    }).then((res) => res.results[0] as PageObjectResponse | undefined);;

    const posts = await extractPostDetail(response);
    return posts;
}