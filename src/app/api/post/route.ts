import { NextResponse, NextRequest } from 'next/server';
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

export const GET = async () => {
  console.log(`This is from api 88`);

  try {
    const response = await fetchPages();

    console.log(`This is from api ${response}`);
    return NextResponse.json({
      statusCode: 200,
      body: JSON.stringify(response),
    });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({
      statusCode: 500,
      body: e.toString(),
    });
  }
};