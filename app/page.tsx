import React from 'react'
import HomePage from "./components/homePage";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "<Sena AKAT/>",
    description: "Hi, I'm Senaakat. A Full Stack Developer specializing in Java and React.",
    openGraph: {
        title: "Sena AKAT | Full Stack Developer",
        description: "Hi, I'm Senaakat. A Full Stack Developer specializing in Java and React.",
        url: "https://senaakat.com.tr",
        images: ["/og-image.png"],
    },
}

export default function Home() {

    return (
       <HomePage/>
    )
}