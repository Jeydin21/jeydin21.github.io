import React from "react";
import { useState, useEffect } from "react";
import PartyParrot from "@/svg/PartyParrot";

export default function LoadingScreen({ loading }: { loading: boolean }) {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const animation = document.getElementById("loading-screen-animation");
        if (animation == null) return;

        animation.style.opacity = "1";
    }, []);

    useEffect(() => {
        if (loading) return;

        const loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen == null) return;

        loadingScreen.style.opacity = "0";
        loadingScreen.style.scale = "2";

        setTimeout(() => {
            loadingScreen.style.display = "none";
            setVisible(false);
        }, 500);
    }, [ loading ]);

    if (!visible) return <></>;
    return (
        <div id="loading-screen" className="fixed inset-0 transition-all duration-500 ease-in-out bg-background-1 z-50">
            <div id="loading-screen-animation" className="flex flex-col w-full h-full justify-center items-center transition-all duration-500 ease-in-out opacity-0">
                <PartyParrot className="w-64 h-64" duration={700} />
                <h2 className="font-bold p-16">Loading...</h2>
            </div>
        </div>
    );
}
