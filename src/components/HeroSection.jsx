import React from 'react'

export default function HeroSection() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center p-4 rounded-3xl overflow-hidden glass-panel border-none mt-4">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-footer/50 mix-blend-multiply pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
                <div className="inline-block px-4 py-2 rounded-full glass-panel border-accent/30 text-accent text-sm font-medium tracking-wider uppercase mb-4">
                    Universiti Malaysia Terengganu
                </div>

                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight">
                    Bayu Winds <span className="text-accent">Orchestra</span>
                </h1>

                <p className="text-xl md:text-2xl text-textPrimary/90 font-light max-w-2xl mx-auto">
                    Let Coastal Winds Carry the Melody
                </p>

                <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl transition-all font-medium text-lg">
                        Discover Our Music
                    </button>
                    <button className="glass-panel hover:bg-white/20 text-textPrimary px-8 py-3 rounded-xl transition-all font-medium text-lg">
                        Join the Ensemble
                    </button>
                </div>
            </div>
        </section>
    )
}
