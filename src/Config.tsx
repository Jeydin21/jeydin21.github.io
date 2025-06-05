import * as Classes from "@/Classes";
import moment from "moment";
import C from "./svg/languages/C";

export const userInfo = {
    fullName: "Jeydin Pham",
    shortName: "Jeydin",
    nickName: "Jeydin21",
    age: moment().diff(moment({
        day: 6,
        month: 7,
        year: 2007,
    }), "years"),
    description: new Classes.Detail(
        "Description",
        <>
            Hi there!
            I'm a Computer Science student who got into coding back in the 7th grade when I learned
            how to create Discord bots during the COVID-19 pandemic. I'm aiming to become a full-stack developer, because why choose one
            side when you can do it all?
            <br /><br />
            When I'm not coding, I'm either grinding video games, working on homework, or sleeping off my massive sleep debt :)
        </>
    ),
    role: "Full-Stack Developer",
    education: {
        link: "https://www.utdallas.edu/",
        school: "The University of Texas at Dallas",
        period: "Bachelor's degree in CS: 2025 - 2029",
    }
};
export const skillSets = [
    new Classes.SkillSet(
        "Languages",
        [
            Classes.Skill.typeScript,
            Classes.Skill.javaScript,
            Classes.Skill.python,
            Classes.Skill.java,
            // Classes.Skill.c,
            // Classes.Skill.cpp,
            // Classes.Skill.cSharp,
            // Classes.Skill.dart,
        ]
    ),
    new Classes.SkillSet(
        "Front-End",
        [
            Classes.Skill.html5,
            Classes.Skill.css3,
            Classes.Skill.nextJs,
            Classes.Skill.reactJs,
            Classes.Skill.tailwindCss,
            // Classes.Skill.flutter,
        ]
    ),
    new Classes.SkillSet(
        "Back-End",
        [
            Classes.Skill.node,
            Classes.Skill.mySql,
            Classes.Skill.redis,
            Classes.Skill.mongoDb
        ]
    ),
    new Classes.SkillSet(
        "Tools",
        [
            Classes.Skill.vsCode,
            Classes.Skill.bash,
            Classes.Skill.git,
            Classes.Skill.npm,
            Classes.Skill.docker,
            Classes.Skill.vercel
        ]
    ),
];

/*
new Classes.Job(
        "Freelancer",
        "Mar 2022 - May 2022",
        "Fiverr",
        [
            new Classes.Detail(
                "Description",
                <>
                    Developed and maintained small-scale applications for freelance clients, enhancing my
                    technical skills and project management abilities while generating additional income.
                </>
            ),
        ],
        ["java", "gradle", "opengl"],
        "jobs/fiverr.png"
    ),
*/

export const jobs = [
    new Classes.Job(
        "Grading Assistant",
        "Feb 2023 - May 2025",
        "Kumon North America",
        [
            new Classes.Detail(
                "Description",
                <>
                    Assisted two instructors in managing a classroom of 30+ students by organizing inventory across 40+ levels, grading assignments to maintain averages above 70%, and supervising classroom noise levels.
                </>
            ),
        ],
        [],
        "jobs/kumon.png"
    )
];

/*
new Classes.Project(
        "title",
        [
            new Classes.Detail(
                "Description",
                <>
                    description
                </>
            ),
        ],
        Classes.Status.complete,
        ["tags"],
        "projects/chess.png",
        undefined,
        "https://github.com/Jeydin21/"
    ),
*/

export const projects = [
    new Classes.Project(
        "Munchyroll",
        [
            new Classes.Detail(
                "Description",
                <>
                    Munchyroll is an ad-free anime streaming website focused on simplicity and responsive design. Built mainly with JavaScript and CSS, it offers a clean, user-friendly experience across all devices for anime fans.
                </>
            ),
        ],
        Classes.Status.paused,
        ["react", "next.js", "javascript", "fullstack", "tailwindcss", "web-scraping", "html", "css", "responsive"],
        "projects/munchyroll.png",
        undefined,
        "https://github.com/Jeydin21/Munchyroll"
    ),
    new Classes.Project(
        "Raincheck ☔",
        [
            new Classes.Detail(
                "Description",
                <>
                    Raincheck ☔ is a small web app that displays the current weather and forecast in any location in the world. The aim of this project is to practice my front-end dev skills and visualization of data across multiple screen sizes.
                </>
            ),
        ],
        Classes.Status.complete,
        ["react", "next.js", "shadcn/ui", "fullstack", "chart.js", "javascript", "tailwindcss", "html", "css", "responsive"],
        "projects/raincheck.png",
        undefined,
        "https://github.com/Jeydin21/Raincheck"
    ),
    new Classes.Project(
        "GoogleBot",
        [
            new Classes.Detail(
                "Description",
                <>
                    GoogleBot was a multipurpose Discord bot that offered a wide range of fun commands to use on Discord, ranging from a simple economy system to meme generators and Morse code translators.
                    The aim of this project was to introduce myself to JavaScript and Discord.js in a CI/CD project format, which I continuted to keep up with for 2-3 years.                </>
            ),
        ],
        Classes.Status.archived,
        ["discord.js", "javascript", "node.js", "npm", "discord-bot", "backend"],
        undefined,
        undefined,
        "https://github.com/GoogleBot-Development/GoogleBot"
    ),
    new Classes.Project(
        "Calculator App",
        [
            new Classes.Detail(
                "Description",
                <>
                    This is my rendition of "The Calculator App" project, which uses HTML, Tailwind CSS, and JavaScript to bring you a functioning calculator web app that has dark and light mode support, as well as mobile responsiveness.
                    I made this project mainly to practice using Tailwind CSS more, as I feel like it's something that I should become knowledgeable in if I want to become a major in frontend design.
                    I also used this project to experiement with the Visual Studio Code keybinds, as those are crucial to helping a developer speed up their development process.
                </>
            ),
        ],
        Classes.Status.complete,
        ["html", "tailwindcss", "javascript", "responsive", "frontend"],
        "projects/calculator.png",
        undefined,
        "https://github.com/Jeydin21/Calculator-App"
    ),
    new Classes.Project(
        "Crypto Comparer",
        [
            new Classes.Detail(
                "Description",
                <>
                    Crypto Comparer is a website created with Flask to compare the prices of two cryptocurrencies made by me and 2 friends. We created this project for a club called Technical Student Association (TSA). We were all introductory computer science students in high school and this was our first real project outside of class that didn't have any instructions to guide us.
                </>
            ),
        ],
        Classes.Status.archived,
        ["html", "css, python", "flask", "chart.js", "pycoingecko", "fullstack", "responsive"],
        "projects/crypto-comparer.png",
        undefined,
        "https://github.com/Jeydin21/Crypto-Comparer"
    ),
];

export const contactInfo = {
    location: "Katy, Texas",
    email: "jeydin@j21.dev",
    github: "https://github.com/Jeydin21/",
    instagram: "https://www.instagram.com/Jeydin21/",
    linkedin: "https://www.linkedin.com/in/jeydinpham/",
};
export const footer = [
    "© " + moment().year() + " Jeydin Pham",
    "",
];