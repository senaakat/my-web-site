import "./globals.css";
import React, {ReactNode} from 'react'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: {
        template: "%s | Sena Akat",
        default: "<Sena AKAT/>",
    },
    description: "...",
}

interface Props {
    children: ReactNode
}

export default function Layout({children}: Props) {
    return (
        <html lang="tr">
        <body>
        <div className=" flex flex-col min-h-screen bg-fixed bg-cover bg-no-repeat bg-center"
             style={{backgroundImage: "url('/1234.jpg')"}}>
            <Navbar/>
            <main className=" flex-grow pt-[110px] px-4">
                {children}
            </main>
            <Footer/>
        </div>
        </body>
        </html>
    )
}