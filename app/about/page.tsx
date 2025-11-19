import Image from "next/image";
import { BlockMath, InlineMath } from 'react-katex';

export default function About() {
    return (
        <div className="min-h-screen relative">
            <main className="page-container pb-32">
                <h1 className="heading-1 mb-6">About</h1>
                <section className="space-y-10">
                    <div>
                        <h2 className="heading-2 text-left">Education</h2>
                        <div className="mt-4 space-y-4 body-text">
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/yaleuniversitylogo.svg" alt="Yale University logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p>Yale University - BS in Physics and CS</p>
                                        <p className="meta-text">Expected May 2027</p>
                                    </div>
                                    <p className="body-text-sm mt-2">also part of aepi, quantum computing club, and played rugby freshmen year</p>
                                </div>
                            </div>

                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/ycombinator.png" alt="Y Combinator logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <p>Y Combinator</p>
                                        <p className="meta-text">YC X25</p>
                                    </div>
                                    <p className="body-text-sm mt-2">group partner garry tan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="heading-2 text-left">Experience</h2>
                        <div className="mt-4 space-y-4 body-text">
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/caucus.svg" alt="Caucus logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <a href="https://www.usecaucus.com/" target="_blank" rel="noopener noreferrer" className="link-primary">Caucus (YC X25) - Cofounder & CTO</a>
                                        <p className="meta-text">Feb 2025 – Aug 2025</p>
                                    </div>
                                    <p className="body-text-sm mt-2">ai automation for us congress, built cool stuff and met cool people</p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/orchard.png" alt="Orchard logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <a href="https://orchard.com/" target="_blank" rel="noopener noreferrer" className="link-primary">Orchard - Software Engineer Intern</a>
                                        <p className="meta-text">Aug 2024 – Oct 2024</p>
                                    </div>
                                    <p className="body-text-sm mt-2">voice agents for real estate + software qa</p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/yaleuniversitylogo.svg" alt="Yale logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <a href="https://www.lgwrightlab.com/" target = "_blank" rel="noopener noreferrer" className="link-primary">Yale University - Computational Physics Research Assistant</a>
                                        <p className="meta-text">May 2024 – Aug 2024</p>
                                    </div>
                                    <p className="body-text-sm mt-2">intersection of AI and physics with Prof. Logan Wright</p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <Image src="/ssplogo.png" alt="Summer Science Program logo" width={48} height={48} className="h-12 w-12 object-contain" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <a href="https://github.com/tylerzchen/SSP2022" target="_blank" rel="noopener noreferrer" className="link-primary">Summer Science Program - Astrophysics Research Intern</a>
                                        <p className="meta-text">Jun 2022 – Jul 2022</p>
                                    </div>
                                    <p className="body-text-sm mt-2">tracked near earth asteroid 1999 GJ2 with the method of gauss</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="heading-2 text-left">Projects</h2>

                        <div className="mt-4 space-y-4 body-text">
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <a href="https://github.com/tylerzchen/kan_transformer" target="_blank" rel="noopener noreferrer" className="link-primary">Kolmogorov-Arnold Neural Network (KAN) Transformer</a>
                                    </div>
                                    <div className="body-text-sm mt-2 space-y-2">
                                        <p>Built a transformer-model replacing traditional feed-forward lawyers by layers inspired by the Kolmogor-Arnold Respresentation Theorem, 
                                            which states that any multivariate continuous function:
                                        </p>
                                        <div className="bg-white-50 p-2">
                                            <BlockMath math="f(x_1, x_2, ..., x_n): \mathbb{R}^n \to \mathbb{R}" />
                                        </div>
                                        <p>can be expressed as:</p>
                                        <div className="bg-white-50 p-2">
                                            <BlockMath math="f(x_1, x_2, \ldots, x_n) = \sum_{q=0}^{2n} \phi_q\!\left(\sum_{p=1}^n \psi_{p,q}(x_p)\right)" />
                                        </div>
                                        <p>where:</p>
                                        <ul className="list-disc pl-6 space-y-1">
                                            <li><InlineMath math="\phi_q : \mathbb{R} \to \mathbb{R}" /> and <InlineMath math="\psi_{p,q} : \mathbb{R} \to \mathbb{R}" /> are continuous functions</li>
                                            <li><InlineMath math="x_1, x_2, \ldots, x_n" /> are the input variables</li>
                                            <li><InlineMath math="n" /> is the dimensionality of the input space</li>
                                        </ul>
                                        <p>
                                            Used both rational and taylor polynomials as base functions, and compared results with LSTMs and standard transformers. Results weren&apos;t amazing, but was an amazing learning experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 space-y-4 text-gray-700">
                            <div className="rounded-xl border border-gray-200 p-5 flex gap-4 items-center">
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <a href="https://github.com/jjwyetzner/iQuHack" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800">Quantum Generative Adversarial Networks</a>
                                    </div>
                                    <div className="body-text-sm mt-2 space-y-2">
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
                                        <a href="https://github.com/tylerzchen/iQuHack-2025-IonQ" target="_blank" rel="noopener noreferrer" className="link-primary">Quantum Variational Algorithms for Max-Cut</a>
                                    </div>
                                    <div className="body-text-sm mt-2 space-y-2">
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