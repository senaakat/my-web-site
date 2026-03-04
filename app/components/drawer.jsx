"use client"

import React from 'react'

function Drawer({ menuRef, MenuItems, NavLink,open, setOpen }) {
  return (
    <div>
    <div className="md:hidden justify-self-end">
          <button
            type="button"
            onClick={() => setOpen((p) => !p)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            className="inline-flex items-center justify-center p-2 rounded-md border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/30"
          >
            {!open ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            )}
          </button>
    </div>

      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto bg-black/40" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer (alttan kayan panel) */}
      <div
        id="mobile-drawer"
        ref={menuRef}
        className={`md:hidden fixed left-0 right-0 bottom-0 z-50 transform transition-transform duration-300 ease-out
          ${open ? "translate-y-0" : "translate-y-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-[env(safe-area-inset-bottom)]">
          <div className="rounded-t-3xl bg-black/90 shadow-xl border border-black/10 overflow-hidden">
            {/* Drag handle */}
            <div className="flex justify-center py-2">
              <span className="h-1.5 w-12 rounded-full bg-black/15" />
            </div>

            {/* Menü öğeleri */}
            <div className="px-4 pb-2">
              <nav className="flex flex-col divide-y divide-black/10">
                {MenuItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `py-3 font-serif font-semibold transition ${
                        isActive
                          ? "text-orange-700"
                          : "text-gray-300 hover:text-orange-700"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* CV butonu */}
            <div className="p-4">
              <a
                href="/SENA-AKAT-Resume-English.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-black/80 text-white px-4 py-2 rounded-xl text-sm"
                onClick={() => setOpen(false)}
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Drawer
