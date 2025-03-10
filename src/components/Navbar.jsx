import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    const [langOpen, setLangOpen] = useState(false);
    const [language, setLanguage] = useState('en');
    const {t, i18n } = useTranslation();

    const flags = {
        en: '/flags/uk.png',
        hu: '/flags/hungary.png'
    };

    const handleToggle = () => {
        setNavOpen(!navOpen)
    }

    const toggleLangMenu = () => {
        setLangOpen(!langOpen);
    }

    const changeLanguage = (lang) => {
        setLanguage(lang);
        setLangOpen(false);
        i18n.changeLanguage(lang);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                <div className="flex items-center">
                    <a href="#hero" className="flex items-center">
                        <img src="/m-icon.png" alt="Logo" className="w-10 h-10 mr-2"/>
                    </a>
                </div>

                <div className="hidden md:flex flex-1 justify-center space-x-8 mr:20px">
                    <a href="#hero" className="hover:text-gray-300">{t('home')}</a>
                    <a href="#about" className="hover:text-gray-300">{t('about')}</a>
                    <a href="#services" className="hover:text-gray-300">{t('services')}</a>
                    <a href="#contact" className="hover:text-gray-300">{t('contact')}</a>
                </div>

                <div className="relative">
                    <button
                        onClick={toggleLangMenu}
                        className="flex items-center text-sm px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700">
                        <img src={flags[language]} alt={language} className="w-5 h-5 mr-2" />
                        {language === 'en' ? 'English' : 'Magyar'}
                    </button>
                    {langOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-gray-200 text-black shadow-lg rounded-md">
                            <button onClick={() => changeLanguage('en')} className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-300 w-full text-left">
                                <img src={flags['en']} alt="English" className="w-5 h-5 mr-2" />
                                English
                            </button>
                            <button onClick={() => changeLanguage('hu')} className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-300 w-full text-left">
                                <img src={flags['hu']} alt="Magyar" className="w-5 h-5 mr-2" />
                                Magyar
                            </button>
                        </div>
                    )}
                </div>
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={handleToggle}
                    aria-label="Toggle Menu"
                >
                    {navOpen ? <FaTimes/> : <FaBars/>}
                </button>
            </div>

            {navOpen && (
                <div className="md:hidden bg-gray-800">
                    <a
                        href="#hero"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() => setNavOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() => setNavOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() => setNavOpen(false)}
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={() => setNavOpen(false)}
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    )
}

export default Navbar