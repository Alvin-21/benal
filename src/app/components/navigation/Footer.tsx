import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '#services' },
  { label: 'Work / Case Studies', href: '#why' },
  { label: 'Media Library', href: '#cta' },
  { label: 'Contact', href: '#' }
]
const serviceLinks = [
  'Software Development',
  'Digital Marketing & Branding',
  'Networking & Infrastructure',
  'Security & Surveillance',
  'IT Training & Capacity Building',
]

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
  },
  {
    label: 'Facebook',
    href: '#',
    icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
  },
  {
    label: 'X',
    href: '#',
    icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
]

const contactItems = [
  {
    text: 'hello@benaldigital.com',
    icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  },
  {
    text: '+254 111 801 112',
    icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
  },
  {
    text: 'Karen, Nairobi, Kenya',
    icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" role="contentinfo" className="bg-surface border-t border-gold/10 pt-[72px] pb-8">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.2fr_1.2fr] gap-12 pb-14 border-b border-gold/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 text-[18px] font-extrabold text-cream tracking-tight mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-teal to-teal/50 rounded-[7px] flex items-center justify-center text-sm font-black text-bg" aria-hidden="true">B</div>
              Benal Digital
            </div>
            <p className="text-sm text-cream/55 leading-[1.7] max-w-[240px] mb-6">
              Digital solutions for a smarter, more connected future.
            </p>
            <nav aria-label="Social media links" className="flex gap-2.5">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-[34px] h-[34px] rounded-[7px] border border-gold/10 flex items-center justify-center text-cream/55 transition-all duration-200 hover:text-teal hover:border-teal/30 hover:bg-teal/5"
                >
                  {s.icon}
                </Link>
              ))}
            </nav>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-gold mb-4">Navigation</p>
            <nav aria-label="Footer navigation">
              {navLinks.map((l) => (
                <Link key={l.label} href={l.href} className="block text-sm text-cream/55 mb-2.5 transition-colors duration-200 hover:text-cream">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-gold mb-4">Services</p>
            <nav aria-label="Services navigation">
              {serviceLinks.map((s) => (
                <Link key={s} href="#services" className="block text-sm text-cream/55 mb-2.5 transition-colors duration-200 hover:text-cream">
                  {s}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-gold mb-4">Contact</p>
            {contactItems.map((item) => (
              <div key={item.text} className="flex items-start gap-2.5 mb-3">
                <span className="text-teal shrink-0 mt-0.5">{item.icon}</span>
                <span className="text-sm text-cream/55 leading-[1.5]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-7">
          <p className="text-[13px] text-cream/45">© {currentYear} Benal Digital. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex gap-5">
            <Link href="#" className="text-[13px] text-cream/30 transition-colors duration-200 hover:text-cream/55">Privacy Policy</Link>
            <Link href="#" className="text-[13px] text-cream/30 transition-colors duration-200 hover:text-cream/55">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
