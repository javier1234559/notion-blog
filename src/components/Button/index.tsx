import React, { ReactNode } from 'react'
import { PropsWithChildren } from "react";

type ButtonType = "default" | "round";

type Props = PropsWithChildren<{
    children: ReactNode;
    href: URL | string;
    variant?: ButtonType;
}>;


function Button({
    children,
    href,
    variant
}: Props) {
    if (variant == "default") {
        return (<a
            href={href.toString()}
            className={`group button-default`}
        >
            <button className=''>

                {children}
            </button>
        </a>
        );
    } else {
        return (
            <button className="button-round">
                round
            </button>
        );
    }
}

export default Button