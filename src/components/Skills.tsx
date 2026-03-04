export default function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Python", "C/C++", "Java", "SQL", "JavaScript/TypeScript"]
        },
        {
            title: "AI / ML / NLP",
            skills: ["Transformers", "Azure OpenAI", "Document Classification", "Information Extraction", "Sentiment Analysis"]
        },
        {
            title: "Search & Retrieval",
            skills: ["AWS Kendra", "Vector Databases", "Embeddings", "RAG Pipelines"]
        },
        {
            title: "Cloud & Data",
            skills: ["AWS Textract", "AWS Transcribe", "EC2", "S3", "Aurora", "Redshift", "MongoDB", "PostgreSQL"]
        },
        {
            title: "Tools & Platforms",
            skills: ["Microsoft Power Platform", "UiPath", "Mendix", "Git", "Docker"]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-slate-50 border-t border-slate-100">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sticky top-24">
                            Technical Skills
                        </h2>
                    </div>
                    <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-12">
                        {skillCategories.map((category, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 inline-block w-full">
                                    {category.title}
                                </h3>
                                <ul className="space-y-2">
                                    {category.skills.map((skill, i) => (
                                        <li key={i} className="text-slate-600 flex items-center">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                                            {skill}
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
