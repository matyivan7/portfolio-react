import React from 'react'
import {FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt} from 'react-icons/fa'

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-gray-900 text-white py-20"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>

                <div className="grid md:grid-cols-4 gap-8 text-center">

                    <div className="flex flex-col items-center">
                        <a
                            href="https://github.com/matyivan7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center"
                        >
                            <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                                <FaGithub className="text-white text-2xl"/>
                            </div>
                            <h3 className="text-xl font-semibold mb-1">GitHub</h3>
                            <p className="text-gray-300">Click here for my GitHub</p>
                        </a>
                    </div>

                    <div className="flex flex-col items-center">
                        <a
                            href="https://www.linkedin.com/in/m%C3%A1t%C3%A9-iv%C3%A1n-845ab9274/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center"
                        >
                            <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                                <FaLinkedin className="text-white text-2xl"/>
                            </div>
                            <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
                            <p className="text-gray-300">Click here for my LinkedIn page</p>
                        </a>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                            <FaPhoneAlt className="text-white text-2xl"/>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">You can call me</h3>
                        <p className="text-gray-300">+36 20 367 1025</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                            <FaEnvelope className="text-white text-2xl"/>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">Send me an Email</h3>
                        <p className="text-gray-300">matyivan@gmail.com</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
