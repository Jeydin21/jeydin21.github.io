import React from "react";

export default function Divider({ className }: { className?: string }) {
    return (
        <div className={`h-px bg-text-2 ${className}`}></div>
    );
}