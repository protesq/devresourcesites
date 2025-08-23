// Site verileri
const sitesData = {
    "must-see": [
        {
            title: "MDN Web Docs",
            description: "Web teknolojileri için en kapsamlı dokümantasyon kaynağı. HTML, CSS, JavaScript ve daha fazlası.",
            url: "https://developer.mozilla.org/",
            tags: ["frontend", "learning", "documentation"]
        },
        {
            title: "Stack Overflow",
            description: "Programlama sorunlarınızın çözümünü bulabileceğiniz en büyük geliştirici topluluğu.",
            url: "https://stackoverflow.com/",
            tags: ["learning", "community", "help"]
        },
        {
            title: "Can I Use",
            description: "Web teknolojilerinin tarayıcı uyumluluğunu kontrol edebileceğiniz vazgeçilmez araç.",
            url: "https://caniuse.com/",
            tags: ["frontend", "tools", "compatibility"]
        },
        {
            title: "RegexOne",
            description: "Regular Expression (Regex) öğrenmek için interaktif tutorial sitesi.",
            url: "https://regexone.com/",
            tags: ["learning", "tools", "regex"]
        },
        {
            title: "CSS-Tricks",
            description: "CSS teknikleri, ipuçları ve modern web geliştirme rehberleri.",
            url: "https://css-tricks.com/",
            tags: ["frontend", "css", "learning"]
        },
        {
            title: "JSON Placeholder",
            description: "Test ve prototipleme için ücretsiz REST API servisi.",
            url: "https://jsonplaceholder.typicode.com/",
            tags: ["backend", "api", "testing", "tools"]
        },
        {
            title: "Postman",
            description: "API geliştirme ve test etme için güçlü platform.",
            url: "https://www.postman.com/",
            tags: ["backend", "api", "testing", "tools"]
        },
        {
            title: "Figma",
            description: "Tasarım ve prototipleme için işbirlikçi tasarım aracı.",
            url: "https://www.figma.com/",
            tags: ["design", "tools", "ui"]
        },
        {
            title: "CodePen",
            description: "Frontend kodlarınızı test edip paylaşabileceğiniz online editör.",
            url: "https://codepen.io/",
            tags: ["frontend", "tools", "testing"]
        },
        {
            title: "DevDocs",
            description: "Birçok programlama dili ve framework için hızlı dokümantasyon erişimi.",
            url: "https://devdocs.io/",
            tags: ["documentation", "learning", "tools"]
        },
        {
            title: "W3Schools",
            description: "Web geliştirme teknolojileri için kapsamlı tutoriallar ve referanslar.",
            url: "https://www.w3schools.com/",
            tags: ["learning", "frontend", "backend"]
        },
        {
            title: "LeetCode",
            description: "Algoritma ve veri yapıları pratiği için coding challenge platformu.",
            url: "https://leetcode.com/",
            tags: ["learning", "algorithms", "practice"]
        },
        {
            title: "Krea.ai",
            description: "AI ile görsel ve video içerik üretimi yapabileceğiniz yaratıcı platform.",
            url: "https://krea.ai/",
            tags: ["ai", "design", "creative"]
        },
        {
            title: "ChefGPT",
            description: "AI destekli yemek tarifi ve menü planlama asistanı.",
            url: "https://chefgpt.xyz/",
            tags: ["ai", "food", "lifestyle"]
        },
        {
            title: "Logo Diffusion",
            description: "AI ile logo tasarımı ve görsel kimlik oluşturma aracı.",
            url: "https://logodiffusion.com/",
            tags: ["ai", "design", "logo"]
        },
        {
            title: "Habitica",
            description: "Alışkanlıklarınızı RPG oyunu haline getiren motivasyon uygulaması.",
            url: "https://habitica.com/",
            tags: ["productivity", "gamification", "habits"]
        },
        {
            title: "SVG.io",
            description: "SVG dosyalarını optimize etme ve düzenleme için online araç.",
            url: "https://svg.io/",
            tags: ["design", "tools", "svg"]
        },
        {
            title: "GPT Excel",
            description: "Excel formülleri ve makrolar için AI destekli yardımcı.",
            url: "https://gptexcel.uk/",
            tags: ["ai", "excel", "productivity"]
        },
        {
            title: "Amee.la",
            description: "Sosyal medya ve dijital kimlik yönetimi için link in bio aracı.",
            url: "https://amee.la/",
            tags: ["social-media", "tools", "marketing"]
        },
        {
            title: "Namelix",
            description: "AI ile marka adı ve domain önerileri üreten araç.",
            url: "https://namelix.com/",
            tags: ["ai", "branding", "naming"]
        },
        {
            title: "MyFridgeFood",
            description: "Buzdolabınızdaki malzemelerle yapabileceğiniz yemek tarifleri bulucu.",
            url: "https://myfridgefood.com/",
            tags: ["food", "lifestyle", "utility"]
        },
        {
            title: "Car Care Kiosk",
            description: "Araç bakım takibi ve hatırlatma sistemi.",
            url: "https://carcarekiosk.com/",
            tags: ["automotive", "maintenance", "tools"]
        },
        {
            title: "MOOC.fi",
            description: "Helsinki Üniversitesi'nin ücretsiz programlama kursları.",
            url: "https://mooc.fi/",
            tags: ["learning", "programming", "education"]
        },
        {
            title: "AI4Chat",
            description: "Çeşitli AI chatbot'ları ve araçları tek platformda.",
            url: "https://ai4chat.co/",
            tags: ["ai", "chatbot", "tools"]
        },
        {
            title: "Immersive Fox",
            description: "WebXR ve metaverse deneyimleri için geliştirici araçları.",
            url: "https://immersive-fox.com/",
            tags: ["webxr", "metaverse", "development"]
        },
        {
            title: "CodingBat",
            description: "Java ve Python için coding practice problemi çözme platformu.",
            url: "https://codingbat.com/",
            tags: ["learning", "practice", "java", "python"]
        },
        {
            title: "UIBall",
            description: "CSS loading animasyonları ve spinner koleksiyonu.",
            url: "https://uiball.com/",
            tags: ["frontend", "css", "animations"]
        },
        {
            title: "Uiverse",
            description: "Açık kaynak UI elementleri ve komponentleri koleksiyonu.",
            url: "https://uiverse.io/",
            tags: ["frontend", "ui", "components"]
        },
        {
            title: "Coddy Tech",
            description: "Mobil cihazlarda programlama öğrenme uygulaması.",
            url: "https://coddy.tech/",
            tags: ["learning", "mobile", "programming"]
        },
        {
            title: "CodeWP",
            description: "WordPress geliştirme için AI kod üretici.",
            url: "https://codewp.ai/",
            tags: ["ai", "wordpress", "development"]
        },
        {
            title: "Vondy",
            description: "AI araçları ve template'leri için marketplace.",
            url: "https://vondy.com/",
            tags: ["ai", "tools", "marketplace"]
        },
        {
            title: "SQL Translate",
            description: "Doğal dilden SQL sorgusu oluşturan AI aracı.",
            url: "https://sqltranslate.app/",
            tags: ["ai", "sql", "database"]
        },
        {
            title: "Clean Code",
            description: "Temiz kod yazma prensipleri ve best practice'ler.",
            url: "https://clean-code.io/",
            tags: ["best-practices", "learning", "programming"]
        },
        {
            title: "FlowCV",
            description: "Profesyonel CV ve resume oluşturma aracı.",
            url: "https://flowcv.com/",
            tags: ["career", "cv", "tools"]
        },
        {
            title: "VisuAlgo",
            description: "Algoritmaları görsel olarak öğrenme ve analiz etme platformu.",
            url: "https://visualgo.net/",
            tags: ["learning", "algorithms", "visualization"]
        },
        {
            title: "Cyber Dojo",
            description: "Pair programming ve TDD pratiği için online platform.",
            url: "https://cyber-dojo.org/",
            tags: ["learning", "tdd", "practice"]
        },
        {
            title: "Edabit",
            description: "Programlama challenge'ları ve kod pratiği platformu.",
            url: "https://edabit.com/",
            tags: ["learning", "practice", "challenges"]
        },
        {
            title: "Elsa Speak",
            description: "AI ile İngilizce telaffuz geliştirme uygulaması.",
            url: "https://elsaspeak.com/",
            tags: ["language", "ai", "learning"]
        },
        {
            title: "CodinGame",
            description: "Oyunlar oynayarak programlama öğrenme platformu.",
            url: "https://codingame.com/",
            tags: ["learning", "games", "programming"]
        },
        {
            title: "Lost at SQL",
            description: "SQL öğrenmek için interaktif macera oyunu.",
            url: "https://lost-at-sql.therobinlord.com/",
            tags: ["learning", "sql", "game"]
        },
        {
            title: "Elevator Saga",
            description: "JavaScript ile asansör algoritması programlama oyunu.",
            url: "https://play.elevatorsaga.com/",
            tags: ["learning", "javascript", "game"]
        },
        {
            title: "HTML5 UP",
            description: "Responsive HTML5 ve CSS3 site template'leri.",
            url: "https://html5up.net/",
            tags: ["frontend", "templates", "responsive"]
        },
        {
            title: "Thonny",
            description: "Yeni başlayanlar için basit Python IDE'si.",
            url: "https://thonny.org/",
            tags: ["python", "ide", "beginner"]
        },
        {
            title: "Codedex",
            description: "Gamified programlama öğrenme platformu.",
            url: "https://codedx.io/",
            tags: ["learning", "gamification", "programming"]
        },
        {
            title: "Ninite",
            description: "Windows için toplu program yükleme ve güncelleme aracı.",
            url: "https://ninite.com/",
            tags: ["windows", "tools", "installer"]
        },
        {
            title: "Luma Labs",
            description: "AI ile 3D model ve sahne oluşturma platformu.",
            url: "https://lumalabs.ai/",
            tags: ["ai", "3d", "modeling"]
        },
        {
            title: "Awesome Python",
            description: "Python için harika kütüphane ve araçların listesi.",
            url: "https://awesome-python.com/",
            tags: ["python", "resources", "libraries"]
        },
        {
            title: "Progate",
            description: "İnteraktif programlama dersleri ve projeler.",
            url: "https://progate.com/",
            tags: ["learning", "interactive", "programming"]
        },
        {
            title: "AlternativeTo",
            description: "Yazılım alternatifleri bulma ve karşılaştırma platformu.",
            url: "https://alternativeto.net/",
            tags: ["software", "alternatives", "discovery"]
        },
        {
            title: "MindLuster",
            description: "Ücretsiz online kurslar ve eğitim platformu.",
            url: "https://mindluster.com/",
            tags: ["learning", "courses", "education"]
        },
        {
            title: "Glot.io",
            description: "Online kod editörü ve çalıştırma ortamı.",
            url: "https://glot.io/",
            tags: ["tools", "coding", "online-ide"]
        },
        {
            title: "PyFlo",
            description: "Python öğrenmek için görsel akış şemaları.",
            url: "https://pyflo.net/",
            tags: ["python", "learning", "visualization"]
        },
        {
            title: "Python Tutor",
            description: "Python kodunu adım adım görselleştirme aracı.",
            url: "https://pythontutor.com/",
            tags: ["python", "learning", "visualization"]
        },
        {
            title: "SQLBolt",
            description: "İnteraktif SQL öğrenme dersleri ve alıştırmalar.",
            url: "https://sqlbolt.com/",
            tags: ["sql", "learning", "interactive"]
        },
        {
            title: "SQLPD",
            description: "SQL pratiği için veri detektifi oyunu.",
            url: "https://sqlpd.com/",
            tags: ["sql", "learning", "game"]
        },
        {
            title: "Real Python",
            description: "Python öğrenmek için kapsamlı tutorial ve makaleler.",
            url: "https://realpython.com/",
            tags: ["python", "learning", "tutorials"]
        },
        {
            title: "Boolean Method",
            description: "JavaScript boolean mantığını öğrenmek için interaktif araç.",
            url: "https://boolean.method.ac/",
            tags: ["javascript", "learning", "logic"]
        },
        {
            title: "Flexbox Defense",
            description: "CSS Flexbox öğrenmek için tower defense oyunu.",
            url: "https://flexboxdefense.com/",
            tags: ["css", "learning", "game"]
        },
        {
            title: "WarriorJS",
            description: "JavaScript ile karakter kontrol etme RPG oyunu.",
            url: "https://warriorjs.com/",
            tags: ["javascript", "learning", "game"]
        },
        {
            title: "Oh My Git!",
            description: "Git komutlarını öğrenmek için interaktif oyun.",
            url: "https://ohmygit.org/",
            tags: ["git", "learning", "version-control"]
        },
        {
            title: "SQL Zoo",
            description: "SQL öğrenmek için interaktif tutorial ve alıştırmalar.",
            url: "https://sqlzoo.net/",
            tags: ["sql", "learning", "tutorial"]
        },
        {
            title: "Hyperpolyglot",
            description: "Programlama dilleri arasında syntax karşılaştırması.",
            url: "https://hyperpolyglot.org/",
            tags: ["programming", "syntax", "comparison"]
        },
        {
            title: "Wibit",
            description: "Web development course'ları ve projeler.",
            url: "https://wibit.net/",
            tags: ["learning", "web-development", "courses"]
        },
        {
            title: "GetCody",
            description: "AI destekli kod asistanı ve geliştirme aracı.",
            url: "https://getcody.ai/",
            tags: ["ai", "coding", "assistant"]
        },
        {
            title: "CPP Reference",
            description: "C++ dili için kapsamlı referans dokümantasyonu.",
            url: "https://cppreference.com/",
            tags: ["cpp", "documentation", "reference"]
        },
        {
            title: "Cobalt Tools",
            description: "Sosyal medya içerik indirme ve dönüştürme araçları.",
            url: "https://cobalt.tools/",
            tags: ["tools", "social-media", "download"]
        },
        {
            title: "Lovable",
            description: "AI ile web uygulaması geliştirme platformu.",
            url: "https://lovable.dev/",
            tags: ["ai", "web-development", "nocode"]
        },
        {
            title: "Rosebud AI",
            description: "AI ile oyun geliştirme ve interaktif deneyimler.",
            url: "https://rosebud.ai/",
            tags: ["ai", "game-development", "interactive"]
        },
        {
            title: "Public APIs",
            description: "Ücretsiz kullanım için public API'ların listesi.",
            url: "https://publicapis.io/",
            tags: ["api", "resources", "free"]
        },
        {
            title: "A0.dev",
            description: "Geliştiriciler için minimal ve hızlı araçlar koleksiyonu.",
            url: "https://a0.dev/",
            tags: ["tools", "developer", "utilities"]
        },
        {
            title: "GLB GPT",
            description: "3D model dosyalarını AI ile işleme ve dönüştürme.",
            url: "https://glbgpt.com/",
            tags: ["ai", "3d", "conversion"]
        },
        {
            title: "LM Arena",
            description: "Farklı AI modellerini karşılaştırma ve test etme platformu.",
            url: "https://lmarena.ai/",
            tags: ["ai", "comparison", "testing"]
        },
        {
            title: "TechBeamers",
            description: "Yazılım test etme ve otomasyon öğrenme kaynakları.",
            url: "https://techbeamers.com/",
            tags: ["testing", "automation", "learning"]
        },
        {
            title: "My Ninja",
            description: "AI destekli prodüktivite ve otomasyon araçları.",
            url: "https://myninja.ai/",
            tags: ["ai", "productivity", "automation"]
        },
        {
            title: "Same Energy",
            description: "Görsel benzerlik ile image search ve keşif platformu.",
            url: "https://same.energy/",
            tags: ["image", "search", "discovery"]
        },
        {
            title: "Egghead",
            description: "Web geliştirme teknolojileri için kısa video dersleri.",
            url: "https://egghead.io/",
            tags: ["learning", "web-development", "video"]
        },
        {
            title: "Rork",
            description: "Developer portfolio ve proje showcase platformu.",
            url: "https://rork.app/",
            tags: ["portfolio", "showcase", "developer"]
        },
        {
            title: "Down For Everyone",
            description: "Web sitelerinin erişilebilirlik durumunu kontrol etme aracı.",
            url: "https://downforeveryoneorjustme.com/",
            tags: ["tools", "monitoring", "website"]
        },
        {
            title: "Convergence AI",
            description: "AI model entegrasyonu ve geliştirme platformu.",
            url: "https://convergence.ai/",
            tags: ["ai", "integration", "development"]
        },
        {
            title: "The Carpentries",
            description: "Veri bilimi ve araştırma yazılımları öğretim platformu.",
            url: "https://carpentries.org/",
            tags: ["data-science", "research", "education"]
        },
        {
            title: "ZZZ Code AI",
            description: "Çoklu programlama dilinde AI kod üretici.",
            url: "https://zzzcode.ai/",
            tags: ["ai", "code-generation", "multi-language"]
        },
        {
            title: "Class Central",
            description: "Online kursları bulma ve karşılaştırma platformu.",
            url: "https://classcentral.com/",
            tags: ["learning", "courses", "discovery"]
        },
        {
            title: "Readdy AI",
            description: "AI ile döküman okuma ve özetleme aracı.",
            url: "https://readdy.ai/",
            tags: ["ai", "document", "summarization"]
        },
        {
            title: "Tripo 3D",
            description: "AI ile 2D görsellerden 3D model oluşturma.",
            url: "https://tripo3d.ai/",
            tags: ["ai", "3d", "conversion"]
        },
        {
            title: "Roadmap.sh",
            description: "Geliştiriciler için teknoloji roadmap'leri ve öğrenme yolları.",
            url: "https://roadmap.sh/",
            tags: ["learning", "roadmap", "career"]
        },
        {
            title: "Youware",
            description: "No-code web uygulaması geliştirme platformu.",
            url: "https://youware.com/",
            tags: ["nocode", "web-development", "platform"]
        },
        {
            title: "Co.dev",
            description: "Developer community ve işbirliği platformu.",
            url: "https://co.dev/",
            tags: ["community", "collaboration", "developer"]
        },
        {
            title: "Calm Code",
            description: "Python öğrenmek için sakin ve odaklı yaklaşım.",
            url: "https://calmcode.io/",
            tags: ["python", "learning", "mindful"]
        },
        {
            title: "CodeSandbox",
            description: "Online kod editörü ve proje paylaşım platformu.",
            url: "https://codesandbox.io/",
            tags: ["online-ide", "sharing", "collaboration"]
        },
        {
            title: "PlayCode",
            description: "Javascript için online playground ve test ortamı.",
            url: "https://playcode.io/",
            tags: ["javascript", "playground", "testing"]
        },
        {
            title: "ZipWP",
            description: "AI ile WordPress site oluşturma aracı.",
            url: "https://zipwp.com/",
            tags: ["ai", "wordpress", "website-builder"]
        },
        {
            title: "Alpha Page",
            description: "Startup landing page oluşturma ve test etme platformu.",
            url: "https://alpha.page/",
            tags: ["landing-page", "startup", "marketing"]
        },
        {
            title: "QuickRef",
            description: "Programlama dilleri için hızlı referans kartları.",
            url: "https://quickref.me/",
            tags: ["reference", "cheatsheet", "programming"]
        },
        {
            title: "Learn Anything",
            description: "Her konuda öğrenme kaynakları ve yolları haritası.",
            url: "https://learn-anything.xyz/",
            tags: ["learning", "resources", "knowledge"]
        },
        {
            title: "Open Source Alternative",
            description: "Popüler yazılımlara açık kaynak alternatifleri.",
            url: "https://opensourcealternative.to/",
            tags: ["open-source", "alternatives", "software"]
        },
        {
            title: "Self.so",
            description: "Kişisel brand ve portfolio oluşturma platformu.",
            url: "https://self.so/",
            tags: ["portfolio", "personal-brand", "showcase"]
        },
        {
            title: "PyMOTW",
            description: "Python Standard Library modülleri için detaylı örnekler.",
            url: "https://pymotw.com/",
            tags: ["python", "standard-library", "examples"]
        },
        {
            title: "Snipzy",
            description: "Kod snippet'leri paylaşma ve keşfetme platformu.",
            url: "https://snipzy.dev/",
            tags: ["snippets", "sharing", "discovery"]
        },
        {
            title: "API Vault",
            description: "Geliştiriciler için API koleksiyonu ve dokümantasyon.",
            url: "https://apivault.dev/",
            tags: ["api", "documentation", "collection"]
        },
        {
            title: "SEO Studio Tools",
            description: "SEO analiz ve optimizasyon araçları koleksiyonu.",
            url: "https://seostudio.tools/",
            tags: ["seo", "analytics", "optimization"]
        },
        {
            title: "OverAPI",
            description: "Programlama dilleri için cheat sheet koleksiyonu.",
            url: "https://overapi.com/",
            tags: ["cheatsheet", "reference", "programming"]
        },
        {
            title: "SQL Island",
            description: "SQL öğrenmek için macera tarzı interaktif oyun.",
            url: "https://sql-island.informatik.ui-kl.de/",
            tags: ["sql", "learning", "adventure"]
        },
        {
            title: "Softr",
            description: "No-code uygulama geliştirme platformu.",
            url: "https://softr.io/",
            tags: ["nocode", "app-development", "platform"]
        },
        {
            title: "Free for Dev",
            description: "Geliştiriciler için ücretsiz servis ve araçların listesi.",
            url: "https://free-for.dev/",
            tags: ["free", "services", "developer"]
        },
        {
            title: "Natively",
            description: "Native mobile uygulama geliştirme kaynakları.",
            url: "https://natively.dev/",
            tags: ["mobile", "native", "development"]
        },
        {
            title: "React Bits",
            description: "React geliştirme için pattern'ler ve best practice'ler.",
            url: "https://reactbits.dev/",
            tags: ["react", "patterns", "best-practices"]
        },
        {
            title: "Algorithm Visualizer",
            description: "Algoritmaları görsel olarak anlamak için interaktif platform.",
            url: "https://algorithm-visualizer.org/",
            tags: ["algorithms", "visualization", "interactive"]
        },
        {
            title: "Wegic AI",
            description: "AI ile web sitesi tasarımı ve geliştirme platformu.",
            url: "https://wegic.ai/",
            tags: ["ai", "web-design", "automation"]
        },
        {
            title: "Promptly Library",
            description: "AI prompt'ları için kapsamlı kütüphane ve koleksiyon.",
            url: "https://promptly.fyi/library",
            tags: ["ai", "prompts", "library"]
        }
    ],
    "github": [
    ],
    "fun": [
    ],
    "relax": [
    ]
};
