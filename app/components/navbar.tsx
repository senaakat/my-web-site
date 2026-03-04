"use client"

import React, { useEffect, useState, useRef } from "react";
import { MenuItems } from "../lib/MenuItems.js";
import Link from "next/link";
import Drawer from "./drawer.tsx";
import ActiveLink from "./activeLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <nav className="w-full absolute top-0 left-0 z-50 ">
      {/* 🔁 CHANGED: mobilde 2 sütun, md'de 3 sütun */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center px-4 sm:px-6 py-2">
        {/* Logo (sol) */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo2.gif"
              alt="Logo"
              className="h-[150px] w-[150px] object-contain"
            />
          </Link>
        </div>

        {/* Menü (ortada) */}
        {/* 🔧 FIX: mobilde gizle, md ve üstünde göster */}
        <div className="hidden md:block justify-self-center relative">
          <div className="flex space-x-10 whitespace-nowrap relative pb-6">
            {MenuItems.map((item) => (
              <ActiveLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `relative transition font-semibold font-serif text-lg ${
                    isActive
                      ? "text-orange-700"
                      : "text-gray-900 hover:text-orange-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {/* Nokta */}
                    {isActive && (
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-2 h-2 bg-orange-700 rounded-full transition-all duration-300 ease-in-out" />
                    )}
                    {/* Çizgi */}
                    <span
                      className={`absolute left-0 -bottom-[24px] w-full bg-black transition-all duration-300 ease-in-out ${
                        isActive ? "h-[5px]" : "h-[2px]"
                      }`}
                    />
                  </>
                )}
              </ActiveLink>
            ))}
          </div>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />
        </div>

        {/* CV butonu (sağ) */}
        <div className="hidden md:flex justify-self-end">
          <a
            href="/SENA-AKAT-Resume-English.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 text-gray-200 px-4 py-2 rounded-3xl cursor-pointer"
          >
            View Resume
          </a>
        </div>
            <Drawer
              menuRef={menuRef}
              MenuItems={MenuItems}
              NavLink={ActiveLink}
              open={open}
              setOpen={setOpen}
            />
        </div>
    </nav>
  );
}
