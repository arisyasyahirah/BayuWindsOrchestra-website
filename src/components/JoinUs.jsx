import React from 'react'
import { Music, Users, Award } from 'lucide-react'

export default function JoinUs() {
    return (
        <section className="scroll-mt-24" id="join">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading text-accent mb-4">Join Our Ensemble</h2>
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div className="glass-panel p-8 md:p-12 mb-8 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-heading text-white mb-4">Audition Information</h3>
                        <p className="text-textPrimary/80 mb-6 leading-relaxed">
                            We welcome passionate musicians from all faculties at Universiti Malaysia Terengganu to join our orchestral family. Whether you play woodwinds, brass, percussion, or strings, there's a place for you to grow musically with BWO.
                        </p>

                        <div className="space-y-4 text-textPrimary/90">
                            <div className="flex gap-4">
                                <div className="bg-white/10 p-2 rounded-lg h-fit text-accent">
                                    <Music size={20} />
                                </div>
                                <div>
                                    <strong className="block text-white mb-1">Requirements</strong>
                                    <span className="text-sm opacity-80">Basic reading ability of sheet music. Must own your instrument (some large instruments available for loan).</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-white/10 p-2 rounded-lg h-fit text-secondary">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <strong className="block text-white mb-1">Rehearsals</strong>
                                    <span className="text-sm opacity-80">Every Tuesday & Thursday, 8:00 PM - 10:30 PM at Studio Ritma Menara.</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-white/10 p-2 rounded-lg h-fit text-textPrimary">
                                    <Award size={20} />
                                </div>
                                <div>
                                    <strong className="block text-white mb-1">Benefits</strong>
                                    <span className="text-sm opacity-80">Co-curriculum merit points, performance opportunities, and lifelong friendships.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-background/40 border border-white/10 p-8 rounded-2xl text-center">
                        <h4 className="text-xl font-heading text-white mb-4">How to Apply</h4>
                        <p className="text-textPrimary/70 mb-6 text-sm">
                            We do not use an online form. Instead, we invite you to experience our rehearsals directly.
                        </p>
                        <ol className="text-left space-y-4 mb-8">
                            <li className="flex gap-3 text-sm text-textPrimary/80 items-start">
                                <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">1</span>
                                <span>Attend our open rehearsal at the start of the semester.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-textPrimary/80 items-start">
                                <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">2</span>
                                <span>Speak to our committee members on-site.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-textPrimary/80 items-start">
                                <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">3</span>
                                <span>Schedule a brief, informal audition with our music director.</span>
                            </li>
                        </ol>
                        <a href="#contact" className="inline-block w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-3 px-6 rounded-xl transition-colors">
                            Contact Us for exact dates
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
