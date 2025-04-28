import React from "react";

export default function Markdown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="128px"
      height="128px"
      className={className}
    >
      <rect width="256" height="256" rx="16" fill="#000000" />
      <path
        fill="#ffffff"
        d="M40 80h24l20 28 20-28h24v96h-24v-52l-20 28-20-28v52H40V80zm160 0h24v48l-28-32-28 32V80h24v24l4-4 4 4V80z"
      />
    </svg>
  );
}
