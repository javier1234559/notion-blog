"use client"
// import Tag from '@/components/Tag'
// import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import { useState } from 'react'
import { ICategory, IPost } from '@/types/Blogtype'
// import Pagination from '@/components/Pagination'
// import formatDate from '@/lib/utils/formatDate'

type Props = {
    posts: IPost[];
    title: string;
    initialDisplayPosts?: any[];
    pagination?: any;

}

export default function LayoutTag({ posts, title, initialDisplayPosts = [], pagination }: Props) {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPosts = posts.filter((frontMatter) => {
        const searchContent = frontMatter.title + frontMatter.description;
        return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })

    // If initialDisplayPosts exist, display it if no searchValue is specified
    const displayPosts = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

    return (
        <>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 w-full">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        {title}
                    </h1>
                    <div className="relative max-w-lg">
                        <input
                            aria-label="Search articles"
                            type="text"
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Search articles"
                            className="block w-full rounded-md border border-gray-300 bg-background-primary px-4 py-2 text-gray-900 focus:border-accent-primary focus:ring-accent-primary focus-visible:ring-accent-primary outline-none  dark:border-gray-900  dark:bg-gray-800 dark:text-gray-100"
                        />
                        <svg
                            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
                <ul>
                    {!filteredBlogPosts.length && 'No posts found.'}
                    {displayPosts.map((frontMatter: IPost) => {
                        const { slug, date, title, description, category } = frontMatter
                        return (
                            <li key={slug} className="py-4">
                                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <dl>
                                        <dt className="sr-only">Published on</dt>
                                        <dd className="text-base font-medium leading-6 ">
                                            <time dateTime={date}>{date}</time>
                                        </dd>
                                    </dl>
                                    <div className="space-y-3 xl:col-span-3">
                                        <div>
                                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                <Link href={`/blog/${slug}`} className="">
                                                    {title}
                                                </Link>
                                            </h2>
                                            <div className="flex flex-wrap">
                                                {category.map((tag: ICategory) => (
                                                    <span
                                                        key={tag.id}
                                                        className={`mr-2 inline-block underline cursor-pointer py-1 rounded dark:font-bold hashtag-${tag.color}`}
                                                    >
                                                        {tag.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="prose max-w-none text-foreground dark:text-[#22272e]">
                                            {description}
                                        </div>
                                    </div>
                                </article>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* {pagination && pagination.totalPages > 1 && !searchValue && (
                <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )} */}
        </>
    )
}
