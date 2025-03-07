import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Loading from "./components/loading/Loading.jsx";
import './App.css'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {isLoading ? (
                <Loading/>
            ) : (
                <div className="font-sans">
                    <Navbar/>

                    <Hero/>
                    <Contact/>
                    <Services/>
                    <About/>

                    <Footer/>
                </div>
            )}
        </>
    )
}

export default App
