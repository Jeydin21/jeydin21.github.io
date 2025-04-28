import React from "react";
import Reveal from "./Reveal";

export default function Title({ text }: { text: string }) {
    return (
        <Reveal>
            <div className="flex justify-center items-center
            pb-6 pt-12 sm:pb-12 sm:pt-16 md:pb-16 md:pt-20">
                <h1 className="font-bold first-letter:text-secondary first-letter:h1 h2">{text}</h1>
            </div>
        </Reveal>
    );
}
