import { motion } from "framer-motion";

export default function Skills() {
    const skillCategories = [
        {
            title: "Core Languages",
            skills: ["Python", "C/C++", "Java", "TypeScript", "SQL"],
            accent: "bg-blue-500/10 text-blue-400 border-blue-500/20"
        },
        {
            title: "Applied AI & NLP",
            skills: ["Transformers", "Azure OpenAI", "Document Classification", "Information Extraction", "Sentiment Tagging"],
            accent: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
        },
        {
            title: "Search & Retrieval",
            skills: ["AWS Kendra", "Vector Databases", "Embeddings", "RAG Architecture"],
            accent: "bg-amber-500/10 text-amber-400 border-amber-500/20"
        },
        {
            title: "Cloud Infrastructure",
            skills: ["AWS Textract", "AWS Transcribe", "EC2 / S3", "Aurora / Redshift", "MongoDB & PostgreSQL"],
            accent: "bg-purple-500/10 text-purple-400 border-purple-500/20"
        },
        {
            title: "Platforms & Tooling",
            skills: ["Microsoft Power Platform", "UiPath", "Mendix", "Docker", "Git"],
            accent: "bg-rose-500/10 text-rose-400 border-rose-500/20"
        }
    ];

    return (
        <section id="skills" className="py-32 relative bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
                        04 / Capabilities
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-8 rounded-3xl border bg-zinc-900/40 backdrop-blur-sm ${category.accent.split(' ')[2]} hover:bg-zinc-800/60 transition-colors`}
                        >
                            <h3 className="text-lg font-bold text-zinc-100 mb-6">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className={`px-3 py-1.5 text-xs font-semibold rounded-md border ${category.accent}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
