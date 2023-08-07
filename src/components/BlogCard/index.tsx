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
    <div className="flex-col flex-1 justify-around pb-6 mb-4 border-b border-dashed hover:border-[var(--select-color-0)]" >
      <Link href={`/${post.slug}`}><span className='text-[--select-color-0] text-medium text-green'># {post.slug}</span></Link>
      <Link href={`blog/${post.slug}`}>
        <h1 className='text-6xl mb-4 title-hover'>{post.title}</h1>
      </Link>
      <div className='flex flex-row'>
        <span className='mr-4'>4/26/2022</span>
        <span className='mr-4'>• </span>
        <span className='mr-4'> ~ 5 min read</span>
      </div>
      <p className='text-gray-400 pt-4 py-4 font-light'>{post.description}</p>
    </div>
  )
}