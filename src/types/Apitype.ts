import {
    QueryDatabaseResponse, RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { ICategory, IPost, IPostDetail } from "./Blogtype";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});


export type PostResult = Extract<
    QueryDatabaseResponse["results"][number],
    { properties: Record<string, unknown> }
>;

type PropertyValueMap = PostResult["properties"];
type PropertyValue = PropertyValueMap[string];
type PropertyValueType = PropertyValue["type"];
type ExtractedPropertyValue<TType extends PropertyValueType> = Extract<PropertyValue, { type: TType }>;

export type PropertyValueTitle = ExtractedPropertyValue<"title">;
export type PropertyValueRichText = ExtractedPropertyValue<"rich_text">;
export type PropertyValueMultiSelect = ExtractedPropertyValue<"multi_select">;
export type PropertyValueFile = ExtractedPropertyValue<"files">;
export type PropertyValueDate = ExtractedPropertyValue<"date">;
export type PropertyValueStatus = ExtractedPropertyValue<"status">;
export type PropertyValuePeople = ExtractedPropertyValue<"people">;
// export type PropertyValueEditedTime = ExtractedPropertyValue<"last_edited_time">;

type DatabaseItem = PostResult & {
    properties: {
        Title: PropertyValueTitle;
        Description: PropertyValueRichText;
        Date: PropertyValueDate;
        Status: PropertyValueStatus;
        Author: PropertyValuePeople;
        Image: PropertyValueFile;
        Slug: PropertyValueRichText;
        TimeToRead: PropertyValueRichText;
        Category: PropertyValueMultiSelect;
    };
};

export const extractPosts = async (
    response: QueryDatabaseResponse,
): Promise<IPost[]> => {
    const databaseItems: DatabaseItem[] = response.results.map(
        (databaseItem) => databaseItem as DatabaseItem,
    );
    const posts: IPost[] = await Promise.all(
        databaseItems.map(async (postInDB: DatabaseItem) => {

            const post: IPost = {
                id :postInDB.id,
                title: (postInDB.properties.Title.title as RichTextItemResponse[])[0]?.plain_text,
                date: postInDB.properties.Date.date?.start ?? "No date",
                author: (postInDB.properties.Author.people as any[])[0]?.name,
                description: (postInDB.properties.Description.rich_text as RichTextItemResponse[])[0]?.plain_text,
                slug: (postInDB.properties.Slug.rich_text as RichTextItemResponse[])[0]?.plain_text,
                timeToRead: (postInDB.properties.TimeToRead.rich_text as RichTextItemResponse[])[0]?.plain_text,
                category: (postInDB.properties.Category.multi_select as any) as ICategory[],
            };

            return post;
        }),
    );
    return posts;
};

export const extractPostDetail = async (
    response: any,
): Promise<IPostDetail> => {

    const postInDB = response as DatabaseItem;

    const n2m = new NotionToMarkdown({ notionClient: notion });
    const mdblocks = await n2m.pageToMarkdown(response?.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    const post: IPostDetail = {
        title: (postInDB.properties.Title.title as RichTextItemResponse[])[0]?.plain_text,
        date: postInDB.properties.Date.date?.start ?? "No date",
        author: (postInDB.properties.Author.people as any[])[0]?.name,
        description: (postInDB.properties.Description.rich_text as RichTextItemResponse[])[0]?.plain_text,
        image: (postInDB.properties.Image.files as any)[0]?.file.url,
        slug: (postInDB.properties.Slug.rich_text as RichTextItemResponse[])[0]?.plain_text,
        timeToRead: (postInDB.properties.TimeToRead.rich_text as RichTextItemResponse[])[0]?.plain_text,
        category: (postInDB.properties.Category.multi_select as any) as ICategory[],
        content: mdString.parent || "No Content or Something error when fetch data",
    };

    return post;
};

