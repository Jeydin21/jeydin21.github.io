import React from "react";
import Title from "@/components/Title";
import Job from "@/components/Job";
import * as Config from "@/Config";
import * as Classes from "@/Classes";
import { useWindowSize } from "@/States";

function Milestone({ job, odd }: { job: Classes.Job, odd: boolean }) {
    const oneSided = useWindowSize().width < 768;

    return (
        <div className="w-80 md:w-176 lg:w-208 flex">
            {!oneSided && (
                <div className="flex w-full my-2">
                    {odd && (
                        <Job job={job} />
                    )}
                </div>
            )}
            <div className="w-6 md:w-24 flex">
                {!oneSided && (
                    <div className="flex w-full justify-center my-6">
                        {odd && (
                            <div className="w-0 h-0
                                border-t-[15px] border-t-transparent
                                border-r-[10px] border-r-secondary
                                border-b-[15px] border-b-transparent"
                            >
                            </div>
                        )}
                    </div>
                )}
                <div className="w-1 md:w-2 bg-background-4"></div>
                <div className="flex w-full justify-center my-6">
                    {(!odd || oneSided) && (
                        <div className="w-0 h-0
                            border-t-[15px] border-t-transparent
                            border-l-[10px] border-l-secondary
                            border-b-[15px] border-b-transparent"
                        >
                        </div>
                    )}
                </div>
            </div>
            <div className="flex w-full my-2">
                {(!odd || oneSided) && (
                    <Job job={job} />
                )}
            </div>
        </div>
    );
}

export default function Experience() {
    const array = Config.jobs;

    return (
        <section id="experience">
            <Title text="Experience" />
            <div className="flex flex-col justify-center items-center">
                {array.map((job, index) => (
                    <Milestone key={index} job={job} odd={index % 2 == 0} />
                ))}
            </div>
        </section>
    );
}
