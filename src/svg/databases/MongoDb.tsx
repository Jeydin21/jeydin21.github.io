import React from "react";

export default function MongoDB({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 512"
      width="128px"
      height="128px"
      className={className}
    >
      <path
        fill="#58AA50"
        d="M128 0c-2 27.5-19.3 38.7-36.4 56.8-28.2 29.3-60.4 82.4-60.4 149.5 0 74.8 46.6 127.7 81.8 152.5 1.6 1.2 4.1 1.2 5.7 0 35.2-24.8 81.8-77.7 81.8-152.5 0-67.1-32.2-120.2-60.4-149.5C147.3 38.7 130 27.5 128 0z"
      />
      <path
        fill="#499D4A"
        d="M128 0v459.5c0 .9.6 1.7 1.5 1.9l6.3 1.5c1.1.3 2.2-.5 2.2-1.6-.5-17.5-.6-35.2 4.6-42.7 23.3-33.4 84.4-91.9 84.4-165.3 0-66.8-31.9-118.6-59.8-146.7C146.2 38.7 130 27.5 128 0z"
      />
    </svg>
  );
}
