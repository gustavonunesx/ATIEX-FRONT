// Dados para os popups
const popupData = {
  tecnologias: {
    title: "Tecnologias Fundamentais",
    content: `
      <p>As tecnologias fundamentais para um desenvolvedor frontend são:</p>
      <div class="popup-highlight">
        <p><strong>HTML</strong> - Linguagem de marcação para estruturar conteúdo web</p><img src="./images/html.png" alt="HTML"></strong><img src="./images/saidaHtml.png" alt="HTML">
        <p><strong>CSS</strong> - Linguagem de estilo para apresentação visual</p><img src="./images/css.png" alt="CSS"></strong><img src="./images/saidaCss.png" alt="CSS">
        <p><strong>JavaScript</strong> - Linguagem de programação para interatividade</p><img src="./images/js.png" alt="JS"><video autoplay muted loop><source src="./images/saidaJs.mp4" type="video/mp4"></video>
      </div>
      <p>Estas três tecnologias formam a base de todo desenvolvimento frontend moderno e são essenciais para qualquer profissional da área.</p>
    `
  },
  frameworks: {
    title: "Frameworks JavaScript",
    content: `
      <p>Os frameworks JavaScript aceleram o desenvolvimento e oferecem soluções para problemas comuns:</p>
      <ul>
        <li><strong>React</strong> - Biblioteca desenvolvida pelo Facebook, amplamente adotada no mercado</li>
        <li><strong>Vue.js</strong> - Framework progressivo com curva de aprendizado suave</li>
        <li><strong>Angular</strong> - Framework completo mantido pelo Google</li>
      </ul>
      <p>Cada framework tem suas vantagens e é importante conhecer pelo menos um deles profundamente.</p>
    `
  },
  ferramentas: {
    title: "Ferramentas de Desenvolvimento",
    content: `
      <p>Além das linguagens, desenvolvedores frontend utilizam diversas ferramentas:</p>
      <ul>
        <li><strong>Git</strong> - Sistema de controle de versão para gerenciar mudanças no código</li>
        <li><strong>Webpack</strong> - Empacotador de módulos para otimizar aplicações</li>
        <li><strong>Figma</strong> - Ferramenta de design para prototipagem e colaboração</li>
      </ul>
      <p>Dominar essas ferramentas é tão importante quanto conhecer as linguagens de programação.</p>
    `
  },
  planejamento: {
    title: "Café e Planejamento (09:00)",
    content: `
      <p>O dia começa com uma xícara de café e a revisão das tarefas planejadas. Neste momento, o desenvolvedor:</p>
      <ul>
        <li>Verifica e-mails e mensagens importantes</li>
        <li>Revisa o progresso do dia anterior</li>
        <li>Planeja as atividades do dia atual</li>
        <li>Prioriza tarefas de acordo com prazos e importância</li>
      </ul>
      <p>Este ritual matinal é crucial para manter a organização e produtividade ao longo do dia.</p>
    `
  },
  coding: {
    title: "Coding Session (09:30)",
    content: `
      <p>Esta é a fase de desenvolvimento ativo, onde o código é escrito. Durante esta sessão:</p>
      <ul>
        <li>Implementação de novos componentes e funcionalidades</li>
        <li>Refatoração de código existente para melhorar qualidade</li>
        <li>Integração com APIs e serviços backend</li>
        <li>Testes unitários e de integração</li>
      </ul>
      <p>É comum utilizar técnicas como Pomodoro (trabalho focado em blocos de tempo) para manter a produtividade.</p>
    `
  },
  daily: {
    title: "Daily Meeting (11:00)",
    content: `
      <p>Reunião diária com a equipe para sincronização. Normalmente dura 15-20 minutos e cada membro compartilha:</p>
      <ul>
        <li>O que fez no dia anterior</li>
        <li>O que planeja fazer no dia atual</li>
        <li>Possíveis impedimentos ou dificuldades</li>
      </ul>
      <p>Esta reunião ajuda a manter toda a equipe alinhada e identificar problemas rapidamente.</p>
    `
  },
  review: {
    title: "Code Review (14:00)",
    content: `
      <p>Processo de revisão de código onde os desenvolvedores avaliam o trabalho uns dos outros. Benefícios:</p>
      <ul>
        <li>Identificação de bugs e problemas de qualidade</li>
        <li>Compartilhamento de conhecimento entre a equipe</li>
        <li>Manutenção de padrões de código consistentes</li>
        <li>Oportunidade de aprendizado e melhoria contínua</li>
      </ul>
      <p>Code reviews são uma prática essencial em equipes de desenvolvimento modernas.</p>
    `
  },
  bugs: {
    title: "Resolução de Bugs (15:30)",
    content: `
      <p>Dedicação a identificar e corrigir problemas no código. Esta atividade envolve:</p>
      <ul>
        <li>Análise de relatórios de erro</li>
        <li>Utilização de ferramentas de debugging</li>
        <li>Testes para reproduzir e verificar correções</li>
        <li>Otimização de performance quando necessário</li>
      </ul>
      <p>A resolução eficiente de bugs é uma habilidade valiosa que diferencia bons desenvolvedores.</p>
    `
  },
  aprendizado: {
    title: "Encerramento e Aprendizado (17:00)",
    content: `
      <p>Final do dia dedicado ao encerramento de atividades e aprendizado contínuo:</p>
      <ul>
        <li>Revisão do progresso em relação ao planejado</li>
        <li>Documentação de trabalho realizado</li>
        <li>Estudo de novas tecnologias e tendências</li>
        <li>Participação em comunidades e fóruns técnicos</li>
      </ul>
      <p>O aprendizado contínuo é fundamental na área de tecnologia, que está em constante evolução.</p>
    `
  },
  junior: {
    title: "Desenvolvedor Júnior",
    content: `
      <p>O desenvolvedor júnior é o profissional em início de carreira, com as seguintes características:</p>
      <ul>
        <li>0-2 anos de experiência profissional</li>
        <li>Conhecimento das tecnologias básicas (HTML, CSS, JavaScript)</li>
        <li>Capacidade de implementar funcionalidades com supervisão</li>
        <li>Foco em aprendizado e crescimento técnico</li>
      </ul>
      <div class="popup-highlight">
        <p><strong>Salário:</strong> R$ 3.000 - R$ 5.000</p>
        <p><strong>Responsabilidades:</strong> Implementação de componentes, correção de bugs simples, aprendizado de boas práticas</p>
      </div>
    `
  },
  pleno: {
    title: "Desenvolvedor Pleno",
    content: `
      <p>O desenvolvedor pleno possui experiência intermediária e maior autonomia:</p>
      <ul>
        <li>2-5 anos de experiência profissional</li>
        <li>Domínio de pelo menos um framework moderno (React, Vue, Angular)</li>
        <li>Capacidade de trabalhar de forma independente na maioria das tarefas</li>
        <li>Participação ativa em decisões técnicas</li>
      </ul>
      <div class="popup-highlight">
        <p><strong>Salário:</strong> R$ 6.000 - R$ 9.000</p>
        <p><strong>Responsabilidades:</strong> Desenvolvimento de funcionalidades complexas, mentoria de juniores, code reviews</p>
      </div>
    `
  },
  senior: {
    title: "Desenvolvedor Sênior",
    content: `
      <p>O desenvolvedor sênior é um profissional experiente com amplo conhecimento:</p>
      <ul>
        <li>5+ anos de experiência profissional</li>
        <li>Domínio profundo de múltiplas tecnologias e padrões de arquitetura</li>
        <li>Capacidade de liderar projetos e tomar decisões técnicas complexas</li>
        <li>Habilidades de mentoria e influência na equipe</li>
      </ul>
      <div class="popup-highlight">
        <p><strong>Salário:</strong> R$ 10.000+ (podendo chegar a R$ 20.000+ em empresas de grande porte)</p>
        <p><strong>Responsabilidades:</strong> Arquitetura de sistemas, definição de padrões, resolução de problemas complexos</p>
      </div>
    `
  },
  global: {
    title: "Mercado Global",
    content: `
      <p>O desenvolvimento frontend é uma das carreiras mais globalizadas na área de tecnologia:</p>
      <ul>
        <li>Demanda internacional por profissionais qualificados</li>
        <li>Oportunidades de trabalho remoto com empresas do exterior</li>
        <li>Salários em dólar ou euro para profissionais que trabalham para empresas estrangeiras</li>
        <li>Comunidade global ativa com conferências e eventos internacionais</li>
      </ul>
      <p>Esta globalização oferece oportunidades únicas para desenvolvedores frontend expandirem suas carreiras além das fronteiras nacionais.</p>
    `
  },
  criatividade: {
    title: "Criatividade & Lógica",
    content: `
      <p>O desenvolvimento frontend combina de forma única habilidades criativas e analíticas:</p>
      <ul>
        <li><strong>Criatividade:</strong> Design de interfaces, experiência do usuário, animações e microinterações</li>
        <li><strong>Lógica:</strong> Resolução de problemas, algoritmos, estruturas de dados, performance</li>
      </ul>
      <p>Esta combinação torna a carreira especialmente interessante para pessoas que gostam tanto de arte quanto de ciência exata.</p>
      <div class="popup-highlight">
        <p>Profissionais que dominam ambos os aspectos (design e código) são extremamente valorizados no mercado.</p>
      </div>
    `
  },
  valorizacao: {
    title: "Alta Valorização",
    content: `
      <p>Desenvolvedores frontend qualificados estão entre os profissionais mais valorizados do mercado de tecnologia:</p>
      <ul>
        <li>Salários competitivos mesmo em início de carreira</li>
        <li>Grande número de oportunidades de emprego</li>
        <li>Possibilidade de crescimento rápido na carreira</li>
        <li>Benefícios adicionais como home office, horários flexíveis e bônus</li>
      </ul>
      <p>Esta valorização é resultado da importância crítica da interface do usuário para o sucesso de produtos digitais.</p>
      <div class="popup-highlight">
        <p>Segundo pesquisas, mais de 70% das empresas relatam dificuldade em encontrar desenvolvedores frontend qualificados.</p>
      </div>
    `
  }
};

