import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'

const Home = () => {
  const canvasRef = useRef(null)
  const { isDarkMode } = useTheme()
  
  // Refs para animações de scroll
  const heroRef = useRef(null)
  const expertiseRef = useRef(null)
  const ctaRef = useRef(null)
  
  // Verificações de visibilidade na tela
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const isExpertiseInView = useInView(expertiseRef, { once: true, amount: 0.3 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  // Efeito das partículas - atualizado para tema
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
        this.color = isDarkMode 
          ? `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`
          : `rgba(0, 0, 0, ${Math.random() * 0.2 + 0.1})`
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
  }, [isDarkMode])

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

  // Variantes de animação
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  // Cores baseadas no tema
  const bgColor = isDarkMode ? 'bg-black' : 'bg-gray-50'
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900'
  const textMuted = isDarkMode ? 'text-gray-300' : 'text-gray-600'
  const textLight = isDarkMode ? 'text-gray-400' : 'text-gray-500'
  const borderColor = isDarkMode ? 'border-gray-800' : 'border-gray-200'
  const borderHover = isDarkMode ? 'border-gray-600' : 'border-gray-400'
  const buttonStyle = isDarkMode 
    ? 'border-white text-white hover:bg-white hover:text-black'
    : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'

  return (
    <div className={`relative min-h-screen overflow-hidden ${bgColor}`}>
      {/* Canvas de Partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Conteúdo Principal */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Linha decorativa superior */}
            <motion.div 
              className={`w-20 h-px ${isDarkMode ? 'bg-white' : 'bg-gray-900'} mb-12 mx-auto`}
              initial={{ scaleX: 0 }}
              animate={isHeroInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            
            <motion.h1 
              className={`text-5xl md:text-7xl font-light ${textColor} mb-8 tracking-tight`}
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Matheus Antunes
            </motion.h1>
            
            <motion.div 
              className={`w-24 h-px ${isDarkMode ? 'bg-white' : 'bg-gray-900'} mb-8 mx-auto`}
              initial={{ scaleX: 0 }}
              animate={isHeroInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            <motion.p 
              className={`text-xl md:text-2xl ${textMuted} mb-12 font-light tracking-wide uppercase`}
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Desenvolvedor Full Stack
            </motion.p>

            <motion.div 
              className="max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <p className={`text-lg ${textLight} leading-relaxed font-light`}>
                Desenvolvimento de software sob medida com foco em performance, 
                escalabilidade e experiência do usuário final.
              </p>
            </motion.div>

            {/* Botões */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <button 
                onClick={() => {
                  window.location.hash = 'projects'
                  window.dispatchEvent(new HashChangeEvent('hashchange'))
                }}
                className={`flex items-center gap-3 px-8 py-4 border ${buttonStyle} transition-all duration-300 font-medium text-lg`}
              >
                Ver Projetos
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  window.location.hash = 'contact'
                  window.dispatchEvent(new HashChangeEvent('hashchange'))
                }}
                className={`flex items-center gap-3 px-8 py-4 ${textColor} hover:${textMuted} transition-all duration-300 font-medium text-lg`}
              >
                Contato
                <ChevronDownIcon className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              className="cursor-pointer"
              onClick={scrollToAbout}
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div className={`${textLight} text-sm mb-4 tracking-wide`}>EXPLORAR</div>
              <div className={`w-px h-12 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} mx-auto`}>
                <motion.div 
                  className={`w-px h-6 ${isDarkMode ? 'bg-white' : 'bg-gray-900'} mx-auto`}
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" ref={expertiseRef} className={`min-h-screen flex items-center justify-center px-6 py-20 border-t ${borderColor}`}>
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-20"
              initial="hidden"
              animate={isExpertiseInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className={`w-20 h-px ${isDarkMode ? 'bg-white' : 'bg-gray-900'} mb-8 mx-auto`}></div>
              <h2 className={`text-4xl md:text-5xl font-light ${textColor} mb-6 tracking-tight`}>
                Especialização Técnica
              </h2>
              <p className={`${textLight} text-lg max-w-2xl mx-auto font-light`}>
                Desenvolvimento completo com tecnologias modernas e metodologias ágeis
              </p>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-20"
              initial="hidden"
              animate={isExpertiseInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {expertiseData.map((area, index) => (
                <motion.div 
                  key={area.title}
                  className={`group p-8 border ${borderColor} hover:${borderHover} transition-all duration-500`}
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <h3 className={`text-2xl font-light ${textColor} mb-4 tracking-wide`}>
                    {area.title}
                  </h3>
                  <p className={`${textLight} mb-6 font-light leading-relaxed`}>
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech) => (
                      <motion.span 
                        key={tech}
                        className={`px-3 py-1 text-sm ${textLight} border ${borderColor} font-light`}
                        whileHover={{ scale: 1.05, borderColor: isDarkMode ? "#4B5563" : "#9CA3AF" }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack Overview */}
            <motion.div 
              className="text-center"
              initial="hidden"
              animate={isExpertiseInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <div className={`w-16 h-px ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} mx-auto mb-8`}></div>
              <h3 className={`text-2xl font-light ${textColor} mb-12 tracking-wide`}>
                Stack Principal
              </h3>
              <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                {[
                  'React', 'TypeScript', 'Node.js', 'Python', 
                  'TailwindCSS', 'MongoDB', 'Git', 'Vercel'
                ].map((tech, index) => (
                  <motion.div 
                    key={tech} 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isExpertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  >
                    <div className={`${textLight} text-lg font-light mb-2`}>{tech}</div>
                    <div className={`w-px h-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} mx-auto`}></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <section ref={ctaRef} className={`min-h-80 flex items-center justify-center px-6 py-20 border-t ${borderColor}`}>
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
            variants={scaleIn}
          >
            <div className={`w-20 h-px ${isDarkMode ? 'bg-white' : 'bg-gray-900'} mb-8 mx-auto`}></div>
            <h2 className={`text-4xl md:text-5xl font-light ${textColor} mb-6 tracking-tight`}>
              Iniciar Projeto
            </h2>
            <p className={`${textLight} text-lg mb-12 font-light max-w-md mx-auto`}>
              Vamos criar soluções digitais excepcionais juntos
            </p>
            <motion.button 
              onClick={() => {
                window.location.hash = 'contact'
                window.dispatchEvent(new HashChangeEvent('hashchange'))
              }}
              className={`px-12 py-4 border ${buttonStyle} transition-all duration-300 font-medium text-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Entrar em Contato
            </motion.button>
          </motion.div>
        </section>

        {/* Footer Minimalista */}
        <motion.footer 
          className={`border-t ${borderColor} py-12 px-6`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <div className={`${textLight} text-sm font-light tracking-wide`}>
              MATHEUS ANTUNES • DESENVOLVEDOR FULL STACK • 2025
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}

export default Home