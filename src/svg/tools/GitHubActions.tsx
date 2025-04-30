import React from "react";

export default function GitHubActions({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="128px"
      height="128px"
      className={className}
    >
      <path
        fill="#2088FF"
        d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 120c-30.9 0-56-25.1-56-56S33.1 8 64 8s56 25.1 56 56-25.1 56-56 56z"
      />
      <path
        fill="#2088FF"
        d="M64 32a32 32 0 100 64 32 32 0 000-64zm0 56a24 24 0 110-48 24 24 0 010 48z"
      />
    </svg>
  );
}
