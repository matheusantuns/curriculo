import { useRef, useEffect } from 'react'
import { ChevronDownIcon, CodeBracketIcon, CommandLineIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

const Home = () => {
  const canvasRef = useRef(null)

  // Efeito das partículas (mantido igual)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    class Particle {
      constructor() {
        this.reset()
      }
      
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `rgba(156, 163, 175, ${Math.random() * 0.5 + 0.1})`
        this.originalSize = this.size
      }
      
      update() {
        this.x += this.speedX
        this.y += this.speedY
        
        if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
          this.reset()
        }
      }
      
      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const particles = []
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      particles.forEach(particle => {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          particle.size = particle.originalSize * 2
          particle.speedX *= 1.05
          particle.speedY *= 1.05
        } else {
          particle.size = particle.originalSize
        }
      })
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const stats = [
    { number: '2+', label: 'Projetos Concluídos' },
    { number: '5+', label: 'Tecnologias Dominadas' },
    { number: '100%', label: 'Comprometimento' },
    { number: '∞', label: 'Curiosidade' }
  ]

  const quickSkills = [
    { icon: <CodeBracketIcon className="w-6 h-6" />, name: 'Frontend', desc: 'React, Vite, Tailwind' },
    { icon: <CommandLineIcon className="w-6 h-6" />, name: 'Backend', desc: 'Node.js, Python' },
    { icon: <DevicePhoneMobileIcon className="w-6 h-6" />, name: 'Mobile', desc: 'Design Responsivo' }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Canvas de Partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Conteúdo Principal */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-slide-up">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-400 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto shadow-2xl hover-lift satisfying-click">
                    MA
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
                MATHEUS ANTUNES
              </h1>
              
              <div className="h-12 mb-6 flex items-center justify-center">
                <span className="text-xl md:text-2xl text-gray-300 font-light">
                  Desenvolvedor Full Stack & Estudante de Engenharia de Software
                </span>
              </div>
              
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Transformo ideias em realidade digital através de código limpo, 
                designs intuitivos e soluções inovadoras que fazem a diferença.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={() => {
                    window.location.hash = 'projects'
                    window.dispatchEvent(new HashChangeEvent('hashchange'))
                  }}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-xl transition-all duration-300 hover-lift satisfying-click glass-effect font-semibold group"
                >
                  <span className="flex items-center gap-2">
                    Explorar Projetos
                    <ChevronDownIcon className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </span>
                </button>
                <button 
                  onClick={() => {
                    window.location.hash = 'contact'
                    window.dispatchEvent(new HashChangeEvent('hashchange'))
                  }}
                  className="border-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 px-8 py-4 rounded-xl transition-all duration-300 hover-lift satisfying-click font-semibold"
                >
                  Vamos Conversar
                </button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="glass-effect p-4 rounded-xl hover-lift satisfying-click"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div 
              className="animate-bounce-gentle cursor-pointer"
              onClick={scrollToAbout}
            >
              <div className="w-6 h-10 border-2 border-gray-500 rounded-full mx-auto flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
              </div>
              <p className="text-gray-500 text-sm mt-2">Descobrir mais</p>
            </div>
          </div>
        </section>

        {/* Quick Skills Section */}
        <section id="about-section" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                Habilidades & Expertise
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Domínio completo do ciclo de desenvolvimento, do frontend ao backend
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {quickSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="glass-effect p-8 rounded-2xl hover-lift satisfying-click group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-gray-400 group-hover:text-white mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Tech Stack */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-8">
                Stack Tecnológico
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['React', 'Vite', 'Node.js', 'Python', 'Tailwind', 'Git', 'Express', 'MongoDB'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-6 py-3 bg-gray-700/50 text-gray-300 rounded-full border border-gray-600 hover:bg-gray-600 hover:border-gray-500 transition-all duration-300 satisfying-click hover-lift"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-80 flex items-center justify-center px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Pronto para Inovar Juntos?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Vamos transformar suas ideias em soluções digitais extraordinárias
            </p>
            <button 
              onClick={() => {
                window.location.hash = 'contact'
                window.dispatchEvent(new HashChangeEvent('hashchange'))
              }}
              className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-12 py-4 rounded-xl font-semibold text-lg hover-lift satisfying-click transition-all duration-300 hover:from-gray-500 hover:to-gray-400 shadow-lg"
            >
              Iniciar Projeto
            </button>
          </div>
        </section>
      </div>

      {/* Floating Shapes Decorativas */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gray-500 rounded-full opacity-30 floating-shapes"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-gray-400 rounded-full opacity-40 floating-shapes"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-gray-600 rounded-full opacity-50 floating-shapes"></div>
    </div>
  )
}

export default Home