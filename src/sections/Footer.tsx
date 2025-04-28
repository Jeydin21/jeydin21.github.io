import ButtonArrow from "@/components/ButtonArrow";
import * as Config from "@/Config";
import Reveal from "@/components/Reveal";

export default function Footer() {
    return (
        <footer className="bg-background-2 bg-opacity-25 backdrop-blur-lg relative flex flex-col justify-center items-center text-center py-8 space-y-4">
            <Reveal className="absolute -top-8">
                <ButtonArrow direction="up" href="#home" />
            </Reveal>
            <Reveal>
                {Config.footer.map((text, index) => (
                    <h6 key={index} className="font-light text-text-2">{text}</h6>
                ))}
            </Reveal>
        </footer>
    );
}
