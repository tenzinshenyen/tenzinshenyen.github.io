import { motion } from "framer-motion";
import { ChevronRight, Download, Github } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center max-w-5xl mx-auto px-6 pt-24 pb-12 overflow-hidden">

            {/* Subtle Background Glow Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/30 blur-[120px] rounded-full -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 max-w-4xl"
            >
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase"
                >
                    Senior Engineering Portfolio
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-50 leading-[1.1]"
                >
                    Tenzin Shenyen.
                    <br />
                    <span className="text-zinc-600">Architecting Intelligence.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed pt-2"
                >
                    I build scalable document intelligence pipelines, enterprise search
                    systems, and secure cloud infrastructure. Specializing in applied NLP, LLMs,
                    and highly performant data engineering.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
                >
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-zinc-950 bg-zinc-50 rounded-full overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Explore Projects
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    </a>

                    <div className="flex items-center gap-6 text-zinc-400">
                        <a
                            href="https://github.com/tenzinshenyen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium hover:text-zinc-50 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                        <div className="w-1 h-1 rounded-full bg-zinc-700" />
                        <a
                            href="/Tenzin_Shenyen_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium hover:text-zinc-50 transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Resume
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
