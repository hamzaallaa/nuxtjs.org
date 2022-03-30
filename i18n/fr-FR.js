module.exports = {
  common: {
    an_error_occurred: "Une erreur s'est produite",
    page_not_found: 'La page est introuvable',
    please_define_title: 'Merci de définir un titre',
    please_define_description: 'Merci de définir une description',
    search: 'Rechercher',
    version: 'Version'
  },
  iso: 'fr',

  links: {
    download: 'Téléchargement',
    live_edit: 'Éditer en ligne'
  },
  header: {
    links: [
      {
        name: 'Docs',
        icon: 'books',
        slug: 'docs-2.x-book-slug'
      },
      {
        name: 'Exemples',
        icon: 'code',
        slug: 'examples'
      },
      {
        name: 'Ressources',
        icon: 'resources',
        slug: 'resources'
      },
      {
        name: 'Blog',
        icon: 'blog',
        slug: 'blog'
      },
      {
        name: 'Cours Video',
        icon: 'video',
        href: 'https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=navbar_link'
      }
    ],
    search: {
      placeholder: 'Rechercher'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt.js - Le Framework Vue.js Intuitif',
      description:
        "Nuxt.js fournit toutes les configurations nécessaires pour rendre vos développements d'application Vue.js agréable. Nuxt.js peut créer des Applications Universelles, Monopages ou Statiques Générées."
    },
    welcome: {
      title: 'Le Framework Intuitif {br} basé sur {frameworkType}',
      description:
        'Construisez votre prochaine application Vue.js en toute confiance avec NuxtJS. Un framework {openSource} rendant le développement web simple et puissant.',
      openSource: 'open source',
      get_started: 'Commencer',
      get_updates:
        'Recevez chaque mois les mises à jour de Nuxt dans votre boîte de réception',
      video:
        'Vidéo produite par {company}, téléchargez gratuitement {cheatSheet}.',
      cheatSheet: 'Nuxt Cheat Sheet'
    },
    why: {
      title: 'Pourquoi {nuxt}',
      try_nuxtjs_online: 'Essayez NuxtJS Online',
      enjoyable: {
        title: 'Agréable',
        description:
          "Notre principal objectif est l'expérience des développeurs. Nous aimons Nuxt.js et améliorons continuellement le framework pour que vous l'aimiez aussi! {break} Attendez-vous à des solutions attrayantes, des messages d'erreur descriptifs, des paramètres par défaut puissants et une documentation détaillée. Si des questions ou des problèmes surviennent, notre communauté attentionnée vous aidera."
      },
      modular: {
        title: 'Modulaire',
        description:
          "Nuxt repose sur une puissante architecture modulaire. Vous pouvez choisir parmi plus de 50 modules pour rendre votre développement plus rapide et plus facile. Il n'est pas nécessaire de réinventer la roue pour obtenir les avantages PWA, ajouter Google Analytics à votre page ou générer un plan du site."
      },
      performant: {
        title: 'Performant',
        description:
          "Avec Nuxt.js, votre application sera optimisée et prête à l'emploi. Nous faisons de notre mieux pour créer des applications performantes en appliquant les meilleures pratiques de Vue.js et Node.js. Pour tirer le meilleur parti de votre application, Nuxt inclut un analyseur de bundles et de nombreuses possibilités d'ajuster votre application."
      }
    },
    companies: {
      title: 'Qui utilise {nuxt}'
    },
    modes: {
      title: 'Rendu {nuxt}',
      ssr: {
        title: 'Server Side Rendered (SSR)',
        description:
          'Le mode le plus populaire pour Nuxt. Avec le rendu côté server (SSR), également appelé mode "universel" ou "isomorphe", un serveur Node.js sera utilisé pour fournir du HTML basé sur vos composants Vue au client au lieu du pur javascript. L\'utilisation du SSR entraînera une amélioration considérable de votre SEO, un meilleur UX et plus d\'opportunités (par rapport à une Vue SPA traditionnelle).{break}Parce que la mise en place du SSR par vous-même peut être vraiment fastidieuse, Nuxt.js vous offre un support complet et s\'occupera des pièges courants.'
      },
      ssg: {
        title: 'Static Site Generation (SSG)',
        description:
          "La génération de sites statiques est un sujet à la mode en ce moment (aka JAMStack). Au lieu de passer à un autre framework et de passer du temps à s'y habituer, pourquoi ne pas faire d'une pierre deux coups ? {proverbial} Nuxt.js prend en charge la génération d'un site statique basé sur votre application Vue. C'est le \"meilleur des deux mondes\" car vous n'avez pas besoin d'un serveur mais vous avez toujours des avantages SEO car Nuxt pré-rendra toutes les pages et inclura le HTML nécessaire. En outre, vous pouvez déployer facilement la page résultante sur des pages Netlify ou GitHub.",
        proverbial: "comme le dit l'expression"
      }
    },
    sponsors: {
      title: 'Sponsors',
      description:
        'NuxtJS est un projet open source sous licence MIT entièrement gratuit. Cependant, les efforts nécessaires pour maintenir et développer de nouvelles fonctionnalités pour le projet ne sont pas durables sans un soutien financier adéquat. Si vous exploitez une entreprise et utilisez Nuxt dans un produit générateur de revenus, il est logique de parrainer le développement Nuxt: cela garantit que le projet sur lequel votre produit repose reste en bonne santé et activement entretenu. Cela peut également vous aider à mieux faire connaître votre entreprise dans la communauté Vue/Nuxt et à attirer plus facilement les développeurs Vue/Nuxt. Si vous êtes un utilisateur individuel et avez apprécié la productivité de l’utilisation de Nuxt, envisagez de faire un don en guise de remerciement.',
      become_a_sponsor: 'Devenir sponsor'
    },
    newsletter: {
      title: '{nuxt} Newsletter',
      description:
        "Recevez les dernières nouvelles de Nuxt dans votre boîte de réception, organisée par l'équipe Nuxt et les contributeurs.",
      form: {
        email: 'Email',
        subscribing: "S'abonner",
        subscribe: "S'abonner",
        subscribed_messages: {
          pre: 'Un email pour confirmer que votre abonnement a été envoyé à',
          post: '💚'
        }
      }
    }
  },
  design: {
    meta: {
      title: 'Conception NuxtJS',
      description:
        'Télécharger les ressources de conception NuxtJS (SVG, icônes, emoji et favicon).'
    },
    title: '{nuxt} Conception',
    description:
      "NuxtJS est un projet open source sous licence MIT et totalement gratuit d'utilisation. {break} Vous pouvez utiliser librement nos logos tant que vous mentionnez NuxtJS ainsi qu'un lien vers nuxtjs.org.",
    other_download_message:
      'Vous pouvez également télécharger notre {favicon} ou notre fichier {sketch}.'
  },
  resources: {
    meta: {
      title: 'Ressources NuxtJS',
      description:
        "Découvrez un panel de ressources réalisées par nos partenaires. En utilisant ces liens de ressources d'affiliation, vous nous aidez à maintenir et développer le Framework Open Source."
    },
    title: '{nuxt} Ressources',
    description:
      "Découvrez un panel de ressources réalisées par nos partenaires. En utilisant ces liens de ressources d'affiliation, vous nous aidez à maintenir et développer le Framework Open Source.",
    themes: {
      title: 'Thèmes'
    },
    videos: {
      title: 'Cours Vidéos'
    },
    modules: {
      title: 'Modules'
    },
    examples: {
      title: 'Exemples'
    }
  },
  shop: {
    meta: {
      title: 'Le magasin NuxtJS',
      description:
        'Vous souhaitez soutenir le projet NuxtJS et montrer votre amour au reste de la communauté? Voici nos produits avec la meilleure qualité jamais vue!'
    },
    title: 'Le magasin {nuxt}',
    description:
      'Vous souhaitez soutenir le projet NuxtJS et montrer votre amour au reste de la communauté?{break} Voici nos produits avec la meilleure qualité jamais vue!',
    button: 'Bientôt disponible'
  },
  team: {
    meta: {
      title: "L'équipe NuxtJS",
      description:
        "NuxtJS a une équipe très active et engagée qui s'efforce constamment de faire avancer Nuxt."
    },
    title: "L'équipe {nuxt}",
    description:
      "Le développement de NuxtJS et de son écosystème est guidé par une équipe internationale. Nous avons une équipe très active et engagée qui s'efforce constamment de faire avancer Nuxt."
  },
  themes: {
    meta: {
      title: 'Les thèmes NuxtJS',
      description:
        'Avec les thèmes ci-dessous construits par nos partenaires de Creative Tim et Theme Forest, vous pouvez voir comment une application du monde réel est construite, avec la pile Nuxt.js en arrière plan.'
    },
    title: 'Les thèmes {nuxt}',
    description:
      'Avec les thèmes ci-dessous construits par nos partenaires de Creative Tim et Theme Forest, vous pouvez voir comment une application du monde réel est construite, avec la pile Nuxt.js en arrière plan.',
    button: 'OBTENEZ-LE pour'
  },
  'video-courses': {
    meta: {
      title: 'Les cours vidéos NuxtJS',
      description:
        'Avec les cours vidéo ci-dessous créés par notre partenaire VueSchool, vous pouvez découvrir et en savoir plus sur le Framework Nuxt.js.'
    },
    title: 'Les cours vidéos {nuxt}',
    description:
      'Avec les cours vidéo ci-dessous créés par notre partenaire VueSchool, vous pouvez découvrir et en savoir plus sur le Framework Nuxt.js.',
    cta: {
      discover: 'Découvrir vueschool',
      start: 'COMMENCER LE COURS'
    }
  },
  sponsor: {
    meta: {
      title: 'Sponsor de développement NuxtJS',
      description:
        'Vous pouvez prendre en charge le développement NuxtJS via différentes méthodes et assurer des mises à jour régulières du framework.'
    },
    title: 'Sponsor de développement {nuxt}',
    description:
      "NuxtJS est un projet open source sous licence MIT et totalement gratuit d'utilisation.{break} Cependant, les efforts nécessaires pour maintenir et développer de nouvelles fonctionnalités pour le projet ne sont pas durables sans un soutien financier approprié.{break} Vous pouvez soutenir le développement NuxtJS via les méthodes suivantes:",
    donations: {
      title: 'Dons uniques',
      description: 'Nous acceptons les dons via ces canaux'
    },
    pledges: {
      title: 'Engagements récurrents',
      description:
        "Les promesses récurrentes s'accompagnent d'avantages exclusifs, par exemple avoir votre nom répertorié dans le référentiel NuxtJS GitHub, ou placer le logo de votre entreprise sur ce site Web. Devenez un nuxter ou un sponsor via {opencollective} (entre dans un fonds avec des modèles de dépenses transparents soutenant les efforts et les événements de la communauté)."
    },
    become_a_sponsor: 'Devenez un sponsor'
  },
  support: {
    meta: {
      title: 'Le support NuxtJS',
      description:
        'Notre équipe NuxtJS propose désormais des services de conseil officiels pour vos applications NuxtJS.'
    },
    title: 'Conseil du support {nuxt}',
    description:
      "Notre équipe {nuxt} propose désormais des services de conseil officiels pour vos applications NuxtJS.{break} Nous proposons différents services en fonction de vos besoins, du support technique au développement sur mesure. Attendez-vous à une réponse dans un délai d'un jour ouvrable, nous pouvons signer une NDA personnalisée et vous pouvez obtenir un remboursement complet si vous n'êtes pas satisfait de notre service.",
    technical: {
      title: 'Le support technique',
      description:
        "Obtenez des audits de projet, des déploiements d'applications, un développement personnalisé et un support technique de la part de l'équipe NuxtJS.",
      start: 'Démarrer le chat',
      partner: {
        pre: 'Nous nous sommes associés',
        post: 'pour offrir ces services afin que nous puissions nous concentrer pour vous aider le plus rapidement possible.'
      }
    },
    entreprise: {
      title: 'pour entreprise',
      description:
        "NuxtJS et les mainteneurs de milliers d'autres packages travaillent avec Tidelift pour proposer un abonnement d'entreprise qui couvre l'ensemble de l'open source que vous utilisez.{break} Si vous voulez la flexibilité de l'open source et la confiance des logiciels de qualité commerciale, c'est pour vous.",
      partner: {
        pre: 'Disponible dans le cadre de',
        post: "l'abonnement."
      },
      learn_more: 'En savoir plus',
      request_a_demo: 'Demander une démonstration'
    }
  },
  blog: {
    meta: {
      title: 'Blog NuxtJS',
      description:
        "Découvrez les articles de l'équipe et de la communauté NuxtJS, conseils et astuces inclus!"
    },
    title: 'Blog {nuxt}',
    description:
      'Découvrez les articles de {nuxtTeam} et {nuxtCommunity} à propos de NuxtJS ainsi que des astuces !',
    nuxt_team: 'NuxtJS Team',
    nuxt_community: 'Nuxt.js Community',
    contribute:
      'Vous avez commis une erreur ou souhaitez contribuer à cet article de blog ?'
  },
  guide: {
    release_notes: 'Notes de versions (en)',
    toc_title: 'Sur cette page'
  },
  quiz: {
    title: 'Quiz'
  },
  tryNewDocs: {
    msg1: "Jetez un coup d'œil à notre ",
    link: 'nouvelle documentation (beta)',
    msg2: '. Have fun !'
  },
  contribute: {
    title: 'Contributeurs',
    docs: 'Vous avez vu une erreur ou vous souhaitez contribuer à la documentation ?',
    blog: 'Vous avez commis une erreur ou souhaitez contribuer à cet article de blog ?',
    edit_on_github: 'Éditez cette page sur GitHub !',
    msg1: 'La contribution pour cette page est maintenant fermée. Si vous souhaitez contribuer, veuillez consulter notre',
    link: 'nouvelle documentation'
  },
  example: {
    intro: 'Dans cet exemple:'
  },
  codeSandbox: {
    open: 'Ouvrir CodeSandbox'
  },
  content: {
    guide: {
      prologue: 'Prologue',
      'getting-started': 'Pour Commencer'
    },
    api: {
      essential: 'Essentiel',
      pages: 'Pages',
      components: 'Composants',
      utils: 'Utilitaires',
      configuration: 'Configuration',
      programmatically: 'Programmation',
      internals: 'Mécanismes'
    },
    examples: {
      routing: 'Routage',
      dataFetching: 'Data Fetching',
      assetManagement: "Gestion d'assets",
      transitions: 'Transitions',
      seo: 'SEO',
      loading: 'Chargement',
      miscellaneous: 'Divers',
      middleware: 'Middleware',
      plugins: 'Plugins',
      modules: 'Modules',
      essentials: 'Essentiels',
      customization: 'Personnalisation',
      advanced: 'Avancé'
    },
    faq: {
      configuration: 'Configuration',
      development: 'Développement',
      deployment: 'Déploiement'
    },
    guides: {
      'get-started': 'Commencer',
      concepts: 'Concepts',
      features: 'Fonctionnalités',
      'directory-structure': 'Structure',
      'configuration-glossary': 'Configuration',
      'internals-glossary': 'Internes',
      'components-glossary': 'Composants',
      deployment: 'Déploiement',
      examples: 'Exemples'
    }
  },
  footer: {
    links: {
      discover: {
        title: 'Découvrir',
        shop: 'Nos goodies',
        consulting: 'Formation & consulting',
        sponsorNuxt: 'Sponsoring & dons'
      },
      about: {
        title: 'À propos',
        team: 'Notre équipe',
        design: 'Design kit',
        contact: 'Nous contacter'
      },
      support: {
        title: 'Support',
        resources: 'Ressources',
        discord: 'Parlons ensemble',
        contributionGuide: 'Contribution guide'
      }
    }
  },
  cookies: {
    consent:
      "Nous utilisons des cookies pour l'analyse des utilisateurs et les améliorations sur la page !",
    linkLabel: 'En savoir plus sur les cookies',
    button: 'Accepter'
  }
}
