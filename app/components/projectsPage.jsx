"use client"

import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {useState} from 'react';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {motion, AnimatePresence} from "framer-motion";
import {useEffect} from 'react';
import {ProjectItems} from "../lib/MenuItems";

export const metadata = {
    title: "Projects - Sena AKAT",
}

export default function Projects() {

    const [indexes, setIndexes] = useState(() => ProjectItems.map(() => 0));
    const [dirs, setDirs] = useState(() => ProjectItems.map(() => 1));
    const [paused, setPaused] = useState(false);

    const goPrev = (projIdx) => {
        setIndexes((prev) =>
            prev.map((val, i) =>
                i === projIdx
                    ? (val - 1 + ProjectItems[projIdx].images.length) %
                    ProjectItems[projIdx].images.length
                    : val
            )
        );
        setDirs((prev) => prev.map((d, i) => (i === projIdx ? -1 : d)));
    };

    const goNext = (projIdx) => {
        setIndexes((prev) =>
            prev.map((val, i) =>
                i === projIdx
                    ? (val + 1) % ProjectItems[projIdx].images.length
                    : val
            )
        );
        setDirs((prev) => prev.map((d, i) => (i === projIdx ? 1 : d)));
    };

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => {
            setIndexes((prev) =>
                prev.map((val, i) => (val + 1) % (ProjectItems[i].images?.length || 1))
            );
            setDirs((prev) => prev.map(() => 1));
        }, 2000);
        return () => clearInterval(id);
    }, [paused]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            position: "absolute",
        }),
        center: {x: 0, opacity: 1, position: "relative"},
        exit: (direction) => ({
            x: direction > 0 ? -100 : 100,
            opacity: 0,
            position: "absolute",
        }),
    };

    const linkLabels = {
        primary: "Git Hub (Frontend)",
        secondary: "Git Hub (Backend)",
        tertiary: "Git Hub (AI)",
        quaternary: "Git Hub (Mobile App)",
    };

    return (
        <div className="flex flex-col w-full items-center space-y-8">
            <h1 className="
        text-5xl
        font-extrabold
        tracking-wide
        text-transparent
        leading-[1.2]
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
                My Projects
            </h1>
            <a
                href="https://github.com/senaakat"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-gray-800 hover:text-white text-3xl transition duration-300"
            >
                <FaGithub className='w-24 h-24'/>
            </a>

            {ProjectItems.map((item, index) => {
                const imgSrc = item.images?.[indexes[index]];
                const imgCount = item.images?.length || 0;

                // Split label into lines (sentence-based). If you prefer bullets, swap <p> with <li> and wrap in a <ul>.
                const labelLines = item.label
                    ? item.label
                        .split(/(?<=[.!?])\s+/)
                        .filter(Boolean)
                    : [];

                return (
                    <div
                        key={index}
                        className="bg-[rgb(20,24,26)] w-[80%] min-h-[300px] shadow-md rounded-lg px-6 py-4 flex flex-col md:flex-row items-stretch gap-6 transform transition duration-300 ease-in-out hover:bg-[rgb(36,79,90)] hover:scale-105 hover:shadow-2xl"
                    >
                        {/* Left: Image carousel */}
                        <div
                            className="relative md:w-[45%] w-full aspect-video overflow-hidden rounded-lg border border-gray-800 ml-5 "
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
                        >
                            {imgSrc ? (
                                <>
                                    <div className="w-full h-full relative">
                                        <AnimatePresence initial={false} custom={dirs[index]}>
                                            <motion.img
                                                key={imgSrc}
                                                custom={dirs[index]}
                                                variants={variants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={{duration: 0.45, ease: "easeInOut"}}
                                                src={imgSrc}
                                                alt={`${item.name} screenshot ${indexes[index] + 1} / ${imgCount}`}
                                                className="absolute inset-0 w-full h-full object-contain"
                                                draggable={false}
                                            />
                                        </AnimatePresence>
                                    </div>

                                    {/* Left arrow */}
                                    <button
                                        type="button"
                                        onClick={() => goPrev(index)}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
                                        aria-label="Previous image"
                                    >
                                        <FiChevronLeft className=" w-6 h-6"/>
                                    </button>

                                    {/* Right arrow */}
                                    <button
                                        type="button"
                                        onClick={() => goNext(index)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
                                        aria-label="Next image"
                                    >
                                        <FiChevronRight className="w-6 h-6"/>
                                    </button>

                                    <div
                                        className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded bg-black/60">
                                        {indexes[index] + 1} / {imgCount}
                                    </div>
                                </>
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-500">
                                    No images
                                </div>
                            )}
                        </div>

                        {/* Right: Text & links */}
                        <div className="flex-1 flex flex-col">
                            <div className="flex items-center justify-center gap-4">
                                <div className="text-center">
                                    {/* Top-right name */}
                                    <h2 className="text-[rgb(182,73,118)] text-2xl md:text-3xl font-extrabold tracking-tight">
                                        {item.name}
                                    </h2>
                                </div>
                            </div>

                            {/* Label lines */}
                            <div
                                className="text-gray-300 mt-4 mb-4 space-y-2 text-lg md:text-base leading-relaxed mx-auto text-left max-w-2xl tracking-normal">
                                {labelLines.length > 0 ? (
                                    labelLines.map((line, i) => (
                                        <p key={i} className="whitespace-pre-wrap">
                                            {line}
                                        </p>
                                    ))
                                ) : (
                                    <p className="text-gray-300">—</p>
                                )}
                            </div>

                            {/* Links as buttons */}
                            <div className="mt-6 flex flex-wrap gap-3 justify-center">
                                {item.links &&
                                    Object.entries(item.links).map(([key, href]) => (
                                        href ? (
                                            <a
                                                key={key}
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 hover:border-2 hover:border-[rgb(182,73,118)] bg-white/15 hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-white"
                                                title={href}
                                            >
                                                <FaGithub className=" text-3xl transition duration-300"/>
                                                <span className="text-gray-500 font-medium hover:text-black ">
                          {linkLabels[key] ?? key}
                        </span>
                                            </a>
                                        ) : null
                                    ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}


