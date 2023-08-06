import React from 'react'
import getPost, { Post } from '@/lib/getPost';
import Link from 'next/link';

type Props = {
  post: Post;
}

export default async function BlogCard({
  post,
}: Props) {

  return (
    <div className="lg:flex" >
    <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={post?.imageUrl} alt={`Image about ${post?.title}`} />

    <div className="flex flex-col justify-between py-6 lg:mx-6">
      <Link href={`blog/${post?.slug}`} className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
        {post?.title}
      </Link>
      <span className="text-sm text-gray-500 dark:text-gray-300">By: {post?.assign}</span>
      <span className="text-sm text-gray-500 dark:text-gray-300">On: {post?.date}</span>
    </div>
  </div>
  )
}