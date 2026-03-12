import React from 'react'

const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80', alt: 'Orchestra performing', span: 'col-span-2 row-span-2' },
    { id: 2, src: 'https://images.unsplash.com/photo-1542124505-181cb287cb23?auto=format&fit=crop&q=80', alt: 'Violinist', span: 'col-span-1 row-span-1' },
    { id: 3, src: 'https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80', alt: 'Brass section', span: 'col-span-1 row-span-1' },
    { id: 4, src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80', alt: 'Conductor', span: 'col-span-2 row-span-1' },
    { id: 5, src: 'https://images.unsplash.com/photo-1460036521480-a4bb1b122851?auto=format&fit=crop&q=80', alt: 'Sheet music', span: 'col-span-1 row-span-1' },
    { id: 6, src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80', alt: 'Cello player', span: 'col-span-1 row-span-1' },
]

export default function PhotoGallery() {
    return (
        <section className="scroll-mt-24" id="gallery">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading text-accent mb-4">Moments in Harmony</h2>
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className={`glass-panel border-none overflow-hidden group relative ${photo.span}`}
                    >
                        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
