import React from "react";

export default function Briefcase({ className }: { className?: string }) {
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
            <path d="M 10 3 A 1.0001 1.0001 0 0 0 8.9863281 4 L 4 4 C 2.895 4 2 4.895 2 6 L 2 12 C 2 13.103 2.897 14 4 14 L 20 14 C 21.103 14 22 13.103 22 12 L 22 6 C 22 4.895 21.105 4 20 4 L 15.013672 4 A 1.0001 1.0001 0 0 0 14 3 L 10 3 z M 12 10 C 12.552 10 13 10.448 13 11 C 13 11.552 12.552 12 12 12 C 11.448 12 11 11.552 11 11 C 11 10.448 11.448 10 12 10 z M 2 15.443359 L 2 18 C 2 19.105 2.895 20 4 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 15.443359 C 21.409 15.787359 20.732 16 20 16 L 4 16 C 3.268 16 2.591 15.787359 2 15.443359 z" />
        </svg>
    );
}
