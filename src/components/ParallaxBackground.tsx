import React, { TouchEvent } from "react";
import { useState, useEffect } from "react";
import { ComponentType } from "react";
import * as Parallax from "@/svg/Parallax";

function MotionDiv({ ImageComponent, x, y, offset }:
    { ImageComponent: ComponentType<{ className?: string }>, x: number, y: number, offset: number }) {

    return (
        <div
            className="absolute
            w-[max(140vw,calc(140vh*1.65))]
            h-[max(140vh,calc(140vw*0.60))]
            left-[calc(50vw-max(140vw,calc(140vh*1.65))/2)]
            top-[calc(50vh-max(140vh,calc(140vw*0.60))/2)]
            transition-transform duration-[100ms] ease-out
            "
            style={{
                transform: `translateX(${x * offset}px)`,
            }}
        >
            <ImageComponent className="absolute inset-0 w-full h-full" />
        </div>
    );
}

export default function ParallaxBackground({ interact }: { interact: boolean }) {
    const [mousePosition, setMousePosition] = useState({
        x: 0.5,
        //y: 0.5
    });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!interact) return;

            setMousePosition({
                x: event.clientX / window.innerWidth,
                //y: event.clientY / window.innerHeight,
            });
        };

        const handleTouchMove = (event: TouchEvent) => {
            if (!interact) return;

            setMousePosition({
                x: event.touches[0].clientX / window.innerWidth,
                //y: event.touches[0].clientY / window.innerHeight,
            });
        }
        
        window.addEventListener("touchmove", handleTouchMove as any);
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("touchmove", handleTouchMove as any);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [interact]);
  
    const x = (mousePosition.x - 0.5);
    //const y = (mousePosition.y - 0.5);
    const y = 0;

    return (
        <div
            id="bg-parallax"
            className="absolute inset-0 w-full h-full overflow-hidden"
        >
            <MotionDiv ImageComponent={Parallax.Background} x={x} y={y} offset={0} />
            <MotionDiv ImageComponent={Parallax.Mountains} x={x} y={y} offset={40} />
            <MotionDiv ImageComponent={Parallax.ForestBack} x={x} y={y} offset={80} />
            <MotionDiv ImageComponent={Parallax.ForestMid} x={x} y={y} offset={160} />
            <MotionDiv ImageComponent={Parallax.ForestFront} x={x} y={y} offset={320} />
        </div>
    );
}
