export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sticky top-24">
                            About
                        </h2>
                    </div>
                    <div className="md:col-span-8 space-y-6 text-lg text-slate-600 leading-relaxed">
                        <p>
                            I am an AI/ML-focused engineer with over 4 years of experience building
                            document understanding, natural language processing (NLP), and enterprise
                            search solutions.
                        </p>
                        <p>
                            My expertise lies at the intersection of machine learning and cloud
                            infrastructure. I specialize in designing document retrieval and
                            extraction pipelines—leveraging tools like AWS Textract and Transformer-based
                            LLMs (Azure OpenAI) to classify, summarize, and extract unstructured data at scale.
                        </p>
                        <p>
                            Beyond applied AI, I have deep experience in traditional data engineering and cloud
                            architecture. From orchestrating complex ETL pipelines and conducting massive-scale
                            database migrations (PostgreSQL, MongoDB, Aurora, Redshift) to deploying secure enterprise
                            search systems via AWS Kendra, I focus on building robust, measurable, and highly
                            performant production systems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
