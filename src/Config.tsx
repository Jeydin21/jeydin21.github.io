import * as Classes from "@/Classes";
import moment from "moment";

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
            how to create Discord bots during the COVID-19 pandemic. I'm aiming to become a full-stack developer — because why choose one
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
    },
    resumes: {
        EN: "resumes/EN.pdf",
        VN: "resumes/VN.pdf",
    },
};
export const skillSets = [
    new Classes.SkillSet(
        "Languages",
        [
            Classes.Skill.typeScript,
            Classes.Skill.javaScript,
            Classes.Skill.python,
            // Classes.Skill.r,
            Classes.Skill.java,
            // Classes.Skill.c,
            // Classes.Skill.cpp,
            // Classes.Skill.cSharp,
            // Classes.Skill.rust,
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
            // Classes.Skill.spring,
            Classes.Skill.node,
            Classes.Skill.mySql,
            // Classes.Skill.sqLite,
            // Classes.Skill.postgreSql,
            // Classes.Skill.supabase,
        ]
    ),
    new Classes.SkillSet(
        "Tools",
        [
            // Classes.Skill.eclipse,
            // Classes.Skill.intelliJ,
            Classes.Skill.vsCode,
            // Classes.Skill.visualStudio,
            Classes.Skill.bash,
            Classes.Skill.git,
            Classes.Skill.npm,
            // Classes.Skill.graphQL,
            // Classes.Skill.gradle,
            // Classes.Skill.nginx,
            // Classes.Skill.docker,
            // Classes.Skill.postman,
            // Classes.Skill.oci,
            // Classes.Skill.hetzner,
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
        ["javascript", "tailwindcss", "web-scraping", "html", "css", "responsive"],
        "projects/munchyroll.png",
        undefined,
        "https://github.com/Jeydin21/Munchyroll"
    ),
];

/* You may be wondering why I would expose these keys
    to the public. The reason is that I don't care about them.
    I don't use Formspree for anything important, and the reCAPTCHA key is a site key, so it doesn't matter if it's exposed.
    You need the secret key to actually use reCAPTCHA, and that is truly hidden.
    If you want to use these keys, go ahead. I don't care. Just don't spam me with emails or reCAPTCHA requests.
*/
export const contactInfo = {
    formspreeKey: "mgepvyyv",
    reCaptchaKey: "6Ld-JyYrAAAAAFAT3E_dOc5C63UmCjen9k0_4m6c", // Site key
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