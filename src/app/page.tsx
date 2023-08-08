import BlogCard from "@/components/BlogCard";
import getPost from '@/lib/getPost';
import Button from "@/components/Button";
import { Post } from "@/types/Blogtype";
// import { PageObjectResponse , QueryDatabaseResponse} from '@notionhq/client/build/src/api-endpoints';

export default async function Home() {

  const posts: Post[] = await getPost();

  return (
    <main className="container mx-auto p-4 justify-center flex flex-col lg:flex-row my-20 py-8 ">
      <aside className="flex flex-col lg:items-start items-center pr-8 lg:basis-1/3 my-8 lg:my-0">
        <h1 className="text-5xl lg:text-7xl bold lg:text-right text-center ">My Blog</h1>
        <p className="md:text-xl  my-4 lg:max-w-sm text-center lg:text-start">Sharing ideas, theoretical topics, case studies, latest opensource tools and cloud native projects that I come across</p>
        <Button href={"/"} variant="default"  >
          Hello
        </Button>
      </aside>
      <div className="flex flex-col items-stretch gap-4 lg:basis-2/3">
        {posts.map((post: Post) => (
          <BlogCard key={post?.id} post={post} />
        ))}
      </div>
    </main>
  );
}
