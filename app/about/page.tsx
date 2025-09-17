import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function About() {
    return (
        <div className="min-h-screen relative">
            <Header />

            <main className="max-w-3xl mx-auto px-6 pt-24 md:pt-28 pb-32">
                {/*<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-left">About</h1>*/}
                <section className="space-y-10 mt-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 text-left">Education</h2>
                        <div className="mt-4 space-y-4 text-gray-700">
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/yaleuniversitylogo.svg" alt="Yale University logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p>Yale University - BS in Physics and CS</p>
                                        <p className="text-gray-500">Expected May 2027</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/ycombinator.png" alt="Y Combinator logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p>Y Combinator</p>
                                        <p className="text-gray-500">YC X25</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 text-left">Experience</h2>
                        <div className="mt-4 space-y-4 text-gray-700">
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/caucus.svg" alt="Caucus logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p>Caucus (YC X25) - Cofounder & CTO</p>
                                        <p className="text-gray-500">Feb 2025 – Aug 2025</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/orchard.png" alt="Orchard logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p>Orchard - Software Engineer Intern</p>
                                        <p className="text-gray-500">Aug 2024 – Oct 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/yaleuniversitylogo.svg" alt="Yale logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p>Yale University - Computational Physics Research Assistant</p>
                                        <p className="text-gray-500">May 2024 – Aug 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/ssplogo.png" alt="Summer Science Program logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p>Summer Science Program - Astrophysics Research Intern</p>
                                        <p className="text-gray-500">Jun 2022 – Jul 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <div className="text-center absolute bottom-12 left-1/2 transform -translate-x-1/2">
                <Footer />
            </div>
        </div>
    )
}