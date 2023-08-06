import React, { ReactNode } from 'react'
import { PropsWithChildren } from "react";

type ButtonType = "default" | "round";

type Props = PropsWithChildren<{
    childrent: ReactNode,
    href: URL | string;
    variant?: ButtonType;
}>;

function Button({
    children,
    href,
    variant
}: Props) {
    if (variant == "default") {
        return (
            <button>
                <a
                    href={href.toString()}
                    className={`group button-default`}
                >
                    {children}
                </a>
            </button>
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