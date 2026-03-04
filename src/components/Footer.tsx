import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-900 py-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-12"
                >

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight mb-2">
                            Let's Connect.
                        </h2>
                        <p className="text-zinc-500 max-w-sm">
                            I'm always open to discussing AI architecture, search systems, or cloud engineering opportunities.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="mailto:tenzinshenyen@outlook.com"
                            className="p-4 bg-zinc-900 rounded-full text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800 hover:scale-110 flex flex-col items-center gap-2 group transition-all"
                            title="Email"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/tenzinshenyen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-zinc-900 rounded-full text-zinc-400 hover:text-blue-500 hover:bg-zinc-800 hover:scale-110 flex flex-col items-center gap-2 group transition-all"
                            title="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://github.com/tenzinshenyen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-zinc-900 rounded-full text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800 hover:scale-110 flex flex-col items-center gap-2 group transition-all"
                            title="GitHub"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                    </div>

                </motion.div>

                <div className="mt-24 pt-8 border-t border-zinc-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-zinc-600 uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} Tenzin Shenyen</p>
                    <p>Designed & Engineered for the Modern Web</p>
                </div>
            </div>
        </footer>
    );
}
