import Link from "next/link";
import { ComponentType } from "react";
import {
    useIsMobile,
    useActiveSection
} from "@/States";
import { openPopupMenu } from "./PopupMenu";
import * as Config from "@/Config";
import { useEffect } from "react";

// Icons
import UserMale from "@/svg/UserMale";
import CheckAll from "@/svg/CheckAll";
import Briefcase from "@/svg/Briefcase";
import Contacts from "@/svg/Contacts";
import Menu from "@/svg/Menu";
import ProfileIcon from "./ProfileIcon";

function Tab({ href, text, IconComponent, active, target }:
    { href: string, text: string, IconComponent: ComponentType<{ className?: string }>, active?: boolean, target?: string }) {
    return (
        <div className="md:py-4 py-2 px-4">
            <Link href={href} target={target} className={`flex items-center md:text-xl text-sm text-center font-medium
            transition-colors duration-200 ease-in-out hover:text-primary-light ${active ? "text-primary" : ""}`}>
                <div className="relative flex items-center">
                    <IconComponent className="w-6 h-6 mr-2" />
                    <p>{text}</p>
                </div>
            </Link>
        </div>
    );
}

function Hamburger({ activeSection }: { activeSection: string }) {
    return (
        <div className="flex items-center">
            <button onClick={openPopupMenu}>
                <Menu className="w-6 h-6 mr-4" />
            </button>
        </div>
    );
}

function Tabs({ activeSection }: { activeSection: string }) {
    return (
        <div className="flex w-full justify-end">
            <Tab href="#about" text="About" IconComponent={UserMale} active={activeSection == "about"} />
            <Tab href="#experience" text="Experience" IconComponent={Briefcase} active={activeSection == "experience"} />
            <Tab href="#projects" text="Projects" IconComponent={CheckAll} active={activeSection == "projects"} />
            <Tab href="#contact" text="Contact" IconComponent={Contacts} active={activeSection == "contact"} />
        </div>
    );
}

export default function Navbar() {
    const activeSection = useActiveSection();

    return (
        <nav className="bg-background-2 bg-opacity-25 backdrop-blur-lg shadow-md shadow-shadow sticky top-0 z-50 flex justify-center items-center">
            <div className="flex w-full max-w-6xl">
                <div className="flex w-full justify-start">
                    <Tab href="#home" text={Config.userInfo.nickName} IconComponent={ProfileIcon} />
                </div>

                {useIsMobile() ? (
                    <Hamburger activeSection={activeSection} />
                ) : (
                    <Tabs activeSection={activeSection} />
                )}
            </div>
        </nav>
    );
}
