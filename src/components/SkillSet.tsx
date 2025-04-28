import React from "react";
import * as Classes from "@/Classes";
import Reveal from "./Reveal";

function Skill({ skill }: { skill: Classes.Skill }) {
    return (
        <div className="flex flex-col
        w-16 h-16
        justify-center items-center gap-2">
            <skill.IconComponent className="w-8 h-8" />
            <p className="h6 text-text-1">{skill.name}</p>
        </div>
    );
}

export default function SkillSet({ skillSet }: { skillSet: Classes.SkillSet }) {
    return (
        <Reveal className="flex flex-col
        bg-background-3 bg-opacity-25 backdrop-blur-sm rounded-md
        shadow-md shadow-background-1 border border-background-3 border-opacity-25
        flex-grow items-center
        ">
            <div
                className={`
                    flex flex-col gap-1 lg:gap-2 p-1 lg:p-2
                    ${
                        skillSet.skills.length < 6 ? "" : "xl:max-w-xl"
                    }
                `}
            >
                <h3 className="font-bold text-center">{skillSet.name}</h3>
                <div className="flex flex-wrap gap-2 lg:gap-4 justify-center">
                    {skillSet.skills.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </Reveal>
    );
}
