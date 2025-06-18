import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, FileText, Zap, Shield, Users } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-gray-900" />,
      title: "IA Avançada",
      description: "Tecnologia de ponta que entende as nuances do mercado imobiliário"
    },
    {
      icon: <Clock className="w-8 h-8 text-gray-900" />,
      title: "40 Segundos",
      description: "Tempo record para gerar contratos completos e juridicamente válidos"
    },
    {
      icon: <Shield className="w-8 h-8 text-gray-900" />,
      title: "100% Seguro",
      description: "Contratos revisados por especialistas jurídicos em direito imobiliário"
    },
    {
      icon: <FileText className="w-8 h-8 text-gray-900" />,
      title: "Personalização Total",
      description: "Adapte cada cláusula às suas necessidades específicas"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Diretor, Silva Imóveis",
      content: "Revolucionou nossa operação. O que antes levava horas, agora fazemos em minutos.",
      rating: 5
    },
    {
      name: "Marina Santos",
      role: "Corretora Autônoma",
      content: "A qualidade jurídica dos contratos é impressionante. Meus clientes ficam seguros.",
      rating: 5
    },
    {
      name: "Roberto Lima",
      role: "CEO, Lima Properties",
      content: "ROI fantástico. Economizamos 80% do tempo em documentação legal.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 shadow-none">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
              <div className="text-2xl font-bold text-gray-900 tracking-tight">Contract Pro</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Recursos
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Depoimentos
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Preços
              </a>
            </nav>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold shadow-none px-6 py-2 rounded-lg">
              Começar Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Contratos Imobiliários
              <br />
              <span className="text-gray-700">em 40 segundos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              A primeira IA especializada em contratos imobiliários do Brasil. 
              Gere documentos jurídicos completos em tempo record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 shadow-none"
              >
                Experimentar Grátis
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl"
              >
                Ver Demonstração
              </Button>
            </div>
          </div>
          {/* Demo Animation */}
          <div>
            <div className="bg-gray-50 rounded-3xl p-8 max-w-2xl mx-auto border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-500">Gerando contrato...</div>
                <div className="flex items-center text-gray-900">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">40s</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-900 rounded-full w-full animate-pulse"></div>
                </div>
                <div className="text-left space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Análise dos dados do imóvel
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Verificação jurídica automática
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Geração de cláusulas personalizadas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tecnologia que transforma
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Desenvolvido especificamente para o mercado imobiliário brasileiro
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 shadow-none bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {React.cloneElement(feature.icon, { className: 'w-8 h-8 text-gray-900' })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">40s</div>
              <div className="text-gray-600">Tempo médio de geração</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Precisão jurídica</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">5000+</div>
              <div className="text-gray-600">Contratos gerados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quem já usa, aprova
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200 shadow-none bg-white">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-gray-900 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para revolucionar seu negócio?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de imobiliárias que já transformaram sua operação
          </p>
          <Button 
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 shadow-none"
          >
            Começar Teste Gratuito
          </Button>
          <p className="text-white/80 text-sm mt-4">
            14 dias grátis • Sem cartão de crédito • Cancelamento a qualquer momento
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-500 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 text-gray-900">ContractAI</div>
              <p className="text-gray-500">
                A revolução em contratos imobiliários com inteligência artificial.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Produto</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Integrações</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Suporte</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Empresa</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Carreiras</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ContractAI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
