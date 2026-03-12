import React from 'react'
import { Instagram, MapPin, Mail } from 'lucide-react'

export default function ContactInfo() {
    return (
        <section className="scroll-mt-24" id="contact">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading text-accent mb-4">Get in Touch</h2>
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Instagram */}
                <a
                    href="https://instagram.com/bwo_umt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel p-8 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300"
                >
                    <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                        <Instagram size={32} />
                    </div>
                    <h3 className="text-xl font-heading text-white mb-2">Instagram</h3>
                    <p className="text-textPrimary/60">@bwo_umt</p>
                    <span className="text-accent text-sm mt-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Follow our journey &rarr;</span>
                </a>

                {/* Location */}
                <div className="glass-panel p-8 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                        <MapPin size={32} />
                    </div>
                    <h3 className="text-xl font-heading text-white mb-2">Our Base</h3>
                    <p className="text-textPrimary/60 flex flex-col">
                        <span>Studio Ritma Menara</span>
                        <span>Universiti Malaysia Terengganu</span>
                        <span>21030 Kuala Nerus, Terengganu</span>
                    </p>
                </div>

                {/* Email */}
                <a
                    href="mailto:contact@bwo.umt.edu.my"
                    className="glass-panel p-8 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300"
                >
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-textPrimary mb-4 group-hover:scale-110 transition-transform">
                        <Mail size={32} />
                    </div>
                    <h3 className="text-xl font-heading text-white mb-2">Email</h3>
                    <p className="text-textPrimary/60">contact@bwo.umt.edu.my</p>
                    <span className="text-white/40 text-sm mt-4">For general inquiries</span>
                </a>
            </div>
        </section>
    )
}
