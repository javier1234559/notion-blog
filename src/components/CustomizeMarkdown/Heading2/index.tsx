import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode,
};

function Heading2({ children }: Props) {

    let textLength:number = children?.toString().length || 0;

    return (
        <h2 className="relative group text-3xl leading-10 font-normal pb-2">
            <span className='text-[var(--select-color-0)]'>{children}</span>
            <span className={`absolute -bottom-1 left-0 w-14 h-1 bg-[var(--select-color-0)] transition-all group-hover:w-[150px]`}></span>
        </h2>
    );
}

export default Heading2;
