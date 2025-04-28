import React from "react";
import Link from "next/link";

export default function Anchor(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <Link
            href={props.href ? props.href : ""}
            target="_blank"
            className="text-primary transition-colors duration-200 ease-in-out hover:text-primary-light"
            {...props}
        >
            {props.children}
        </Link>
    );
}
