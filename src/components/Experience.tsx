export default function Experience() {
    const experiences = [
        {
            role: "Digital Transformation Analyst",
            company: "Ocwen Financial Corporation",
            dates: "May 2021 – Jun 2024",
            description: [
                "Built a production call summarization and insights pipeline using AWS Transcribe and Azure OpenAI (Transformer LLMs), capturing sentiment/intent to reduce manual review times.",
                "Automated document information extraction via AWS Textract and LLMs, cutting processing time by 40% while improving key-field accuracy across large datasets.",
                "Implemented an AI-assisted document classification and routing pipeline, increasing overall workflow throughput by 30%.",
                "Enhanced enterprise document discovery by deploying AWS Kendra, enabling secure and rapid search over private repositories.",
                "Benchmarked Aurora/Redshift at 4B+ rows for cloud migration proofs-of-concept, documenting critical performance trade-offs."
            ]
        },
        {
            role: "Engineering Intern, Digital Transformation",
            company: "Ocwen Financial Corporation",
            dates: "Jun 2020 – May 2021",
            description: [
                "Built an automated log consolidation workflow in UiPath Studio, streamlining operational reporting with zero errors over five consecutive months.",
                "Evaluated AWS Aurora and Redshift migration options, documenting technical recommendations to reduce cloud architectural risk."
            ]
        },
        {
            role: "Engineering Intern, Data Management",
            company: "Ocwen Financial Corporation",
            dates: "Jan 2020 – Jun 2020",
            description: [
                "Contributed to an Informatica-based ETL tool ingesting multi-source data into unified tables.",
                "Reduced manual data handling by 30% and improved complex integration reliability."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sticky top-24">
                            Experience
                        </h2>
                    </div>
                    <div className="md:col-span-8 space-y-16">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                                    <span className="text-sm font-medium text-slate-500 mt-1 sm:mt-0">
                                        {exp.dates}
                                    </span>
                                </div>
                                <div className="text-lg font-medium text-blue-600 mb-4">
                                    {exp.company}
                                </div>
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-slate-600">
                                            <span className="text-blue-500 mt-1.5">•</span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
