import React from 'react'
import { Category } from '@/types/Blogtype'

type Props = {
  category?: Category[];
  title?: string;
  date?: string;
  description?: string;
}

export default function Title({
  category,
  title,
  date,
  description
}: Props) {
  return (
    <div className='flex flex-col justify-center items-center my-8 lg:my-0'>
      <div className='flex mb-4 text-gray-400 items-center'>
        {category?.map((tag) => (
          <>
            <span
              key={tag.id}
              className={`mr-2 inline-block px-2 py-1 rounded dark:font-bold hashtag-${tag.color // Use inline style for text color
              }`}
            >
              {tag.name}
            </span>
            <span className='spot'></span>
          </>
        ))}
        <span className='dark:text-background-secondary'>{date}</span>
      </div>
      <h1 className='text-3xl text-center lg:text-5xl font-semibold mb-4 '>{title}</h1>
      <p className='p-4 text-gray-400 lg:max-w-4xl text-center'>{description}</p>
    </div>
  )
}