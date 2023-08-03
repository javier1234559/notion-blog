
import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

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

        const pageData = {
            content: mdString.parent,
        };

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
