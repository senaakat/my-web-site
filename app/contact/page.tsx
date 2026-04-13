import React from 'react';
import {Metadata} from "next";
import ContactInfo from "@/app/components/contact/ContactInfo";
import FormBox from "@/app/components/contact/FormBox";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Senaakat for collaboration, freelance work, or just to say hi.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact | Sena AKAT | Full Stack Developer",
        description: "Get in touch with Senaakat for collaboration, freelance work, or just to say hi.",
        url: "https://senaakat.com.tr/contact"
    }
}

export default function Contact() {

    return (
        <div className="grid grid-cols-1 md:flex py-10 justify-start items-start md:ml-32 gap-x-0">
            {/* Sol taraf */}
            <div className="flex flex-col w-full items-start max-w-2xl space-y-6">
                <h1 className="
          text-4xl
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
                    Get in Touch
                </h1>

                <div className="flex space-x-2">
                    <span className="w-16 h-2 bg-black rounded"></span>
                    <span className="w-12 h-2 bg-black rounded"></span>
                    <span className="w-8 h-2 bg-black rounded"></span>
                </div>

                <h2 className="text-2xl font-bold text-[rgb(241,144,74)]">
                    I'd like to hear from you!
                </h2>

                <p className="text-1xl text-black max-w-xl font-mono">
                    If you have any inquiries, any feedback or just want to say hi, please use the contact form!
                </p>
                {/* Sağ taraf */}
                <ContactInfo/>
            </div>
            {/* Alt taraftaki form kutusu */}
            <FormBox/>
        </div>
    );
}
