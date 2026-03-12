import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ErrorBoundary from './components/ErrorBoundary'

function App() {

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-background text-textPrimary selection:bg-accent/30 selection:text-white">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
