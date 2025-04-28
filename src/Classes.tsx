import React, { type JSX } from "react";
import { ComponentType } from "react";
import { hyphenateSync } from "hyphen/en";

// Languages
import Java from "@/svg/languages/Java";
import Cpp from "@/svg/languages/Cpp";
import C from "@/svg/languages/C";
import CSharp from "@/svg/languages/CSharp";
import Dart from "@/svg/languages/Dart";
import Html5 from "@/svg/languages/Html5";
import Css3 from "@/svg/languages/Css3";
import JavaScript from "@/svg/languages/JavaScript";
import TypeScript from "@/svg/languages/TypeScript";
import Rust from "@/svg/languages/Rust";
import Python from "@/svg/languages/Python";
import R from "@/svg/languages/R";

// Frameworks
import Flutter from "@/svg/frameworks/Flutter";
import Spring from "@/svg/frameworks/Spring";
import ReactJs from "@/svg/frameworks/ReactJs";
import NextJs from "@/svg/frameworks/NextJs";
import Arduino from "@/svg/frameworks/Arduino";
import DotNet from "@/svg/frameworks/DotNet";
import ElectronJs from "@/svg/frameworks/ElectronJs";
import TailwindCss from "@/svg/frameworks/TailwindCss";
import LWJGL from "@/svg/frameworks/LWJGL";
import Node from "@/svg/frameworks/Node";

// Databases
import MySql from "@/svg/databases/MySql";
import SqLite from "@/svg/databases/SqLite";
import Supabase from "@/svg/databases/Supabase";
import PostgreSql from "@/svg/databases/PostgreSql";

// IDEs
import Eclipse from "@/svg/ides/Eclipse";
import IntelliJ from "@/svg/ides/IntelliJ";
import VSCode from "@/svg/ides/VSCode";
import VisualStudio from "@/svg/ides/VisualStudio";

// Tools
import Git from "@/svg/tools/Git";
import Bash from "@/svg/tools/Bash";
import Docker from "@/svg/tools/Docker";
import Postman from "@/svg/tools/Postman";
import Npm from "@/svg/tools/Npm";
import Oci from "@/svg/tools/Oci";
import Gradle from "@/svg/tools/Gradle";
import GraphQL from "@/svg/tools/GraphQL";
import Hetzner from "@/svg/tools/Hetzner";
import Nginx from "@/svg/tools/Nginx";

export class Skill {
    name: string;
    IconComponent: ComponentType<{ className?: string }>;

    constructor(
        name: string,
        IconComponent: ComponentType<{ className?: string }>
    ) {
        this.name = name;
        this.IconComponent = IconComponent;
    }

    static java: Skill = new Skill("Java", Java);
    static cpp: Skill = new Skill("C++", Cpp);
    static c: Skill = new Skill("C", C);
    static cSharp: Skill = new Skill("C#", CSharp);
    static dart: Skill = new Skill("Dart", Dart);
    static html5: Skill = new Skill("HTML", Html5);
    static css3: Skill = new Skill("CSS", Css3);
    static javaScript: Skill = new Skill("JavaScript", JavaScript);
    static typeScript: Skill = new Skill("TypeScript", TypeScript);
    static rust: Skill = new Skill("Rust", Rust);
    static python: Skill = new Skill("Python", Python);
    static r: Skill = new Skill("R", R);

    static spring: Skill = new Skill("Spring", Spring);
    static arduino: Skill = new Skill("Arduino", Arduino);
    static dotNet: Skill = new Skill(".NET", DotNet);
    static flutter: Skill = new Skill("Flutter", Flutter);
    static nextJs: Skill = new Skill("Next", NextJs);
    static reactJs: Skill = new Skill("React", ReactJs);
    static electronJs: Skill = new Skill("Electron", ElectronJs);
    static tailwindCss: Skill = new Skill("Tailwind", TailwindCss);
    static lwjgl: Skill = new Skill("LWJGL", LWJGL);
    static node: Skill = new Skill("Node", Node);

    static mySql: Skill = new Skill("MySQL", MySql);
    static sqLite: Skill = new Skill("SQLite", SqLite);
    static supabase: Skill = new Skill("Supabase", Supabase);
    static postgreSql: Skill = new Skill("PostgreSQL", PostgreSql);

    static eclipse: Skill = new Skill("Eclipse", Eclipse);
    static intelliJ: Skill = new Skill("IntelliJ", IntelliJ);
    static vsCode: Skill = new Skill("VS Code", VSCode);
    static visualStudio: Skill = new Skill("VS", VisualStudio);

    static git: Skill = new Skill("Git", Git);
    static bash: Skill = new Skill("Bash", Bash);
    static docker: Skill = new Skill("Docker", Docker);
    static postman: Skill = new Skill("Postman", Postman);
    static npm: Skill = new Skill("NPM", Npm);
    static oci: Skill = new Skill("OCI", Oci);
    static gradle: Skill = new Skill("Gradle", Gradle);
    static graphQL: Skill = new Skill("GraphQL", GraphQL);
    static hetzner: Skill = new Skill("Hetzner", Hetzner);
    static nginx: Skill = new Skill("Nginx", Nginx);
}

export class SkillSet {
    name: string;
    skills: Skill[];

    constructor(name: string, skills: Skill[]) {
        this.name = name;
        this.skills = skills;
    }
}

function hyphenateJSX(element: React.ReactNode): React.ReactNode {
    if (typeof element === "string") {
        return hyphenateSync(element);
    }

    if (React.isValidElement<React.ReactPortal>(element)) {
        const children = React.Children.map(element.props.children, child =>
            hyphenateJSX(child)
        );

        return React.cloneElement(element, {}, children);
    }

    if (Array.isArray(element)) {
        return element.map(child => hyphenateJSX(child));
    }

    return element;
}

export class Status {
    text: string;
    color: string;

    constructor(
        text: string,
        color: string
    ) {
        this.text = text;
        this.color = color;
    }

    static paused: Status = new Status("Paused", "text-red-700");
    static inDev: Status = new Status("In Dev", "text-yellow-700");
    static archived: Status = new Status("Archived", "text-gray-700");
    static complete: Status = new Status("Complete", "text-green-700");
}

export class Detail {
    title: string;
    content: JSX.Element;

    constructor(
        title: string,
        content: JSX.Element
    ) {
        this.title = title;
        this.content = hyphenateJSX(content) as JSX.Element;
    }
}

export class Project {
    name: string;
    details: Detail[];
    status: Status;
    skills: string[];
    image?: string;
    demoUrl?: string;
    githubUrl?: string;

    constructor(
        name: string,
        details: Detail[],
        status: Status,
        skills: string[],
        image?: string,
        demoUrl?: string,
        githubUrl?: string
    ) {
        this.name = name;
        this.details = details;
        this.status = status;
        this.skills = skills;
        this.image = image;
        this.demoUrl = demoUrl;
        this.githubUrl = githubUrl;
    }
}

export class Job {
    name: string;
    date: string;
    company?: string;
    details?: Detail[];
    skills?: string[];
    image?: string;

    constructor(
        name: string,
        date: string,
        company?: string,
        details?: Detail[],
        skills?: string[],
        image?: string
    ) {
        this.name = name;
        this.company = company;
        this.date = date;
        this.details = details;
        this.skills = skills;
        this.image = image;
    }
}