// Inicialização dos gráficos
document.addEventListener('DOMContentLoaded', function() {
  // Gráfico de salários
  const salarioCtx = document.getElementById('salarioChart').getContext('2d');
  const salarioChart = new Chart(salarioCtx, {
    type: 'bar',
    data: {
      labels: ['Júnior', 'Pleno', 'Sênior'],
      datasets: [{
        label: 'Salário Mensal (R$)',
        data: [4000, 7500, 15000],
        backgroundColor: [
          'rgba(99, 102, 241, 0.7)',
          'rgba(139, 92, 246, 0.7)',
          'rgba(79, 70, 229, 0.7)'
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(79, 70, 229, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#cbd5e1'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: '#94a3b8',
            callback: function(value) {
              return 'R$ ' + value.toLocaleString('pt-BR');
            }
          },
          grid: {
            color: 'rgba(99, 102, 241, 0.1)'
          }
        },
        x: {
          ticks: {
            color: '#94a3b8'
          },
          grid: {
            color: 'rgba(99, 102, 241, 0.1)'
          }
        }
      }
    }
  });

  // Gráfico de tecnologias
  const techCtx = document.getElementById('techChart').getContext('2d');
  const techChart = new Chart(techCtx, {
    type: 'doughnut',
    data: {
      labels: ['React', 'Vue.js', 'Angular', 'Outros'],
      datasets: [{
        data: [65, 20, 10, 5],
        backgroundColor: [
          'rgba(99, 102, 241, 0.7)',
          'rgba(139, 92, 246, 0.7)',
          'rgba(79, 70, 229, 0.7)',
          'rgba(30, 30, 46, 0.7)'
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(79, 70, 229, 1)',
          'rgba(30, 30, 46, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#cbd5e1',
            padding: 20
          }
        }
      }
    }
  });

  // Configuração dos popups
  const popupOverlay = document.getElementById('popupOverlay');
  const popupTitle = document.getElementById('popupTitle');
  const popupBody = document.getElementById('popupBody');
  const closePopup = document.querySelector('.close-popup');

  // Abrir popup quando um card for clicado
  document.querySelectorAll('.card[data-popup]').forEach(card => {
    card.addEventListener('click', function() {
      const popupId = this.getAttribute('data-popup');
      if (popupData[popupId]) {
        popupTitle.textContent = popupData[popupId].title;
        popupBody.innerHTML = popupData[popupId].content;
        popupOverlay.style.display = 'flex';
      }
    });
  });

  // Fechar popup
  closePopup.addEventListener('click', function() {
    popupOverlay.style.display = 'none';
  });

  // Fechar popup ao clicar fora
  popupOverlay.addEventListener('click', function(e) {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = 'none';
    }
  });

  // Botões do hero
  document.getElementById('btnExplorar').addEventListener('click', function() {
    document.getElementById('graficos').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('btnPorque').addEventListener('click', function() {
    document.getElementById('porqueFront').scrollIntoView({ behavior: 'smooth' });
  });
});