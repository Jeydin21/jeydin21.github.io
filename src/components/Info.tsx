import Link from "next/link";
import { ComponentType } from "react";

export default function Info({ name, value, href, IconComponent }:
    { name: string, value: string, href: string, IconComponent: ComponentType<{ className?: string }> }) {
    return (
        <Link
        href={href}
        target="_blank"
        className="flex items-center gap-4 p-2
        bg-background-4 bg-opacity-25 backdrop-blur-sm rounded-md
        shadow-md shadow-background-1 border border-background-4 border-opacity-25
        group w-full
        ">
            <IconComponent className="w-8 h-8 text-primary transition-colors duration-200 ease-in-out group-hover:text-primary-light" />
            <div className="flex flex-col">
                <p className="font-bold text-primary transition-colors duration-200 ease-in-out group-hover:text-primary-light">{name}</p>
                <p className="font-light text-text-2">{value}</p>
            </div>
        </Link>
    );
}