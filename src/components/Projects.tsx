import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "OpenBodhi: Tibetan Document OCR + Multilingual RAG",
            description:
                "End-to-end pipeline for Tibetan document understanding. Combines OCR cleaning, chunking, M3-style multilingual embeddings, vector search, and LLM-assisted answer generation.",
            techStack: ["Python", "OCR", "LLMs", "Vector Search", "RAG"],
            category: "AI/ML • Document Intelligence",
            githubUrl: "https://github.com/tenzinshenyen/OpenBodhi", // Assuming repo name based on project
        },
        {
            title: "Enterprise Search Service (Powered by AWS Kendra)",
            description:
                "A highly scalable backend search system integrating AWS Kendra for natural language query processing over large enterprise content. Secure, role-based, and serverless.",
            techStack: ["AWS Kendra", "Node.js", "Python", "React", "CDK"],
            category: "Enterprise Search • Cloud Architecture",
            githubUrl: "https://github.com/tenzinshenyen/aws-kendra-enterprise-search",
        },
        {
            title: "IMDb Data Platform Migration",
            description:
                "Migrated the massive IMDb dataset from PostgreSQL to MongoDB using a custom Python ETL pipeline. Redesigned schemas resulting in 3x faster analytical query workloads.",
            techStack: ["Python", "PostgreSQL", "MongoDB", "ETL"],
            category: "Data Engineering • Database Migration",
            githubUrl: "https://github.com/tenzinshenyen/imdb-data-analytics",
        },
        {
            title: "Distributed Load Balancer for Cloud Microservices",
            description:
                "Authored a Flask-based distributed load balancer routing text-processing workloads across concurrent AWS EC2 instances, leveraging real-time latency metrics for a 25% balance improvement.",
            techStack: ["Python", "Flask", "AWS EC2", "Distributed Systems"],
            category: "Backend Systems • Cloud Computing",
            githubUrl: "https://github.com/tenzinshenyen/prequal-load-balancer",
        },
        {
            title: "Patch-Based Image Similarity (MatchNet vs. BEiT)",
            description:
                "PyTorch pipeline applied to Tiny ImageNet comparing Siamese-style MatchNet against a Transformer-based BEiT backbone, fine-tuned for high-performance retrieval matching.",
            techStack: ["PyTorch", "HuggingFace", "Transformers", "Computer Vision"],
            category: "Machine Learning • Computer Vision",
            githubUrl: "https://github.com/tenzinshenyen/patch-matching-deep-learning",
        },
        {
            title: "IoT Athletic Performance Monitor",
            description:
                "Real-time analytics monitor interfacing robust IoT hardware with responsive dashboards to measure and aggregate physical output signals in real-time.",
            techStack: ["IoT", "Hardware", "C++", "Analytics"],
            category: "Hardware • Signal Processing",
            githubUrl: "https://github.com/tenzinshenyen/iot-athletic-monitor",
        }
    ];

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sticky top-24">
                            Featured Projects
                        </h2>
                        <p className="mt-4 text-slate-600 leading-relaxed text-lg">
                            Explore my technical architecture, applied AI research, and scalable cloud implementations.
                        </p>
                    </div>
                    <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all"
                            >
                                <div>
                                    <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-3">
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2"
                                        >
                                            {project.title}
                                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        View Repository
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
