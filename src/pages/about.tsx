//Ignore this file -- just a demonstration on how to define page specific files (IE we want a different header/footer on this specific page)
import Footer from "@/components/layout/Footer"
import { ReactNode } from "react";

function About() {
    return <h1 className ='content'>ABOUT</h1>
}

export default About


About.getLayout=function PageLayout(page: ReactNode){
    return (
        <>
        {page}
        <Footer/>
        </>
    )
}