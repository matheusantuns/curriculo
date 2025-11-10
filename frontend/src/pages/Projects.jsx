import { BuildingLibraryIcon, ScissorsIcon, ArrowRightIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'

const Projects = () => {
  const { isDarkMode } = useTheme()

  const projects = [
    {
      title: "New Era - Loja de Moda",
      description: "Site moderno de e-commerce para venda de bonés e acessórios, com design responsivo e interface intuitiva. Desenvolvido com as melhores práticas de desenvolvimento web.",
      technologies: ["React", "Vite", "TailwindCSS", "Node.js", "JavaScript"],
      features: ["Design responsivo", "Interface moderna", "Otimização SEO", "Performance otimizada"],
      role: "Desenvolvedor Full Stack",
      icon: <ShoppingBagIcon className="w-8 h-8" />,
      link: "https://projeto-new-era.netlify.app/"
    },
    {
      title: "Passa a Bola",
      description: "Site dedicado ao futebol feminino desenvolvido para o programa NEXT da FIAP em parceria com a empresa Passa a Bola. Contém notícias recentes, sistema de inscrições e chaveamento de partidas em tempo real.",
      technologies: ["React", "Vite", "Node.js", "TailwindCSS", "Express.js"],
      features: ["Dashboard administrativo", "Sistema de inscrições", "Chaveamento em tempo real", "Notícias atualizadas"],
      role: "Líder de equipe e desenvolvedor Front-end",
      duration: "3 meses",
      icon: <BuildingLibraryIcon className="w-8 h-8" />
    },
    {
      title: "Barbearia",
      description: "Site completo para barbearia com dashboard administrativo, sistema de armazenamento de dados de clientes, galeria de fotos e informações de contato e localização.",
      technologies: ["React", "Vite", "Node.js", "TailwindCSS", "MongoDB"],
      features: ["Dashboard administrativo", "Sistema de clientes", "Galeria de fotos", "Design responsivo"],
      role: "Desenvolvedor Full Stack",
      duration: "2 semanas",
      icon: <ScissorsIcon className="w-8 h-8" />
    }
  ]

  // Cores baseadas no tema
  const bgColor = isDarkMode ? 'bg-black' : 'bg-gray-50'
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900'
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-600'
  const textLight = isDarkMode ? 'text-gray-500' : 'text-gray-400'
  const borderColor = isDarkMode ? 'border-gray-800' : 'border-gray-200'
  const borderHover = isDarkMode ? 'border-gray-600' : 'border-gray-400'
  const accentLine = isDarkMode ? 'bg-white' : 'bg-gray-900'
  const cardHover = isDarkMode ? 'hover:border-gray-600' : 'hover:border-gray-400'
  const iconColor = isDarkMode ? 'text-gray-400' : 'text-gray-500'
  const iconHover = isDarkMode ? 'text-gray-300' : 'text-gray-600'
  const buttonStyle = isDarkMode 
    ? 'border-white text-white hover:bg-white hover:text-black'
    : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'

  return (
    <div className={`min-h-screen ${bgColor} py-20 px-6 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`w-20 h-px ${accentLine} mb-8 mx-auto`}></div>
          <h1 className={`text-5xl md:text-6xl font-light ${textColor} mb-6 tracking-tight`}>
            Projetos
          </h1>
          <div className={`w-24 h-px ${accentLine} mb-8 mx-auto`}></div>
          <p className={`text-xl ${textMuted} max-w-3xl mx-auto font-light`}>
            Soluções desenvolvidas combinando criatividade e tecnologia de ponta
          </p>
          
          {/* Link do GitHub destacado */}
          <div className="mt-8">
            <a 
              href="https://github.com/matheusantuns" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 ${textMuted} hover:${textColor} transition-colors duration-300 font-light text-lg`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Explore todos os projetos no GitHub
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`border ${borderColor} p-8 group ${cardHover} transition-all duration-500`}
            >
              {/* Project Header */}
              <div className="flex items-center gap-6 mb-8">
                <div className={`${iconColor} group-hover:${iconHover} transition-colors duration-300`}>
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-2xl font-light ${textColor} tracking-wide group-hover:${textMuted} transition-colors duration-300`}>
                      {project.title}
                    </h3>
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800'} transition-all duration-300 font-medium text-sm flex items-center gap-2 rounded`}
                      >
                        Visitar Site
                        <ArrowRightIcon className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <div className={`w-16 h-px ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} group-hover:${isDarkMode ? 'bg-gray-500' : 'bg-gray-400'} transition-colors duration-300`} />
                </div>
              </div>
              
              {/* Description */}
              <p className={`${textMuted} mb-8 leading-relaxed font-light`}>
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="mb-8">
                <h4 className={`text-lg font-light ${textColor} mb-4 tracking-wide`}>Tecnologias</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className={`px-4 py-2 ${textMuted} border ${borderColor} hover:${borderHover} hover:${textColor} transition-all duration-300 text-sm font-light`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div className="mb-8">
                <h4 className={`text-lg font-light ${textColor} mb-4 tracking-wide`}>Funcionalidades</h4>
                <ul className={`${textMuted} space-y-3 font-light`}>
                  {project.features.map((feature, featureIndex) => (
                    <li 
                      key={feature} 
                      className="flex items-center gap-4"
                    >
                      <div className={`w-1.5 h-1.5 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'} group-hover:${isDarkMode ? 'bg-gray-500' : 'bg-gray-500'} transition-colors duration-300`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Project Info */}
              <div className={`grid ${project.duration ? 'grid-cols-2' : 'grid-cols-1'} gap-6 mb-8`}>
                <div className={`border ${borderColor} p-4 group-hover:${borderHover} transition-colors duration-300`}>
                  <p className={`text-sm ${textLight} font-light mb-1`}>Atuação</p>
                  <p className={`${textColor} font-light`}>{project.role}</p>
                </div>
                {project.duration && (
                  <div className={`border ${borderColor} p-4 group-hover:${borderHover} transition-colors duration-300`}>
                    <p className={`text-sm ${textLight} font-light mb-1`}>Duração</p>
                    <p className={`${textColor} font-light`}>{project.duration}</p>
                  </div>
                )}
              </div>
              
              {/* Methodologies */}
              <div className={`border-t ${borderColor} pt-6`}>
                <p className={`${textMuted} text-center font-light`}>
                  <span className={textColor}>Metodologias: </span>
                  Scrum, Kanban e Desenvolvimento Ágil
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* GitHub CTA */}
        <div className="text-center">
          <div className={`border ${borderColor} p-12 max-w-2xl mx-auto group ${cardHover} transition-all duration-500`}>
            <div className={`w-16 h-px ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} mb-6 mx-auto group-hover:${isDarkMode ? 'bg-gray-500' : 'bg-gray-400'} transition-colors duration-300`} />
            <h3 className={`text-2xl font-light ${textColor} mb-4 tracking-wide`}>
              Explore Mais Projetos
            </h3>
            <p className={`${textMuted} mb-8 font-light max-w-md mx-auto`}>
              Descubra todos os meus projetos, contribuições e código fonte no GitHub
            </p>
            <a 
              href="https://github.com/matheusantuns" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-4 ${buttonStyle} px-8 py-4 transition-all duration-300 font-light text-lg group/btn`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub Portfolio
              <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects