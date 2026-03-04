"use client"

import React from 'react'
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

const SERVICE_ID = 'service_6qu9rol';
const TEMPLATE_ID = 'template_rpab7vr';
const PUBLIC_KEY  = 'fGj3cNzSSGh9XRYmL';

export default function FormBox() {
    const formRef = useRef(null);
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setMsg('');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast.success('Message sent successfully! 🎉');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      toast.error('Message failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
      <form 
         ref={formRef}
         onSubmit={sendEmail}
         className="flex flex-col bg-black/30 items-center mt-8 p-6 space-y-6 rounded-lg shadow-lg ">
        <h3 className=" text-4xl font-extrabold ">Message Me 😊</h3>

      {/* First & Last Name */}
        <div className="flex w-full space-x-4">
          <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              className="w-1/2 p-3 rounded bg-black/20 text-white border border-gray-500 focus:outline-none focus:border-[rgb(241,144,74)]"
          />
          <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              className="w-1/2 p-3 rounded bg-black/20 text-white border border-gray-500 focus:outline-none focus:border-[rgb(241,144,74)]"
          />
        </div>

          {/* Email */}
          <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full p-3 rounded bg-black/20 text-white border border-gray-500 focus:outline-none focus:border-[rgb(241,144,74)]"
          />

          {/* Message */}
          <textarea
              name="message"
              placeholder="Your Message..."
              rows="5"
              required
              className="w-full p-3 rounded bg-black/20 text-white border border-gray-500 focus:outline-none focus:border-[rgb(241,144,74)]"
          ></textarea>

          {/* Gönder Butonu */}
          <button 
              type="submit"
              disabled={sending}
              className="bg-[rgb(241,144,74)] hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition duration-300">
              {sending ? 'Gönderiliyor…' : 'Send Message'}
          </button>
         {msg && <p className="text-sm text-white/90">{msg}</p>}
      </form>
  )
}