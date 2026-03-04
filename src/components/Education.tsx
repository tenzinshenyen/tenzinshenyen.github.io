export default function Education() {
    return (
        <section id="education" className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sticky top-24">
                            Education & Certifications
                        </h2>
                    </div>
                    <div className="md:col-span-8 space-y-12">

                        {/* Education */}
                        <div className="space-y-8">
                            <div className="relative">
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                                    <h3 className="text-xl font-bold text-slate-900">M.S. in Computer Science</h3>
                                    <span className="text-sm font-medium text-slate-500 mt-1 sm:mt-0">Expected May 2026</span>
                                </div>
                                <div className="text-lg text-slate-600">Rochester Institute of Technology</div>
                            </div>

                            <div className="relative">
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                                    <h3 className="text-xl font-bold text-slate-900">B.Tech in Computer Science & Engineering (Hons)</h3>
                                    <span className="text-sm font-medium text-slate-500 mt-1 sm:mt-0">2016 – 2020</span>
                                </div>
                                <div className="text-lg text-slate-600">Lovely Professional University</div>
                                <div className="text-sm text-slate-500 mt-1">CGPA: 8.38/10</div>
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Certifications */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Active Certifications</h3>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                <li className="p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-300 transition-colors">
                                    <div className="font-semibold text-slate-900">AWS Certified Solutions Architect</div>
                                    <div className="text-sm text-slate-500 mt-1">Associate Level (Jan 2023)</div>
                                </li>
                                <li className="p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-300 transition-colors">
                                    <div className="font-semibold text-slate-900">Mendix Rapid Developer</div>
                                    <div className="text-sm text-slate-500 mt-1">Foundations (Nov 2022)</div>
                                </li>
                                <li className="p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-300 transition-colors">
                                    <div className="font-semibold text-slate-900">AWS Certified Cloud Practitioner</div>
                                    <div className="text-sm text-slate-500 mt-1">Foundational (Oct 2021)</div>
                                </li>
                                <li className="p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-300 transition-colors">
                                    <div className="font-semibold text-slate-900">Microsoft Technology Associate</div>
                                    <div className="text-sm text-slate-500 mt-1">Introduction to Python (Jun 2018)</div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
