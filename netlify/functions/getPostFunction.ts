import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

const fetchPages = () => {
    return notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter: {
            property: "Status",
            status: {
                equals: "Published",
            },
        },
    });
};


const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    try {
        const response = await fetchPages();
        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    } catch (e: any) {
        console.error(e);
        return {
            statusCode: 500,
            body: e.toString(),
        };
    }
};

export { handler };
