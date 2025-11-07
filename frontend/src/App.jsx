import { useState, useEffect } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

// Componente principal que usa o tema
function AppContent() {
  const [currentPage, setCurrentPage] = useState('home')
  const { isDarkMode } = useTheme()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && ['home', 'about', 'projects', 'contact'].includes(hash)) {
        setCurrentPage(hash)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  // Classes condicionais baseadas no tema
  const bgGradient = isDarkMode 
    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
    : 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100'

  const navBorder = isDarkMode 
    ? 'border-b border-gray-700/50' 
    : 'border-b border-gray-200/50'

  const textColor = isDarkMode ? 'text-white' : 'text-gray-900'
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-600'

  return (
    <div className={`min-h-screen transition-colors duration-300 ${bgGradient}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full glass-effect backdrop-blur-lg z-50 ${navBorder}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className={`text-2xl font-bold satisfying-click ${textColor}`}>
              Matheus Antunes
            </div>
            
            <div className="flex items-center space-x-8">
              {/* Botões de navegação */}
              <div className="flex space-x-8">
                {['home', 'projects', 'about', 'contact'].map((page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page)
                      window.location.hash = page
                    }}
                    className={`text-sm font-medium transition-all duration-300 satisfying-click hover-lift ${
                      currentPage === page 
                        ? `${textColor} border-b-2 ${isDarkMode ? 'border-gray-400' : 'border-gray-600'}` 
                        : `${textMuted} hover:${textColor}`
                    }`}
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                ))}
              </div>

              {/* Separador visual */}
              <div className={`h-6 w-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>

              {/* Botão de Toggle do Tema */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>
    </div>
  )
}

// Componente App principal que envolve com o ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App