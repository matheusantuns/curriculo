import { PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'

const Contact = () => {
  const { isDarkMode } = useTheme()
  const whatsappNumber = "5511955866855"
  const instagramUrl = "https://www.instagram.com/m.antunesz/"

  const contactInfo = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Telefone",
      content: "+55 11 95586-6855",
      link: "tel:+5511955866855"
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: "E-mail",
      content: "theusantunesm@gmail.com",
      link: "mailto:theusantunesm@gmail.com"
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Localização",
      content: "São Paulo, SP",
      link: null
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
      title: "Disponibilidade",
      content: "Remoto ou Presencial",
      link: null
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

  return (
    <div className={`min-h-screen ${bgColor} py-20 px-6 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`w-20 h-px ${accentLine} mb-8 mx-auto`}></div>
          <h1 className={`text-5xl md:text-6xl font-light ${textColor} mb-6 tracking-tight`}>
            Contato
          </h1>
          <div className={`w-24 h-px ${accentLine} mb-8 mx-auto`}></div>
          <p className={`text-xl ${textMuted} max-w-3xl mx-auto font-light`}>
            Vamos transformar suas ideias em realidade. Entre em contato e criemos algo extraordinário juntos.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coluna Esquerda - Informações */}
          <div className="space-y-8">
            {/* Introdução */}
            <div className={`border ${borderColor} p-8`}>
              <div className="flex items-center gap-4 mb-8">
                <ChatBubbleLeftRightIcon className={`w-8 h-8 ${iconColor}`} />
                <h3 className={`text-2xl font-light ${textColor} tracking-wide`}>Vamos Trabalhar Juntos</h3>
              </div>
              <p className={`${textMuted} mb-8 leading-relaxed font-light`}>
                Estou sempre aberto a discutir novas oportunidades, projetos desafiadores 
                e ideias inovadoras. Se você precisa de um desenvolvedor comprometido e 
                apaixonado por tecnologia, vamos conversar!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className={`flex items-center gap-6 p-4 border ${borderColor} ${cardHover} transition-all duration-300 group`}
                  >
                    <div className={`w-12 h-12 border ${borderColor} flex items-center justify-center ${iconColor} group-hover:${iconHover} transition-colors duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm ${textLight} font-light mb-1`}>{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className={`${textColor} font-light hover:${textMuted} transition-colors tracking-wide`}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className={`${textColor} font-light tracking-wide`}>{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Profissional */}
            <div className={`border ${borderColor} p-8`}>
              <h3 className={`text-2xl font-light ${textColor} mb-6 tracking-wide`}>Status Profissional</h3>
              <div className="space-y-4">
                <div className={`p-4 border ${borderColor}`}>
                  <p className={`${textColor} font-light mb-1 tracking-wide`}>🎯 Buscando Oportunidades</p>
                  <p className={`${textMuted} font-light`}>Desenvolvedor Júnior - Full Stack</p>
                </div>
                <div className={`p-4 border ${borderColor}`}>
                  <p className={`${textColor} font-light mb-1 tracking-wide`}>💼 Tipo de Contratação</p>
                  <p className={`${textMuted} font-light`}>CLT, PJ ou Freelance</p>
                </div>
                <div className={`p-4 border ${borderColor}`}>
                  <p className={`${textColor} font-light mb-1 tracking-wide`}>🚀 Disponibilidade</p>
                  <p className={`${textMuted} font-light`}>Imediata</p>
                </div>
              </div>
            </div>

            {/* Instagram Section */}
            <div className={`border ${borderColor} p-8`}>
              <div className="flex items-center gap-4 mb-6">
                <svg className={`w-8 h-8 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <h3 className={`text-2xl font-light ${textColor} tracking-wide`}>Instagram</h3>
              </div>
              <p className={`${textMuted} mb-6 leading-relaxed font-light`}>
                Acompanhe meu dia a dia, projetos pessoais e insights sobre tecnologia no Instagram.
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-4 border ${borderColor} ${textMuted} ${cardHover} hover:${textColor} px-6 py-3 transition-all duration-300 font-light group/ig`}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @m.antunesz
                <span className="group-hover/ig:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita - WhatsApp */}
          <div className={`border ${borderColor} p-8`}>
            <div className="flex items-center gap-4 mb-8">
              <svg className={`w-8 h-8 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411"/>
              </svg>
              <h3 className={`text-2xl font-light ${textColor} tracking-wide`}>WhatsApp</h3>
            </div>
            
            <p className={`${textMuted} mb-8 leading-relaxed font-light`}>
              Prefere uma conversa mais direta? Entre em contato pelo WhatsApp para uma resposta rápida e personalizada.
            </p>

            {/* Botão do WhatsApp */}
            <div className="space-y-6">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de conversar sobre um projeto.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full border ${
                  isDarkMode 
                    ? 'border-green-600 text-green-400 hover:bg-green-600 hover:text-white' 
                    : 'border-green-500 text-green-600 hover:bg-green-500 hover:text-white'
                } py-4 px-8 transition-all duration-300 font-light text-lg flex items-center justify-center gap-4 group/wa`}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411"/>
                </svg>
                Iniciar Conversa
                <span className="group-hover/wa:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
            
            <div className={`mt-8 p-4 border ${borderColor}`}>
              <p className={`${textLight} text-sm text-center font-light`}>
                Resposta rápida garantida
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact