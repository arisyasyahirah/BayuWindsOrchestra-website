import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-background flex items-center justify-center p-4 text-center">
                    <div className="glass-panel p-8 max-w-lg w-full">
                        <h2 className="text-3xl font-heading text-accent mb-4">Something went wrong.</h2>
                        <p className="text-textPrimary/80 mb-6">
                            We're sorry, an unexpected error occurred while loading this content.
                        </p>
                        <pre className="bg-background/50 p-4 rounded-lg text-sm text-left overflow-auto text-red-400 mb-6 border border-white/5">
                            {this.state.error?.toString()}
                        </pre>
                        <button
                            className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors"
                            onClick={() => window.location.reload()}
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}
