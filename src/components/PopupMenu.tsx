import React from "react";
import {
    useIsMobile,
    useActiveSection
} from "@/States";
import Link from "next/link";
import { ComponentType } from "react";
import * as Config from "@/Config";

// Icons
import UserMale from "@/svg/UserMale";
import CheckAll from "@/svg/CheckAll";
import Briefcase from "@/svg/Briefcase";
import Contacts from "@/svg/Contacts";
import Close from "@/svg/Close";
import ProfileIcon from "./ProfileIcon";

export function openPopupMenu() {
    const popupMenu = document.getElementById("popup-menu");
    if (popupMenu == null) return;

    popupMenu.style.width = "100%";
}

export function closePopupMenu() {
    const popupMenu = document.getElementById("popup-menu");
    if (popupMenu == null) return;

    popupMenu.style.width = "0%";
}

function Option({ href, text, IconComponent, active, target }:
    { href: string, text: string, IconComponent: ComponentType<{ className?: string }>, active?: boolean, target?: string }) {
    return (
        <div className="md:py-4 py-2 px-4">
            <Link href={href} target={target} onClick={closePopupMenu} className={`flex items-center md:text-xl text-sm text-center font-medium
            transition-colors duration-200 ease-in-out hover:text-primary-light ${active ? "text-primary" : ""}`}>
                <div className="relative flex items-center">
                    <IconComponent className="w-8 h-8 mr-4" />
                    <h2>{text}</h2>
                </div>
            </Link>
        </div>
    );
}

function Options({ activeSection }: { activeSection: string }) {
    return (
        <div className="flex flex-col h-full">
            <div className="flex-grow"></div>
            <Option href="#about" text="About" IconComponent={UserMale} active={activeSection == "about"} />
            <Option href="#experience" text="Experience" IconComponent={Briefcase} active={activeSection == "experience"} />
            <Option href="#projects" text="Projects" IconComponent={CheckAll} active={activeSection == "projects"} />
            <Option href="#contact" text="Contact" IconComponent={Contacts} active={activeSection == "contact"} />
            <div className="flex-grow"></div>
            <div className="flex-grow"></div>
            <Option href="#home" text={Config.userInfo.nickName} IconComponent={ProfileIcon} />
            <div className="flex-grow"></div>
        </div>
    );
}

export default function PopupMenu() {
    const activeSection = useActiveSection();

    if (!useIsMobile()) return null;
    return (
        <div id="popup-menu" className="fixed right-0 top-0 w-0 transition-all duration-200 ease-in-out h-full bg-background-1 bg-opacity-95 backdrop-blur-sm z-50">
            <div className="absolute inset-0 w-screen h-screen flex flex-col">
                <div className="flex justify-end md:py-4 py-2">
                    <button onClick={closePopupMenu}>
                        <Close className="w-6 h-6 mr-4" />
                    </button>
                </div>
                <div className="flex justify-center items-center h-full">
                    <Options activeSection={activeSection} />
                </div>
            </div>
        </div>
    );
}
