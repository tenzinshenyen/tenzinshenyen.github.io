import { motion } from "framer-motion";

export default function Education() {
    return (
        <section id="education" className="py-32 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
                        05 / Background
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Education Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-zinc-100 mb-8">Education</h3>

                        <div className="p-8 rounded-3xl border border-zinc-800/60 bg-zinc-900/40">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h4 className="text-xl font-bold text-zinc-100">M.S. in Computer Science</h4>
                                <span className="text-sm font-medium text-zinc-500 mt-2 sm:mt-0 tracking-wide">MAY 2026 (EXPECTED)</span>
                            </div>
                            <div className="text-zinc-400">Rochester Institute of Technology</div>
                        </div>

                        <div className="p-8 rounded-3xl border border-zinc-800/60 bg-zinc-900/40">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h4 className="text-xl font-bold text-zinc-100">B.Tech in Computer Science</h4>
                                <span className="text-sm font-medium text-zinc-500 mt-2 sm:mt-0 tracking-wide">2016 – 2020</span>
                            </div>
                            <div className="text-zinc-400 mb-2">Lovely Professional University (Hons)</div>
                            <div className="inline-block px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-semibold rounded-md">
                                CGPA: 8.38/10
                            </div>
                        </div>
                    </motion.div>

                    {/* Certs Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-zinc-100 mb-8">Active Certifications</h3>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/60 transition-colors">
                                <div className="font-bold text-zinc-100 mb-1">AWS Solutions Architect</div>
                                <div className="text-sm text-zinc-500 font-medium">ASSOCIATE · JAN 2023</div>
                            </div>
                            <div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/60 transition-colors">
                                <div className="font-bold text-zinc-100 mb-1">Mendix Rapid Developer</div>
                                <div className="text-sm text-zinc-500 font-medium">FOUNDATIONS · NOV 2022</div>
                            </div>
                            <div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/60 transition-colors">
                                <div className="font-bold text-zinc-100 mb-1">AWS Cloud Practitioner</div>
                                <div className="text-sm text-zinc-500 font-medium">FOUNDATIONAL · OCT 2021</div>
                            </div>
                            <div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/60 transition-colors">
                                <div className="font-bold text-zinc-100 mb-1">Microsoft Technology</div>
                                <div className="text-sm text-zinc-500 font-medium">PYTHON · JUN 2018</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
