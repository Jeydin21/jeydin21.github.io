"use client";

import { useState, useEffect } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Home from "@/sections/Home";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import PopupMenu from "@/components/PopupMenu";
import ProjectMenu from "@/components/ProjectMenu";
import LoadingScreen from "@/components/LoadingScreen";

export default function Main() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    });

    return (
        <>
            <ParticlesBackground className="fixed inset-0 -z-50" />
            <div className="flex flex-col h4 font-medium text-text">
                <Home delay={loading ? 3.0 : 0.0} />
                <Navbar />
                <main className="relative">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col w-full max-w-6xl">
                            <About />
                            <Experience />
                            <Projects />
                            <Contact />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
            <PopupMenu />
            <ProjectMenu />
            {/* <LoadingScreen loading={loading} /> */}
        </>
    );
}
