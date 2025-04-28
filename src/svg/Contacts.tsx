import React from "react";

export default function Contacts({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            fill="currentColor"
            stroke="currentColor"
            className={className}
        >
            <path d="M18,2H6C4.895,2,4,2.895,4,4v16c0,1.105,0.895,2,2,2h12c1.105,0,2-0.895,2-2V4C20,2.895,19.105,2,18,2z M12,6 c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S10.3,6,12,6z M16.333,18H7.667C7.298,18,7,17.702,7,17.333V17c0-1.571,2.512-3,5-3 s5,1.429,5,3v0.333C17,17.702,16.702,18,16.333,18z" />
        </svg>
    );
}
