'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const megaServices = [
  { label: 'Software Development', items: ['Web Development', 'Mobile Apps', 'Cloud Computing', 'Gaming Development'] },
  { label: 'Digital Marketing & Branding', items: ['SEO (Search Engine Optimization)', 'Branding & Re-Branding', 'Content Creation'] },
  { label: 'Networking & Infrastructure', items: ['Network Device Management', 'Install Network Devices', 'Network Troubleshooting'] },
  { label: 'CCTV Installation & Management', items: ['Remote Viewing', 'Monitoring System Setup'] },
  { label: 'Computer Literacy', items: ['Hardware & Orientation', 'MS Office Productivity', 'Email & Communication', 'File Management', 'Web Browsing & Internet Skills'] },
]

const navLinks = [
  { label: 'Portfolio', href: '#why' },
  { label: 'Media Library', href: '#process' },
]

const mobileLinks = [
  { label: 'Solutions', href: '#services' },
  { label: 'Portfolio', href: '#why' },
  { label: 'Media Library', href: '#process' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [dropdownOpen])

  return (
    <>
      {/* ── Nav bar ── */}
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-300 ${scrolled
            ? 'bg-surface/90 backdrop-blur-md border-gold/10'
            : 'bg-transparent border-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Benal Digital — Home"
            className="flex items-center gap-2.5 font-extrabold text-2xl text-cream tracking-tight"
          >
            <div
              className="w-8 h-8 rounded-[7px] flex items-center justify-center text-sm font-black text-bg bg-gradient-to-br from-teal to-teal/50"
              aria-hidden="true"
            >
              B
            </div>
            Benal Digital
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services mega-dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xl font-medium text-cream/75 rounded-md transition-colors duration-200 hover:text-cream hover:bg-cream/5 cursor-pointer"
              >
                Solutions
                <svg
                  width="18" height="18" fill="none" stroke="#22AFA9" strokeWidth="2"
                  viewBox="0 0 24 24" aria-hidden="true"
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                role="menu"
                className={`absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/3 w-[1000px] bg-surface border border-gold/[0.18] rounded-2xl p-7 grid grid-cols-4 gap-5 shadow-[0_24px_80px_rgba(0,0,0,0.6)] transition-all duration-200 ${dropdownOpen
                    ? 'opacity-100 pointer-events-auto translate-y-0'
                    : 'opacity-0 pointer-events-none -translate-y-1.5'
                  }`}
              >
                {megaServices.map((col) => (
                  <div key={col.label}>
                    <div className="text-base font-bold tracking-[0.18em] uppercase text-teal mb-2.5 pb-2 border-b border-teal/[0.15]">
                      {col.label}
                    </div>
                    {col.items.map((item) => (
                      <Link
                        key={item}
                        href="#services"
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                        className="block text-sm text-cream/75 py-1.5 transition-colors duration-150 hover:text-cream"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-lg font-medium text-cream/75 rounded-md transition-colors duration-200 hover:text-cream hover:bg-cream/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right utilities */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <Link
              href="#"
              className="text-[13px] font-medium text-cream/55 px-3 py-2 rounded-md transition-colors duration-200 hover:text-teal"
            >
              Client Portal
            </Link> */}
            <Link
              href="#cta"
              className="bg-cta text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:bg-[#f06535] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(237,87,37,0.35)]"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 rounded-md transition-colors duration-200 hover:bg-cream/5"
            onClick={() => {
              setMobileOpen(!mobileOpen)
              setMobileSolutionsOpen(false)
            }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobileNav"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-[22px] h-[1.5px] bg-cream rounded-sm transition-all duration-300"
                style={{
                  transform: mobileOpen
                    ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                      : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                        : 'scaleX(0)'
                    : 'none',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
                aria-hidden="true"
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        id="mobileNav"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={`fixed inset-0 z-[99] bg-bg/[0.97] backdrop-blur-xl flex flex-col gap-2 overflow-y-auto pt-28 px-6 pb-10 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {mobileLinks.map((link) => link.label === 'Solutions' ? (
          <div key={link.label} className="border-b border-gold/10">
            <button
              type="button"
              onClick={() => setMobileSolutionsOpen((prev) => !prev)}
              aria-expanded={mobileSolutionsOpen}
              aria-controls="mobileSolutions"
              className="flex w-full items-center justify-between text-[22px] font-bold text-cream py-3 tracking-tight"
            >
              {link.label}
              <svg
                width="22" height="22" fill="none" stroke="#22AFA9" strokeWidth="2"
                viewBox="0 0 24 24" aria-hidden="true"
                className={`transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div
              id="mobileSolutions"
              className={`overflow-hidden transition-all duration-300 ${mobileSolutionsOpen ? 'max-h-[900px] pb-3 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              {megaServices.map((service) => (
                <div key={service.label} className="py-2">
                  <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-teal mb-1.5">
                    {service.label}
                  </div>
                  {service.items.map((item) => (
                    <Link
                      key={item}
                      href="#services"
                      onClick={() => {
                        setMobileOpen(false)
                        setMobileSolutionsOpen(false)
                      }}
                      className="block py-1 text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => {
              setMobileOpen(false)
              setMobileSolutionsOpen(false)
            }}
            className="text-[22px] font-bold text-cream py-3 border-b border-gold/10 block tracking-tight"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#cta"
          onClick={() => setMobileOpen(false)}
          className="mt-5 bg-cta text-white text-center py-3.5 text-base font-semibold rounded-[9px] block"
        >
          Let&apos;s Talk →
        </Link>
      </div>
    </>
  )
}