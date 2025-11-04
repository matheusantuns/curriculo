import { PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  // Substitua este número pelo seu número do WhatsApp
  const whatsappNumber = "5511955866855" // Exemplo: +55 11 95586-6855 (sem espaços e caracteres especiais)

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Vamos Conversar
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pronto para transformar suas ideias em realidade? Entre em contato e vamos criar algo incrível juntos!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-2xl border border-gray-700/50">
              <div className="flex items-center gap-4 mb-8">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-gray-400" />
                <h3 className="text-2xl font-semibold text-white">Vamos Trabalhar Juntos!</h3>
              </div>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Estou sempre aberto a discutir novas oportunidades, projetos desafiadores 
                e ideias inovadoras. Se você precisa de um desenvolvedor comprometido e 
                apaixonado por tecnologia, vamos conversar!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl hover-lift transition-all duration-300 satisfying-click"
                  >
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-gray-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-white font-medium hover:text-gray-300 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="glass-effect p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">Status Profissional</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl">
                  <p className="text-white font-semibold">🎯 Buscando Oportunidades</p>
                  <p className="text-gray-400">Desenvolvedor Júnior - Full Stack</p>
                </div>
                <div className="p-4 bg-gray-700/30 rounded-xl">
                  <p className="text-white font-semibold">💼 Tipo de Contratação</p>
                  <p className="text-gray-400">CLT, PJ ou Freelance</p>
                </div>
                <div className="p-4 bg-gray-700/30 rounded-xl">
                  <p className="text-white font-semibold">🚀 Disponibilidade</p>
                  <p className="text-gray-400">Imediata</p>
                </div>
              </div>
            </div>
          </div>

          {/* Seção do WhatsApp */}
          <div className="glass-effect p-8 rounded-2xl border border-gray-700/50">
            <div className="flex items-center gap-4 mb-8">
              <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411"/>
              </svg>
              <h3 className="text-2xl font-semibold text-white">Envie uma Mensagem</h3>
            </div>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Prefere uma conversa mais direta? Clique no botão abaixo para falar comigo diretamente pelo WhatsApp. Respondo rapidamente!
            </p>

            {/* Botão do WhatsApp Grande */}
            <div className="space-y-6">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de conversar sobre um projeto.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold py-6 px-8 rounded-2xl transition-all duration-300 hover-lift satisfying-click text-xl flex items-center justify-center gap-4 shadow-lg"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.176-1.24-6.165-3.495-8.411"/>
                </svg>
                Conversar no WhatsApp
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-gray-700/30 rounded-xl">
              <p className="text-gray-400 text-sm text-center">
                💬 Respondo rapidamente pelo WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact