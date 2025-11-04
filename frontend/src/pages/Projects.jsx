import { BuildingLibraryIcon, ScissorsIcon } from '@heroicons/react/24/outline'

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Meus Projetos
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubra as soluções inovadoras que desenvolvi, combinando criatividade e tecnologia de ponta
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-effect rounded-2xl border border-gray-700/50 overflow-hidden hover-lift transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                {/* Tecnologias */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Tecnologias Utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600 hover:bg-gray-600 hover:border-gray-500 transition-all duration-300 satisfying-click"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Funcionalidades */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Funcionalidades Principais:</h4>
                  <ul className="text-gray-300 space-y-2">
                    {project.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Informações do Projeto */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3 bg-gray-700/30 rounded-lg">
                    <p className="text-sm text-gray-400">Minha Atuação</p>
                    <p className="text-white font-medium">{project.role}</p>
                  </div>
                  <div className="p-3 bg-gray-700/30 rounded-lg">
                    <p className="text-sm text-gray-400">Duração</p>
                    <p className="text-white font-medium">{project.duration}</p>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-lg border border-gray-600">
                  <p className="text-white text-center">
                    <span className="font-semibold">Metodologias: </span>
                    Scrum, Kanban e Desenvolvimento Ágil
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA GitHub */}
        <div className="text-center">
          <div className="glass-effect p-8 rounded-2xl border border-gray-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Quer ver mais?</h3>
            <p className="text-gray-300 mb-6">
              Explore todos os meus projetos, contribuições e código fonte no GitHub
            </p>
            <a 
              href="https://github.com/matheusantuns" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-xl transition-all duration-300 hover-lift satisfying-click font-semibold text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Ver Portfolio no GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects