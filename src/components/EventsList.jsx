import React from 'react'
import { Calendar, MapPin, Clock } from 'lucide-react'

// Dummy data for static presentation
const events = [
    {
        id: 1,
        title: "Annual Coastal Harmony Concert",
        date: "2026-05-15",
        time: "8:00 PM",
        location: "Dewan Sultan Mizan, UMT",
        description: "Join us for our signature annual concert featuring majestic orchestral arrangements inspired by the sea.",
        isUpcoming: true
    },
    {
        id: 2,
        title: "Symphony at the Seashore",
        date: "2026-06-20",
        time: "5:30 PM",
        location: "Pantai Tok Jembal",
        description: "An open-air evening performance celebrating local culture and music.",
        isUpcoming: true
    },
    {
        id: 3,
        title: "Overture to the East Coast",
        date: "2025-12-10",
        time: "8:00 PM",
        location: "Auditorium Mahkota",
        description: "Our year-end showcase concluding the term with a spectacular collaborative repertoire.",
        isUpcoming: false
    }
]

export default function EventsList() {
    return (
        <section className="scroll-mt-24" id="events">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading text-accent mb-4">Upcoming Performances</h2>
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className={`glass-panel p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center transition-all hover:border-white/30 ${!event.isUpcoming ? 'opacity-60 saturate-50' : ''}`}
                    >
                        {/* Date Block */}
                        <div className="flex-shrink-0 bg-background/50 rounded-xl p-4 text-center min-w-[120px] border border-white/5">
                            <span className="block text-accent font-bold text-3xl font-heading">
                                {new Date(event.date).getDate()}
                            </span>
                            <span className="block text-textPrimary/80 uppercase tracking-widest text-sm font-medium">
                                {new Date(event.date).toLocaleString('default', { month: 'short' })}
                            </span>
                            <span className="block text-textPrimary/50 text-xs mt-1">
                                {new Date(event.date).getFullYear()}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-heading text-white">{event.title}</h3>
                                {!event.isUpcoming && (
                                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-textPrimary/60">Past</span>
                                )}
                            </div>

                            <p className="text-textPrimary/80 mb-4">{event.description}</p>

                            <div className="flex flex-wrap gap-4 text-sm text-textPrimary/60 font-medium">
                                <div className="flex items-center gap-1.5">
                                    <Clock size={16} className="text-secondary" />
                                    {event.time}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MapPin size={16} className="text-secondary" />
                                    {event.location}
                                </div>
                            </div>
                        </div>

                        {/* Action */}
                        <div className="flex-shrink-0 mt-4 md:mt-0">
                            <button
                                className={`px-6 py-2 rounded-lg font-medium transition-colors ${event.isUpcoming ? 'bg-accent/20 text-accent hover:bg-accent hover:text-white border border-accent/30 hover:border-accent' : 'bg-white/5 text-textPrimary/30 cursor-not-allowed'}`}
                                disabled={!event.isUpcoming}
                            >
                                {event.isUpcoming ? 'Get Tickets' : 'Ended'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
