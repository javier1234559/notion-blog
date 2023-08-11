import { extractPosts } from "@/types/Apitype";
import { IPost } from "@/types/Blogtype";
import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export async function getListPost(): Promise<IPost[]> {
    const databaseId = process.env.NOTION_DATABASE_ID || "";
    const response: QueryDatabaseResponse = await notion.databases.query({
        database_id: databaseId,
    });
    const posts = await extractPosts(response);
    return posts;
}

