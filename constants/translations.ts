
import { Language, Translation } from '../types';

export const translations: Record<Language, Translation> = {
  en: {
    header: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
      theme: "Theme",
      back_to_home: "← Back to Home"
    },
    hero: {
      title: "Innovative IT Solutions for a Better Future",
      subtitle: "Building robust applications for Islamic and general welfare, alongside powerful hardware solutions.",
      cta: "Explore Our Work",
    },
    about: {
      title: "About Raqam IT Solutions",
      p1: "Raqam is a technology-driven company dedicated to crafting high-quality digital experiences. We specialize in creating web and mobile applications, bespoke software, and engaging websites with a focus on serving Islamic communities and general welfare.",
      p2: "Our expertise extends beyond software. We also design, build, and sell high-performance hardware, providing end-to-end technology solutions for our clients. Our mission is to merge innovation with purpose.",
    },
    services: {
      title: "What We Offer",
      webMobile: {
        title: "Web & Mobile Apps",
        description: "Creative and responsive applications for iOS, Android, and the web, designed for optimal user engagement."
      },
      software: {
        title: "Custom Software",
        description: "Tailored software solutions to streamline your operations and meet your unique business needs."
      },
      hardware: {
        title: "Hardware Builds & Sales",
        description: "High-performance custom hardware builds and sales for gaming, professional work, and servers."
      }
    },
    projects: {
      title: "Our Flagship Projects",
      huruf: {
        title: "Huruf - Word Game",
        description: "An engaging word game designed to improve Arabic vocabulary in a fun and interactive way.",
        tags: ["Mobile", "Game", "Education"],
        details: {
            longDescription: "Huruf is a captivating word puzzle game that challenges players to form words from a set of given Arabic letters. It's designed not just for entertainment but as an educational tool to enhance vocabulary, spelling, and cognitive skills for Arabic language learners of all ages. With hundreds of levels and increasing difficulty, Huruf provides endless hours of brain-teasing fun.",
            features: ["Hundreds of challenging levels", "Beautiful and intuitive UI", "Daily challenges and rewards", "Educational for all ages"],
            techStack: ["React Native", "Firebase", "Redux"]
        }
      },
      tarqib: {
        title: "Tarqib - Scrabble",
        description: "A Scrabble-like game that challenges players to form words in Arabic, promoting linguistic skills.",
        tags: ["Mobile", "Game", "Strategy"],
        details: {
            longDescription: "Tarqib brings the classic Scrabble experience to the Arabic language. Players strategically place letter tiles on a game board to create words, earning points based on letter values and board multipliers. It supports real-time multiplayer, allowing friends and family to compete and learn together.",
            features: ["Online multiplayer mode", "In-game chat functionality", "Elo rating and leaderboards", "Built-in Arabic dictionary"],
            techStack: ["Flutter", "Node.js", "Socket.IO", "MongoDB"]
        }
      },
      wordFinder: {
        title: "Arabic Word Finder",
        description: "A powerful utility for writers and students to find and explore Arabic words and their roots.",
        tags: ["Web", "Utility", "Linguistics"],
        details: {
            longDescription: "The Arabic Word Finder is an essential web-based tool for anyone working with the Arabic language. Users can search for words, explore their roots (juzur), and discover related terms, verb conjugations, and examples of usage in classical texts. It's an invaluable resource for students, researchers, and writers.",
            features: ["Advanced root-based search", "Comprehensive word definitions", "Interactive conjugation tables", "Mobile-responsive design"],
            techStack: ["React", "TypeScript", "Tailwind CSS", "Algolia"]
        }
      }
    },
    contact: {
      title: "Let's Build Something Great Together",
      description: "Have a project in mind or need a custom hardware solution? We'd love to hear from you.",
      cta: "Get in Touch"
    },
    footer: {
      about: {
        title: "Raqam IT Solutions",
        description: "Pioneering technology with purpose."
      },
      links: {
        title: "Links",
        home: "Home",
        about: "About Us",
        services: "Services",
        projects: "Projects"
      },
      socials: {
        title: "Follow Us"
      },
      downloads: {
        title: "Downloads",
        appStore: "App Store",
        googlePlay: "Google Play"
      },
      copyright: "© 2024 Raqam IT Solutions. All Rights Reserved."
    }
  },
  ar: {
    header: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      contact: "اتصل بنا",
      language: "اللغة",
      theme: "السمة",
      back_to_home: "→ العودة للرئيسية"
    },
    hero: {
      title: "حلول تقنية مبتكرة لمستقبل أفضل",
      subtitle: "بناء تطبيقات قوية للرفاهية الإسلامية والعامة، إلى جانب حلول الأجهزة القوية.",
      cta: "اكتشف أعمالنا",
    },
    about: {
      title: "عن رقم للحلول التقنية",
      p1: "رقم هي شركة تعتمد على التكنولوجيا ومكرسة لصياغة تجارب رقمية عالية الجودة. نحن متخصصون في إنشاء تطبيقات الويب والجوال، والبرامج المخصصة، والمواقع الجذابة مع التركيز على خدمة المجتمعات الإسلامية والرفاهية العامة.",
      p2: "خبرتنا تمتد إلى ما هو أبعد من البرمجيات. نقوم أيضًا بتصميم وبناء وبيع أجهزة عالية الأداء، ونقدم حلولًا تقنية متكاملة لعملائنا. مهمتنا هي دمج الابتكار مع الهدف.",
    },
    services: {
      title: "ماذا نقدم",
      webMobile: {
        title: "تطبيقات الويب والجوال",
        description: "تطبيقات إبداعية ومتجاوبة لأنظمة iOS و Android والويب، مصممة لتحقيق مشاركة مثالية للمستخدم."
      },
      software: {
        title: "برامج مخصصة",
        description: "حلول برمجية مصممة خصيصًا لتبسيط عملياتك وتلبية احتياجات عملك الفريدة."
      },
      hardware: {
        title: "بناء وبيع الأجهزة",
        description: "بناء وبيع أجهزة مخصصة عالية الأداء للألعاب والعمل الاحترافي والخوادم."
      }
    },
    projects: {
      title: "مشاريعنا الرائدة",
      huruf: {
        title: "حروف - لعبة كلمات",
        description: "لعبة كلمات جذابة مصممة لتحسين المفردات العربية بطريقة ممتعة وتفاعلية.",
        tags: ["جوال", "لعبة", "تعليم"],
        details: {
            longDescription: "حروف هي لعبة ألغاز كلمات آسرة تتحدى اللاعبين لتكوين كلمات من مجموعة من الحروف العربية المعطاة. لم يتم تصميمها للترفيه فحسب، بل كأداة تعليمية لتعزيز المفردات والإملاء والمهارات المعرفية لمتعلمي اللغة العربية من جميع الأعمار. مع مئات المستويات والصعوبة المتزايدة، توفر حروف ساعات لا نهاية لها من المرح المثير للعقل.",
            features: ["مئات المستويات الصعبة", "واجهة مستخدم جميلة وبديهية", "تحديات ومكافآت يومية", "محتوى تعليمي لجميع الأعمار"],
            techStack: ["React Native", "Firebase", "Redux"]
        }
      },
      tarqib: {
        title: "تركيب - سكرابل",
        description: "لعبة شبيهة بسكرابل تتحدى اللاعبين لتكوين كلمات باللغة العربية، مما يعزز المهارات اللغوية.",
        tags: ["جوال", "لعبة", "استراتيجية"],
        details: {
            longDescription: "تركيب تجلب تجربة سكرابل الكلاسيكية إلى اللغة العربية. يضع اللاعبون بشكل استراتيجي مربعات الحروف على لوحة اللعبة لإنشاء كلمات، وكسب النقاط بناءً على قيم الحروف ومضاعفات اللوحة. تدعم اللعبة وضع اللاعبين المتعددين في الوقت الفعلي، مما يسمح للأصدقاء والعائلة بالمنافسة والتعلم معًا.",
            features: ["وضع متعدد اللاعبين عبر الإنترنت", "وظيفة الدردشة داخل اللعبة", "تصنيف Elo ولوحات الصدارة", "قاموس عربي مدمج"],
            techStack: ["Flutter", "Node.js", "Socket.IO", "MongoDB"]
        }
      },
      wordFinder: {
        title: "باحث الكلمات العربية",
        description: "أداة قوية للكتاب والطلاب للعثور على الكلمات العربية وجذورها واستكشافها.",
        tags: ["ويب", "أداة", "لغويات"],
        details: {
            longDescription: "باحث الكلمات العربية هو أداة أساسية على شبكة الإنترنت لأي شخص يعمل باللغة العربية. يمكن للمستخدمين البحث عن الكلمات، واستكشاف جذورها، واكتشاف المصطلحات ذات الصلة، وتصريفات الأفعال، وأمثلة على الاستخدام في النصوص الكلاسيكية. إنه مورد لا يقدر بثمن للطلاب والباحثين والكتاب.",
            features: ["بحث متقدم قائم على الجذر", "تعاريف شاملة للكلمات", "جداول تصريف تفاعلية", "تصميم متجاوب مع الجوال"],
            techStack: ["React", "TypeScript", "Tailwind CSS", "Algolia"]
        }
      }
    },
    contact: {
      title: "دعنا نبني شيئًا عظيمًا معًا",
      description: "هل لديك مشروع في ذهنك أو تحتاج إلى حل مخصص للأجهزة؟ نود أن نسمع منك.",
      cta: "تواصل معنا"
    },
    footer: {
      about: {
        title: "رقم للحلول التقنية",
        description: "ريادة التكنولوجيا لهدف."
      },
      links: {
        title: "روابط",
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        projects: "مشاريعنا"
      },
      socials: {
        title: "تابعنا"
      },
      downloads: {
        title: "تحميلات",
        appStore: "متجر التطبيقات",
        googlePlay: "جوجل بلاي"
      },
      copyright: "© 2024 رقم للحلول التقنية. جميع الحقوق محفوظة."
    }
  }
};
