import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode,
};

function Paragragh({
    children
}: Props) {
    return (
        <p className='text-base lg:text-2xl leading-7 my-1 px-2 py-3'>
            {children}
        </p>
    )
}

export default Paragragh;
