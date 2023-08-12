import React from 'react'
import ThemeToggle from '@/components/ThemeToggle';

export default async function Header() {
    return (
        <header className="header flex flex-col lg:flex-row ">
            <div className='flex-grow py-2 px-10 flex flex-row justify-between items-center'>
                <a href="/">
                    <div className='flex items-center'>
                        <svg className='w-[45px] h-[45px] swinging-hand text-foreground-primary dark:text-background-secondary' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve">
                            <ellipse className='fill-current stroke-current stroke-2 stroke-miterlimit-10' cx="12.5" cy="9.5" rx="2.5" ry="3.5" />
                            <ellipse className='fill-current stroke-current stroke-2 stroke-miterlimit-10' cx="19.5" cy="9.5" rx="2.5" ry="3.5" />
                            <ellipse className='fill-current stroke-current stroke-2 stroke-miterlimit-10' cx="7.5" cy="16.5" rx="2.5" ry="3.5" />
                            <ellipse className='fill-current stroke-current stroke-2 stroke-miterlimit-10' cx="24.5" cy="16.5" rx="2.5" ry="3.5" />
                            <path className='fill-current stroke-current stroke-2 stroke-miterlimit-10' d="M19,20c-0.966-0.966-1-3-3-3s-2,2-3,3 s-4,1.069-4,3.5c0,1.381,1.119,2.5,2.5,2.5c1.157,0,3.684-1,4.5-1s3.343,1,4.5,1c1.381,0,2.5-1.119,2.5-2.5 C23,21.207,19.966,20.966,19,20z" />
                        </svg>
                        <h1 className="text-[var(--select-color-0)] text-3xl">WEEBUNS</h1>
                    </div>
                </a>

                <div>
                    <ThemeToggle />
                </div>
            </div>
            <ul className='p-1 flex flex-row justify-center items-center '>
                <a href="/">
                    <li className='hover:text-accent dark:hover:text-accent-secondary mx-2 uppercase font-mono text-sm sm:text-lg font-medium'>Trang Chủ</li>
                </a>
                <a href="/blog">
                    <li className='hover:text-accent dark:hover:text-accent-secondary mx-2 uppercase font-mono text-sm sm:text-lg font-medium'>BLOG</li>
                </a>
                <a href="/about">
                    <li className='hover:text-accent dark:hover:text-accent-secondary mx-2 uppercase font-mono text-sm sm:text-lg font-medium'>Giới thiệu</li>
                </a>
            </ul>
        </header>
    )
}
