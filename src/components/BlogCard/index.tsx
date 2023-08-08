import { Post } from '@/types/Blogtype';
import Link from 'next/link';

type Props = {
  post: Post;
}

export default async function BlogCard({
  post,
}: Props) {

  return (
    <div className="flex-col flex-1 justify-around pb-6 mb-4 border-b border-dashed hover:border-[var(--select-color-0)]" >
      {post.category.map((category) => (
        <Link href={`/${category.name}`} key={category.id}>
          <span className='text-[--select-color-0] text-medium text-green mr-4'>#{category.name}</span>
        </Link>
      ))}
      <Link href={`blog/${post.slug}`}>
        <h1 className='lg:text-6xl text-4xl  mb-4 title-hover'>{post.title}</h1>
      </Link>
      <div className='flex flex-row'>
        <span className='mr-4'>{post.date}</span>
        <span className='mr-4'>•</span>
        <span className='mr-4 border rounded-xl border-gray-400 px-2  leading-tight'> ~ {post.timeToRead}</span>
      </div>
      <p className='text-gray-400 pt-4 py-4 font-light'>{post.description}</p>
    </div>
  )
}