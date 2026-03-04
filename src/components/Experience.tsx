import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            role: "Digital Transformation Analyst",
            company: "Ocwen Financial",
            dates: "May 2021 – Jun 2024",
            description: [
                "Architected a production call summarization and insights pipeline using AWS Transcribe and Azure OpenAI (Transformer LLMs), capturing sentiment/intent to vastly reduce manual review times.",
                "Automated document information extraction via AWS Textract and LLMs, cutting processing time by 40% while improving key-field accuracy across large datasets.",
                "Engineered an AI-assisted document classification and routing pipeline, increasing overall workflow throughput by 30%.",
                "Enhanced enterprise document discovery by deploying AWS Kendra, enabling secure and rapid search over private repositories.",
                "Benchmarked Aurora/Redshift at 4B+ rows for cloud migration proofs-of-concept, documenting critical performance trade-offs."
            ]
        },
        {
            role: "Engineering Intern, Digital Transformation",
            company: "Ocwen Financial",
            dates: "Jun 2020 – May 2021",
            description: [
                "Built an automated log consolidation workflow in UiPath Studio, streamlining operational reporting with zero errors over five consecutive months.",
                "Evaluated AWS Aurora and Redshift migration options, documenting technical recommendations to reduce cloud architectural risk."
            ]
        },
        {
            role: "Engineering Intern, Data Management",
            company: "Ocwen Financial",
            dates: "Jan 2020 – Jun 2020",
            description: [
                "Contributed to an Informatica-based ETL tool ingesting multi-source data into unified tables, reducing manual handling by 30% and improving reliability."
            ]
        }
    ];

    return (
        <section id="experience" className="py-32 relative border-t border-zinc-900 bg-zinc-950">
            <div className="max-w-4xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-16">
                        02 / Experience
                    </h2>
                </motion.div>

                <div className="space-y-24">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="grid md:grid-cols-4 gap-8 md:gap-12 group"
                        >
                            <div className="md:col-span-1 text-zinc-500 mt-1 uppercase tracking-wider text-sm font-semibold">
                                {exp.dates}
                            </div>

                            <div className="md:col-span-3">
                                <h3 className="text-2xl font-semibold text-zinc-100 mb-1 group-hover:text-white transition-colors">
                                    {exp.role}
                                </h3>
                                <div className="text-lg text-zinc-400 mb-6 font-medium">
                                    {exp.company}
                                </div>

                                <ul className="space-y-4">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-4 text-zinc-400 text-base leading-relaxed">
                                            <span className="text-zinc-700 mt-2">—</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
