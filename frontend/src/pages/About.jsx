import { CodeBracketIcon, CommandLineIcon, AcademicCapIcon, LanguageIcon } from '@heroicons/react/24/outline'

const About = () => {
  const technicalSkills = [
    { category: "Front-end", skills: ["React", "Vite", "TailwindCSS", "HTML5", "CSS3", "JavaScript"] },
    { category: "Back-end", skills: ["Node.js", "Python", "Express.js"] },
    { category: "Ferramentas", skills: ["Git", "GitHub", "APIs REST", "JSON"] },
    { category: "Deploy", skills: ["Vercel", "Render", "Netlify"] }
  ]

  const softSkills = [
    { name: 'Liderança', icon: '👑' },
    { name: 'Comunicação', icon: '💬' },
    { name: 'Trabalho em equipe', icon: '👥' },
    { name: 'Resolução de problemas', icon: '🔧' },
    { name: 'Aprendizado contínuo', icon: '📚' },
    { name: 'Responsabilidade', icon: '🎯' },
    { name: 'Autonomia', icon: '⚡' },
    { name: 'Proatividade', icon: '🚀' },
    { name: 'Disponível para trabalho remoto', icon: '🌍' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Sobre Mim
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conheça minha jornada, habilidades e paixão por criar soluções digitais extraordinárias
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Coluna Esquerda - Informações Pessoais */}
          <div className="space-y-8">
            {/* Perfil */}
            <div className="glass-effect p-8 rounded-2xl border border-gray-700/50 hover-lift transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <CodeBracketIcon className="w-8 h-8 text-gray-400" />
                <h3 className="text-2xl font-semibold text-white">Perfil Profissional</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Sou desenvolvedor júnior com conhecimentos em Front-end e Back-end, 
                atuando com tecnologias modernas como React, Vite, TailwindCSS, Node.js e Python. 
                Busco desenvolver soluções eficientes e escaláveis com foco em boas práticas, 
                usabilidade e integração entre sistemas. Tenho conhecimento em metodologias ágeis 
                como Scrum e Kanban.
              </p>
            </div>
            
            {/* Contato */}
            <div className="glass-effect p-8 rounded-2xl border border-gray-700/50 hover-lift transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <CommandLineIcon className="w-8 h-8 text-gray-400" />
                <h3 className="text-2xl font-semibold text-white">Informações de Contato</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-4 p-3 bg-gray-700/30 rounded-lg">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p>+55 11 95586-6855</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gray-700/30 rounded-lg">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p>theusantunesm@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formação */}
            <div className="glass-effect p-8 rounded-2xl border border-gray-700/50 hover-lift transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <AcademicCapIcon className="w-8 h-8 text-gray-400" />
                <h3 className="text-2xl font-semibold text-white">Formação Acadêmica</h3>
              </div>
              <div className="text-gray-300 space-y-3">
                <div className="p-4 bg-gray-700/30 rounded-lg">
                  <p className="font-semibold text-lg">🎓 Engenharia de Software</p>
                  <p className="text-gray-400">FIAP</p>
                  <p className="text-blue-400">Conclusão prevista: 2028</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Habilidades */}
          <div className="space-y-8">
            {/* Habilidades Técnicas */}
            <div className="glass-effect p-8 rounded-2xl border border-gray-700/50 hover-lift transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <CodeBracketIcon className="w-8 h-8 text-gray-400" />
                <h3 className="text-2xl font-semibold text-white">Competências Técnicas</h3>
              </div>
              <div className="space-y-6">
                {technicalSkills.map((category) => (
                  <div key={category.category}>
                    <h4 className="text-lg font-semibold text-white mb-3">{category.category}</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600 hover:bg-gray-600 hover:border-gray-500 transition-all duration-300 satisfying-click"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-effect p-8 rounded-2xl border border-gray-700/50 hover-lift transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <LanguageIcon className="w-8 h-8 text-gray-400" />
                <h3 className="text-2xl font-semibold text-white">Habilidades Pessoais</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill) => (
                  <div 
                    key={skill.name}
                    className={`p-4 bg-gray-700/30 rounded-lg text-center hover-lift satisfying-click transition-all duration-300 ${
                      skill.name === 'Disponível para trabalho remoto' 
                        ? 'col-span-2 border-2 border-blue-500/30 bg-blue-500/10' 
                        : ''
                    }`}
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <p className={`font-medium text-sm ${
                      skill.name === 'Disponível para trabalho remoto' 
                        ? 'text-blue-400' 
                        : 'text-gray-300'
                    }`}>
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div className="glass-effect p-8 rounded-2xl border border-gray-700/50 hover-lift transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <LanguageIcon className="w-8 h-8 text-gray-400" />
                <h3 className="text-2xl font-semibold text-white">Idiomas</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-300 font-medium">🇺🇸 Inglês</span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Avançado</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-300 font-medium">🇪🇸 Espanhol</span>
                  <span className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded-full text-sm">Básico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About