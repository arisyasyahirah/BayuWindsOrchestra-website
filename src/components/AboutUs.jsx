import React from 'react'

export default function AboutUs() {
    return (
        <section className="scroll-mt-24" id="about">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading text-accent mb-4">About Us</h2>
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Description */}
                <div className="glass-panel p-8 md:p-12 flex flex-col justify-center">
                    <p className="text-lg leading-relaxed text-textPrimary/90 mb-6">
                        Bayu Winds Orchestra (BWO UMT) is the premier musical ensemble of Universiti Malaysia Terengganu. Operating from Studio Ritma Menara, we are a community of passionate student musicians united by our love for orchestral performance.
                    </p>
                    <div className="inline-flex items-center gap-2 text-secondary font-medium mt-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Studio Ritma Menara, UMT
                    </div>
                </div>

                {/* Vision / Mission / Motto */}
                <div className="space-y-6">
                    <div className="glass-panel p-6 border-l-4 border-l-accent">
                        <h3 className="text-xl font-heading text-white mb-2">Motto</h3>
                        <p className="text-textPrimary/80 italic">"Let Coastal Winds Carry the Melody"</p>
                    </div>

                    <div className="glass-panel p-6 border-l-4 border-l-secondary">
                        <h3 className="text-xl font-heading text-white mb-2">Vision / Visi</h3>
                        <p className="text-textPrimary/80 mb-2">To be a leading university wind orchestra known for musical excellence and artistic expression.</p>
                        <p className="text-textPrimary/60 text-sm">Menjadi orkestra tiupan universiti terkemuka yang dikenali kerana kecemerlangan muzik dan ekspresi seni.</p>
                    </div>

                    <div className="glass-panel p-6 border-l-4 border-l-textPrimary/50">
                        <h3 className="text-xl font-heading text-white mb-2">Mission / Misi</h3>
                        <p className="text-textPrimary/80 mb-2">Cultivating musical talent, fostering discipline, and enriching the university's cultural landscape through captivating performances.</p>
                        <p className="text-textPrimary/60 text-sm">Memupuk bakat muzik, menerapkan disiplin, dan memperkaya landskap budaya universiti melalui persembahan yang menawan.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
