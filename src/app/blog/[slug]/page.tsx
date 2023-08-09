import { notFound } from "next/navigation";
import { PostDetail } from "@/types/Blogtype";
import getPostDetail from "@/lib/getPostDetail";
import Title from "@/components/Title";
import CustomizeMarkdown from "@/components/CustomizeMarkdown";
import { isNotFoundError } from "next/dist/client/components/not-found";
import Shimmer from "@/components/Shimmer";

export default async function Page({ params }: { params: { slug: string } }) {
  let post: PostDetail;
  try {
    post = await getPostDetail(params.slug);
  } catch (error) {
    notFound();
    // if (isNotFoundError(error)) {
    //   console.log("0000000000000000000");
    // }
    // else {
    //   throw error;
    // }
  }

  const markdown: string = post.content || "## No Content or Somthing went wrong !!";


  return (
    <div className="container flex flex-col lg-flex-row min-h-screen py-[100px] mb-10 p-4 text-sm ">
      <Title title={post.title} category={post.category} date={post.date} description={post.description} />
      {/* <Image
        width="0"
        height="0"
        sizes="100vw"
        alt={`Image of ${post.title}`}
        placeholder='blur'
        className="my-8 w-full object-contain max-h-[800px] "
        src={post.image}
        /> */}
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

