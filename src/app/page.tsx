import BlogCard from "@/components/BlogCard";
import Button from "@/components/Button";
import { IPost } from "@/types/Blogtype";
import { notFound } from "next/navigation";
import { getListPost } from "@/lib/getListPost";

export default async function Home() {
  let posts: IPost[];

  try {
    posts = await getListPost();
  } catch (error) {
    notFound();
  }

  return (
    <main className="container mx-auto p-4 justify-center flex flex-col lg:flex-row my-20 py-8 ">
      <aside className="flex flex-col lg:items-start items-center pr-8 lg:basis-1/3 my-8 lg:my-0">
        <h1 className="text-5xl lg:text-7xl bold lg:text-right text-center">Blog</h1>
        <p className="md:text-xl my-4 lg:max-w-sm text-center lg:text-start">
          Nơi bọn mình cùng học hỏi, chia sẻ kiến thức, và phát triển bản thân qua khoa học, tiếng Anh, lập trình và thói quen tích cực.
        </p>
        <Button href={"/"} variant="default"  >
          Wellcome to Weebuns
        </Button>
      </aside>
      <div className="flex flex-col items-stretch gap-4 lg:basis-2/3">
        {posts.map((post: IPost) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
