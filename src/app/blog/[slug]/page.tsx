import { notFound } from "next/navigation";
import { IPostDetail } from "@/types/Blogtype";
import Title from "@/components/Title";
import CustomizeMarkdown from "@/components/CustomizeMarkdown";
import { isNotFoundError } from "next/dist/client/components/not-found";
import Shimmer from "@/components/Shimmer";
import { getPostItem } from "@/lib/getPostItem";

export default async function Page({ params }: { params: { slug: string } }) {
  let post: IPostDetail;
  try {
    post = await getPostItem(params.slug);
  } catch (error) {
    notFound();
    // if (isNotFoundError(error)) {
    // }
    // else {
    //   throw error;
    // }
  }

  const markdown: string = post.content || "## No Content or Somthing went wrong !!";


  return (
    <div className="container flex flex-col lg-flex-row min-h-screen py-[100px] mb-10 p-4 text-sm ">
      <Title title={post.title} category={post.category} date={post.date} description={post.description} />
      <Shimmer
        className="my-8 w-full object-contain max-h-[800px] "
        alt={`Image of ${post.title}`}
        src={post.image}
      />
      <article className="mx-auto w-[896px] prose lg:prose-xl prose-p:text-gray-300 prose-img:w-full">
        <CustomizeMarkdown content={markdown} />
      </article>
    </div>
  )
}

