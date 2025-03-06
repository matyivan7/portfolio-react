import React from 'react'

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-800 text-white px-10 pt-20"
        >
            <div className="text-left max-w-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Máté!</h1>
                <p className="text-lg md:text-xl mb-6 text-gray-400">
                    I'm a full-stack software developer and designer whom trying to create something special.
                </p>
                <a href="/CV_Ivan_Mate_EN.pdf" download>
                    <button type="button"
                            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br
                                   focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800
                                   shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80
                                   font-medium rounded-lg text-sm px-6 py-3">

                        Download CV

                    </button>
                </a>
            </div>

            <img src="/self-pic.jpg" alt="profile" className="mt-8 w-85 h-auto object-cover rounded-lg"/>

        </section>
    )
}

export default Hero
