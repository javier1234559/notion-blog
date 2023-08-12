import { getListPost } from "@/lib/getListPost";
import { IPost } from "@/types/Blogtype";

export default async function sitemap() {
    const baseUrl = "http://weebuns.social";

    const posts:IPost[] = await getListPost();
    const postUrls = posts.map((post) => ({
      url: `${baseUrl}/post/${post.slug}`,
      lastModified: post.date,
    }));

    return [
      { url: baseUrl, lastModified: new Date() },
      { url: `${baseUrl}/about`, lastModified: new Date() },
      ...postUrls,
    ];
  }