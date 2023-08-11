import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode,
};

function Paragragh({
    children
}: Props) {
    return (
        <p className='text-base lg:text-xl leading-7 my-1 '>
            {children}
        </p>
    )
}

export default Paragragh;
