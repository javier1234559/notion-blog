//THIS FILE IS NOT TYPE SAFE
import { IPostDetail } from "@/types/Blogtype";
import { fetchPageBySlug } from "./notion";

export default async function getPostDetail(slug: string): Promise<IPostDetail|any> {
    // const response = await fetch(`${process.env.URL}/.netlify/functions/getPostDetailMarkdown?slug=${slug}`);
    const response = await fetchPageBySlug(slug);
    if(response) throw Error;

    const data = response! ;

    const postDetail = {
        // title: data.properties.Title.type["title"].[0]?.plain_text ?? "",
        // date: data.properties.Date.date?.start ?? "No date",
        // author: data.properties.Author.people[0]?.name ?? "Anonymous",
        // description: data.properties.Description.rich_text[0]?.plain_text ?? "",
        // image: data.properties.Image.files[0]?.file.url ?? defaultImageURL,
        // slug: data.properties.Slug.rich_text[0]?.plain_text ?? "",
        // timeToRead: data.properties.TimeToRead.rich_text[0]?.plain_text ?? "",
        // category: data.properties.Category.multi_select as Category[] ?? [],
        // content: mdString.parent || "No Content or Something error in netlify function",
    }
    return postDetail;
}
