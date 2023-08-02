const { Client } = require("@notionhq/client");
import { fetchPages } from '@/lib/notion';
// import { PageObjectResponse , QueryDatabaseResponse} from '@notionhq/client/build/src/api-endpoints';
import Link from 'next/link';


interface Post {
  id: string;
  title: string;
  date: string;
  description: string;
  assign: string;
  imageUrl: string;
  slug: string;
}


export default async function Home() {
  const data: any = await fetchPages();
  // console.log("Post56 ", JSON.stringify(data.results[0].properties, null, 2));

  const posts: Post[] = data.results.map((result: any) => ({
    id: result.id,
    title: result.properties.Title.title[0]?.plain_text ?? "",
    date: result.properties.Date.date?.start ?? "No date",
    assign: result.properties.Assign.people[0]?.name ?? "Unassigned",
    description: result.properties.Description.rich_text[0]?.plain_text ?? "",
    imageUrl: result.properties.Image.files[0]?.file.url ?? "", // Provide a default image URL if not available
    slug: result.properties.Slug.rich_text[0]?.plain_text ?? "",
  }));

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {posts.map((post: Post) => (
            <div className="lg:flex" key={post.id}>
              <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={post.imageUrl} alt={`Image about ${post.title}`} />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <Link href={`blog/${post.slug}`} className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                  {post.title}
                </Link>
                <span className="text-sm text-gray-500 dark:text-gray-300">By: {post.assign}</span>
                <span className="text-sm text-gray-500 dark:text-gray-300">On: {post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}   
