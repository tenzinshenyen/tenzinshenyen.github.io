import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-12">
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-between gap-6 sm:flex-row">

                <div className="flex flex-col items-center sm:items-start">
                    <p className="text-slate-900 font-semibold mb-1">Tenzin Shenyen</p>
                    <p className="text-slate-500 text-sm">AI/ML Engineer & Cloud Architect</p>
                </div>

                <div className="flex gap-6">
                    <a
                        href="mailto:tenzinshenyen@outlook.com"
                        className="text-slate-400 hover:text-slate-900 transition-colors"
                        title="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/tenzinshenyen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-900 transition-colors"
                        title="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="https://github.com/tenzinshenyen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-900 transition-colors"
                        title="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </footer>
    );
}
