module.exports = {
  common: {
    an_error_occurred: 'خطایی رخ داد',
    page_not_found: 'صفحه مورد نظر یافت نشد',
    please_define_title: 'لطفا یک عنوان انتخاب کنید',
    please_define_description: 'لطفا یک توضیح تعریف کنید',
    search: 'جستجو ("/" برای دسترسی سریع)',
    version: 'نسخه'
  },
  iso: 'fa',

  links: {
    download: 'دانلود',
    live_edit: 'ویرایش زنده'
  },
  header: {
    links: [
      {
        name: 'راهنمایی‌ها',
        icon: 'books',
        slug: 'docs-2.x-book-slug'
      },
      {
        name: 'نمونه‌ها',
        icon: 'code',
        slug: 'examples'
      },
      {
        name: 'Resources',
        icon: 'resources',
        slug: 'resources'
      },
      {
        name: 'بلاگ',
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
      placeholder: 'جستجو ("/" برای دسترسی سریع)'
    }
  },
  homepage: {
    meta: {
      title: 'Nuxt.js - فریم‌ورک بصری Vue',
      description:
        'اپلیکیشن Vue.js بعدی خود را با NuxtJs بسازید! فریم‌ورک متن‌بازی که توسعه وب را آسان و قدرتمند می‌کند!'
    },
    welcome: {
      title: 'فریم‌ورک بصری {br} {frameworkType}',
      description:
        'اپلیکیشن Vue.js بعدی خود را با NuxtJs بسازید! فریم‌ورک متن‌بازی که توسعه وب را آسان و قدرتمند می‌کند!',
      openSource: 'متن‌باز',
      get_started: 'شروع کنید',
      get_updates: 'اخبار NuxtJS را هر ماه در ایمیل خود دریافت کنید',
      video:
        'ویدیو ساخته شده توسط {company}، {cheatSheet} را به صورت رایگان دریافت کنید',
      cheatSheet: 'کتابچه NuxtJS'
    },
    why: {
      title: 'چرا {nuxt}',
      try_nuxtjs_online: 'NuxtJS را آنلاین امتحان کنید',
      enjoyable: {
        title: 'لذت بخش',
        description:
          'هدف اصلی ما تجربه توسعه‌دهندگان است! ما NuxtJS را دوست داریم و مداوما در حال بهتر کردن این فریم‌ورک هستیم تا شما هم آن را دوست داشته باشید! {break} انتظار یک راه‌حل جذاب، خطاهای توصیفی، پیشفرض‌های قدرتمند و مستندات دقیق را داشته باشید. اگر مشکل یا سوالی دارید، انجمن ما به شما کمک خواهد کرد.'
      },
      modular: {
        title: 'ماژولار',
        description:
          'NuxtJS بر پایه معماری ماژولار طراحی شده است. شما می‌توانید از بین بیش از ۵۰  ماژول انتخاب کنید تا کار خود را سریع‌تر و راحت‌تر پیش ببرید. شما ‌می‌توانید به راحتی از مزایای PWA، Google Analytics بدون دردسر ایجاد مجدد آن را استفاده کنید یا به راحتی نقشه وبسایت خود را ایجاد کنید.'
      },
      performant: {
        title: 'بهینه',
        description:
          'با استفاده از NuxtJS اپلیکیشن شما در همان ابتدا کاملا بهینه خواهد بود. ما تلاش می‌کنیم تا بهینه‌ترین اپیلیشکن‌ها را با استفاده از روش‌های بهینه Vue.js و Node.js پیاده‌سازی کنیم. برای فشرده‌سازی هر ذره از اپلیکیشن شما NuxtJS از یک آنالیزگر برای باندل شما استفاده می‌کند که اپلیکیشن شما را به بهترین نحو بهینه می‌کند.'
      }
    },
    companies: {
      title: 'چه کسانی از {nuxt} استفاده می‌کنند؟'
    },
    modes: {
      title: 'رندر {nuxt}',
      ssr: {
        title: 'رندر سمت سرور (SSR)',
        description:
          'محبوب‌ترین روش رندر در NuxtJS! این روش که به عنوان جهانی (universal) یا ایزومورفیک (isomorphic) شناخته می‌شود، از یک سرور Node.js برای ارسال محتوای HTML بر اساس کامپوننت‌های Vue شما به جای JavaScript خالص استفاده می‌کند. استفاده از این روش اثر بسزایی در SEO و تجربه‌کاربری بهتر خواهد داشت و امکانات بیشتری نسبت به اپیلیکشن‌های تک‌صفحله‌ای در اختیارتان قرار می‌دهد.'
      },
      ssg: {
        title: 'صفحات ثابت',
        description:
          'صفحات ثابت یکی از محبوب‌ترین و مورد بحث‌ترین روش‌ها است (JAMStack). به جای اینکه به فریم‌ورک دیگری مهاجرت کنید و زمان بیشتری صرف کنید چرا با یک تیر دو نشان نمیزنید؟ NuxtJS امکان ایجاد صفحات ثابت را به راحتی برای شما فراهم می‌کند. این روش یکی از بهترین روش‌ها است چرا که احتیاجی به سرور برای میزبانی اپیلیشکن خود نخواهید داشت اما هنوز هم اپلیکیشن شما از SEO بالایی برخوردار خواهد بود چرا که NuxtJS صفحات شما را از پیش رندر خواهد کرد. در صورت استفاده از این حالت می‌توانید صفحات خود را به راحتی در Netlify یا GitHub Pages میزبانی کنید.'
      }
    },
    sponsors: {
      title: 'اسپانسرها',
      description:
        'NuxtJS یک پروژه متن‌باز بر اساس لایسنس MIT و کاملا رایگان است. با این حال، انرژی زیادی برای نگه‌داری و توسعه این پروژه صرف می‌شود که بدون حمایت مالی ممکن نیست. اگر شما صاحب کسب و کاری هستید و از NuxtJS در محصولی که درآمدزایی می‌کند استفاده می‌کنید، قابل درک است که درخواست کنیم تا از NuxtJS حمایت کنید. با حمایت از NuxtJS این اطمینان حاصل می‌شود که این پروژه به صورت مداوم در حال توسعه است و اپلیکیشن شما هم همیشه پابرجا خواهد بود. همچنین با حمایت از NuxtJS می‌توانید توسعه‌دهندگان بیشتری را از طریق مجمع Vue/NuxtJS به سمت پروژه خود جذب کنید. اگر شما توسعه‌دهنده شخصی هستید لطفا به نشان تشکر به این پروژه کمک مالی کنید.',
      become_a_sponsor: 'اسپانسر شوید'
    },
    newsletter: {
      title: 'خبرنامه {nuxt}',
      description:
        'آخرین اخبار NuxtJS را که توسط تیم NuxtJS تهیه می‌شوند را در ایمیل خود دریافت کنید.',
      form: {
        email: 'ایمیل',
        subscribing: 'در حال ثبت...',
        subscribe: 'مشترک شوید',
        subscribed_messages: {
          pre: 'یک ایمیل جهت تایید ارسال شد به',
          post: '💚'
        }
      }
    }
  },
  design: {
    meta: {
      title: 'طراحی NuxtJS',
      description:
        'محتوای طراحی NuxtJS (SVG, icons, emoji و favicon) را دریافت کنید.'
    },
    title: 'طراحی {nuxt}',
    description:
      'NuxtJS یک پروژه متن‌باز بر اساس لایسنس MIT و کاملا رایگان است. {break} شما می‌توانید از لوگو های ما در صورتی که به NuxtJS و آدرس nuxtjs.org اشاره کنید استفاده کنید.',
    other_download_message:
      'شما می‌توانید فایل {favicon} و {sketch} ما را نیر دریافت کنید.'
  },
  resources: {
    meta: {
      title: 'منابع NuxtJS',
      description:
        'مجموعه‌ای از منابعی که توسط همراهان ما تهیه شده‌اند را بشناسید! با استفاده از این لینک‌های معرفی به ما کمک می‌کنید تا این پروژه متن‌باز را ادامه دهیم.'
    },
    title: 'منابع {nuxt}',
    description:
      'مجموعه‌ای از منابعی که توسط همراهان ما تهیه شده‌اند را بشناسید! با استفاده از این لینک‌های معرفی به ما کمک می‌کنید تا این پروژه متن‌باز را ادامه دهیم.',
    themes: {
      title: 'پوسته‌ها'
    },
    videos: {
      title: 'دوره‌های ویدیویی'
    }
  },
  shop: {
    meta: {
      title: 'فروشگاه NuxtJS',
      description:
        'You want to support the NuxtJS project and show your love to the rest of the community? Here our products with the best quality ever!'
    },
    title: 'فروشگاه {nuxt}',
    description:
      'می‌خواهید از پروژه NuxtJS حمایت کنید و علاقه خود به این پروژه را به بقیه نشان دهید؟{break}اینجا می‌توانید محصولات فوق‌العاده با کیفیت ما را ببینید!',
    button: 'به زودی'
  },
  team: {
    meta: {
      title: 'تیم NuxtJS',
      description:
        'NuxtJS تیمی بسیار فعال و کوشا دارد که همیشه سعی در پیشبرد این پروژه دارند.'
    },
    title: 'تیم {nuxt}',
    description:
      'توسعه NuxtJS توسط تیمی بین المللی محقق شده می‌شود. NuxtJS تیمی بسیار فعال و کوشا دارد که همیشه سعی در پیشبرد این پروژه دارند.'
  },
  themes: {
    meta: {
      title: 'پوسته‌های NuxtJS',
      description:
        'با دیدن پوسته‌های زیر که توسط همراهان ما در Creative Tim و Theme Forest ساخته شده‌اند می‌توانید ببینید که چطور از NuxtJS در محصولات نهایی استفاده می‌شود.'
    },
    title: 'پوسته‌های {nuxt}',
    description:
      'با دیدن پوسته‌های زیر که توسط همراهان ما در Creative Tim و Theme Forest ساخته شده‌اند می‌توانید ببینید که چطور از NuxtJS در محصولات نهایی استفاده می‌شود.',
    button: 'دریافت'
  },
  'video-courses': {
    meta: {
      title: 'دوره‌های ویدیویی NuxtJS',
      description:
        'با استفاده از دوره‌های ویدیویی زیر که توسط VueSchool تهیه شده‌اند می توانید درک بیشتری از فریم‌ورک NuxtJS داشته باشید.'
    },
    title: 'دوره‌های ویدیویی {nuxt}',
    description:
      'با استفاده از دوره‌های ویدیویی زیر که توسط VueSchool تهیه شده‌اند می توانید درک بیشتری از فریم‌ورک NuxtJS داشته باشید.',
    cta: {
      discover: 'بیشتر در مورد VueSchool بدانید',
      start: 'شروع دوره'
    }
  },
  sponsor: {
    meta: {
      title: 'اسپانسر NuxtJS شوید',
      description:
        'شما میتوانید از روش های مختلفی اسپانسر NuxtJS شوید و از آپدیت‌های دائمی این پروژه اطمینان حاصل کنید.'
    },
    title: 'اسپانسر {nuxt} شوید',
    description:
      'NuxtJS یک پروژه متن‌باز بر اساس لایسنس MIT و کاملا رایگان است. با این حال، انرژی زیادی برای نگه‌داری و توسعه این پروژه صرف می‌شود که بدون حمایت مالی ممکن نیست. اگر شما صاحب کسب و کاری هستید و از NuxtJS در محصولی که درآمدزایی می‌کند استفاده می‌کنید، قابل درک است که درخواست کنیم تا از NuxtJS حمایت کنید. با حمایت از NuxtJS این اطمینان حاصل می‌شود که این پروژه به صورت مداوم در حال توسعه است و اپلیکیشن شما هم همیشه پابرجا خواهد بود. همچنین با حمایت از NuxtJS می‌توانید توسعه‌دهندگان بیشتری را از طریق مجمع Vue/NuxtJS به سمت پروژه خود جذب کنید. اگر شما توسعه‌دهنده شخصی هستید لطفا به نشان تشکر به این پروژه کمک مالی کنید. شما می‌توانید از طریق روش‌های زیر از ما حمایت کنید:',
    donations: {
      title: 'حمایت‌های یکباره',
      description: 'ما حمایت‌های مالی از طریق روش‌های زیر را قبول می‌کنیم'
    },
    pledges: {
      title: 'حمایت‌های دوره‌ای',
      description:
        'حمایت‌های دوره‌ای مزایایی نیز برای شما دارد. به عنوان مثال نام شما در صفحه گیت‌هاب پروژه NuxtJS ثبت می شود یا لوگو شرکت شما در این صفحه قرار میگیرد. از طریق {opencollective} می‌توانید حامی ما باشید.'
    },
    become_a_sponsor: 'اسپانسر شوید'
  },
  support: {
    meta: {
      title: 'پشتیبانی NuxtJS',
      description:
        'تیم ما اکنون به صورت رسمی خدمات مشاوره برای پروژه NuxtJS بعدی شما ارائه می‌دهد.'
    },
    title: 'تیم مشاوره {nuxt}',
    description:
      '{team} اکنون به صورت رسمی خدمات مشاوره برای پروژه NuxtJS بعدی شما ارائه می‌دهد.{break}ما خدمات متنوعی مانند پشتیبانی فنی یا طراحی سفارشی ارائه می‌دهیم. معمولا در یک روز کاری پاسخ می‌دهیم. میتوانیم قرارداد حفاظت اطلاعات (NDA) را امضا کنیم و در صورتی که راضی نبودید می‌‌توانید تمام پول خود را پس بگیرید.',
    technical: {
      title: 'پشتیبانی فنی',
      description:
        'از تیم ما خدمات بررسی پروژه، پیاده‌سازی پروژه، طراحی سفارشی و پشتیبانی فنی دریافت کنید.',
      start: 'شروع چت',
      partner: {
        pre: 'ما با همکاری',
        post: 'این خدمات را ارائه می‌دهیم تا بتوانیم به سرعت به شما پاسخ دهیم.'
      }
    },
    entreprise: {
      title: 'تجاری',
      description:
        'تیم NuxtJS و توسعه‌دهندگان هزاران پکیج دیگر در حال کار با Tidelift هستند تا بتوانند یک اشتراک تجاری  را به ارمغان بیاورند که تمام پروژه‌های متن‌بازی که میبینید را پوشش می‌دهد.{break}اگر شما می‌خواهید با اطمینان بیشتر و به صورت تجاری از یک پروژه متن‌باز استفاده کنید این گزینه مناسب شماست.',
      partner: {
        pre: 'به صورت اشتراک',
        post: 'در دسترس است'
      },
      learn_more: 'بیشتر بدانید',
      request_a_demo: 'درخواست دمو'
    }
  },
  blog: {
    meta: {
      title: 'وبلاگ NuxtJS',
      description:
        'مقالاتی از {nuxtTeam} و {nuxtCommunity} در مورد NuxtJS بیابید! به همراه نکات جالب!'
    },
    title: 'وبلاگ {nuxt}',
    description:
      'مقالاتی از {nuxtTeam} و {nuxtCommunity} در مورد NuxtJS بیابید! به همراه نکات جالب!',
    nuxt_team: 'تیم NuxtJS',
    nuxt_community: 'مجمع NuxtJS',
    contribute: 'مشکلی میبینید یا میخواهید در این پست مشارکت کنید؟'
  },
  guide: {
    release_notes: 'یادداشت انتشار',
    toc_title: 'در این صفحه'
  },
  quiz: {
    title: 'آزمون'
  },
  tryNewDocs: {
    msg1: 'می‌خواهد مستندات جدید ما را ببینید؟',
    link: 'مستندات جدید',
    msg2: 'ما اکنون در فاز بتا است. خوش بگذره!'
  },
  contribute: {
    title: 'مشارکت‌کنندگان',
    docs: 'مشکلی میبینید یا میخواهید در مستندات مشارکت کنید؟',
    blog: 'مشکلی میبینید یا میخواهید در این پست مشارکت کنید؟',
    edit_on_github: 'این صفحه را در گیت‌هاب ویرایش کنید!',
    msg1: 'مشارکت در این صفحه بسته شده است. اگر می‌‌خواهید مشارکت کنید',
    link: 'مستندات جدید'
  },
  example: {
    intro: 'در این مثال:'
  },
  codeSandbox: {
    open: 'باز کردن CodeSandbox'
  },
  content: {
    guide: {
      prologue: 'پیش‌نویس',
      'getting-started': 'شروع کنید'
    },
    api: {
      essential: 'ضروری',
      pages: 'صفحات',
      components: 'کامپوننت‌ها',
      utils: 'ابزارها',
      configuration: 'تنظیمات',
      programmatically: 'دستی',
      internals: 'داخلی'
    },
    examples: {
      essentials: 'ضروری‌ها',
      customization: 'سفارشی‌سازی',
      advanced: 'پیشرفته'
    },
    faq: {
      configuration: 'تنظیمات',
      development: 'توسعه',
      deployment: 'پیاده‌سازی'
    },
    guides: {
      'get-started': 'شروع کنید',
      concepts: 'مفهوم‌ها',
      features: 'امکانات',
      'directory-structure': 'ساختار',
      'configuration-glossary': 'واژه‌نامه تنظیمات',
      'internals-glossary': 'واژه‌نامه داخلی',
      'components-glossary': 'واژه‌نامه کامپوننت‌ها'
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
        resources: 'منابع',
        discord: 'Chat with us',
        contributionGuide: 'Contribution guide'
      }
    }
  },
  cookies: {
    consent:
      'ما از کوکی‌ها برای آمارگیری و ایجاد تجربه‌کاربری بهتر استفاده می کنیم.',
    linkLabel: 'بیشتر بدانید',
    button: 'حله'
  }
}
