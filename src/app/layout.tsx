import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import * as Config from "@/Config";

import "./styles/main.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: Config.userInfo.fullName,
    description: "My personal website hosted on GitHub Pages and made with 💖",
    robots: "index, follow",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${font.className} overflow-hidden`}>
                <div id="main-content" className="block max-h-screen overflow-auto">
                    {children}
                </div>
            </body>
            <script
                src="https://app.rybbit.io/api/script.js"
                data-site-id="289"
                defer
            ></script>
        </html>
    );
}
