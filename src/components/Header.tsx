export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

                <div className="font-bold text-slate-900 tracking-tight">
                    <a href="#" className="hover:text-blue-600 transition-colors">Tenzin Shenyen.</a>
                </div>

                <nav className="hidden md:flex gap-8">
                    <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</a>
                    <a href="#experience" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Experience</a>
                    <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
                    <a href="#skills" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Skills</a>
                </nav>

                <a
                    href="/Tenzin_Shenyen_Resume.pdf"
                    target="_blank"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                    Resume
                </a>
            </div>
        </header>
    );
}
