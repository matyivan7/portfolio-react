import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    //Navbar
                    home: "Home",
                    about: "About",
                    services: "Services",
                    contact: "Contact",
                    //Hero
                    me: "Hi, I'm Máté!",
                    introduction: "I'm a full-stack software developer and designer whom trying to create something special.",
                    download: "Download CV",
                    //Contact
                    github: "Click here for my GitHub",
                    linkedin: "Click here for my LinkedIn page",
                    phone: "You can call me",
                    email: "Send me an Email",
                    //Services
                    craft: "Crafting fun and interactive websites and apps",
                    frontend: "Skilled in both Angular and React, with good knowledge in JavaScript and TypeScript.\n" +
                        "                            Proficient in building dynamic and responsive web applications using HTML, CSS, and SCSS\n" +
                        "                            to create seamless user experiences",
                    backend: "Experienced in building backend systems with Spring Boot and RESTful APIs in Java.\n" +
                        "                            Additionally, proficient in Python for backend development, ensuring scalable and efficient\n" +
                        "                            server-side solutions",
                    apps: "Previously worked with React Native for mobile development and currently expanding expertise\n" +
                        "                            in Flutter to create cross-platform applications with a smooth and intuitive user experience",
                    database: "Proficient in MySQL, PostgreSQL, and Oracle databases, with hands-on experience in\n" +
                        "                                writing\n" +
                        "                                optimized SQL queries for efficient data management and retrieval",
                    ui: "Capable of designing modern, visually appealing, and interactive websites with smooth\n" +
                        "                                animations and an engaging user experience that aligns with the latest design trends",
                    performance: "Focused on improving application speed and efficiency by optimizing code, using OOP\n" +
                        "                                programming principles reducing load times, and ensuring smooth functionality across\n" +
                        "                                different devices and platforms",
                    //About
                    about_me: "About Me",
                    about_text: "I am currently studying Business Informatics at Óbudai University. Alongside my academic pursuits, I work full-time as a full-stack software developer, where I am working on large-scale projects in the railway industry. I am passionate about both technology and business, which is why I chose this field.\n" +
                        "\n" +
                        "I’m fluent in English and currently improving my German to further expand my language skills and connect with more global opportunities. In my free time, I enjoy playing chess, a game that sharpens my problem-solving and strategic thinking abilities. I also play tennis, which keeps me active and refreshed.\n" +
                        "\n" +
                        "From a very early age, I’ve had a deep love for math and problem-solving, which started with my obsession with the Rubik's Cube. I approach challenges with a calm and focused mindset, always striving for clean and efficient solutions in my work."

                }
            },
            hu: {
                translation: {
                    //Navbar
                    home: "Kezdőlap",
                    about: "Rólam",
                    services: "Szolgáltatások",
                    contact: "Elérhetőség",
                    //Hero
                    me: "Hello, Máté vagyok!",
                    introduction: "Egy full-stack szoftverfejlesztő és dizájner vagyok, aki valami különlegeset szeretne alkotni.",
                    download: "Önéletrajz letöltése",
                    //Contact
                    github: "Kattints ide ha érdekel a GitHub profilom",
                    linkedin: "Kattints ide ha érdekel a LinkedIn profilom",
                    phone: "Fel is tudsz hívni",
                    email: "Küldhetsz Emailt is",
                    //Services
                    craft: "Szórakoztató és interaktív weboldalak és alkalmazások készítése",
                    frontend: "Jártas vagyok az Angular és React keretrendszerekben, valamint alapos ismeretekkel rendelkezem a JavaScript és TypeScript terén.\n" +
                        "Magabiztosan építek dinamikus és reszponzív webalkalmazásokat HTML, CSS és SCSS segítségével, hogy zökkenőmentes felhasználói élményt nyújtsak.",
                    backend: "Tapasztalt vagyok backend rendszerek építésében Spring Boot és RESTful API-k használatával Java nyelven.\n" +
                        "Emellett jártas vagyok a Python alapú backend fejlesztésben is, biztosítva a skálázható és hatékony szerveroldali megoldásokat.",
                    apps: "Korábban React Native-ben dolgoztam mobilfejlesztés terén, és jelenleg a Flutterben mélyítem el tudásomat, hogy könnyed és intuitív felhasználói élményt nyújtó, cross-platform alkalmazásokat hozzak létre.",
                    database: "Jártas vagyok a MySQL, PostgreSQL és Oracle adatbázisok kezelésében, valamint gyakorlati tapasztalattal rendelkezem optimalizált SQL lekérdezések írásában a hatékony adatkezelés és lekérdezés érdekében.",
                    ui: "Képes vagyok modern, látványos és interaktív weboldalak tervezésére, gördülékeny animációkkal és lebilincselő felhasználói élménnyel, amelyek megfelelnek a legújabb dizájntrendeknek.",
                    performance: "Az alkalmazások sebességének és hatékonyságának javítására összpontosítok, optimalizált kódírással és objektumorientált programozási elvek alkalmazásával. Célom a betöltési idők csökkentése és a zökkenőmentes működés biztosítása különböző eszközökön és platformokon.",
                    //About
                    about_text: "Jelenleg az Óbudai Egyetemen tanulok üzleti informatika szakon. Az egyetemi tanulmányaim mellett teljes munkaidőben full-stack szoftverfejlesztőként dolgozom, ahol nagy léptékű projekteken dolgozom a vasúti iparágban. Mind a technológia, mind az üzlet iránti szenvedélyem motivál, ezért választottam ezt a szakterületet. Jól beszélek angolul, és jelenleg német nyelvtudásomat is fejlesztem, hogy bővítsem a nyelvi készségeimet és szélesebb nemzetközi lehetőségekhez férjek hozzá. Szabadidőmben szívesen játszom sakkot, ami javítja a problémamegoldó és stratégiai gondolkodási képességeimet. Emellett teniszezem is, ami aktívan tart és felfrissít. Már nagyon fiatal koromban megszerettem a matematikát és a problémamegoldást, ami a Rubik-kockával való megszállottságommal kezdődött. A kihívásokat nyugodt és fókuszált gondolkodásmóddal közelítem meg, mindig arra törekszem, hogy hatékony és megfelelő megoldásokat találjak a munkám során."
                }
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
