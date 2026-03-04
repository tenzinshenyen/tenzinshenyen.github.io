import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-32 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-12"
                >
                    <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
                        01 / Professional Summary
                    </h2>

                    <div className="space-y-8 text-2xl md:text-3xl font-medium tracking-tight text-zinc-300 leading-[1.4]">
                        <p>
                            An AI & ML-focused engineer with over 4 years of experience architecting
                            document understanding, natural language, and enterprise
                            search solutions.
                        </p>
                        <p className="text-zinc-500">
                            My expertise is rooted at the intersection of applied machine learning and resilient cloud
                            infrastructure. I specialize in designing massive-scale document retrieval and
                            extraction pipelines—leveraging AWS Textract and Transformer-based
                            LLMs (Azure OpenAI) to classify, summarize, and extract actionable intelligence.
                        </p>
                        <p className="text-zinc-600 text-xl pt-4">
                            Beyond applied AI, I possess deep experience in cloud architecture and data engineering.
                            From orchestrating multi-source ETL pipelines and conducting database migrations (PostgreSQL, MongoDB, Aurora)
                            to deploying highly secure, custom enterprise search ecosystems via AWS Kendra.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
