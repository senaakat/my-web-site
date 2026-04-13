import React from 'react'
import {FaUser} from "react-icons/fa";
import {
    FaHtml5, FaCss3Alt, FaReact, FaJava, FaNodeJs, FaPhp, FaGitAlt,
    FaSwift,
} from "react-icons/fa";
import {
    SiFlutter, SiSpringboot, SiSymfony, SiDotnet, SiMongodb,
    SiPostgresql, SiMysql, SiPython
} from "react-icons/si";
import {SiC} from "react-icons/si";
import {FaDatabase} from 'react-icons/fa';
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Senaakat, a Full Stack Developer with expertise in Java and React.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About | Sena AKAT | Full Stack Developer",
        description: "Learn more about Senaakat, a Full Stack Developer with expertise in Java and React.",
        url: "https://senaakat.com.tr/about",
        images: ["/og-image.png"],
    },
}

export default function About() {

    const skillCategories = [
        {
            category: "Backend Development",
            skills: [
                {name: "Java", icon: <FaJava className="text-3xl text-red-500"/>},
                {name: "Spring Boot", icon: <SiSpringboot className="text-3xl text-green-700"/>},
                {name: "Node.js", icon: <FaNodeJs className="text-3xl text-green-600"/>},
                {name: "PHP", icon: <FaPhp className="text-3xl text-indigo-400"/>},
                {name: "Symfony", icon: <SiSymfony className="text-3xl text-gray-300"/>},
                {name: ".NET", icon: <SiDotnet className="text-3xl text-purple-600"/>},
            ],
        },
        {
            category: "Frontend Development",
            skills: [
                {name: "React", icon: <FaReact className="text-3xl text-blue-400"/>},
                {name: "HTML5", icon: <FaHtml5 className="text-3xl text-orange-500"/>},
                {name: "CSS3", icon: <FaCss3Alt className="text-3xl text-blue-500"/>},
                {name: "Flutter", icon: <SiFlutter className="text-3xl text-cyan-400"/>},
            ],
        },
        {
            category: "Mobile App Development",
            skills: [
                {name: "Flutter", icon: <SiFlutter className="text-3xl text-cyan-400"/>},
                {name: "Swift", icon: <FaSwift className="text-3xl text-orange-400"/>},
            ],
        },
        {
            category: "Database",
            skills: [
                {name: "MSSQL", icon: <FaDatabase className="text-3xl text-red-500"/>},
                {name: "MongoDB", icon: <SiMongodb className="text-3xl text-green-500"/>},
                {name: "PostgreSQL", icon: <SiPostgresql className="text-3xl text-blue-600"/>},
                {name: "MySQL", icon: <SiMysql className="text-3xl text-blue-400"/>},
            ],
        },
        {
            category: "Other",
            skills: [
                {name: "Git & GitHub", icon: <FaGitAlt className="text-3xl text-orange-400"/>},
                {name: "C", icon: <SiC className="text-3xl text-blue-400"/>},
                {name: "Python", icon: <SiPython className="text-3xl text-yellow-400"/>},
            ],
        },
    ];

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
                    Who am I?
                </h1>
                <div
                    className=" bg-[rgb(21,62,83)] w-[80%] shadow-md rounded-xl px-6 py-4 flex-col items-center space-x-4 transition duration-300 hover:drop-shadow-[0_0_10px_rgb(71,211,236)] ">
                    <div className="flex flex-row mb-4 items-center">
                        <FaUser className="text-2xl mr-5 text-[rgb(255,169,109)]"/>
                        <h2 className="text-xl font-bold text-[rgb(231,136,81)]">HELLO!</h2>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed text-justify tracking-normal pl-2 mb-5">
                        My passion for software development and analytical mindset drive me to excel in Full Stack
                        Development. With a Computer Engineering degree from Trakya University, I combine solid
                        theory with practical experience to deliver innovative web solutions.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed text-justify tracking-normal pl-2 mb-5">
                        I follow clean code and SOLID principles to build sustainable, scalable applications. Using
                        React.js on the frontend and .NET Core on the backend, I create modern web apps, ensuring
                        robust database management, system architecture, and efficient workflows with version
                        control and CI/CD.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed text-justify tracking-normal pl-2 mb-5">
                        Staying updated with tech trends, I embrace continuous learning and innovation. With strong
                        problem-solving skills and a collaborative approach, I deliver impactful results,
                        integrating best practices and emerging technologies into my projects.
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <video
                        className="w-[30%] h-[30%] rounded-lg shadow-lg border-2 border-blue-900"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/SA_max.mp4" type="video/mp4"/>
                    </video>
                </div>

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
               pt-10
              ">
                    Professional Skills
                </h1>
                <div className="space-y-10  ">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className=' pt-1'>
                            <h2 className="text-2xl font-bold text-blue-950 mb-1 text-center">{category.category}</h2>
                            <div className="flex flex-wrap gap-4 justify-center mt-1">
                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="bg-[rgb(20,24,26)] w-[200px] shadow-md rounded-lg px-4 py-4 flex items-center space-x-4 transition duration-300 hover:drop-shadow-[0_0_10px_rgb(71,211,236)]"
                                    >
                                        {skill.icon}
                                        <span className="text-white text-lg font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


