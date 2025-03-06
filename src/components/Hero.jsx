import React from 'react'

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white pt-20"
        >
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Máté!</h1>
                <p className="text-xl md:text-2xl mb-6">
                    I'm a full-stack software developer and designer whom trying to create something special.
                </p>
                <div className="flex justify-center space-x-4">
                    <button type="button"
                            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download
                        CV
                    </button>
                </div>
            </div>
            {/* <img src="" alt="profile" className="mt-8 w-48 h-48 object-cover rounded-full" /> */}
        </section>
    )
}

export default Hero
