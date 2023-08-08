import { notFound } from "next/navigation";
import { PostDetail } from "@/types/Blogtype";
import getPostDetail from "@/lib/getPostDetail";
import Title from "@/components/Title";
import CustomizeMarkdown from "@/components/CustomizeMarkdown";


export default async function Page({ params }: { params: { slug: string } }) {
  const post: PostDetail = await getPostDetail(params.slug);
  if (!post) notFound();
  const markdown: string = post.content || "## No Content or Somthing went wrong !!";


  return (
  <div className="container flex flex-col lg-flex-row mt-[100px] mb-10 p-4 text-sm ">
    <Title title={post.title} category={post.category} date={post.date} description={post.description}/>
    <img src={post.image} alt={`Image post of ${post.title}`} className="my-8 w-full object-contain max-h-[800px] "/>
    <article className="mx-auto w-[896px] prose lg:prose-xl prose-p:text-gray-300 prose-img:w-full">
        <CustomizeMarkdown content={markdown} />
    </article>
  </div>
  )
}

