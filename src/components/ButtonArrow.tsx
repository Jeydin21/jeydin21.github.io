import React from "react";
import { motion } from "framer-motion";

function getRotation(direction: "up" | "down" | "left" | "right") {
    switch (direction) {
        case "up":
            return {
                class: "-rotate-90",
                x: [0, 0, 0, 0, 0],
                y: [0, -10, 0, -6, 0],
            }
        case "down":
            return {
                class: "rotate-90",
                x: [0, 0, 0, 0, 0],
                y: [0, 10, 0, 6, 0],
            }
        case "left":
            return {
                class: "rotate-180",
                x: [0, -10, 0, -6, 0],
                y: [0, 0, 0, 0, 0],
            }
        case "right":
            return {
                class: "",
                x: [0, 10, 0, 6, 0],
                y: [0, 0, 0, 0, 0],
            }
    }
}

export default function ButtonArrow({ direction = "right", href, className }: { direction: "up" | "down" | "left" | "right", href: string, className?: string }) {
    const rotation = getRotation(direction);

    return (
        <div
            className={className}
        >
            <motion.a
                href={href}
                className="inline-block"
                animate={{
                    x: rotation.x,
                    y: rotation.y,
                    transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 2,
                    },
                }}
            >
                <button className={`p-3 bg-primary rounded-full transition-colors duration-200 ease-in-out hover:bg-primary-light active:bg-primary ${rotation.class}`}>
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        ></path>
                    </svg>
                </button>
            </motion.a>
        </div>
    );
}
