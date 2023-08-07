import BlogCard from "@/components/BlogCard";
import getPost, { Post } from '@/lib/getPost';
import Button from "@/components/Button";
// import { PageObjectResponse , QueryDatabaseResponse} from '@notionhq/client/build/src/api-endpoints';

export default async function Home() {

  const posts: Post[] = await getPost();

  return (
    <main className="container mx-auto p-4 justify-center flex flex-col lg:flex-row my-20">
      <aside className="flex flex-col px-8 lg:basis-1/3">
        <h1 className="text-5xl bold  ">My Blog</h1>
        <span className="md:text-2xl my-4 max-w-2xl">Sharing ideas, theoretical topics, case studies, latest opensource tools and cloud native projects that I come across</span>
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
