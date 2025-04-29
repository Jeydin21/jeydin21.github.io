import React from "react";
import Title from "@/components/Title";
import { hyphenateSync } from "hyphen/en";
import IconLink from "@/components/IconLink";
import Info from "@/components/Info";
import Divider from "@/components/Divider";
import * as Config from "@/Config";
import Reveal from "@/components/Reveal";

// Icons
import Github from "@/svg/Github";
import Instagram from "@/svg/Instagram";
import Linkedin from "@/svg/Linkedin";
import Mail from "@/svg/Mail";
import Location from "@/svg/Location";

export default function Contact() {
    return (
        <section id="contact">
            <Title text="Contact" />
            <div className="
                flex flex-col justify-center items-center
                mb-24 md:mb-32
                px-8 md:px-16
            ">
                <Reveal>
                    <p className="
                    mb-8 md:mb-12
                    max-w-xl text-center text-text-1
                    ">
                        {hyphenateSync(`Have a question or want to work together?
                            Leave your details and I'll get back to you as soon as possible.`)}
                    </p>
                </Reveal>
                <div className="flex flex-col lg:flex-row justify-center items-center w-full">
                    <div className="w-full max-w-md">
                        <Reveal className="flex flex-col gap-2" direction="up" delay={0.4}>
                            <Info name="E-mail" value={Config.contactInfo.email} href={"mailto:" + Config.contactInfo.email} IconComponent={Mail} />
                            <Info name="Location" value={Config.contactInfo.location} href={"https://www.google.com/maps/place/" + Config.contactInfo.location} IconComponent={Location} />
                        </Reveal>
                        <Reveal direction="right">
                            <Divider className="my-4" />
                        </Reveal>
                        <Reveal className="flex gap-2 justify-center items-center" direction="down" delay={0.4}>
                            <IconLink href={Config.contactInfo.github} IconComponent={Github} />
                            <IconLink href={Config.contactInfo.linkedin} IconComponent={Linkedin} />
                            <IconLink href={Config.contactInfo.instagram} IconComponent={Instagram} />
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
