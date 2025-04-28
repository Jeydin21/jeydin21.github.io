import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        let inited = false;
        const handleResize = () => {
            if (inited) return;

            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleResize();

        return () => {
            inited = true;
        };
    }, []);

    return windowSize;
}

function calculateParticles(windowSize: { width: number, height: number }) {
    const area = windowSize.width * windowSize.height;
    return Math.floor(area / 16000);
};

export default function ParticlesBackground({ className }: { className?: string }) {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const windowSize = useWindowSize();

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: {
                enable: false,
            },
            fpsLimit: 30,
            detectRetina: true,
            smooth: true,
            particles: {
                color: {
                    value: "#49FED0", // same as secondary
                },
                links: {
                    enable: true,
                    color: "#49FED0", // same as secondary
                    distance: 100,
                    opacity: 0.1,
                    width: 0.5,
                },
                move: {
                    enable: true,
                    speed: 0.02,
                    direction: MoveDirection.none,
                    outModes: {
                        default: OutMode.bounce,
                    },
                },
                number: {
                    value: calculateParticles(windowSize),
                },
                opacity: {
                    value: {
                        min: 0.1,
                        max: 0.6,
                    },
                },
                shape: {
                    type: "star",
                },
                size: {
                    value: {
                        min: 1,
                        max: 2.5,
                    },
                },
                collisions: {
                    enable: true,
                    mode: "bounce",
                }
            },
        }),
        [windowSize],
    );

    if (init) {
        return (
            <div className={className}>
                <Particles
                    id="bg-particles"
                    options={options}
                    className="absolute inset-0"
                />
            </div>
        );
    }

    return <></>;
}
