import React from "react";
import {
    useState,
    useRef,
    useEffect
} from "react";
import Arrow from "@/svg/Arrow";

export default function Selector({ options, selected, onSelect, className }:
    { options: string[], selected: number, onSelect: (option: string, index: number) => void, className?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState(options[selected]);
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option: string, index: number) => {
        setCurrentValue(option);
        onSelect(option, index);
        setIsOpen(false);
    };

    return (
        <div ref={selectRef} className={`relative ${className}`}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full h-full
                apearance-none outline-none p-3 text-left
                bg-background-4 bg-opacity-25 backdrop-blur-sm rounded-md
                shadow-md shadow-background-1 border border-background-4 border-opacity-25"
            >
                {currentValue || "Select an option"}
                <Arrow className={`w-5 h-5 ml-2 transition-transform duration-200 ease-in-out ${isOpen ? "-rotate-180" : ""}`} />
            </button>
            {isOpen && (
                <div className="absolute z-40 right-0 w-full mt-1
                    bg-background-4 bg-opacity-25 backdrop-blur-sm rounded-md
                    shadow-md shadow-background-1 border border-background-4 border-opacity-25
                    max-h-60 overflow-auto">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(option, index)}
                            className="w-full text-left p-3
                            transition-colors duration-200 ease-in-out
                            hover:bg-primary rounded-md"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
