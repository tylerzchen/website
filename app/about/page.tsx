import Image from "next/image";
import { BlockMath } from 'react-katex';

export default function About() {
    return (
        <div className="min-h-screen relative">
            <main className="max-w-3xl mx-auto px-6 pt-20 md:pt-24 pb-32">
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
                                    <p className="text-sm text-gray-600 mt-2">also part of aepi, quantum computing club, and played rugby freshmen year</p>
                                </div>
                            </div>

                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/ycombinator.png" alt="Y Combinator logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p>Y Combinator</p>
                                        <p className="text-gray-500">YC X25</p>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">group partner garry tan</p>
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
                                        <a href="https://www.usecaucus.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800">Caucus (YC X25) - Cofounder & CTO</a>
                                        <p className="text-gray-500">Feb 2025 – Aug 2025</p>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">ai automation for us congress, built cool stuff and met cool people</p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/orchard.png" alt="Orchard logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <a href="https://orchard.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800">Orchard - Software Engineer Intern</a>
                                        <p className="text-gray-500">Aug 2024 – Oct 2024</p>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">voice agents for real estate + software qa</p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/yaleuniversitylogo.svg" alt="Yale logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <a href="https://www.lgwrightlab.com/" target = "_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800">Yale University - Computational Physics Research Assistant</a>
                                        <p className="text-gray-500">May 2024 – Aug 2024</p>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">intersection of AI and physics with Prof. Logan Wright</p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/ssplogo.png" alt="Summer Science Program logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <a href="https://github.com/tylerzchen/SSP2022" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800">Summer Science Program - Astrophysics Research Intern</a>
                                        <p className="text-gray-500">Jun 2022 – Jul 2022</p>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">tracked near earth asteroid 1999 GJ2 with the method of gauss</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 text-left">Projects</h2>
                        <div className="mt-4 space-y-4 text-gray-700">
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <a href="https://github.com/jjwyetzner/iQuHack" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800">Quantum Generative Adversarial Networks</a>
                                    </div>
                                    <div className="text-sm text-gray-600 mt-2 space-y-2">
                                        <p>Built a generative adversarial network to generate ququart states from a maximally entangled ququart; in particular:</p>
                                        <div className="bg-white-50 p-2">
                                            <BlockMath math="\frac{1}{2}(|00\rangle + |11\rangle + |22\rangle + |33\rangle) \mapsto \frac{1}{2}(|01\rangle + |11\rangle + |23\rangle + |30\rangle)" />
                                        </div>
                                        <p>Designed a gradient estimation procedure to train the generator and achieve high fidelity with the target state. Won 1st place at MIT iQuHack 2024 with my roommates.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <a href="https://github.com/tylerzchen/iQuHack-2025-IonQ" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800">Quantum Variational Algorithms for Max-Cut</a>
                                    </div>
                                    <div className="text-sm text-gray-600 mt-2 space-y-2">
                                        <p>Designed a quantum circuit to solve Max-Cut problems with high accuracy. Created Loss Hamiltonians to enforce the constraints of the problem:</p>
                                        <div className="bg-white-50 p-2">
                                            <BlockMath math="H = \frac{1}{2}|E| - \frac{1}{2}\sum_{(v, w) \in E}(Z_v Z_w) + \alpha (\sum_{v \in V}\sum_{w \in W} Z_v Z_w)^2 + \beta \sum_{v \in V} (\hat{P}_v^{(-)} + \hat{P}_v^{(+)})" />
                                        </div>
                                        <p>where</p>
                                        <div className="bg-white-50 p-2">
                                            <BlockMath math="\hat{P}_v^{(\pm)} = \frac{I \pm Z_v}{2}\prod_{i \in N(v)} \frac{I \mp Z_i}{2}" />
                                        </div>
                                        <p>I also did this with my roommates. Won 2nd place at MIT iQuHack 2025.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
        </div>
    )
}