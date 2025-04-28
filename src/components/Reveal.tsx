import React, { type JSX } from "react";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function getOffsets(direction: "up" | "down" | "left" | "right") {
    switch (direction) {
        case "up":
            return {
                x: 0,
                y: 20,
            }
        case "down":
            return {
                x: 0,
                y: -20,
            }
        case "left":
            return {
                x: 20,
                y: 0,
            }
        case "right":
            return {
                x: -20,
                y: 0,
            }
    }
}

export default function Reveal({ children, direction = "up", delay = 0.2, className }:
    { children: JSX.Element[] | JSX.Element, direction?: "up" | "down" | "left" | "right", delay?: number, className?: string }) {
    const offsets = getOffsets(direction);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView]);

    return (
        <motion.div
            variants={{
                hidden: {
                    opacity: 0,
                    x: offsets.x,
                    y: offsets.y,
                },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                }
            }}
            initial="hidden"
            animate={controls}
            transition={{
                easings: "easeInOut",
                duration: 0.4,
                delay: delay,
            }}
            className={className}
            ref={ref}
        >
            {Array.isArray(children) ? children : [children]}
        </motion.div>
    );
}
