import { ChevronRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-[85vh] flex flex-col justify-center max-w-5xl mx-auto px-6 pt-20">
            <div className="space-y-6">
                <h2 className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
                    Tenzin Shenyen
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 max-w-4xl">
                    AI/ML Engineer & <br />
                    <span className="text-slate-500">Cloud Architect.</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl leading-relaxed pt-4">
                    I build scalable document intelligence pipelines, enterprise search
                    systems, and secure cloud infrastructure. Focusing on applied NLP, LLMs,
                    and robust data engineering.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                    >
                        View Projects
                        <ChevronRight className="ml-2 w-4 h-4" />
                    </a>
                    <a
                        href="https://github.com/tenzinshenyen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                    >
                        GitHub Profile
                    </a>
                </div>
            </div>
        </section>
    );
}
