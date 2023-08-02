const { Client } = require("@notionhq/client")
import Database , {Result} from "@/types/Database";

// Initializing a client
const { NOTION_TOKEN, NOTION_DATABASE_ID } = process.env;

export const notion = new Client({
  auth: NOTION_TOKEN,
})

const queryOptions = {
  database_id: NOTION_DATABASE_ID,
  sorts: [
    {
      property: "Date",
      direction: "descending",
    },
  ],
};

//If in production, filter to only published posts
//  if (env === "production") {
//   queryOptions.filter = {
//     property: "Published",
//     checkbox: {
//       equals: true,
//     },
//   };
//  }


export async function getNotionData() {
  try {
    const response = await notion.databases.query(queryOptions);

    return response.results;
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    return [];
  }
}