// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  const isTouchDevice = window.matchMedia("(hover: none)").matches;


  // ========== نظام الترجمة المتكامل ==========
  class TranslationManager {
    constructor() {
      this.currentLang = localStorage.getItem('portfolio-lang') || 'en';

      this.translations = {
        en: {

          // Navigation
          'portfolioTitle': "Ghina's Portfolio",
          'softwareEngineer': "Software Engineer & Flutter Developer",
          'home': "Home",
          'about': "About",
          'skills': "Skills",
          'projects': "Projects",
          'education': "Education",
          'contact': "Contact",
          'resume': "Resume",


          // Home Section
          'greeting': "Hello, I'm",
          'availableFor': "Available For",
          'contactMe': "Contact Me",
          'viewProjects': "View Projects",

          'softwareEngineeringStudent': "Information Technology Engineering Graduate",
          'frontendDeveloper': "Software Engineering Specialization",


          // About Section
          'aboutTitle': "About Me",
          'aboutSubtitle': "Get to know me better",
          'birthday': "Birthday",
          'phone': "Phone",
          'city': "City",
          'email': "Email",

          'aboutText1': "I am an Information Technology Engineering graduate from Damascus University, specializing in Software Engineering, with hands-on experience in Flutter development. I build modern and scalable mobile applications using clean architecture, BLoC, REST APIs, and reliable data management practices.",

          'aboutText2': "Throughout my university journey, I worked on projects covering mobile development, distributed systems, information retrieval, automation, and enterprise solutions. I enjoy turning ideas into well-structured software and continuously improving my technical skills through practical projects and new technologies.",


          // Skills Section
          'skillsTitle': "Skills",
          'skillsSubtitle': "Technologies and concepts I work with",


          // Projects Section
          'projectsTitle': "Projects",
          'projectsSubtitle': "Selected academic and personal projects",
          'viewCode': "View Code",
          'viewBot': "Open Bot",


          // Project Descriptions
          'yallaworkDesc': "Job-seeking app with chat system, user profiles, and job matching algorithm",

          'veraClinicDesc': "Web application designed to manage a beauty clinic, providing features for both clinic administration and staff. It enables efficient appointment scheduling, employee management, and client tracking.",

          'todoDesc': "A mobile application for task management, allowing users to create, update, and track their to-do lists with ease. The app provides an intuitive and responsive UI for a seamless user experience.",

          'pharmaDesc': "A mobile application for pharmacy customers, allowing them to view available products, place orders, and manage their prescriptions. The app also facilitates easy communication with the pharmacy for queries and order tracking.",

          'eshtikilyDesc': "A mobile application for citizens - connecting the government and citizens directly, without intermediaries, to submit and track complaints.",

          'smartHospitalDesc': "Developed and customized an Odoo ERP solution for a Smart Mobile Hospital, including role-based access control (RBAC), CRM triage workflows, inventory and maintenance management, preventive maintenance scheduling, and API-based IoT integration.",


          // New Project Descriptions
          'dtTeethDesc': "A comprehensive dental clinic management system with a Flutter mobile application for patients, integrated with a backend API and developed using Clean Architecture and BLoC.",

          'informationRetrievalDesc': "A comprehensive Information Retrieval System built with Python using the Quora dataset from BEIR. The system follows a Service-Oriented Architecture and supports TF-IDF, BM25, Embedding, and Hybrid Retrieval, with clustering and evaluation components.",

          'distributedSystemsDesc': "A distributed systems project implemented in Java using Java RMI, covering client-server communication, remote objects, remote interfaces, callbacks, serialization, and passing remote objects by reference.",

          'telegramBotDesc': "A rule-based Telegram bot for the dental center, providing information about doctors, specialties, treatments, prices, FAQs, and post-treatment instructions.",


          // Education Section
          'educationTitle': "Education",
          'educationSubtitle': "My academic journey",
          'university': "Damascus University",
          'degree': "Information Technology Engineering – Software Engineering",
          'degreeDesc': "Graduated in 2026 with a specialization in Software Engineering.",


          // Contact Section
          'contactTitle': "Contact me",
          'contactSubtitle': "Let's work together!",
          'location': "Location",
          'availableForContact': "Available For",
          'flutterProjects': "Flutter Development Projects",
          'consultations': "Mobile App Consultations",
          'freelance': "Freelance Opportunities",
          'sendMessage': "Send Message",
          'namePlaceholder': "Your Name",
          'emailPlaceholder': "Your Email",
          'subjectPlaceholder': "Subject",
          'messagePlaceholder': "Your Message",


          // Footer
          'rights': "All rights reserved.",


          // Form Messages
          'sending': "Sending...",
          'sentSuccess': "Message sent successfully! I will contact you soon."
        },


        ar: {

          // Navigation
          'portfolioTitle': "معرض أعمال غنى",
          'softwareEngineer': "مهندسة برمجيات ومطورة Flutter",
          'home': "الرئيسية",
          'about': "عنّي",
          'skills': "المهارات",
          'projects': "المشاريع",
          'education': "التعليم",
          'contact': "التواصل",
          'resume': "السيرة الذاتية",


          // Home Section
          'greeting': "مرحبًا، أنا",
          'availableFor': "متاحة لـ",
          'contactMe': "تواصل معي",
          'viewProjects': "عرض المشاريع",

          'softwareEngineeringStudent': "خريجة هندسة معلوماتية",
          'frontendDeveloper': "اختصاص هندسة البرمجيات",


          // About Section
          'aboutTitle': "من أنا",
          'aboutSubtitle': "تعرف عليّ أكثر",
          'birthday': "تاريخ الميلاد",
          'phone': "الهاتف",
          'city': "المدينة",
          'email': "البريد الإلكتروني",

          'aboutText1': "أنا خريجة هندسة معلوماتية من جامعة دمشق، اختصاص هندسة البرمجيات، ولدي خبرة عملية في تطوير تطبيقات Flutter. أعمل على بناء تطبيقات موبايل حديثة وقابلة للتوسع باستخدام البنية النظيفة، وBLoC، وواجهات REST API، وممارسات موثوقة لإدارة البيانات.",

          'aboutText2': "خلال مسيرتي الجامعية، عملت على مشاريع متنوعة شملت تطوير تطبيقات الموبايل، والأنظمة الموزعة، واسترجاع المعلومات، والأتمتة، وحلول المؤسسات. أستمتع بتحويل الأفكار إلى برمجيات منظمة وقابلة للتطوير، وأسعى باستمرار إلى تطوير مهاراتي التقنية من خلال المشاريع العملية والتقنيات الجديدة.",


          // Skills Section
          'skillsTitle': "المهارات",
          'skillsSubtitle': "التقنيات والمفاهيم التي أتعامل معها",


          // Projects Section
          'projectsTitle': "المشاريع",
          'projectsSubtitle': "مجموعة من مشاريعي الأكاديمية والشخصية",
          'viewCode': "عرض الكود",
          'viewBot': "فتح البوت",


          // Project Descriptions
          'yallaworkDesc': "تطبيق للبحث عن فرص العمل مع نظام دردشة، وملفات تعريف للمستخدمين، وخوارزمية لمطابقة الوظائف",

          'veraClinicDesc': "تطبيق ويب مصمم لإدارة عيادة تجميل، يوفر ميزات لكل من إدارة العيادة والموظفين، بما في ذلك جدولة المواعيد وإدارة الموظفين وتتبع العملاء.",

          'todoDesc': "تطبيق جوال لإدارة المهام، يتيح للمستخدمين إنشاء قوائم المهام وتحديثها ومتابعتها بسهولة، مع واجهة مستخدم سهلة الاستخدام وسريعة الاستجابة.",

          'pharmaDesc': "تطبيق جوال لعملاء الصيدلية، يتيح لهم الاطلاع على المنتجات المتوفرة وتقديم الطلبات وإدارة وصفاتهم الطبية، مع تسهيل التواصل مع الصيدلية وتتبع الطلبات.",

          'eshtikilyDesc': "تطبيق جوال للمواطنين يربط الحكومة بالمواطنين مباشرة، دون وسطاء، لتقديم الشكاوى ومتابعتها.",

          'smartHospitalDesc': "تطوير وتخصيص نظام Odoo ERP لمستشفى ذكي متنقل، بما يشمل إدارة الصلاحيات (RBAC)، وسير العمل في CRM، وإدارة المخزون والصيانة، والصيانة الوقائية، والتكامل مع واجهات API لمحاكاة أنظمة IoT.",


          // New Project Descriptions
          'dtTeethDesc': "نظام متكامل لإدارة عيادات الأسنان، يتضمن تطبيق Flutter مخصصًا للمرضى ومتكاملًا مع Backend API، وتم تطويره باستخدام Clean Architecture وBLoC.",

          'informationRetrievalDesc': "نظام متكامل لاسترجاع المعلومات باستخدام Python ومجموعة بيانات Quora من BEIR. يعتمد النظام على Service-Oriented Architecture ويدعم TF-IDF وBM25 وEmbedding وHybrid Retrieval، مع مكونات للتجميع والتقييم.",

          'distributedSystemsDesc': "مشروع في الأنظمة الموزعة باستخدام Java وJava RMI، شمل الاتصال بين العميل والخادم، والكائنات والواجهات البعيدة، والـCallbacks، وSerialization، وتمرير الكائنات البعيدة بالمرجع.",

          'telegramBotDesc': "بوت Telegram قائم على قواعد محددة لمركز الأسنان، يقدم معلومات عن الأطباء والاختصاصات والعلاجات والأسعار والأسئلة الشائعة وتعليمات ما بعد العلاج.",


          // Education Section
          'educationTitle': "التعليم",
          'educationSubtitle': "رحلتي الأكاديمية",
          'university': "جامعة دمشق",
          'degree': "هندسة المعلوماتية – اختصاص هندسة البرمجيات",
          'degreeDesc': "تخرجت عام 2026 باختصاص هندسة البرمجيات.",


          // Contact Section
          'contactTitle': "تواصل معي",
          'contactSubtitle': "لنعمل معًا!",
          'location': "الموقع",
          'availableForContact': "متاحة لـ",
          'flutterProjects': "مشاريع تطوير Flutter",
          'consultations': "استشارات تطبيقات الموبايل",
          'freelance': "فرص العمل الحر",
          'sendMessage': "إرسال الرسالة",
          'namePlaceholder': "اسمك",
          'emailPlaceholder': "بريدك الإلكتروني",
          'subjectPlaceholder': "الموضوع",
          'messagePlaceholder': "رسالتك",


          // Footer
          'rights': "جميع الحقوق محفوظة.",


          // Form Messages
          'sending': "جاري الإرسال...",
          'sentSuccess': "تم إرسال رسالتك بنجاح! سأتواصل معك قريبًا."
        }
      };
    }


    translate(key) {
      const translation = this.translations[this.currentLang][key];

      return translation !== undefined ? translation : key;
    }


    applyTranslations() {

      // Update all elements with data-translate attribute
      const elements = document.querySelectorAll('[data-translate]');

      if (elements.length > 0) {
        elements.forEach(el => {

          const key = el.getAttribute('data-translate');

          if (key) {

            const translation = this.translate(key);

            if (translation !== key) {
              el.textContent = translation;
            }

          }
        });
      }


      // Update placeholders
      const placeholderElements = document.querySelectorAll('[data-placeholder]');

      if (placeholderElements.length > 0) {

        placeholderElements.forEach(el => {

          const key = el.getAttribute('data-placeholder');

          if (key) {

            const translation = this.translate(key);

            if (translation !== key) {
              el.placeholder = translation;
            }

          }
        });
      }


      // Update navigation links
      const navLinks = document.querySelectorAll('.nav-link span');

      if (navLinks.length > 0) {

        navLinks.forEach(link => {

          if (link.hasAttribute('data-translate')) {

            const key = link.getAttribute('data-translate');

            const translation = this.translate(key);

            if (translation !== key) {
              link.textContent = translation;
            }

          }

        });
      }


      // Update name visibility
      this.updateNameVisibility();


      // Update typing text
      this.updateTypingText();
    }


    updateNameVisibility() {

      const nameEn = document.getElementById("name-en");
      const nameAr = document.getElementById("name-ar");

      if (nameEn && nameAr) {

        if (this.currentLang === "en") {

          nameEn.classList.remove("hidden");
          nameAr.classList.add("hidden");

        } else {

          nameEn.classList.add("hidden");
          nameAr.classList.remove("hidden");

        }

      }
    }


    updateTypingText() {

      if (window.portfolioTypingAnimation) {

        window.portfolioTypingAnimation.updatePhrases([

          this.translate('softwareEngineeringStudent'),

          this.translate('frontendDeveloper'),

        ]);

      }
    }


    switchLanguage(lang) {

      if (lang !== this.currentLang) {

        this.currentLang = lang;

        localStorage.setItem('portfolio-lang', lang);

        document.documentElement.setAttribute(
          "data-lang",
          lang
        );

        document.documentElement.dir =
          (lang === "ar") ? "rtl" : "ltr";

        this.applyTranslations();

        return true;
      }

      return false;
    }


    getCurrentLang() {
      return this.currentLang;
    }
  }


  // ========== Typing Animation Class ==========

  class TypingAnimation {

    constructor(elementId) {

      this.element =
        document.getElementById(elementId);

      this.phrases = [];

      this.currentPhrase = 0;
      this.currentChar = 0;

      this.isDeleting = false;
      this.isEnd = false;

      this.speed = 100;
      this.deleteSpeed = 50;

      this.pauseTime = 1500;

      this.timeout = null;
    }


    updatePhrases(phrases) {

      if (
        Array.isArray(phrases) &&
        phrases.length > 0
      ) {

        this.phrases = phrases;

        this.reset();
      }
    }


    type() {

      if (
        !this.element ||
        this.phrases.length === 0
      ) {
        return;
      }


      this.isEnd = false;


      if (
        !this.isDeleting &&
        this.currentChar <
          this.phrases[this.currentPhrase].length
      ) {

        this.element.textContent =
          this.phrases[this.currentPhrase]
            .substring(
              0,
              this.currentChar + 1
            );

        this.currentChar++;

        this.timeout =
          setTimeout(
            () => this.type(),
            this.speed
          );

      } else if (
        this.isDeleting &&
        this.currentChar > 0
      ) {

        this.element.textContent =
          this.phrases[this.currentPhrase]
            .substring(
              0,
              this.currentChar - 1
            );

        this.currentChar--;

        this.timeout =
          setTimeout(
            () => this.type(),
            this.deleteSpeed
          );

      } else if (
        !this.isDeleting &&
        this.currentChar ===
          this.phrases[this.currentPhrase].length
      ) {

        this.isEnd = true;

        this.timeout =
          setTimeout(() => {

            this.isDeleting = true;

            this.type();

          }, this.pauseTime);

      } else if (
        this.isDeleting &&
        this.currentChar === 0
      ) {

        this.isDeleting = false;

        this.currentPhrase =
          (this.currentPhrase + 1) %
          this.phrases.length;

        this.timeout =
          setTimeout(
            () => this.type(),
            500
          );
      }
    }


    reset() {

      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.currentPhrase = 0;
      this.currentChar = 0;

      this.isDeleting = false;
      this.isEnd = false;

      if (this.element) {
        this.element.textContent = '';
      }

      this.timeout =
        setTimeout(
          () => this.type(),
          500
        );
    }


    start(phrases) {

      if (phrases) {
        this.updatePhrases(phrases);
      }

      if (
        this.element &&
        this.phrases.length > 0
      ) {

        this.timeout =
          setTimeout(
            () => this.type(),
            1000
          );
      }
    }


    destroy() {

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }
  }


  // ========== Main Application ==========

  class PortfolioApp {

    constructor() {

      this.translationManager =
        new TranslationManager();

      this.typingAnimation = null;

      this.init();
    }


    init() {

      // 1. Initialize language

      const savedLang =
        this.translationManager
          .getCurrentLang();

      document.documentElement.setAttribute(
        "data-lang",
        savedLang
      );

      document.documentElement.dir =
        (savedLang === "ar")
          ? "rtl"
          : "ltr";


      // 2. Apply translations

      this.translationManager
        .applyTranslations();


      // 3. Initialize animations

      this.initAnimations();


      // 4. Initialize event listeners

      this.initEventListeners();


      // 5. Initialize scroll effects

      this.initScrollEffects();


      // 6. Initialize with active nav link

      this.updateActiveNavLink();
    }


    initAnimations() {

      // Typing animation

      const phrases = [

        this.translationManager.translate(
          'softwareEngineeringStudent'
        ),

        this.translationManager.translate(
          'frontendDeveloper'
        ),

      ];


      this.typingAnimation =
        new TypingAnimation(
          "typed-text"
        );


      // استخدام namespace لتجنب التعارض

      window.portfolioTypingAnimation =
        this.typingAnimation;


      this.typingAnimation.start(
        phrases
      );


      // Scroll animations

      this.initScrollAnimations();
    }


    initScrollAnimations() {

      const checkVisibility = () => {

        const elements =
          document.querySelectorAll(
            '.fade-in, .slide-up'
          );

        if (elements.length === 0) {
          return;
        }


        elements.forEach(element => {

          if (element) {

            const rect =
              element.getBoundingClientRect();

            const windowHeight =
              window.innerHeight;

            if (
              rect.top <=
              windowHeight * 0.8
            ) {

              element.classList.add(
                'visible'
              );
            }
          }
        });
      };


      // Initial check

      checkVisibility();


      // Check on scroll with throttling

      let isScrolling = false;

      window.addEventListener(
        'scroll',
        () => {

          if (!isScrolling) {

            isScrolling = true;

            setTimeout(() => {

              checkVisibility();

              isScrolling = false;

            }, 50);
          }
        }
      );


      // Animate skill bars

      const animateSkillBars = () => {

        const skillLevels =
          document.querySelectorAll(
            '.skill-level'
          );

        if (skillLevels.length === 0) {
          return;
        }


        skillLevels.forEach(level => {

          if (
            !level.classList.contains(
              'animated'
            )
          ) {

            const rect =
              level.getBoundingClientRect();

            const windowHeight =
              window.innerHeight;


            if (
              rect.top <=
              windowHeight * 0.8
            ) {

              const targetWidth =
                level.getAttribute(
                  'data-width'
                ) ||
                getComputedStyle(level)
                  .getPropertyValue(
                    '--level'
                  ) ||
                '100%';


              level.style.width = '0';

              setTimeout(() => {

                level.style.width =
                  targetWidth;

                level.classList.add(
                  'animated'
                );

              }, 300);
            }
          }
        });
      };


      if (!isTouchDevice) {

        window.addEventListener(
          'scroll',
          animateSkillBars
        );

        setTimeout(
          animateSkillBars,
          100
        );
      }
    }


    initEventListeners() {

      // Language toggle

      const langToggle =
        document.getElementById(
          "lang-toggle"
        );


      if (langToggle) {

        langToggle.addEventListener(
          "click",
          () => {

            const current =
              this.translationManager
                .getCurrentLang();

            const newLang =
              current === "en"
                ? "ar"
                : "en";


            if (
              this.translationManager
                .switchLanguage(newLang)
            ) {

              // Rotate icon

              langToggle.style.transform =
                "rotate(360deg)";

              setTimeout(() => {

                langToggle.style.transform =
                  "";

              }, 300);
            }
          }
        );
      }


      const menuToggle =
        document.getElementById(
          "menu-toggle"
        );

      const menu =
        document.getElementById("menu");

      const overlay =
        document.getElementById(
          "menu-overlay"
        );


      if (
        menuToggle &&
        menu &&
        overlay
      ) {

        menuToggle.addEventListener(
          "click",
          () => {

            menu.classList.toggle(
              "open"
            );

            overlay.classList.toggle(
              "active"
            );


            menuToggle.innerHTML =
              menu.classList.contains(
                "open"
              )
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
          }
        );


        overlay.addEventListener(
          "click",
          () => {

            menu.classList.remove(
              "open"
            );

            overlay.classList.remove(
              "active"
            );

            menuToggle.innerHTML =
              '<i class="fas fa-bars"></i>';
          }
        );


        menu
          .querySelectorAll("a")
          .forEach(link => {

            link.addEventListener(
              "click",
              () => {

                menu.classList.remove(
                  "open"
                );

                overlay.classList.remove(
                  "active"
                );

                menuToggle.innerHTML =
                  '<i class="fas fa-bars"></i>';
              }
            );
          });
      }


      // Smooth scrolling

      const links =
        document.querySelectorAll(
          "a[data-scroll]"
        );


      if (links.length > 0) {

        links.forEach(link => {

          link.addEventListener(
            "click",
            (e) => {

              e.preventDefault();

              const targetId =
                link.getAttribute(
                  "data-scroll"
                );

              if (!targetId) {
                return;
              }


              const target =
                document.querySelector(
                  targetId
                );


              if (target) {

                target.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              }
            }
          );
        });
      }


      // Back to top button

      const backToTop =
        document.querySelector(
          '.back-to-top'
        );


      if (backToTop) {

        backToTop.addEventListener(
          'click',
          (e) => {

            e.preventDefault();

            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        );


        // Show/hide button based on scroll

        let scrollTimeout;

        window.addEventListener(
          'scroll',
          () => {

            clearTimeout(
              scrollTimeout
            );

            scrollTimeout =
              setTimeout(() => {

                if (
                  window.scrollY > 300
                ) {

                  backToTop.style.opacity =
                    '1';

                  backToTop.style.visibility =
                    'visible';

                } else {

                  backToTop.style.opacity =
                    '0';

                  backToTop.style.visibility =
                    'hidden';
                }

              }, 50);
          }
        );
      }
    }


    initScrollEffects() {

      // Navbar scroll effect

      const header =
        document.querySelector(
          'header'
        );


      if (header) {

        window.addEventListener(
          'scroll',
          () => {

            if (
              window.scrollY > 50
            ) {

              header.classList.add(
                'scrolled'
              );

            } else {

              header.classList.remove(
                'scrolled'
              );
            }


            // Update active nav link

            this.updateActiveNavLink();
          }
        );
      }


      // Set current year in footer

      const currentYear =
        new Date().getFullYear();

      const yearElement =
        document.getElementById(
          'current-year'
        );


      if (yearElement) {

        yearElement.textContent =
          currentYear;
      }
    }


    setActiveNavLink(clickedLink) {

      const navLinks =
        document.querySelectorAll(
          '.nav-link'
        );


      if (navLinks.length > 0) {

        navLinks.forEach(link => {

          link.classList.remove(
            'active'
          );
        });

        clickedLink.classList.add(
          'active'
        );
      }
    }


    updateActiveNavLink() {

      const sections =
        document.querySelectorAll(
          '.section'
        );

      const navLinks =
        document.querySelectorAll(
          '.nav-link[data-scroll]'
        );


      if (
        sections.length === 0 ||
        navLinks.length === 0
      ) {
        return;
      }


      let currentSection = '';


      sections.forEach(section => {

        if (!section.id) {
          return;
        }


        const sectionTop =
          section.offsetTop - 100;

        const sectionHeight =
          section.clientHeight;


        if (
          window.scrollY >=
            sectionTop &&
          window.scrollY <
            sectionTop + sectionHeight
        ) {

          currentSection =
            section.id;
        }
      });


      navLinks.forEach(link => {

        link.classList.remove(
          'active'
        );


        const target =
          link.getAttribute(
            'data-scroll'
          );


        if (
          target &&
          target ===
            `#${currentSection}`
        ) {

          link.classList.add(
            'active'
          );
        }
      });
    }


    // دالة للتنظيف إذا لزم الأمر

    destroy() {

      if (this.typingAnimation) {

        this.typingAnimation.destroy();
      }
    }
  }


  // Start the application

  const app =
    new PortfolioApp();


  // جعل التطبيق متاحًا للتصحيح

  window.portfolioApp = app;
});