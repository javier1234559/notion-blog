import LayoutTag from "@/components/LayoutTag"
import { getListPost } from "@/lib/getListPost";
import { IPost } from "@/types/Blogtype";

export default async function Page({ params }: { params: { slug: string } }) {

    const title = "All Post";
    const posts: IPost[] = await getListPost()

    return (
        <>
            <main className="container mx-auto sm:w-3xl lg:w-5xl max-w-5xl p-4 justify-center flex flex-col lg:flex-row my-20 py-8 ">
                <LayoutTag title={title} posts={posts} />
            </main>
        </>
    )
}

