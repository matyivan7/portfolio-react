import React, { useState } from 'react'
import {useTranslation} from "react-i18next";

const Hero = () => {

    const {t} = useTranslation();
    const [cvLanguage, setCvLanguage] = useState("EN");

    const cvFile = cvLanguage === "EN"
        ? "/Iván-Máté-CV-EN.pdf"
        : "/Iván-Máté-CV-HU.pdf";

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-800 text-white px-10 pt-20"
        >
            <div className="text-left max-w-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('me')}</h1>
                <p className="text-lg md:text-xl mb-6 text-gray-400">
                    {t('introduction')}
                </p>

                <div className="flex items-center gap-3">
                    <a href={cvFile} download>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br
                                focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800
                                shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80
                                font-medium rounded-lg text-sm px-6 py-3"
                        >
                            {t('download')}
                        </button>
                    </a>

                    <select
                        value={cvLanguage}
                        onChange={(e) => setCvLanguage(e.target.value)}
                        className="bg-gray-700 text-white border border-gray-600 rounded-lg px-2 py-2 text-sm"
                    >
                        <option value="EN">EN</option>
                        <option value="HU">HU</option>
                    </select>
                </div>
            </div>

            <img src="/self-pic.jpg" alt="profile" className="mt-8 w-85 h-auto object-cover rounded-lg"/>

        </section>
    )
}

export default Hero
