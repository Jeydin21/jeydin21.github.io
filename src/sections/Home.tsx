import React from "react";
import ButtonArrow from "@/components/ButtonArrow";
import Reveal from "@/components/Reveal";
import * as Config from "@/Config";
import IconLink from "@/components/IconLink";
import ParallaxBackground from "@/components/ParallaxBackground";
import { useState, useEffect, useRef } from "react";

// Icons
import Github from "@/svg/Github";
import Instagram from "@/svg/Instagram";
import Linkedin from "@/svg/Linkedin";
import Telegram from "@/svg/Telegram";

export default function Home({ delay }: { delay: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [interact, setInteract] = useState(false);
    useEffect(() => {
        const handleMouseEnter = () => {
            setInteract(true);
        };
        const handleMouseLeave = () => {
            setInteract(false);
        };

        ref.current?.addEventListener("mouseenter", handleMouseEnter);
        ref.current?.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            ref.current?.removeEventListener("mouseenter", handleMouseEnter);
            ref.current?.removeEventListener("mouseleave", handleMouseLeave);
        };
    });

    return (
        <section id="home" ref={ref} className="relative flex h-screen overflow-hidden bg-navbar-opaque">
            <ParallaxBackground interact={interact} />
            <div className="flex flex-col w-full h-full justify-center space-y-2 items-center z-10">
                <div className="flex-grow"></div>
                <div className="flex-grow"></div>
                <Reveal direction="right" delay={delay + 0.2}>
                    <h1 className="font-bold">Hey, I'm {Config.userInfo.shortName} 👋</h1>
                </Reveal>
                <Reveal direction="right" delay={delay + 0.4}>
                    <h2 className="font-bold">{Config.userInfo.role}</h2>
                </Reveal>
                <Reveal className="flex gap-2 justify-center items-center" direction="right" delay={delay + 0.6}>
                    <IconLink href={Config.contactInfo.github} IconComponent={Github} />
                    <IconLink href={Config.contactInfo.linkedin} IconComponent={Linkedin} />
                    <IconLink href={Config.contactInfo.instagram} IconComponent={Instagram} />
                </Reveal>
                <div className="flex-grow"></div>
                <Reveal direction="up" delay={delay + 0.2}>
                    <ButtonArrow direction="down" href="#about" />
                </Reveal>
                <div className="flex-grow"></div>
                <div className="flex-grow"></div>
            </div>
        </section>
    );
}
