import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    title?: string;
    className?: string;
}

export default function Section({
    children,
    title = "",
    className = "",
}: Props) {
    return (
        <section id={title} className={`flex flex-col ${className}`}>
            {children}
        </section>
    );
}