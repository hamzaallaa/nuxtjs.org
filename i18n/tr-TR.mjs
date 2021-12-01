export default {
  common: {
    an_error_occurred: 'Bir hata oluştu',
    page_not_found: 'sayfası bulunamadı',
    please_define_title: 'Please define a title in the front matter',
    please_define_description: 'Please define a description in the front matter',
    search: 'Ara (tıkla ya da "/")',
    version: 'Sürüm'
  },
  iso: 'tr',
  cookies: {
    message: 'Kullanıcı analizleri ve sayfa içerisi geliştirmeler yapmak için çerezleri kullanıyoruz.',
    link: 'Çerezler hakkında bilgi',
    button: 'Tamam'
  },
  links: {
    download: 'İndir',
    live_edit: 'Canlı Düzenleme'
  },
  header: {
    links: [
      {
        name: 'Rehberler',
        icon: 'books',
        slug: 'docs-2.x-book-slug'
      },
      {
        name: 'Örnekler',
        icon: 'code',
        slug: 'examples'
      },
      {
        name: 'Resources',
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
      placeholder: 'Ara (tıkla ya da "/")'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt - Sezgisel Vue Sistemi',
      description:
        'Bir sonraki Vue.js uygulamanızı, Nuxt ile güvenli bir şekilde programlayın. Web geliştirmeyi basit ve güçlü kılan açık kaynak bir sistem.'
    },
    welcome: {
      title: 'Sezgisel {br} {frameworkType} Sistemi',
      description:
        'Bir sonraki Vue.js uygulamanızı, Nuxt ile güvenli bir şekilde programlayın. Web geliştirmeyi basit ve güçlü kılan {openSource} bir sistem.',
      openSource: 'açık kaynak',
      get_started: 'başlarken',
      get_updates: 'Her ay gelen kutunuza Nuxt güncellemelerini alın',
      video: "Video {company} tarafından hazırlanmıştır, ücretsiz {cheatSheet}'nu indirin.",
      cheatSheet: 'Nuxt Kullanım Kılavuzu'
    },
    why: {
      title: 'Neden {nuxt}',
      try_nuxtjs_online: "Nuxt'yi Deneyin",
      enjoyable: {
        title: 'Eğlenceli',
        description:
          "Ana amacımız Geliştirici Deneyimini geliştirmektir. Nuxt'yi seviyoruz ve sistemi sürekli olarak sizin de sevmenizi hedefliyoruz! 💚 {break} Kolay çözümler, açıklayıcı hata mesajları, güçlü varsayılanlar ve ayrıntılı dokümantasyona hazır olun! Eğer bir sorunla karşılaşır veya bir soru sormak isterseniz, yardımsever topluluğumuz size yardımcı olacaktır."
      },
      modular: {
        title: 'Modüler',
        description:
          "Nuxt modüler bir yapı üzerine kurulmuştur. Geliştirme aşamanızı hızlandırıp kolaylaştıracak 50'den fazla modüle kolayca erişebilirsiniz. PWA ayrıcalıklarına erişmek, uygulamanızı Google Analytics'e bağlamak veya bir site haritası oluşturmak için tekerleği yeniden icat etmenize gerek yok!"
      },
      performant: {
        title: 'Performanslı',
        description:
          "Nuxt ile, uygulamanız kutudan çıktığı haliyle optimize edilmiş olacaktır. Vue.js ve Node.js pratiklerini en iyi şekilde kullanıp sizlere en güçlü performans sunan bir sistem geliştirmeye çalışıyoruz. Gereği olmayan en küçük ayrıntıya kadar Nuxt'un imkanları sayesinde uygulamanız her zaman optimize edilmiş bir şekilde çalışır."
      }
    },
    companies: {
      title: 'Kimler {nuxt} kullanıyor?'
    },
    modes: {
      title: '{nuxt} işlemesi',
      ssr: {
        title: 'Sunucu Taraflı İşleme',
        description:
          'Bu mod, Nuxt\'un en popüler modudur. STİ (SSR), "universal" veya "isomorphic" olarak isimlendirdiğimiz bu mod, saf javascript kullanıp Vue komponentlerinizi kullanıcılara sunmaktansa, bir Node.js sunucusu kullanıp bunları sunucuda işleyerek sitenize HTML bazlı olarak çıktı verecektir. STİ kullanmak, büyük bir SEO puanı takviyesi almanıza sebep olacaktır, daha iyi kullanıcı deneyimi ve Vue SPA ile karşılaştırıldığında daha fazla imkanınız olacaktır.{break}STİ\'yi kendi başınıza uygulamanıza uyarlamak zorlu olabilir, Nuxt sizlere bunu hazır bir şekilde sunar ve bilinen bir çok ayarı sizin için yapar.'
      },
      ssg: {
        title: 'Statik Olarak Oluşturma',
        description:
          'Statik Site Oluşturma bu sıralar çok popüler bir oluştur. Bir başka sisteme geçip alışmakla zaman kaybetmek yerine neden bir taşla iki kuş vurmayasınız ki? {proverbial} Nuxt, Vue uygulamanıza bağlı olarak statik bir site oluşturabilir. Buna ayrıca "her iki tarafın da en iyisi" denilir çünkü bir sunucuya ihtiyacınız olmadığı halde Nuxt\'un tüm sayfaları önceden işleyerek verdiği sonuçlar doğrultusunda tüm SEO ayrıcalıklarına erişebilirsiniz. Ayrıca, bu yöntemle oluşturduğunuz sayfalarınızı kolaylıkla Netlify veya GitHub sayfalarınızda kullanabilirsiniz. ',
        proverbial: 'sadece atasözü olarak elbette'
      }
    },
    sponsors: {
      title: 'Sponsorlar',
      description:
        "Nuxt, MIT lisanslı açık kaynak ve kullanması tamamen ücretsiz bir projedir. Yine de, projeyi ayakta tutmak, yeni özellikler eklemek için sarf edilen efor ve emek finansal destek gerektirmektedir. Eğer bir işletme yürütüyorsanız ve işletmenizde Nuxt kullanıp kazanç sağlıyorsanız, Nuxt'u desteklemek işletmeler kitabında mantıklı olacaktır. Böylece sizin işletmeniz ve Nuxt ayakta durabilir ve güncelleme almaya devam edebilir. Sponsor olmak, ayrıca sizi Vue/Nuxt topluluğuna sokacaktır ve bu toplulukta Vue/Nuxt geliştiricilerine ulaşmanıza kolaylık sağlayacaktır. Eğer Nuxt kullanıyor ve memnun kalıyorsanız, minnettarlığınızı göstermek amacıyla bağış yapmayı unutmayın.",
      become_a_sponsor: 'Sponsor ol'
    },
    newsletter: {
      title: '{nuxt} Bülteni',
      description:
        'Çekirdek ekibi ve katkıda bulunanlar tarafından yönetilen en son Nuxt haberlerine gelen kutunuzdan ulaşın.',
      form: {
        email: 'Eposta',
        subscribing: 'Abone olunuyor...',
        subscribe: 'Abone Ol',
        subscribed_messages: {
          error: 'An error occurred while sending confirmation email',
          pre: 'Aboneliğinizi onaylamak için epostanıza bir eposta gönderildi',
          post: '💚'
        }
      }
    }
  },
  design: {
    meta: {
      title: 'Nuxt Tasarım',
      description: 'Download Nuxt design resources (SVG, icons, emoji and favicon).'
    },
    title: '{nuxt} Tasarım',
    description:
      "Nuxt, MIT lisansı açık kaynak bir projedir ve kullanması tamamen ücretsizdir. Burada gördüğünüz logolarımızı Nuxt'yi ve nuxtjs.org'u belirttiğiniz takdirde istediğiniz gibi kullanabilirsiniz.",
    other_download_message: "Aynı zamanda isterseniz {favicon}'umuzu veya {sketch} dosyamızı indirebilirsiniz."
  },
  resources: {
    meta: {
      title: 'Nuxt Kaynaklar',
      description:
        'Discover a panel of resources made by our partners. By using thoses affiliate resources links, you are helping us to maintain and develop the Open Source Framework.'
    },
    title: '{nuxt} Kaynaklar',
    description:
      'Partnerimiz tarafından hazırlanan kaynaklara göz atın. Buradaki bağlantıları kullanarak bizlere  Açık Kaynak Sistem projemizi geliştirmemizde destek oluyorsunuz.',
    themes: {
      title: 'Temalar'
    },
    videos: {
      title: 'Videolu Kurslar'
    }
  },
  shop: {
    meta: {
      title: 'Nuxt Mağaza',
      description:
        'You want to support the Nuxt project and show your love to the rest of the community? Here our products with the best quality ever!'
    },
    title: '{nuxt} Mağaza',
    description:
      'Nuxt projesine desteğinizi göstermek ve topluluğun geri kalanına sevginizi göstermek mi istiyorsunuz? Doğru yerdesiniz, buradan en kaliteli ürünlerimize ulaşabilirsiniz!',
    button: 'Coming soon'
  },
  team: {
    meta: {
      title: 'Nuxt Ekip',
      description: 'Nuxt has a very active and engaged team that is constantly striving to push Nuxt forward.'
    },
    title: '{nuxt} Ekip',
    description:
      "Nuxt ve ekosistemiminin gelişimi uluslararası bir ekip tarafından kılavuzlanmıştır. Nuxt'u iyileştirmek için sürekli çabalayan ve çalışan bir ekibe sahibiz."
  },
  themes: {
    meta: {
      title: 'Nuxt Temalar',
      description:
        'With the themes below built by our partners from Creative Tim and Theme Forest you can see how a real world application is built, with Nuxt stack behind.'
    },
    title: '{nuxt} Temalar',
    description:
      "Creative Tim ve Theme Forest'daki partnerlerimiz tarafından hazırlanan temalara göz atarak Nuxt ile yapılmış bir uygulamanın gerçek kullanımda nasıl gözüktüğünü görebilirsiniz.",
    button: 'GET IT for'
  },
  'video-courses': {
    meta: {
      title: 'Nuxt Video Kursları',
      description:
        'With the video courses below created by our partner VueSchool you can discover and learn more about the Nuxt Framework.'
    },
    title: '{nuxt} Video Kursları',
    description:
      'Aşağıdaki VueSchool tarafından hazırlanan video kurslarımız ile Nuxt sistemi hakkında daha fazla keşif yapabilir ve daha fazla bilgiye sahip olabilirsiniz.',
    cta: {
      discover: "Vueschool'u keşfet",
      start: 'KURSU BAŞLAT'
    }
  },
  sponsor: {
    meta: {
      title: 'Sponsor Nuxt Development',
      description: 'You can support Nuxt development via different methods and ensure regular updates to the framework.'
    },
    title: '{nuxt} Gelişimine Destek Ol',
    description:
      'Nuxt, MIT lisanslı açık kaynak ve kullanması tamamen ücretsiz bir projedir. Yine de, bu proje ve bu proje için yeni özellikler yapmak için sarfedilen efor finansal destek olmadan mümkün olmayacaktır.{break}Aşağıdaki yöntemleri kullanarak Nuxt gelişimine destek çıkabilirsiniz:',
    donations: {
      title: 'Tek seferlik bağışlar',
      description: 'Bu kanallardan gelen bağışları kabul ediyoruz'
    },
    pledges: {
      title: 'Yinelenen Bağışlar',
      description:
        'Yinelenen bağışlar yanında bir çok özellikle birlikte gelir, örneğin isminizi Nuxt GitHub deposuna yazdırma, veya şirket logonuzu sitemizde bulundurma... {opencollective} (topluluk çabalarını ve olaylarını destekleyen şeffaf harcama modelleri ile bir fona giriyor) üzerinden bir nuxter veya sponsor olarak bizlere destek olabilirsiniz.'
    },
    become_a_sponsor: 'Sponsor ol'
  },
  support: {
    meta: {
      title: 'Nuxt Destek',
      description: 'Our Nuxt team now offers official consulting services for your Nuxt applications.'
    },
    title: 'Danışmanlık {nuxt} Destek',
    description:
      '{team}, Nuxt uygulamalarınız için resmi bir danışmanlık desteği sunuyor. İhtiyacınıza göre teknik destekten, özel geliştirme aşamalarına kadar farklı servisler sağlıyoruz. Bir iş günü içerisinde cevap veriyor ve bu servisi beğenmemeniz durumunda bir NDA imzalayabilir ve paranızın tamamını size geri iletebiliriz.',
    technical: {
      title: 'Teknik destek',
      description: 'Nuxt ekibinden proje denetimleri, özel geliştirme işlemleri ve teknik destek alın.',
      start: 'Konuşmayı başlat',
      partner: {
        pre: 'Sizlere daha hızlı hizmet verebilmek için',
        post: 'ile partnerlik sağladık.'
      }
    },
    entreprise: {
      title: 've Kuruluşlar',
      description:
        'Nuxt ve binlerce diğer paketlerin kuruluşlara abonelik sağlamak için Tidelift adı verilen bir firmayla ortak olarak çalışır.{break} Eğer açık kaynak kodun genişletilebilir olmasını istiyor ve ticari-dereceli yazılımın rahatlığını aynı anda yaşamak istiyorsanız bu tam size göre.',
      partner: {
        pre: '',
        post: 'aboneliği ile ulaşılabilir.'
      },
      learn_more: 'Daha fazla bilgi',
      request_a_demo: 'Bir örnek talep et'
    }
  },
  blog: {
    meta: {
      title: 'Nuxt Blog',
      description: 'Discover articles from the Nuxt team and Nuxt Community about Nuxt, tips and tricks included!'
    },
    title: '{nuxt} Blog',
    description: '{nuxtTeam} ve {nuxtCommunity} tarafından hazırlanan Nuxt gönderilerini ve ipuçlarını keşfedin!',
    nuxt_team: 'Nuxt Team',
    nuxt_community: 'Nuxt Community',
    contribute: 'Hata yakaladınız veya bu gönderiye katkıda bulunmak mı istiyorsunuz?'
  },
  guide: {
    release_notes: 'Sürüm Notları',
    toc_title: 'Bu sayfadakiler'
  },
  quiz: {
    title: 'Test'
  },
  tryNewDocs: {
    msg1: 'Yeni dokümanlarımıza göz atmak ister misiniz? ',
    link: 'Yeni dokümanlarımız',
    msg2: 'beta dönemine girdi. Tadını çıkarın!'
  },
  contribute: {
    title: 'Katkıda Bulunanlar',
    docs: 'Hata yakaladınız veya bu dokümana katkıda bulunmak mı istiyorsunuz?',
    blog: 'Hata yakaladınız veya bu gönderiye katkıda bulunmak mı istiyorsunuz?',
    edit_on_github: "Bu sayfayı GitHub'da düzenleyin!",
    msg1: 'Bu sayfa için şu anda katkıda bulunamazsınız. Eğer katkıda bulunmak istiyorsanız',
    link: 'buraya tıklayın.'
  },
  example: {
    intro: 'In this example:'
  },
  codeSandbox: {
    open: "CodeSandbox'ı Aç"
  },
  content: {
    guide: {
      prologue: 'Önsöz',
      'getting-started': 'Başlarken'
    },
    api: {
      essential: 'Gereksinim',
      pages: 'Sayfalar',
      components: 'Komponentler',
      utils: 'Araçlar',
      configuration: 'Konfigurasyon',
      programmatically: 'Programlı',
      internals: 'İç Kısımlar'
    },
    examples: {
      essentials: 'Gereksinimler',
      customization: 'Kişiselleştirme',
      advanced: 'Gelişmiş'
    },
    faq: {
      configuration: 'Konfigurasyon',
      development: 'Geliştirme',
      deployment: 'Yayımlama'
    },
    guides: {
      'get-started': 'Başlarken',
      concepts: 'Konseptler',
      features: 'Özellikler',
      'directory-structure': 'Dosya Sistemi',
      'configuration-glossary': 'Konfigurasyon Sözlüğü',
      'internals-glossary': 'İç Kısım Sözlüğü',
      'components-glossary': 'Komponent Sözlüğü'
    }
  },
  footer: {
    links: {
      discover: {
        title: 'Discover',
        shop: 'Our Goodies Store',
        consulting: 'Training & consultancy',
        sponsorNuxt: 'Sponsoring & donations'
      },
      about: {
        title: 'About',
        team: 'Our team',
        design: 'Design kit',
        contact: 'Contact us'
      },
      support: {
        title: 'Support',
        resources: 'Kaynaklar',
        discord: 'Chat with us',
        contributionGuide: 'Contribution guide'
      }
    }
  }
}
