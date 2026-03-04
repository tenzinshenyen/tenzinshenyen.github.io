import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;

        // Add glass background when scrolled
        if (latest > 50) setIsScrolled(true);
        else setIsScrolled(false);

        // Hide header on scroll down, show on scroll up
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50" : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

                <div className="font-bold text-zinc-50 tracking-tighter text-lg">
                    <a href="#" className="hover:text-zinc-300 transition-colors">Tenzin Shenyen.</a>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#about" className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-zinc-50 transition-colors">About</a>
                    <a href="#experience" className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-zinc-50 transition-colors">Experience</a>
                    <a href="#projects" className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-zinc-50 transition-colors">Showcase</a>
                    <a href="#skills" className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-zinc-50 transition-colors">Capabilities</a>
                </nav>

                <a
                    href="/Tenzin_Shenyen_Resume.pdf"
                    target="_blank"
                    className="text-xs font-bold uppercase tracking-widest text-zinc-950 bg-zinc-50 px-5 py-2.5 rounded-full hover:bg-zinc-200 hover:scale-105 transition-all"
                >
                    Resume
                </a>
            </div>
        </motion.header>
    );
}
