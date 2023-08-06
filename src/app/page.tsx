import BlogCard from "@/components/BlogCard";
import getPost, { Post } from '@/lib/getPost';
// import { PageObjectResponse , QueryDatabaseResponse} from '@notionhq/client/build/src/api-endpoints';

export default async function Home() {

  const posts:Post[] = await getPost();

  return (
    <section className="">
      {/* <section className="bg-white dark:bg-gray-900"> //error */}
      <div className="container px-6 py-10 mx-auto">
        {/* <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1> */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {posts.map((post: Post) => (
            <BlogCard key={post?.id} post={post}  />
          ))}
        </div>
      </div>
    </section>
  );
}   
