import { BuildingLibraryIcon, ScissorsIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const Projects = () => {
  const projects = [
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
      duration: "2 meses",
      icon: <ScissorsIcon className="w-8 h-8" />
    }
  ]

  return (
    <div className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="w-20 h-px bg-white mb-8 mx-auto"></div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Projetos
          </h1>
          <div className="w-24 h-px bg-white mb-8 mx-auto"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Soluções desenvolvidas combinando criatividade e tecnologia de ponta
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="border border-gray-800 p-8 group hover:border-gray-600 transition-all duration-500"
            >
              {/* Project Header */}
              <div className="flex items-center gap-6 mb-8">
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white mb-2 tracking-wide group-hover:text-gray-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="w-16 h-px bg-gray-600 group-hover:bg-gray-500 transition-colors duration-300"></div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-400 mb-8 leading-relaxed font-light">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-light text-white mb-4 tracking-wide">Tecnologias</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="px-4 py-2 text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-gray-300 transition-all duration-300 text-sm font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-light text-white mb-4 tracking-wide">Funcionalidades</h4>
                <ul className="text-gray-400 space-y-3 font-light">
                  {project.features.map(feature => (
                    <li key={feature} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-gray-500 transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Project Info */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-800 p-4 group-hover:border-gray-700 transition-colors duration-300">
                  <p className="text-sm text-gray-500 font-light mb-1">Atuação</p>
                  <p className="text-white font-light">{project.role}</p>
                </div>
                <div className="border border-gray-800 p-4 group-hover:border-gray-700 transition-colors duration-300">
                  <p className="text-sm text-gray-500 font-light mb-1">Duração</p>
                  <p className="text-white font-light">{project.duration}</p>
                </div>
              </div>
              
              {/* Methodologies */}
              <div className="border-t border-gray-800 pt-6">
                <p className="text-gray-400 text-center font-light">
                  <span className="text-gray-300">Metodologias: </span>
                  Scrum, Kanban e Desenvolvimento Ágil
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* GitHub CTA */}
        <div className="text-center">
          <div className="border border-gray-800 p-12 max-w-2xl mx-auto group hover:border-gray-600 transition-all duration-500">
            <div className="w-16 h-px bg-gray-600 mb-6 mx-auto group-hover:bg-gray-500 transition-colors duration-300"></div>
            <h3 className="text-2xl font-light text-white mb-4 tracking-wide">Explore Mais Projetos</h3>
            <p className="text-gray-400 mb-8 font-light max-w-md mx-auto">
              Descubra todos os meus projetos, contribuições e código fonte no GitHub
            </p>
            <a 
              href="https://github.com/matheusantuns" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 font-light text-lg group/btn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub Portfolio
              <ArrowRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects