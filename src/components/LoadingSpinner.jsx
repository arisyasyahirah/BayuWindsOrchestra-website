import React from 'react'

export default function LoadingSpinner({ fullscreen = false }) {
    const content = (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            <p className="text-secondary font-medium animate-pulse">Loading...</p>
        </div>
    )

    if (fullscreen) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                {content}
            </div>
        )
    }

    return <div className="p-8 w-full flex justify-center">{content}</div>
}
