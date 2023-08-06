import React from 'react'

// type Props = {

// };

export default function Header() {
    return (
        <header className="header">
            <div className='flex-grow py-2 px-10 flex flex-row justify-between items-center'>
                <a href="/">
                    <h1 className='text-3xl'>WEEBUNS</h1>
                </a>
                <div>
                    DARK
                </div>
            </div>
            <ul className='p-1 flex flex-row justify-center items-center '>
                <a href="#">
                    <li className='hover:text-accent dark:hover:text-accent-secondary mx-2 uppercase font-mono text-sm sm:text-lg font-medium'>HOME</li>
                </a>
                <a href="#">
                    <li className='hover:text-accent dark:hover:text-accent-secondary mx-2 uppercase font-mono text-sm sm:text-lg font-medium'>BLOG</li>
                </a>
                <a href="#">
                    <li className='hover:text-accent dark:hover:text-accent-secondary mx-2 uppercase font-mono text-sm sm:text-lg font-medium'>ABOUT</li>
                </a>
            </ul>
        </header>
    )
}
