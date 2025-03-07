import React, {useEffect, useState} from 'react'
import {FaAngleDown, FaAngleUp, FaDatabase, FaLaptopCode, FaMobileAlt, FaPaintBrush, FaRocket} from 'react-icons/fa'
import {FaGear} from "react-icons/fa6";

const Services = () => {

    const [showMore, setShowMore] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

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
                    Crafting fun and interactive websites and apps
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 shadow p-6 rounded-lg text-center">
                        <FaLaptopCode className="mx-auto text-4xl text-green-500 mb-4"/>
                        <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                        <p className="text-gray-700">
                            Skilled in both Angular and React, with good knowledge in JavaScript and TypeScript.
                            Proficient in building dynamic and responsive web applications using HTML, CSS, and SCSS
                            to create seamless user experiences
                        </p>
                    </div>

                    <div className="bg-gray-100 shadow p-6 rounded-lg text-center">
                        <FaGear className="mx-auto text-4xl text-green-500 mb-4"/>
                        <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                        <p className="text-gray-700">
                            Experienced in building robust backend systems with Spring Boot and RESTful APIs in Java.
                            Additionally, proficient in Python for backend development, ensuring scalable and efficient
                            server-side solutions
                        </p>
                    </div>

                    <div className="bg-gray-100 shadow p-6 rounded-lg text-center">
                        <FaMobileAlt className="mx-auto text-4xl text-green-500 mb-4"/>
                        <h3 className="text-xl font-semibold mb-2">Apps Development</h3>
                        <p className="text-gray-700">
                            Previously worked with React Native for mobile development and currently expanding expertise
                            in Flutter to create cross-platform applications with a smooth and intuitive user experience
                        </p>
                    </div>
                </div>

                {(!isMobile || showMore) && (
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-gray-100 shadow p-6 rounded-lg text-center">
                            <FaDatabase className="mx-auto text-4xl text-green-500 mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Database Management</h3>
                            <p className="text-gray-700">
                                Proficient in MySQL, PostgreSQL, and Oracle databases, with hands-on experience in
                                writing
                                optimized SQL queries for efficient data management and retrieval
                            </p>
                        </div>

                        <div className="bg-gray-100 shadow p-6 rounded-lg text-center">
                            <FaPaintBrush className="mx-auto text-4xl text-green-500 mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                            <p className="text-gray-700">
                                Capable of designing modern, visually appealing, and interactive websites with smooth
                                animations and an engaging user experience that aligns with the latest design trends
                            </p>
                        </div>

                        <div className="bg-gray-100 shadow p-6 rounded-lg text-center">
                            <FaRocket className="mx-auto text-4xl text-green-500 mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                            <p className="text-gray-700">
                                Focused on improving application speed and efficiency by optimizing code, using OOP
                                programming principles reducing load times, and ensuring smooth functionality across
                                different devices and platforms
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
