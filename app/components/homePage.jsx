"use client"

import React from 'react'
import {FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
import {useEffect, useState} from 'react';

const JobList = [
    "I am a FullStack Developer...",
    "I am a Web Developer...",
    "I am a Computer Engineer...",
    "I am a Software Developer...",
    "I am a Freelancer...",
    "I am a Designer",
];

export default function HomePage() {

    const [currentJobIndex, setCurrentJobIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        if (subIndex === JobList[currentJobIndex].length + 1 && !deleting) {
            setTimeout(() => {
                setDeleting(true)
            }, 1000);
            return;
        }

        if (deleting && subIndex === 0) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setDeleting(false);
            setCurrentJobIndex((prevIndex) => (prevIndex + 1) % JobList.length);
            return;
        }
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (deleting ? -1 : 1));
        }, deleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [subIndex, deleting, currentJobIndex]);

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(blinkInterval);
    }, []);

    return (
        <div className=" overflow-hidden">
            {/* Sosyal medya ikonları (sola ortalanmış, dikey) */}
            <div
                className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-6 z-10 md:ml-[27%]">
                {/* Instagram */}
                <a
                    href="https://www.instagram.com/sena_akat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-900 text-3xl transition duration-300"
                >
                    <FaInstagram/>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/senaakat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black  hover:text-white text-3xl transition duration-300"
                >
                    <FaGithub/>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/sena-akat-9baaa0226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(14,157,234)] hover:text-blue-950 text-3xl transition duration-300"
                >
                    <FaLinkedin/>
                </a>
            </div>
            <div className="flex flex-col mt-0 items-center justify-center h-full text-center ">
                <div className="relative w-[400px] h-[400px]">
                    {/* Arka plandaki gif */}
                    <img
                        src="/cv.gif"
                        alt="Loading..."
                        className="w-full h-full object-contain max-w-[90%] md:max-w-full"
                    />

                    {/* Görünmez buton */}
                    <a
                        href="/SENA-AKAT-Resume-English.pdf" // tıklanınca açılacak veya indirilecek CV dosyan
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-[10%] left-[75%] w-[80px] h-[80px] opacity-0 cursor-pointer"
                    >
                    </a>
                </div>

                <h1 className="text-7xl font-bold  animate-fade-in  ">
                    SENA AKAT
                </h1>

                <h2 className="text-2xl font-mono  overflow-hidden whitespace-nowrap border-r-4 border-black animate-typing max-w-fit">
                    {JobList[currentJobIndex].substring(0, subIndex)}
                    <span className={blink ? "border-r-2 border-black" : "border-r-2 border-transparent"}>
              &nbsp;
            </span>
                </h2>
            </div>
        </div>
    )
}


