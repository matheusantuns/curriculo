import { useRef, useEffect } from 'react'
import { ChevronDownIcon, CodeBracketIcon, CommandLineIcon, DevicePhoneMobileIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

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
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`
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
    for (let i = 0; i < 80; i++) {
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
    document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })
  }

  const expertiseData = [
    {
      title: "Desenvolvimento Frontend",
      description: "Interfaces modernas com React e TypeScript",
      technologies: ["React", "TypeScript", "TailwindCSS", "Vite"]
    },
    {
      title: "Arquitetura Backend", 
      description: "Sistemas escaláveis e APIs robustas",
      technologies: ["Node.js", "Python", "Express", "MongoDB"]
    },
    {
      title: "Soluções Completas",
      description: "Desenvolvimento full stack ponta a ponta",
      technologies: ["Git", "Vercel", "APIs REST", "DevOps"]
    }
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Canvas de Partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Conteúdo Principal */}
      <div className="relative z-10">
        {/* Hero Section - Estilo McLaren */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Linha decorativa superior */}
            <div className="w-20 h-px bg-white mb-12 mx-auto"></div>
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
              Matheus Antunes
            </h1>
            
            <div className="w-24 h-px bg-white mb-8 mx-auto"></div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide uppercase">
              Desenvolvedor Full Stack
            </p>

            <div className="max-w-2xl mx-auto mb-16">
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Desenvolvimento de software sob medida com foco em performance, 
                escalabilidade e experiência do usuário final.
              </p>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <button 
                onClick={() => {
                  window.location.hash = 'projects'
                  window.dispatchEvent(new HashChangeEvent('hashchange'))
                }}
                className="flex items-center gap-3 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg"
              >
                Ver Projetos
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  window.location.hash = 'contact'
                  window.dispatchEvent(new HashChangeEvent('hashchange'))
                }}
                className="flex items-center gap-3 px-8 py-4 text-white hover:text-gray-300 transition-all duration-300 font-medium text-lg"
              >
                Contato
                <ChevronDownIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Scroll Indicator */}
            <div 
              className="cursor-pointer"
              onClick={scrollToAbout}
            >
              <div className="text-gray-500 text-sm mb-4 tracking-wide">EXPLORAR</div>
              <div className="w-px h-12 bg-gray-600 mx-auto">
                <div className="w-px h-6 bg-white mx-auto"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="w-20 h-px bg-white mb-8 mx-auto"></div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
                Especialização Técnica
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                Desenvolvimento completo com tecnologias modernas e metodologias ágeis
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {expertiseData.map((area, index) => (
                <div 
                  key={area.title}
                  className="group p-8 border border-gray-800 hover:border-gray-600 transition-all duration-500"
                >
                  <h3 className="text-2xl font-light text-white mb-4 tracking-wide">
                    {area.title}
                  </h3>
                  <p className="text-gray-400 mb-6 font-light leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm text-gray-500 border border-gray-800 font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Overview */}
            <div className="text-center">
              <div className="w-16 h-px bg-gray-600 mx-auto mb-8"></div>
              <h3 className="text-2xl font-light text-white mb-12 tracking-wide">
                Stack Principal
              </h3>
              <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                {[
                  'React', 'TypeScript', 'Node.js', 'Python', 
                  'TailwindCSS', 'MongoDB', 'Git', 'Vercel'
                ].map((tech) => (
                  <div key={tech} className="text-center">
                    <div className="text-gray-400 text-lg font-light mb-2">{tech}</div>
                    <div className="w-px h-8 bg-gray-800 mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="min-h-80 flex items-center justify-center px-6 py-20 border-t border-gray-800">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-20 h-px bg-white mb-8 mx-auto"></div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Iniciar Projeto
            </h2>
            <p className="text-gray-400 text-lg mb-12 font-light max-w-md mx-auto">
              Vamos criar soluções digitais excepcionais juntos
            </p>
            <button 
              onClick={() => {
                window.location.hash = 'contact'
                window.dispatchEvent(new HashChangeEvent('hashchange'))
              }}
              className="px-12 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg"
            >
              Entrar em Contato
            </button>
          </div>
        </section>

        {/* Footer Minimalista */}
        <footer className="border-t border-gray-800 py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-gray-500 text-sm font-light tracking-wide">
              MATHEUS ANTUNES • DESENVOLVEDOR FULL STACK • 2025
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home