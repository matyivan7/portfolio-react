import React from 'react'
import {useTranslation} from "react-i18next";

const About = () => {

    const {t} = useTranslation()

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col justify-center items-center bg-gray-200 text-black px-4 py-20"
        >
            <div className="max-w-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about')}</h2>
                <p className="text-lg md:text-xl mb-8 text-justify">
                    {t('about_text')}
                </p>
            </div>
        </section>
    )
}

export default About
