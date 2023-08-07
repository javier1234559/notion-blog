import React from 'react'
import { Category } from '@/lib/getPost'

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
    <div className='flex flex-col justify-center items-center'>
      <div className='flex mb-4 text-gray-400 items-center'>
        {category?.map((tag) => (
          <a
            key={tag.id}
            className={`mr-2 inline-block px-2 py-1 rounded text-xs ${tag.color // Use inline style for text color
              }`}
          >
            {tag.name}
          </a>
        ))}
        <span className='spot'></span>
        <span>{date}</span>
      </div>
      <h1 className='text-5xl font-semibold mb-4 '>{title}</h1>
      <p className='p-4 text-gray-400 max-w-4xl text-center'>{description}</p>
    </div>
  )
}