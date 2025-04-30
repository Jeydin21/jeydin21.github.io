import React from "react";

export default function Redis({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="128px"
      height="128px"
      className={className}
    >
      <path
        fill="#D82C20"
        d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm0 240c-61.9 0-112-50.1-112-112S66.1 16 128 16s112 50.1 112 112-50.1 112-112 112z"
      />
      <path
        fill="#FFFFFF"
        d="M128 64a64 64 0 100 128 64 64 0 000-128zm0 112a48 48 0 110-96 48 48 0 010 96z"
      />
    </svg>
  );
}
