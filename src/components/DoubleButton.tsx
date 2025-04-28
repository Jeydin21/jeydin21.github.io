import React from "react";
import { ComponentType } from "react";

export default function DoubleButton({ id, className, type, disabled, onClick, text, iconType, iconDisabled, onIconClick, IconComponent }:
    { id?: string, className?: string,
        type?: "submit" | "reset" | "button", disabled?: boolean, onClick?: () => void, text: string,
        iconType?: "submit" | "reset" | "button", iconDisabled?: boolean, onIconClick?: () => void, IconComponent: ComponentType<{ className?: string }> }) {
    return (
        <div
            id={id}
            className={`flex h-full ${className}`}
        >
            <button
                type={type}
                disabled={disabled}
                onClick={onClick}
                className="appearance-none outline-none p-3 bg-primary disabled:bg-background-4 rounded-[0.375rem_0_0_0.375rem]
                transition-colors duration-200 ease-in-out hover:bg-primary-light disabled:hover:bg-background-4 w-full active:bg-primary"
            >
                {text}
            </button>
            <div className="h-full w-0.5 bg-text-2"></div>
            <button
                type={iconType}
                disabled={iconDisabled}
                onClick={onIconClick}
                className="appearance-none outline-none p-3 bg-primary disabled:bg-background-4 rounded-[0_0.375rem_0.375rem_0]
                transition-colors duration-200 ease-in-out hover:bg-primary-light disabled:hover:bg-background-4 active:bg-primary"
            >
                <IconComponent />
            </button>
        </div>
    );
}
