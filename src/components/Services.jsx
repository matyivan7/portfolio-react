import React, {useEffect, useState} from 'react'
import {FaAngleDown, FaAngleUp, FaDatabase, FaLaptopCode, FaMobileAlt, FaPaintBrush, FaRocket} from 'react-icons/fa'
import {FaGear} from "react-icons/fa6";
import {useTranslation} from "react-i18next";

const Services = () => {

    const [showMore, setShowMore] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const {t} = useTranslation()

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <section
            id="services"
            className="min-h-screen bg-gray-300 flex flex-col justify-center items-center py-20"
        >
            <div className="max-w-5xl w-full px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    {t('craft')}
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 shadow p-6 rounded-lg text-center">
                        <FaLaptopCode className="mx-auto text-4xl text-green-500 mb-4"/>
                        <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                        <p className="text-gray-700 text-justify">
                            {t('frontend')}
                        </p>
                    </div>

                    <div className="bg-gray-100 shadow p-6 rounded-lg text-center">
                        <FaGear className="mx-auto text-4xl text-green-500 mb-4"/>
                        <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                        <p className="text-gray-700 text-justify">
                            {t('backend')}
                        </p>
                    </div>

                    <div className="bg-gray-100 shadow p-6 rounded-lg text-center">
                        <FaMobileAlt className="mx-auto text-4xl text-green-500 mb-4"/>
                        <h3 className="text-xl font-semibold mb-2">Apps Development</h3>
                        <p className="text-gray-700 text-justify">
                            {t('apps')}
                        </p>
                    </div>
                </div>

                {(!isMobile || showMore) && (
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-gray-100 shadow p-6 rounded-lg text-center">
                            <FaDatabase className="mx-auto text-4xl text-green-500 mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Database Management</h3>
                            <p className="text-gray-700 text-justify">
                                {t('database')}
                            </p>
                        </div>

                        <div className="bg-gray-100 shadow p-6 rounded-lg text-center">
                            <FaPaintBrush className="mx-auto text-4xl text-green-500 mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                            <p className="text-gray-700 text-justify">
                                {t('ui')}
                            </p>
                        </div>

                        <div className="bg-gray-100 shadow p-6 rounded-lg text-center">
                            <FaRocket className="mx-auto text-4xl text-green-500 mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                            <p className="text-gray-700 text-justify">
                                {t('performance')}
                            </p>
                        </div>
                    </div>
                )}

                {isMobile && (
                    <div className="flex justify-center mt-4">
                        <button onClick={() => setShowMore(!showMore)}>
                            {showMore ? (
                                <FaAngleUp className="text-5xl text-green-400"/>
                            ) : (
                                <FaAngleDown className="text-5xl text-green-400"/>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Services
