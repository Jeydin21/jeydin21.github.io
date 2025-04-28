import React from "react";
import Reveal from "./Reveal";
import Button from "./Button";
import Image from "next/image";
import Divider from "./Divider";
import * as Classes from "@/Classes";
import IconLink from "./IconLink";
import Github from "@/svg/Github";
import { openProjectMenu } from "./ProjectMenu";

export default function Project({ project }: { project: Classes.Project }) {
    return (
        <Reveal className="w-80 sm:w-96 lg:w-112 bg-background-3 bg-opacity-15 backdrop-blur-sm
        shadow-md shadow-shadow border border-background-3 border-opacity-25
        rounded-lg overflow-hidden flex flex-col">
            <>
                {
                    project.image &&
                    <Image loading="lazy" className="absolute w-full h-full object-cover -z-10 opacity-25 brightness-150 blur-md" src={project.image} width={320} height={180} alt={`${project.name} screenshot`} />
                }
            </>
            <div className="p-4 flex flex-col h-full justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <Reveal direction="up" delay={0.4}>
                        <h3 className="font-bold">{project.name}</h3>
                    </Reveal>
                    <Reveal direction="right">
                        <Divider />
                    </Reveal>
                    <Reveal className="flex flex-wrap gap-1" direction="down" delay={0.4}>
                        {project.skills.map((skill, index) => (
                            <span key={index} className={`text-secondary font-normal bg-secondary bg-opacity-10 px-4 py-0.5 rounded-lg h6 flex-grow text-center`}>{skill}</span>
                        ))}
                    </Reveal>
                </div>
                <div className="flex justify-between">
                    <Reveal className="flex items-end h5 text-text-3" direction="right">
                        <p>Status: <span className={project.status.color}>{project.status.text}</span></p>
                    </Reveal>
                    <Reveal direction="left">
                        <div className="flex items-center gap-2">
                            {project.githubUrl && <IconLink href={project.githubUrl} IconComponent={Github} />}
                            <Button text="View" onClick={() => openProjectMenu(project)} />
                        </div>
                    </Reveal>
                </div>
            </div>
        </Reveal>
    );
}
