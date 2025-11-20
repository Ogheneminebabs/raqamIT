        // main.js

        // Manually create and append a manifest.json link to keep everything in one file
        const manifest = {
            "name": "RaqamIT",
            "short_name": "RaqamIT",
            "start_url": "./",
            "display": "standalone",
            "background_color": "#ffffff",
            "theme_color": "#0d9488",
            "icons": [
                {
                    "src": "https://placehold.co/192x192/0d9488/ffffff?text=RA",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "https://placehold.co/512x512/0d9488/ffffff?text=RA",
                    "sizes": "512x512",
                    "type": "image/png"
                }
            ]
        };
        const manifestBlob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
        const manifestURL = URL.createObjectURL(manifestBlob);
        const link = document.createElement('link');
        link.rel = 'manifest';
        link.href = manifestURL;
        document.head.appendChild(link);

        // Manually create and register a service worker
        if ('serviceWorker' in navigator) {
            const serviceWorkerContent = `
                self.addEventListener('install', (event) => {
                    event.waitUntil(
                        caches.open('raqam-it-cache-v1').then((cache) => {
                            return cache.addAll([
                                '/',
                                '/index.html',
                                'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
                            ]);
                        })
                    );
                });
                
                self.addEventListener('fetch', (event) => {
                    event.respondWith(
                        caches.match(event.request).then((response) => {
                            return response || fetch(event.request);
                        })
                    );
                });
            `;
            const swBlob = new Blob([serviceWorkerContent], { type: 'application/javascript' });
            const swURL = URL.createObjectURL(swBlob);

            window.addEventListener('load', () => {
                navigator.serviceWorker.register(swURL, { type: 'module' }).then((reg) => {
                    console.log('Service worker registered successfully', reg);
                }).catch((error) => {
                    console.log('Service worker registration failed:', error);
                });
            });
        }

    // <!-- Main JS Logic -->
        const langElements = document.querySelectorAll('[data-en], [data-ar]');
        const languageToggleBtn = document.getElementById('language-toggle-btn');
        const languageText = document.getElementById('language-text');
        let currentLanguage = localStorage.getItem('lang') || 'en';

        const themeToggles = {
            light: document.getElementById('theme-toggle-light'),
            dark: document.getElementById('theme-toggle-dark'),
            teal: document.getElementById('theme-toggle-teal')
        };
        const body = document.body;
        let currentTheme = localStorage.getItem('theme') || 'light';
        
        const appDetailsData = {
            huruf: {
                en: {
                    title: "Huruf: Arabic Word Game",
                    desc: "Huruf is a captivating Arabic word-finding game that challenges players to form as many words as possible from a random grid of letters. It's a fun and effective way to enhance your Arabic vocabulary and test your language skills. The game features various difficulty levels and a timer mode for competitive play."
                },
                ar: {
                    title: "حروف: لعبة الكلمات العربية",
                    desc: "حروف هي لعبة كلمات عربية آسرة تتحدى اللاعبين لتكوين أكبر عدد ممكن من الكلمات من شبكة عشوائية من الحروف. إنها طريقة ممتعة وفعالة لتعزيز مفرداتك العربية واختبار مهاراتك اللغوية. تتميز اللعبة بمستويات صعوبة متنوعة ووضع توقيت للعب التنافسي."
                },
                img: "https://placehold.co/150x150/d1d5db/4b5563?text=Huruf"
            },
            tarkib: {
                en: {
                    title: "Tarkib: Scrabble-like Game",
                    desc: "Tarkib is a highly engaging multi-player game similar to Scrabble. Players earn points by strategically building words on a board with special bonus squares. It’s perfect for friends and family who love a good challenge and want to test their linguistic prowess in a competitive setting."
                },
                ar: {
                    title: "تركيب: لعبة شبيهة بـ Scrabble",
                    desc: "تركيب هي لعبة جماعية جذابة للغاية تشبه Scrabble. يكسب اللاعبون النقاط عن طريق بناء الكلمات بشكل استراتيجي على لوحة بها مربعات إضافية خاصة. إنها مثالية للأصدقاء والعائلة الذين يحبون التحدي الجيد ويريدون اختبار براعتهم اللغوية في بيئة تنافسية."
                },
                img: "https://placehold.co/150x150/d1d5db/4b5563?text=Tarkib"
            },
            wordFinder: {
                en: {
                    title: "Arabic Word Finder",
                    desc: "An invaluable tool for students and writers, this app helps you find perfect Arabic words by searching for synonyms, definitions, and related terms. With a comprehensive database, it simplifies research and enhances your writing efficiency. It is a must-have for anyone working with the Arabic language."
                },
                ar: {
                    title: "باحث الكلمات العربية",
                    desc: "أداة لا تقدر بثمن للطلاب والكتّاب، يساعدك هذا التطبيق على العثور على الكلمات العربية المثالية من خلال البحث عن المرادفات والتعريفات والمصطلحات ذات الصلة. مع قاعدة بيانات شاملة، فإنه يبسط البحث ويعزز كفاءة كتابتك. إنه أمر لا غنى عنه لأي شخص يعمل باللغة العربية."
                },
                img: "https://placehold.co/150x150/d1d5db/4b5563?text=Finder"
            }
        };

        // Function to update content based on selected language
        function updateContent(lang) {
            document.documentElement.lang = lang;
            langElements.forEach(el => {
                const text = el.getAttribute(`data-${lang}`);
                if (text) {
                    el.textContent = text;
                }
            });
            if (languageText) {
                languageText.textContent = lang === 'en' ? 'العربية' : 'English';
            }
        }
        
        // Function to switch themes
        function switchTheme(theme) {
            body.className = `${theme}-theme`;
            localStorage.setItem('theme', theme);
        }

        // =========================================================
        // Functions ONLY used on index.html (MUST BE CHECKED FOR NULL)
        // =========================================================

        // Function to show a specific page (only used in index.html, where pages are sections)
        function showPage(pageId) {
            const pageSections = document.querySelectorAll('.page-section');
            if (pageSections.length > 0) { // Check if we are on a multi-page setup (index.html)
                pageSections.forEach(section => {
                    section.classList.add('hidden');
                });
                const targetPage = document.getElementById(`${pageId}-page`);
                if (targetPage) {
                    targetPage.classList.remove('hidden');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            } else {
                // If showPage is called on privacy_policy.html (e.g., clicking logo)
                // Redirect to the home page if it tries to go "home"
                if (pageId === 'home') {
                    window.location.href = 'index.html';
                }
            }
        }

        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) { // Null check for simplicity
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        function showAppDetails(appId) {
            const app = appDetailsData[appId];
            const appTitle = document.getElementById('app-details-title');
            
            // Check if the required elements for app details are present
            if (!app || !appTitle) return; 

            const lang = currentLanguage;
            
            document.getElementById('app-details-img').src = app.img;
            appTitle.textContent = app[lang].title;
            document.getElementById('app-details-desc').textContent = app[lang].desc;
            
            showPage('app-details');
        }

        // Event listeners for theme buttons (Check if they exist)
        if (themeToggles.light) themeToggles.light.addEventListener('click', () => switchTheme('light'));
        if (themeToggles.dark) themeToggles.dark.addEventListener('click', () => switchTheme('dark'));
        if (themeToggles.teal) themeToggles.teal.addEventListener('click', () => switchTheme('teal'));

        // Event listener for language toggle button (Check if it exists)
        if (languageToggleBtn) {
            languageToggleBtn.addEventListener('click', () => {
                currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
                updateContent(currentLanguage);
                localStorage.setItem('lang', currentLanguage);
            });
        }

        // Make sure global functions are available (required for inline HTML onclick)
        window.showPage = showPage;
        window.scrollToSection = scrollToSection;
        window.showAppDetails = showAppDetails;

        // Initialize state on page load
        document.addEventListener('DOMContentLoaded', () => {
            updateContent(currentLanguage);
            switchTheme(currentTheme);

            // Set current year in footer
            const currentYearElement = document.getElementById('current-year');
            if (currentYearElement) {
                currentYearElement.textContent = new Date().getFullYear();
            }
        });