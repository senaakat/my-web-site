import React from 'react'
import {LogoItems} from "../lib/MenuItems";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Experience",
    description: "Senaakat's professional experience as a Full Stack Developer in Java and React ecosystems.",
    alternates: {
        canonical: "/experience",
    },
    openGraph: {
        title: "Experience | Sena AKAT | Full Stack Developer",
        description: "Senaakat's professional experience as a Full Stack Developer in Java and React ecosystems.",
        url: "https://senaakat.com.tr/experience",
        images: ["/og-image.png"],
    },
}

export default function Experience() {

    return (
        <div className="min-h-screen py-10 flex justify-center items-start">
            <div className="flex flex-col w-full items-center space-y-8">
                <h1 className="
        text-5xl
        font-extrabold
        tracking-wide
        text-transparent
        bg-clip-text
        bg-gradient-to-r
        from-black
        to-gray-700
        hover:from-blue-950
        hover:to-orange-800
        transition-colors
        duration-500
       drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]
      ">
                    Experience and Education
                </h1>
                {LogoItems.map((item, index) => (
                    <div
                        key={index}
                        className="
              bg-[rgb(20,24,26)]
              w-[80%]
              h-[150px]
              shadow-md
              rounded-lg
              px-6 py-4
              flex items-center
              space-x-4
              transform
              transition
              duration-300
              ease-in-out
              hover:bg-[rgb(36,79,90)]
              hover:scale-105 6
              hover:shadow-2xl
            "
                    >
                        {item.logo}
                        <div className="flex flex-col text-start">
                            <span className="text-white font-semibold">{item.name}</span>
                            <span className="text-gray-400 text-sm">{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


