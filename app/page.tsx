"use client";

if (process.env.NODE_ENV === 'development') {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (args[0] && args[0].includes && args[0].includes('Missing `Description`')) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Code,
  Palette,
  Monitor,
  Smartphone,
  Coffee,
  Clock,
  TrendingUp,
  Users,
  Lightbulb,
  Star,
  DollarSign,
  MapPin,
  Calendar,
  BookOpen,
  Zap,
  Heart,
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  CheckCircle,
  Target,
  Award,
  Briefcase,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function FrontendDeveloperLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Simular scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "curiosidades", "dia-a-dia", "tecnologias", "salarios"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const curiosidades = [
    {
      icon: Code,
      title: "Primeira Página Web",
      content: "A primeira página web foi criada em 1991 por Tim Berners-Lee. Ela ainda existe e pode ser acessada online!",
      detail: "Esta página histórica continha apenas texto e links, mostrando como a web evoluiu dramaticamente desde então. Hoje, um frontend developer trabalha com tecnologias inimagináveis naquela época como React, Vue.js, e ferramentas de build modernas."
    },
    {
      icon: Palette,
      title: "CSS Zen Garden",
      content: "O CSS Zen Garden provou que o mesmo HTML pode ter aparências completamente diferentes apenas mudando o CSS.",
      detail: "Este projeto revolucionário demonstrou o poder do CSS e inspirou milhares de designers. Cada design submetido usava exatamente o mesmo HTML, mudando apenas o arquivo CSS. Foi um marco que mostrou a separação entre conteúdo e apresentação."
    },
    {
      icon: Zap,
      title: "JavaScript em 10 Dias",
      content: "JavaScript foi criado por Brendan Eich em apenas 10 dias em 1995. Hoje é uma das linguagens mais populares do mundo!",
      detail: "Originalmente chamada de 'Mocha', depois 'LiveScript', e finalmente JavaScript. Apesar do nome, não tem relação direta com Java. Foi criada para adicionar interatividade às páginas web e hoje roda em servidores, mobile e até IoT."
    },
    {
      icon: Smartphone,
      title: "Revolução Mobile",
      content: "Mais de 60% do tráfego web hoje vem de dispositivos móveis. O design mobile-first se tornou essencial!",
      detail: "Esta mudança forçou os desenvolvedores a repensar completamente como criam interfaces. Agora pensamos primeiro na experiência móvel, depois expandimos para desktop. Conceitos como Progressive Web Apps surgiram dessa revolução."
    }
  ];

  const diaADia = [
    {
      time: "09:00",
      icon: Coffee,
      activity: "Café e Planejamento",
      description: "Início do dia com café e revisão das tarefas pendentes",
      detalhes: [
        "Verificação de emails e notificações",
        "Review do board de tarefas (Trello/Jira)",
        "Planejamento das prioridades do dia",
        "Check de pull requests pendentes"
      ]
    },
    {
      time: "09:30",
      icon: Code,
      activity: "Coding Session",
      description: "Desenvolvimento de componentes e funcionalidades",
      detalhes: [
        "Desenvolvimento de componentes React/Vue",
        "Implementação de layouts responsivos",
        "Integração com APIs",
        "Otimização de performance"
      ]
    },
    {
      time: "11:00",
      icon: Users,
      activity: "Daily Meeting",
      description: "Reunião diária com a equipe para alinhamentos",
      detalhes: [
        "Progresso das tarefas atuais",
        "Bloqueios e dificuldades",
        "Planejamento do dia",
        "Colaboração entre equipes"
      ]
    },
    {
      time: "14:00",
      icon: Monitor,
      activity: "Code Review",
      description: "Revisão de código e feedback para colegas",
      detalhes: [
        "Análise de pull requests",
        "Feedback construtivo",
        "Discussão de melhores práticas",
        "Mentoria de desenvolvedores júnior"
      ]
    },
    {
      time: "15:30",
      icon: Lightbulb,
      activity: "Resolução de Bugs",
      description: "Debugging e otimização de performance",
      detalhes: [
        "Investigação de problemas reportados",
        "Uso de ferramentas de debug",
        "Testes de correções",
        "Documentação de soluções"
      ]
    },
    {
      time: "17:00",
      icon: BookOpen,
      activity: "Aprendizado",
      description: "Estudos de novas tecnologias e frameworks",
      detalhes: [
        "Novos frameworks e bibliotecas",
        "Melhores práticas de desenvolvimento",
        "Tendências de UX/UI",
        "Performance e acessibilidade"
      ]
    }
  ];

  const tecnologias = [
    {
      categoria: "Essenciais",
      items: [
        { 
          nome: "HTML5", 
          nivel: "Fundamental", 
          cor: "bg-orange-500",
          descricao: "Linguagem de marcação que estrutura o conteúdo web",
          detalhes: "Base de toda aplicação web. Inclui elementos semânticos, formulários avançados, APIs nativas como Canvas, localStorage, geolocalização."
        },
        { 
          nome: "CSS3", 
          nivel: "Fundamental", 
          cor: "bg-blue-500",
          descricao: "Linguagem de estilização para design e layout",
          detalhes: "Recursos modernos incluem Flexbox, Grid Layout, animações, transições, custom properties (variáveis CSS), e media queries para responsividade."
        },
        { 
          nome: "JavaScript", 
          nivel: "Fundamental", 
          cor: "bg-yellow-500",
          descricao: "Linguagem de programação para interatividade",
          detalhes: "Linguagem fundamental da web. ES6+, async/await, promises, destructuring, modules. Usado tanto no frontend quanto backend (Node.js)."
        }
      ]
    },
    {
      categoria: "Frameworks",
      items: [
        { 
          nome: "React", 
          nivel: "Muito Popular", 
          cor: "bg-cyan-500",
          descricao: "Biblioteca para construção de interfaces",
          detalhes: "Criado pelo Facebook. Componentes reutilizáveis, Virtual DOM, hooks, context API. Ecossistema rico com Next.js, Gatsby, React Native."
        },
        { 
          nome: "Vue.js", 
          nivel: "Popular", 
          cor: "bg-green-500",
          descricao: "Framework progressivo para UIs",
          detalhes: "Framework progressivo, fácil de aprender. Template syntax intuitiva, reatividade, Vue CLI, Nuxt.js para SSR. Ótima documentação."
        },
        { 
          nome: "Angular", 
          nivel: "Empresarial", 
          cor: "bg-red-500",
          descricao: "Plataforma completa para apps web",
          detalhes: "Framework completo do Google. TypeScript por padrão, dependency injection, RxJS, Angular CLI. Ideal para aplicações enterprise complexas."
        }
      ]
    },
    {
      categoria: "Ferramentas",
      items: [
        { 
          nome: "Git", 
          nivel: "Essencial", 
          cor: "bg-gray-600",
          descricao: "Sistema de controle de versão",
          detalhes: "Ferramenta essencial para versionamento. GitHub, GitLab, workflows de desenvolvimento, branching strategies, colaboração em equipe."
        },
        { 
          nome: "Webpack", 
          nivel: "Build Tool", 
          cor: "bg-blue-600",
          descricao: "Bundler de módulos JavaScript",
          detalhes: "Empacotador de assets. Hot reload, code splitting, tree shaking. Alternativas modernas: Vite, Parcel, Rollup."
        },
        { 
          nome: "Figma", 
          nivel: "Design", 
          cor: "bg-purple-500",
          descricao: "Ferramenta de design colaborativo",
          detalhes: "Colaboração design-dev, componentes reutilizáveis, prototipagem, design systems. Integração com ferramentas de desenvolvimento."
        }
      ]
    }
  ];

  const salarios = [
    {
      nivel: "Júnior",
      experiencia: "0-2 anos",
      salario: "R$ 3.000 - R$ 6.000",
      icone: Target,
      detalhes: [
        "Foco em aprendizado",
        "Projetos supervisionados",
        "Desenvolvimento de habilidades básicas",
        "Participação em equipes"
      ],
      habilidades: [
        "Dominar HTML, CSS e JavaScript",
        "Criar projetos pessoais para portfólio",
        "Aprender Git e versionamento",
        "Estudar pelo menos um framework"
      ],
      mercado: "Alta demanda por profissionais júnior dispostos a aprender. Muitas empresas investem em talentos iniciantes.",
      dicas: "Monte um portfólio sólido, contribua com projetos open source, participe de comunidades de desenvolvimento."
    },
    {
      nivel: "Pleno",
      experiencia: "2-5 anos",
      salario: "R$ 6.000 - R$ 12.000",
      icone: Award,
      detalhes: [
        "Autonomia em projetos",
        "Mentoria de juniores",
        "Domínio de frameworks",
        "Participação em arquitetura"
      ],
      habilidades: [
        "Domínio de frameworks modernos",
        "Experiência com testes automatizados",
        "Conhecimento de performance e SEO",
        "Capacidade de mentoria"
      ],
      mercado: "Profissionais mais requisitados no mercado. Equilíbrio perfeito entre experiência e custo-benefício.",
      dicas: "Desenvolva soft skills, aprenda sobre arquitetura de software, especialize-se em uma stack específica."
    },
    {
      nivel: "Sênior",
      experiencia: "5+ anos",
      salario: "R$ 12.000 - R$ 25.000+",
      icone: Briefcase,
      detalhes: [
        "Liderança técnica",
        "Decisões arquiteturais",
        "Mentoria de equipes",
        "Visão estratégica"
      ],
      habilidades: [
        "Arquitetura de aplicações complexas",
        "Liderança técnica de equipes",
        "Conhecimento de DevOps e CI/CD",
        "Visão de negócio e produto"
      ],
      mercado: "Profissionais escassos e altamente valorizados. Muitas oportunidades de liderança técnica e arquitetura.",
      dicas: "Desenvolva visão de negócio, aprenda sobre gestão de pessoas, mantenha-se atualizado com tendências tecnológicas."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Code className="mr-2 h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Frontend Pro</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: "hero", label: "Início" },
                { id: "curiosidades", label: "Curiosidades" },
                { id: "dia-a-dia", label: "Dia a Dia" },
                { id: "tecnologias", label: "Tecnologias" },
                { id: "salarios", label: "Salários" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {[
                  { id: "hero", label: "Início" },
                  { id: "curiosidades", label: "Curiosidades" },
                  { id: "dia-a-dia", label: "Dia a Dia" },
                  { id: "tecnologias", label: "Tecnologias" },
                  { id: "salarios", label: "Salários" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full px-3 py-2 text-left text-foreground hover:text-primary"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary mb-4">
                <Star className="mr-2 h-4 w-4" />
                Profissão em Alta Demanda
              </div>
              
              <h1 className="mb-6 text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Descubra a Carreira de
                <span className="text-primary block mt-2">Frontend Developer</span>
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
                Explore o universo fascinante do desenvolvimento front-end: tecnologias, 
                rotina profissional, curiosidades e oportunidades de carreira.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("curiosidades")}
                  className="bg-primary px-8 py-3 text-primary-foreground hover:bg-primary/90"
                >
                  Explorar Carreira
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary bg-transparent px-8 py-3 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Heart className="mr-2 h-5 w-5" />
                      Por que Frontend?
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Por que escolher Frontend Development?</DialogTitle>
                      <DialogDescription>
                        O desenvolvimento frontend oferece uma combinação única de criatividade e lógica.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Palette className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Criatividade Visual</h4>
                          <p className="text-sm text-muted-foreground">
                            Transforme designs em interfaces interativas e experiências únicas para milhões de usuários.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Mercado em Crescimento</h4>
                          <p className="text-sm text-muted-foreground">
                            Alta demanda por profissionais qualificados com salários competitivos e crescimento constante.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Zap className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Evolução Constante</h4>
                          <p className="text-sm text-muted-foreground">
                            Tecnologias sempre evoluindo, aprendizado contínuo e desafios novos todos os dias.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold">Impacto Real</h4>
                          <p className="text-sm text-muted-foreground">
                            Seu código é visto e usado por pessoas reais, criando experiências que fazem diferença.
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500K+</div>
                <div className="text-muted-foreground">Vagas Anuais no Brasil</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">R$ 8.5K</div>
                <div className="text-muted-foreground">Salário Médio Nacional</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-muted-foreground">Taxa de Empregabilidade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curiosidades Section */}
      <section id="curiosidades" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-foreground sm:text-4xl">
              Curiosidades Fascinantes
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Descubra fatos interessantes sobre o mundo do desenvolvimento frontend
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {curiosidades.map((curiosidade, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-border">
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <curiosidade.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-bold">
                        {curiosidade.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">
                        {curiosidade.content}
                      </CardDescription>
                      <div className="mt-4 flex items-center text-primary text-sm">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Clique para saber mais
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center">
                      <curiosidade.icon className="h-5 w-5 text-primary mr-2" />
                      {curiosidade.title}
                    </DialogTitle>
                    <DialogDescription>
                      Saiba mais sobre esta curiosidade fascinante do desenvolvimento frontend.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="text-base leading-relaxed pt-4 text-muted-foreground">
                    {curiosidade.detail}
                  </div>
                  </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Dia a Dia Section */}
      <section id="dia-a-dia" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-foreground sm:text-4xl">
              Um Dia na Vida do Frontend Dev
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Conheça a rotina típica de um desenvolvedor frontend
            </p>
          </div>

          <div className="text-sm sm:text-base pt-4">
            <div className="space-y-4 sm:space-y-6">
              {diaADia.map((atividade, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="flex items-center space-x-6 p-6 bg-card rounded-lg border border-border cursor-pointer transition-all hover:shadow-md hover:bg-accent/5">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                        <atividade.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-sm font-mono bg-primary/20 text-primary px-2 py-1 rounded">
                            {atividade.time}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground">
                            {atividade.activity}
                          </h3>
                        </div>
                        <p className="text-muted-foreground">{atividade.description}</p>
                      </div>
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="flex items-center">
                        <atividade.icon className="h-5 w-5 text-primary mr-2" />
                        {atividade.activity} - {atividade.time}
                      </DialogTitle>
                      <DialogDescription>
                      Detalhes sobre esta atividade na rotina de um desenvolvedor frontend.
                    </DialogDescription>
                    </DialogHeader>
                    <div className="text-base pt-4">
                        <div className="space-y-3">
                          <p className="text-muted-foreground">{atividade.description}</p>
                          
                          <div className="space-y-2">
                            <h4 className="font-semibold text-foreground">O que inclui:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                              {atividade.detalhes.map((detalhe, detIndex) => (
                                <li key={detIndex}>{detalhe}</li>
                              ))}
                             </ul>
                          </div>
                        </div>
                      </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologias Section */}
      <section id="tecnologias" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-foreground sm:text-4xl">
              Stack Tecnológico
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Principais tecnologias e ferramentas utilizadas no desenvolvimento frontend
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tecnologias.map((categoria, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-center">
                    {categoria.categoria}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {categoria.items.map((tech, techIndex) => (
                      <Dialog key={techIndex}>
                        <DialogTrigger asChild>
                          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors">
                            <div className="flex items-center space-x-3">
                              <div className={`w-4 h-4 rounded-full ${tech.cor}`}></div>
                              <span className="font-medium">{tech.nome}</span>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {tech.nivel}
                            </Badge>
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                              <DialogTitle className="flex items-center">
                                <div className={`w-5 h-5 rounded-full ${tech.cor} mr-2`}></div>
                                {tech.nome}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="text-base pt-4">
                              <div className="space-y-3">
                                <p className="font-medium text-foreground">{tech.descricao}</p>
                                <p className="text-muted-foreground leading-relaxed">{tech.detalhes}</p>
                                <div className="pt-2">
                                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                                    Nível: {tech.nivel}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Salários Section */}
      <section id="salarios" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-foreground sm:text-4xl">
              Faixas Salariais
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Salários médios para desenvolvedores frontend no Brasil em 2024
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {salarios.map((cargo, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className={`cursor-pointer transition-all hover:shadow-lg border-border ${
                    index === 1 ? "ring-2 ring-primary scale-105" : ""
                  }`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <cargo.icone className="h-8 w-8 text-primary" />
                        {index === 1 && (
                          <Badge className="bg-primary text-primary-foreground">Mais Popular</Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl font-bold text-center">
                        {cargo.nivel}
                      </CardTitle>
                      <div className="text-center">
                        <div className="text-3xl font-black text-primary mb-2">
                          {cargo.salario}
                        </div>
                        <div className="text-muted-foreground">
                          {cargo.experiencia}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {cargo.detalhes.map((detalhe, detIndex) => (
                          <li key={detIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            {detalhe}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 text-center">
                        <Badge variant="outline" className="text-xs">
                          Ver detalhes completos
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] max-h-[90vh] overflow-y-auto sm:max-w-2xl">
                  <DialogHeader>
                        <DialogTitle className="flex items-center">
                          <cargo.icone className="h-5 w-5 text-primary mr-2" />
                          {cargo.nivel} Frontend Developer
                        </DialogTitle>
                      </DialogHeader>
                      <div className="text-base pt-4">
                      <div className="space-y-6">
                        {/* Faixa Salarial */}
                        <div className="bg-primary/5 p-3 sm:p-4 rounded-lg">
                          <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Faixa Salarial:</h4>
                          <p className="text-xl sm:text-2xl font-bold text-primary break-words">{cargo.salario}</p>
                          <p className="text-muted-foreground text-sm sm:text-base">Para {cargo.experiencia} de experiência</p>
                        </div>
                        
                        {/* Responsabilidades */}
                        <div>
                        <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">Principais Responsabilidades:</h4>
                        <ul className="space-y-1 sm:space-y-2">
                            {cargo.detalhes.map((detalhe, detIndex) => (
                              <li key={detIndex} className="flex items-start text-muted-foreground text-sm sm:text-base">
                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                                <span className="break-words">{detalhe}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                         {/* Habilidades Necessárias */}
                         <div>
                         <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">Habilidades Necessárias:</h4>
                         <ul className="space-y-1 text-muted-foreground">
                            {cargo.habilidades.map((habilidade, habIndex) => (
                              <li key={habIndex} className="flex items-start text-sm sm:text-base">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-2"></div>
                                <span className="break-words">{habilidade}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Panorama do Mercado */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">Panorama do Mercado:</h4>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base break-words">{cargo.mercado}</p>
                        </div>

                        {/* Dicas para Carreira */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">Dicas para Crescer na Carreira:</h4>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base break-words">{cargo.dicas}</p>
                        </div>
                      </div>
                    </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-black text-foreground sm:text-4xl">
              Pronto para Começar sua Jornada?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
              O mundo do frontend development está esperando por você. Comece hoje mesmo e transforme sua carreira!
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary px-8 py-3 text-primary-foreground hover:bg-primary/90"
              >
                <Code className="mr-2 h-5 w-5" />
                Iniciar Aprendizado
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary bg-transparent px-8 py-3 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="mr-2 h-5 w-5" />
                Ver Projetos
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Junte-se a milhares de desenvolvedores que já transformaram suas carreiras
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Logo e Descrição */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Code className="mr-2 h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground">Frontend Pro</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Seu guia completo para entender e ingressar na carreira de desenvolvimento frontend.
                Informações atualizadas sobre tecnologias, salários e oportunidades.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("curiosidades")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Curiosidades
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("dia-a-dia")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Dia a Dia
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("tecnologias")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Tecnologias
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("salarios")}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Salários
                  </button>
                </li>
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Roadmap Frontend
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Cursos Recomendados
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Projetos para Portfólio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Comunidade
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between border-t border-border pt-8 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 Frontend Pro. Feito com muito código e café.
            </p>
            <div className="mt-4 flex space-x-6 sm:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}