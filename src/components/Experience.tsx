import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            role: "Digital Transformation Analyst",
            company: "Ocwen Financial",
            dates: "May 2021 – Jun 2024",
            summary: "Led the design and deployment of AI-driven automation pipelines and enterprise search solutions, significantly reducing operational overhead.",
            achievements: [
                "Built a production call summarization pipeline with AWS Transcribe and Azure OpenAI, accelerating manual review processes through automated sentiment and intent capture.",
                "Automated document information extraction via AWS Textract and LLMs. This improved key-field accuracy and reduced processing time by 40%.",
                "Engineered an AI-assisted document classification and routing system that increased overall workflow throughput by 30%.",
                "Deployed AWS Kendra for secure, rapid enterprise document discovery across highly sensitive private repositories.",
                "Benchmarked Aurora and Redshift at 4B+ rows to guide cloud migration strategy and mitigate architectural risks."
            ],
            techStack: ["Python", "AWS Textract", "AWS Kendra", "AWS Transcribe", "Azure OpenAI", "Redshift", "Node.js"]
        },
        {
            role: "Engineering Intern, Digital Transformation",
            company: "Ocwen Financial",
            dates: "Jun 2020 – May 2021",
            summary: "Developed automated operational workflows and conducted critical cloud migration evaluations.",
            achievements: [
                "Built an automated log consolidation workflow in UiPath Studio. This streamlined operational reporting and ran with zero errors over five consecutive months.",
                "Evaluated AWS Aurora and Redshift migration paths, delivering technical recommendations to leadership to reduce architectural risk."
            ],
            techStack: ["UiPath Studio", "AWS Aurora", "AWS Redshift", "Python"]
        },
        {
            role: "Engineering Intern, Data Management",
            company: "Ocwen Financial",
            dates: "Jan 2020 – Jun 2020",
            summary: "Supported core data integration efforts across multi-source systems.",
            achievements: [
                "Contributed to an Informatica-based ETL tool that ingested multi-source data into unified tables.",
                "Improved complex integration reliability and reduced manual data handling by 30%."
            ],
            techStack: ["Informatica", "SQL", "ETL", "Data Pipelines"]
        }
    ];

    return (
        <section id="experience" className="py-32 relative border-t border-zinc-900 bg-zinc-950">
            <div className="max-w-5xl mx-auto px-6">

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

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative grid md:grid-cols-4 gap-8 md:gap-12 p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-800/40 hover:border-zinc-700/60 transition-all group"
                        >
                            <div className="md:col-span-1">
                                <div className="text-zinc-500 uppercase tracking-wider text-sm font-semibold mb-2">
                                    {exp.dates}
                                </div>
                            </div>

                            <div className="md:col-span-3">
                                <h3 className="text-2xl font-bold text-zinc-100 mb-1 group-hover:text-white transition-colors">
                                    {exp.role}
                                </h3>
                                <div className="text-lg text-zinc-400 font-medium mb-6">
                                    {exp.company}
                                </div>

                                <p className="text-zinc-300 text-base leading-relaxed mb-6 font-medium">
                                    {exp.summary}
                                </p>

                                <ul className="space-y-4 mb-8">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} className="flex gap-4 text-zinc-400 text-sm md:text-base leading-relaxed">
                                            <span className="text-zinc-600 mt-1 flex-shrink-0">✦</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 text-xs font-semibold tracking-wide text-zinc-300 bg-zinc-800/50 border border-zinc-700/50 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
