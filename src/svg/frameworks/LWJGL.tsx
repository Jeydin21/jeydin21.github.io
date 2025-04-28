import React from "react";

export default function LWJGL({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 206 182"
            width="128px"
            height="128px"
            className={className}
        >
            <defs>
                <linearGradient id="face" y1="0" x1="0" x2="100%" y2="0">
                    <stop stopColor="#d7d7d7" offset="0" />
                    <stop stopColor="#e7e7e7" offset=".5" />
                    <stop stopColor="#d7d7d7" offset="1" />
                </linearGradient>
                <linearGradient id="bevel" x1="0" y1="0" x2="0" y2="100%">
                    <stop stopColor="#d8d8d8" offset="0" />
                    <stop stopColor="#a3a3a3" offset="1" />
                </linearGradient>
                <symbol id="btn-key" viewBox="0 0 60 60">
                    <rect x="0" y="0" rx="3" ry="3" width="54" height="58" fill="url(#bevel)" />
                    <rect x="2" y="1" rx="3" ry="3" width="50" height="50" stroke-width="0.25" stroke="#fff" fill="url(#face)" />
                </symbol>
            </defs>
            <use href="#btn-key" x="0" y="0" width="60" height="60" />
            <use href="#btn-key" x="60" y="0" width="60" height="60" />
            <use href="#btn-key" x="120" y="0" width="60" height="60" />
            <rect fill="#3c3cff" opacity="0.25" x="120" y="0" rx="3" ry="3" width="54" height="58" stroke="none" />
            <use href="#btn-key" x="22" y="62" width="60" height="60" />
            <use href="#btn-key" x="82" y="62" width="60" height="60" />
            <rect fill="#3c3c3c" opacity="0.35" x="82" y="62" rx="3" ry="3" width="54" height="58" stroke="none" />
            <use href="#btn-key" x="142" y="62" width="60" height="60" />
            <use href="#btn-key" x="32" y="124" width="60" height="60" />
            <rect fill="#3c3c3c" opacity="0.35" x="32" y="124" rx="3" ry="3" width="54" height="58" stroke="none" />
            <use href="#btn-key" x="92" y="124" width="60" height="60" />
            <rect fill="#3c3c3c" opacity="0.35" x="92" y="124" rx="3" ry="3" width="54" height="58" stroke="none" />
            <use href="#btn-key" x="152" y="124" width="60" height="60" />
            <rect fill="#3c3c3c" opacity="0.35" x="152" y="124" rx="3" ry="3" width="54" height="58" stroke="none" />
            <text x="130" y="43" style={{"font": "900 18px sans-serif"}} fill="#222">3</text>
        </svg>
    );
}
