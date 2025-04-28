import React from "react";
import Title from "@/components/Title";
import SkillSet from "@/components/SkillSet";
import Image from "next/image";
import Divider from "@/components/Divider";
import * as Config from "@/Config";
import Reveal from "@/components/Reveal";
import Selector from "@/components/Selector";
import DoubleButton from "@/components/DoubleButton";
import Info from "@/components/Info";
import { useState } from "react";

// Icons
import Download from "@/svg/Download";
import School from "@/svg/School";

export default function About() {
    const [resumeLanguage, setResumeLanguage] = useState(0);

    return (
        <section id="about">
            <Title text="About" />
            <div className="flex flex-col">
                <div className="flex justify-center px-8
                flex-col sm:flex-row-reverse
                gap-8 lg:gap-16
                ">
                    <div className="flex flex-col justify-center items-center min-w-64 min-h-64 md:min-w-80 md:min-h-80 lg:min-w-96 lg:min-h-96">
                        <Reveal direction="down">
                            <div className="size-64 md:size-80 lg:size-96 relative">
                                <div
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        background: "radial-gradient(circle, rgba(250, 249, 246, 0.1) 30%, transparent 100%)",
                                        filter: "blur(50px)",
                                    }}
                                ></div>
                                <Image
                                    loading="lazy"
                                    className="
                                        size-full rounded-full
                                        border border-text border-opacity-25
                                    "
                                    src="profile.jpeg"
                                    width={512}
                                    height={512}
                                    alt="Me"
                                    style={{
                                        maskImage: "radial-gradient(circle at 15% 85%, transparent 15%, black 18%)",
                                    }}
                                />
                                <div
                                    className="
                                        absolute left-0 bottom-0 size-[30%] flex flex-col justify-center items-center
                                        bg-background-3 bg-opacity-25 backdrop-blur-sm rounded-full
                                        border-4 border-secondary
                                    "
                                >
                                    <h2 className="font-extrabold">{Config.userInfo.age}</h2>
                                    <h4 className="text-text-2">y/o</h4>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="flex flex-col flex-grow gap-8">
                        <div className="flex flex-col gap-2">
                            <Reveal direction="up" delay={0.4}>
                                <h3 className="font-bold text-center">{Config.userInfo.fullName}</h3>
                            </Reveal>
                            <Reveal direction="right">
                                <Divider />
                            </Reveal>
                            <Reveal direction="right" delay={0.6}>
                                <p className="text-justify text-text-1">
                                    {Config.userInfo.description.content}
                                </p>
                            </Reveal>
                        </div>
                        <Reveal className="flex flex-col h-full gap-2 lg:gap-4" delay={0.4}>
                            <Info name={Config.userInfo.education.school} value={Config.userInfo.education.period} href={Config.userInfo.education.link} IconComponent={School} />
                            <div className="relative grid grid-cols-[70%_30%] space-x-2 lg:space-x-4">
                                <div>
                                    <DoubleButton
                                        className="w-full"
                                        text="View Resume"
                                        IconComponent={Download}
                                        onClick={() => {
                                            window.open(Object.entries(Config.userInfo.resumes)[resumeLanguage][1], "_blank")
                                        }}
                                        onIconClick={() => {
                                            var link = document.createElement("a");
                                            link.download = `Resume_${Config.userInfo.fullName.replaceAll(" ", "_")}_${Object.entries(Config.userInfo.resumes)[resumeLanguage][0]}.pdf`;
                                            link.href = Object.entries(Config.userInfo.resumes)[resumeLanguage][1];
                                            link.click();
                                            link.remove();
                                        }}
                                    />
                                </div>
                                <div>
                                    <Selector
                                        className="h-full"
                                        options={Object.entries(Config.userInfo.resumes).map(([key, value]) => key)}
                                        selected={resumeLanguage}
                                        onSelect={(option, index) => setResumeLanguage(index)}
                                    />
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 lg:gap-4 mt-8 px-8 w-full">
                    {Config.skillSets.map((skillSet, index) => (
                        <SkillSet key={index} skillSet={skillSet} />
                    ))}
                </div>
            </div>
        </section>
    );
}
