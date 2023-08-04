import { notFound } from "next/navigation";
import Markdown from "markdown-to-jsx";
import getPostDetail, { PostDetail } from "@/lib/getPostDetail";

export default async function Page({ params }: { params: { slug: string } }) {
  const post: PostDetail = await getPostDetail(params.slug);
  if (!post) notFound();
  const markdown: string = post.content || "## No Content or Somthing went wrong !!";

  // const blocks = await fetchPageBlocks(post.id);

  // const renderer = new NotionRenderer({
  //   client: notion,
  // });
  // renderer.use(hljsPlugin({}));
  // renderer.use(bookmarkPlugin(undefined));
  // const html = await renderer.render(...blocks);

  // return <article dangerouslySetInnerHTML={{ __html: html }} className="prose prose-xl">
  // </article>;

  return (<div>
    {/* <div className=" flex justify-center mx-auto max-w-[90%]">  neu dung flex se bi cat , nen dung mx-auto va px-8 de tao space  */}
    <article className="prose  dark:prose-invert lg:prose-xl prose-p:text-gray-300 prose-img:w-full px-4 mx-auto ">
      <Markdown>{markdown}</Markdown>
    </article>
    <div className="container">
      <aside className="sidebar">...</aside>
      <main className="main-content">...</main>
    </div>
    {/* </div> */}
  </div>
  )
}