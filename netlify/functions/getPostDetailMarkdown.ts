
import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Client } from "@notionhq/client";
import { PostDetail } from "@/lib/getPostDetail";
import { NotionToMarkdown } from "notion-to-md";
import { Category } from "@/lib/getPost";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

const fetchPageBySlug = async (slug: string) => {
    return notion.databases
        .query({
            database_id: process.env.NOTION_DATABASE_ID!,
            filter: {
                property: "Slug",
                rich_text: {
                    equals: slug,
                },
            },
        })
        .then((res) => res.results[0] as PageObjectResponse | undefined);
};

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    try {
        // Get the 'slug' parameter from the URL . REMEMBER TO WRITE CORRECT NAME OF "PARMAMETER"
        const slug: string | undefined = event.queryStringParameters?.slug; //.netlify/functions/getPostDetailFunction?slug=slug-1
        // Ensure 'slug' is provsluged in the request
        if (!slug) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing slug parameter' }),
            };
        }

        // Call the fetchPageBySlug function with the 'slug' parameter
        const response: any = await fetchPageBySlug(slug);
        const n2m = new NotionToMarkdown({ notionClient: notion });
        const mdblocks = await n2m.pageToMarkdown(response?.id);
        const mdString = n2m.toMarkdownString(mdblocks);
        // const pageData = n2m.toMarkdownString(mdblocks);

        // console.log(JSON.stringify(response.properties, null, 2));

        const defaultImageURL = "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=894&q=80";

        const pageData: PostDetail = {
            title: response.properties.Title.title[0]?.plain_text ?? "",
            date: response.properties.Date.date?.start ?? "No date",
            author: response.properties.Author.people[0]?.name ?? "Anonymous",
            description: response.properties.Description.rich_text[0]?.plain_text ?? "",
            image: response.properties.Image.files[0]?.file.url ?? defaultImageURL,
            slug: response.properties.Slug.rich_text[0]?.plain_text ?? "",
            timeToRead: response.properties.TimeToRead.rich_text[0]?.plain_text ?? "",
            category: response.properties.Category.multi_select as Category[] ?? [],
            content: mdString.parent || "No Content or Something error in netlify function",
        };
        // console.log(JSON.stringify(pageData, null, 2));

        if (pageData) {
            return {
                statusCode: 200,
                body: JSON.stringify(pageData),
            };
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'Page not found' }),
            };
        }
    } catch (error) {
        console.error('Error in Netlify function:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error' }),
        };
    }
};

export { handler };
