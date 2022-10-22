module.exports = {
  common: {
    an_error_occurred: 'Ocorreu um erro',
    page_not_found: 'Página não encontrada',
    please_define_title: 'Defina um título no front matter, por favor',
    please_define_description:
      'Defina uma descrição no front matter, por favor',
    search: 'Buscar ("/" para focar)',
    version: 'Versão'
  },
  iso: 'pt-BR',

  links: {
    download: 'Baixar',
    live_edit: 'Edição Ao Vivo'
  },
  header: {
    links: [
      {
        name: 'Docs',
        icon: 'books',
        slug: 'docs-2.x-book-slug'
      },
      {
        name: 'Exemplos',
        icon: 'code',
        slug: 'examples'
      },
      {
        name: 'Recursos',
        icon: 'resources',
        slug: 'resources'
      },
      {
        name: 'Blog',
        icon: 'blog',
        slug: 'blog'
      },
      {
        name: 'Video Courses',
        icon: 'video',
        href: 'https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=navbar_link'
      }
    ],
    search: {
      placeholder: 'Buscar ("/" para focar)'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt.js - O Framework Vue Intuitivo',
      description:
        'Construa sua próxima aplicação Vue.js com confiança utilizando NuxtJS. Um framework de código aberto que torna o desenvolvimento web simples e poderoso.'
    },
    welcome: {
      title: 'O Framework {br} {frameworkType} Intuitivo',
      description:
        'Construa sua próxima aplicação Vue.js com confiança utilizando NuxtJS. Um framework de {openSource} que torna o desenvolvimento web simples e poderoso.',
      openSource: 'código aberto',
      get_started: 'Começar',
      get_updates: 'Receba atualizações do NuxtJS no seu e-mail todos os meses',
      video: 'Video produzido por {company}, baixe a {cheatSheet} deles.',
      cheatSheet: 'folha grátis de dicas do Nuxt'
    },
    why: {
      title: 'Por que {nuxt}',
      try_nuxtjs_online: 'Experiemente o NuxtJS Online',
      enjoyable: {
        title: 'Divertido',
        description:
          'Nosso foco principal é a Experiência do Desenvolvedor. Adoramos o Nuxt.js e melhoramos continuamente o framework para que você também o adore! {break} Espere soluções atraentes, mensagens de erro descritivas, padrões poderosos e documentação detalhada. Se surgirem dúvidas ou problemas, nossa comunidade prestativa irá ajudá-lo(a).'
      },
      modular: {
        title: 'Modular',
        description:
          'Nuxt é baseado em uma arquitetura modular poderosa. Você pode escolher entre mais de 50 módulos para tornar seu desenvolvimento mais rápido e fácil. Você não precisa reinventar a roda para obter os benefícios do PWA, adicionar o Google Analytics à sua página ou gerar um mapa do site.'
      },
      performant: {
        title: 'Performático',
        description:
          'Com o Nuxt.js, seu aplicativo será otimizado imediatamente. Fazemos o nosso melhor para construir aplicativos de alto desempenho, utilizando as melhores práticas do Vue.js e Node.js. Para extrair cada bit desnecessário de seu aplicativo, o Nuxt inclui um analisador de pacotes e muitas oportunidades para ajustar seu aplicativo.'
      }
    },
    companies: {
      title: 'Quem está usando {nuxt}'
    },
    modes: {
      title: 'Renderização do {nuxt}',
      ssr: {
        title: 'Renderizado no Servidor (SSR)',
        description:
          'O modo mais popular para Nuxt. Com o SSR, também conhecido de modo "universal" ou "isomórfico", um servidor Node.js será utilizado para entregar ao cliente o HTML com base em seus componentes Vue, em vez de javascript puro. Usar SSR levará a um grande impulso no SEO, melhor UX e mais oportunidades (em comparação com uma SPA Vue tradicional). {break} Como implementar SSR por conta própria pode ser bem chato, o Nuxt.js oferece suporte completo pronto para uso e cuidará de erros comuns.'
      },
      ssg: {
        title: 'Gerado Estaticamente',
        description:
          'Geração de Site Estático é um tópico muito falado no momento (também conhecido como JAMStack). Em vez de mudar para outro framework e perder tempo para conhecê-lo, por que não matar dois passáros com uma cajadada só? {proverbial} Nuxt.js suporta a geração de site estático baseado no seu aplicativo Vue. É o "melhor dos dois mundos", pois você não precisa de um servidor, mas ainda sim possui os benefícios de SEO porquê o Nuxt pré-renderizará todas as páginas e incluirá o HTML necessário. Além disso, você pode fazer o deploy das páginas geradas facilmente no Netlify ou GitHub Pages.',
        proverbial: 'apenas um provérbio'
      }
    },
    sponsors: {
      title: 'Patrocinadores',
      description:
        'NuxtJS é um projeto de código aberto de licença MIT e de uso totalmente gratuito. No entanto, o esforço necessário para manter e desenvolver novos recursos para o projeto não é sustentável sem apoio financeiro adequado. Se você possui um negócio e está utilizando o Nuxt em um produto que gera receita, faz sentido para os negócios patrocinar o desenvolvimento do Nuxt: isso garante que o projeto do qual seu produto depende permaneça saudável e com manutenção ativa. Ele também pode ajudar sua exposição na comunidade Vue/Nuxt e torna mais fácil atrair desenvolvedores Vue/Nuxt. Se você é um usuário individual e tem aproveitado a produtividade de usar o Nuxt, considere fazer uma doação como um sinal de agradecimento.',
      become_a_sponsor: 'Torne-se um patricionador'
    },
    newsletter: {
      title: '{nuxt} Newsletter',
      description:
        'Receba as atualizações mais recentes do NuxtJS no seu e-mail, escolhidas cuidadosamente pelo time do NuxtJS.',
      form: {
        email: 'Email',
        subscribing: 'Assinando...',
        subscribe: 'Assine',
        subscribed_messages: {
          pre: 'Um e-mail para confirmar sua inscrição foi enviado para',
          post: '💚'
        }
      }
    }
  },
  design: {
    meta: {
      title: 'NuxtJS Design',
      description:
        'Download NuxtJS design resources (SVG, icons, emoji and favicon).'
    },
    title: '{nuxt} Design',
    description:
      'NuxtJS é um projeto de código aberto de licença MIT e de uso totalmente gratuito. {break} Você pode utilizar nossos logotipos livremente, desde que mencione NuxtJS e faça um link para nuxtjs.org.',
    other_download_message:
      'Você também baixar nosso {favicon} ou nosso arquivo {sketch}.'
  },
  resources: {
    meta: {
      title: 'NuxtJS Recursos',
      description:
        'Discover a panel of resources made by our partners. By using thoses affiliate resources links, you are helping us to maintain and develop the Open Source Framework.'
    },
    title: '{nuxt} Recursos',
    description:
      'Descubra um painel de recursos feito por nossos parceiros. Ao usar esses links de recursos afiliados, você está nos ajudando a manter e desenvolver o Open Source Framework.',
    themes: {
      title: 'Temas'
    },
    videos: {
      title: 'Cursos em Vídeo'
    }
  },
  shop: {
    meta: {
      title: 'Loja NuxtJS',
      description:
        'You want to support the NuxtJS project and show your love to the rest of the community? Here our products with the best quality ever!'
    },
    title: 'Loja {nuxt}',
    description:
      'Quer apoiar o projeto NuxtJS e mostrar o seu amor ao resto da comunidade?{break} Aqui estão os nossos produtos de melhor qualidade!',
    button: 'Coming soon'
  },
  team: {
    meta: {
      title: 'NuxtJS Time',
      description:
        'NuxtJS has a very active and engaged team that is constantly striving to push Nuxt forward.'
    },
    title: '{nuxt} Time',
    description:
      'O desenvolvimento da NuxtJS e de seu ecossistema é orientado por uma equipe internacional. Temos uma equipe muito ativa e engajada que está constantemente se esforçando para levar a Nuxt adiante.'
  },
  themes: {
    meta: {
      title: 'NuxtJS Temas',
      description:
        'Com os temas abaixo, desenvolvidos por nossos parceiros da Creative Tim e Theme Forest, você pode ver como um aplicativo do mundo real é construído, utilizando a stack Nuxt.js.'
    },
    title: '{nuxt} Temas',
    description:
      'Com os temas abaixo, desenvolvidos por nossos parceiros da Creative Tim e Theme Forest, você pode ver como um aplicativo do mundo real é construído, utilizando a stack Nuxt.js.',
    button: 'GET IT for'
  },
  'video-courses': {
    meta: {
      title: 'NuxtJS Cursos em Vídeo',
      description:
        'Com os cursos em vídeo abaixo, criados por nosso parceiro VueSchool, você pode descobrir e aprender mais sobre o Framework Nuxt.js.'
    },
    title: '{nuxt} Cursos em Vídeo',
    description:
      'Com os cursos em vídeo abaixo, criados por nosso parceiro VueSchool, você pode descobrir e aprender mais sobre o Framework Nuxt.js.',
    cta: {
      discover: 'Conheça o vueschool',
      start: 'INICIAR CURSO'
    }
  },
  sponsor: {
    meta: {
      title: 'Pratrocine o Desenvolvimento do NuxtJS',
      description:
        'You can support NuxtJS development via different methods and ensure regular updates to the framework.'
    },
    title: 'Pratrocine o Desenvolvimento do {nuxt}',
    description:
      'NuxtJS é um projeto de código aberto de licença MIT e de uso totalmente gratuito.{break} No entanto, o esforço necessário para manter e desenvolver novos recursos para o projeto não é sustentável sem apoio financeiro adequado.{break} Você pode dar surpote ao desenvolvimento do NuxtJS pelos seguintes métodos:',
    donations: {
      title: 'Doações únicas',
      description: 'Aceitamos doações por meio desses canais'
    },
    pledges: {
      title: 'Pagamentos Mensais',
      description:
        'Os pagamentos mensais vêm com vantagens exclusivas, por exemplo, ter seu nome listado no repositório do NuxtJS no GitHub, ou ter o logotipo de sua empresa colocado neste site. Torne-se um nuxter ou patrocinador por meio de {opencollective} (vai para um fundo com modelos de despesas transparentes que apoiam os esforços e eventos da comunidade).'
    },
    become_a_sponsor: 'Torne-se um patricionador'
  },
  support: {
    meta: {
      title: 'NuxtJS Suporte',
      description:
        'Our NuxtJS team now offers official consulting services for your NuxtJS applications.'
    },
    title: 'Assessoria {nuxt} Suporte',
    description:
      'Nossa {team} oferece serviços de consultoria oficial para seus aplicativos NuxtJS.{break} Oferecemos diversos serviços, dependendo de suas necessidades, desde suporte técnico até desenvolvimento personalizado. Espere uma resposta dentro de um dia útil, podemos assinar um NDA personalizado e você pode obter um reembolso total se não ficar satisfeito com nosso serviço.',
    technical: {
      title: 'Suporte Técnico',
      description:
        'Obtenha auditorias de projetos, deploy de aplicativos, desenvolvimento personalizado e suporte técnico da equipe NuxtJS.',
      start: 'Iniciar chat',
      partner: {
        pre: 'Temos parceria com',
        post: 'para oferecer esses serviços para que possamos nos concentrar em ajudá-lo o mais rápido possível.'
      }
    },
    entreprise: {
      title: 'para empresas',
      description:
        'O NuxtJS e milhares de mantenedores de outros pacotes estão trabalhando com a Tidelift para fornecer uma assinatura corporativa que cubra todo o código aberto que você usa.{break} Se você deseja a flexibilidade do código aberto e a confiança do software de nível comercial, isso é para voce.',
      partner: {
        pre: 'Disponível como parte da assinatura',
        post: '.'
      },
      learn_more: 'Descubra mais',
      request_a_demo: 'Solicite uma demonstração'
    }
  },
  blog: {
    meta: {
      title: 'Blog do NuxtJS',
      description:
        'Discover articles from the NuxtJS team and NuxtJS Community about NuxtJS, tips and tricks included!'
    },
    title: 'Blog do {nuxt}',
    description:
      'Descubra artigos da {nuxtTeam} e {nuxtCommunity} sobre NuxtJS, incluindo dicas e truques!',
    nuxt_team: 'NuxtJS Team',
    nuxt_community: 'Nuxt.js Community',
    contribute: 'Encontrou um erro ou deseja contribuir para esta postagem?'
  },
  guide: {
    release_notes: 'Notas de Versão',
    toc_title: 'Nesta página'
  },
  quiz: {
    title: 'Quiz'
  },
  tryNewDocs: {
    msg1: 'Quer experimentar o nova versão da documentação? Nossa ',
    link: 'nova documentação',
    msg2: 'já está em beta. Divirta-se!'
  },
  contribute: {
    title: 'Contribuidores',
    docs: 'Encontrou um erro ou deseja contribuir para esta documentação?',
    blog: 'Encontrou um erro ou deseja contribuir para esta postagem?',
    edit_on_github: 'Edite esta página no GitHub!',
    msg1: 'A contribuição para esta página está encerrada. Se você gostaria de contribuir, verifique nossa',
    link: 'nova documentação, por favor.'
  },
  example: {
    intro: 'In this example:'
  },
  codeSandbox: {
    open: 'Abrir no CodeSandbox'
  },
  content: {
    guide: {
      prologue: 'Prólogo',
      'getting-started': 'Para começar'
    },
    api: {
      essential: 'Essencial',
      pages: 'Páginas',
      components: 'Componentes',
      utils: 'Utilidades',
      configuration: 'Configuração',
      programmatically: 'Programaticamente',
      internals: 'Internals'
    },
    examples: {
      essentials: 'Essenciais',
      customization: 'Customização',
      advanced: 'Avançado'
    },
    faq: {
      configuration: 'Configuração',
      development: 'Desenvolvimento',
      deployment: 'Distribuição'
    },
    guides: {
      'get-started': 'Para começar',
      concepts: 'Conceitos',
      features: 'Funcionalidades',
      'directory-structure': 'Estrutura de Diretórios',
      'configuration-glossary': 'Glossário de Configurações',
      'internals-glossary': 'Glossário de Internals',
      'components-glossary': 'Glossário de Componentes'
    }
  },
  footer: {
    links: {
      discover: {
        title: 'Explorar',
        shop: 'Loja de Mercadorias',
        consulting: 'Treinamento e Consultoria',
        sponsorNuxt: 'Patrocínio e Contribuição'
      },
      about: {
        title: 'About',
        team: 'Nosso time',
        design: 'Pacote de Designer',
        contact: 'Contate-nos'
      },
      support: {
        title: 'Suporte',
        resources: 'Recursos',
        discord: 'Fale conosco',
        contributionGuide: 'Como contribuir'
      }
    }
  },
  cookies: {
    consent: 'Usamos Cookies para análise do usuário e melhorias na página!',
    linkLabel: 'Descubra mais sobre cookies',
    button: 'Entendi'
  }
}
