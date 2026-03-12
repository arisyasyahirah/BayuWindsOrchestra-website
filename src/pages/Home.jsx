import React, { useState, useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import EventsList from '../components/EventsList'
import PhotoGallery from '../components/PhotoGallery'
import JoinUs from '../components/JoinUs'
import ContactInfo from '../components/ContactInfo'
import { Menu, X } from 'lucide-react'

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Events', href: '#events' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Join Us', href: '#join' },
        { name: 'Contact', href: '#contact' },
    ]

    const scrollTo = (href) => {
        setMobileMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation Layer */}
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="font-heading text-2xl text-accent font-bold tracking-tight">
                        BWO<span className="text-textPrimary font-light">UMT</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                                className="text-sm font-medium text-textPrimary/80 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-textPrimary"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-3xl border-b border-white/10 shadow-2xl">
                        <nav className="flex flex-col p-4 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                                    className="px-4 py-3 text-lg font-medium text-textPrimary/90 hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

            {/* Main Content Area */}
            <main className="flex-grow pt-24 px-4 md:px-8 max-w-7xl mx-auto w-full space-y-32 pb-32">
                <HeroSection />
                <AboutUs />
                <EventsList />
                <PhotoGallery />
                <JoinUs />
                <ContactInfo />
            </main>

            {/* Footer */}
            <footer className="bg-footer border-t border-white/5 py-12 px-4 md:px-8 mt-auto">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <div>
                        <span className="font-heading text-xl text-accent font-bold tracking-tight block mb-2">
                            Bayu Winds Orchestra
                        </span>
                        <p className="text-sm text-textPrimary/50">
                            © {new Date().getFullYear()} Universiti Malaysia Terengganu. All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="text-textPrimary/50 hover:text-accent transition-colors text-sm">Privacy</a>
                        <a href="#" className="text-textPrimary/50 hover:text-accent transition-colors text-sm">Terms</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
