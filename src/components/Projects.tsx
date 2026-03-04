import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "OpenBodhi: Tibetan Document OCR + Multilingual RAG",
            description: "End-to-end pipeline for Tibetan document understanding. Combines OCR cleaning, chunking, M3-style multilingual embeddings, vector search, and LLM-assisted answer generation.",
            techStack: ["Python", "OCR", "LLMs", "Vector Search", "RAG"],
            githubUrl: "https://github.com/tenzinshenyen/OpenBodhi",
        },
        {
            title: "Enterprise Search Service (Powered by AWS Kendra)",
            description: "A highly scalable backend search system integrating AWS Kendra for natural language query processing over large enterprise content. Secure, role-based, and serverless.",
            techStack: ["AWS Kendra", "Node.js", "Python", "React", "CDK"],
            githubUrl: "https://github.com/tenzinshenyen/aws-kendra-enterprise-search",
        },
        {
            title: "IMDb Data Platform Migration",
            description: "Migrated the massive IMDb dataset from PostgreSQL to MongoDB using a custom Python ETL pipeline. Redesigned schemas resulting in 3x faster analytical query workloads.",
            techStack: ["Python", "PostgreSQL", "MongoDB", "ETL"],
            githubUrl: "https://github.com/tenzinshenyen/imdb-data-analytics",
        },
        {
            title: "Distributed Load Balancer for Cloud Microservices",
            description: "Authored a Flask-based distributed load balancer routing text-processing workloads across concurrent AWS EC2 instances, leveraging real-time latency metrics for a 25% balance improvement.",
            techStack: ["Python", "Flask", "AWS EC2", "Distributed Systems"],
            githubUrl: "https://github.com/tenzinshenyen/prequal-load-balancer",
        },
        {
            title: "Patch-Based Image Similarity (MatchNet vs. BEiT)",
            description: "PyTorch pipeline applied to Tiny ImageNet comparing Siamese-style MatchNet against a Transformer-based BEiT backbone, fine-tuned for high-performance retrieval matching.",
            techStack: ["PyTorch", "HuggingFace", "Transformers", "Computer Vision"],
            githubUrl: "https://github.com/tenzinshenyen/patch-matching-deep-learning",
        },
        {
            title: "IoT Athletic Performance Monitor",
            description: "Real-time analytics monitor interfacing robust IoT hardware with responsive dashboards to measure and aggregate physical output signals in real-time.",
            techStack: ["IoT", "Hardware", "C++", "Analytics"],
            githubUrl: "https://github.com/tenzinshenyen/iot-athletic-monitor",
        }
    ];

    return (
        <section id="projects" className="py-32 relative bg-zinc-950">
            <div className="max-w-6xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-4">
                        03 / Showcase
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-16">
                        Featured Repositories.
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative flex flex-col justify-between h-full p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-800/40 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <ArrowUpRight className="w-6 h-6 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                            </div>

                            <div className="relative z-10 mb-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-full bg-zinc-800 text-zinc-300">
                                        <Github className="w-5 h-5" />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-zinc-100 mb-4 leading-snug">
                                    {project.title}
                                </h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-6 border-t border-zinc-800/50">
                                {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-300 uppercase bg-zinc-800/50 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
