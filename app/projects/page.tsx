import React from 'react'
import ProjectPage from "@/app/components/projectsPage";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore the projects built by Sena akat using Java, React, and modern web technologies.",
    alternates: {
        canonical: "/projects",
    },
    openGraph: {
        title: "Projects | Sena AKAT | Full Stack Developer",
        description: "Explore the projects built by Senaakat using Java, React, and modern web technologies.",
        url: "https://senaakat.com.tr/projects",
    },
}

export default function Home() {

    return (
        <ProjectPage/>
    )
}