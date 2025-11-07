import { useState } from 'react'
import { 
  AcademicCapIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
  CalendarIcon,
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'

const About = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')
  const { isDarkMode } = useTheme()

  const technicalExpertise = {
    frontend: {
      title: "Front-end",
      technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "HTML5", "CSS3", "JavaScript"]
    },
    backend: {
      title: "Back-end", 
      technologies: ["Node.js", "Python", "Express.js", "APIs REST", "JSON"]
    },
    tools: {
      title: "Ferramentas",
      technologies: ["Git", "GitHub", "Vercel", "Render", "Netlify"]
    }
  }

  const professionalTraits = [
    {
      icon: UserGroupIcon,
      title: "Colaboração",
      description: "Trabalho eficaz em equipes multidisciplinares"
    },
    {
      icon: CheckBadgeIcon,
      title: "Qualidade",
      description: "Compromisso com excelência técnica"
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Solução de Problemas",
      description: "Abordagem analítica para desafios complexos"
    },
    {
      icon: CpuChipIcon,
      title: "Inovação",
      description: "Busca constante por melhorias e novas tecnologias"
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
  const mutedLine = isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
  const progressBarBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
  const progressBarFill = isDarkMode ? 'bg-white' : 'bg-gray-900'
  const cardHover = isDarkMode ? 'hover:border-gray-600' : 'hover:border-gray-400'
  const buttonActive = isDarkMode 
    ? 'bg-white text-black' 
    : 'bg-gray-900 text-white'
  const buttonInactive = isDarkMode 
    ? 'text-gray-400 hover:text-white hover:bg-gray-900' 
    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-300`}>
      {/* Hero Section - AGORA CENTRALIZADO */}
      <div className={`border-b ${borderColor} py-24`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className={`w-20 h-px ${accentLine} mb-8 mx-auto`}></div>
            <h1 className={`text-5xl md:text-6xl font-light ${textColor} mb-6 tracking-tight`}>
              Sobre Mim
            </h1>
            <div className={`w-24 h-px ${accentLine} mb-8 mx-auto`}></div>
            <p className={`text-xl ${textMuted} font-light leading-relaxed max-w-2xl mx-auto`}>
              Desenvolvedor Full Stack especializado em criar soluções digitais 
              elegantes e performáticas.
            </p>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className={`py-20 border-b ${borderColor}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Perfil */}
            <div>
              <div className={`w-16 h-px ${mutedLine} mb-8`}></div>
              <h2 className={`text-3xl font-light ${textColor} mb-8 tracking-wide`}>Perfil Profissional</h2>
              <div className={`space-y-6 ${textMuted} leading-relaxed font-light`}>
                <p className="text-lg">
                  Desenvolvedor Full Stack com formação em Engenharia de Software pela FIAP, 
                  especializado em tecnologias modernas como React, Node.js e Python.
                </p>
                <p>
                  Foco no desenvolvimento de aplicações web escaláveis, com atenção aos 
                  detalhes de performance, usabilidade e manutenibilidade do código.
                </p>
                <p>
                  Experiência em metodologias ágeis e trabalho remoto, com capacidade de 
                  adaptação a diferentes contextos e requisitos de projeto.
                </p>
              </div>
            </div>

            {/* Destaques */}
            <div>
              <div className={`w-16 h-px ${mutedLine} mb-8`}></div>
              <h3 className={`text-2xl font-light ${textColor} mb-8 tracking-wide`}>Competências</h3>
              <div className="space-y-8">
                {professionalTraits.map((trait, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    <div className={`flex-shrink-0 w-12 h-12 border ${borderColor} flex items-center justify-center group-hover:${borderHover} transition-colors duration-300`}>
                      <trait.icon className={`w-6 h-6 ${textMuted} group-hover:${textColor} transition-colors duration-300`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-light ${textColor} mb-2 tracking-wide`}>{trait.title}</h3>
                      <p className={`${textMuted} font-light`}>{trait.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Expertise */}
      <div className={`py-20 border-b ${borderColor}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className={`w-20 h-px ${accentLine} mb-8 mx-auto`}></div>
            <h2 className={`text-4xl font-light ${textColor} mb-4 tracking-tight`}>Competências Técnicas</h2>
            <p className={`${textMuted} font-light`}>Tecnologias e ferramentas que domino</p>
          </div>

          {/* Category Navigation */}
          <div className="flex justify-center mb-12">
            <div className={`flex space-x-0 border ${borderColor}`}>
              {Object.entries(technicalExpertise).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-8 py-4 text-sm font-light tracking-wide transition-all duration-300 border-r ${borderColor} last:border-r-0 ${
                    activeCategory === key
                      ? buttonActive
                      : buttonInactive
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {technicalExpertise[activeCategory].technologies.map((tech, index) => (
              <div
                key={tech}
                className={`p-6 border ${borderColor} text-center group ${cardHover} transition-all duration-300`}
              >
                <div className={`${textColor} font-light tracking-wide mb-3`}>{tech}</div>
                <div className={`w-full ${progressBarBg} h-px`}>
                  <div 
                    className={`${progressBarFill} h-px transition-all duration-1000`}
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education & Contact */}
      <div className={`py-20 border-b ${borderColor}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Formação */}
            <div>
              <div className={`w-16 h-px ${mutedLine} mb-8`}></div>
              <h2 className={`text-3xl font-light ${textColor} mb-8 tracking-wide`}>Formação Acadêmica</h2>
              <div className="space-y-6">
                <div className={`border-l ${borderColor} pl-8 py-2`}>
                  <div className="flex items-center gap-4 mb-3">
                    <AcademicCapIcon className={`w-5 h-5 ${textLight}`} />
                    <h3 className={`text-xl font-light ${textColor} tracking-wide`}>Engenharia de Software</h3>
                  </div>
                  <p className={`${textMuted} mb-2 font-light`}>FIAP - Faculdade de Informática e Administração Paulista</p>
                  <div className={`flex items-center gap-3 ${textLight} text-sm font-light`}>
                    <CalendarIcon className="w-4 h-4" />
                    <span>Previsão de Conclusão: 2028</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contato */}
            <div>
              <div className={`w-16 h-px ${mutedLine} mb-8`}></div>
              <h2 className={`text-3xl font-light ${textColor} mb-8 tracking-wide`}>Contato</h2>
              <div className="space-y-4">
                <div className={`flex items-center gap-4 p-4 border ${borderColor} ${cardHover} transition-colors duration-300`}>
                  <DevicePhoneMobileIcon className={`w-5 h-5 ${textLight}`} />
                  <div>
                    <p className={`text-sm ${textLight} font-light`}>Telefone</p>
                    <p className={`${textColor} font-light`}>+55 11 95586-6855</p>
                  </div>
                </div>
                <div className={`flex items-center gap-4 p-4 border ${borderColor} ${cardHover} transition-colors duration-300`}>
                  <EnvelopeIcon className={`w-5 h-5 ${textLight}`} />
                  <div>
                    <p className={`text-sm ${textLight} font-light`}>E-mail</p>
                    <p className={`${textColor} font-light`}>theusantunesm@gmail.com</p>
                  </div>
                </div>
                <div className={`flex items-center gap-4 p-4 border ${borderColor} ${cardHover} transition-colors duration-300`}>
                  <MapPinIcon className={`w-5 h-5 ${textLight}`} />
                  <div>
                    <p className={`text-sm ${textLight} font-light`}>Disponibilidade</p>
                    <p className={`${textColor} font-light`}>Remoto • São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className={`w-20 h-px ${accentLine} mb-8 mx-auto`}></div>
            <h2 className={`text-3xl font-light ${textColor} mb-12 tracking-tight`}>Idiomas</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className={`text-center p-8 border ${borderColor}`}>
                <div className="text-3xl mb-4">🇺🇸</div>
                <h3 className={`text-xl font-light ${textColor} mb-2 tracking-wide`}>Inglês</h3>
                <p className={`${textMuted} mb-4 font-light`}>Avançado</p>
                <div className={`w-24 h-px ${accentLine} mx-auto`}></div>
              </div>
              <div className={`text-center p-8 border ${borderColor}`}>
                <div className="text-3xl mb-4">🇪🇸</div>
                <h3 className={`text-xl font-light ${textColor} mb-2 tracking-wide`}>Espanhol</h3>
                <p className={`${textMuted} mb-4 font-light`}>Básico</p>
                <div className={`w-24 h-px ${mutedLine} mx-auto`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About