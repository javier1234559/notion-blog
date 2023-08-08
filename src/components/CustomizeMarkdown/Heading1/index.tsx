import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode,
};

function Heading1({
    children
}: Props) {
    return (
        <h1 className="text-gray-300 flex text-4xl leading-10 font-medium">
            {children}
        </h1>
    )
}

export default Heading1;
