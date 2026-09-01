import FadeUp from '@/app/components/ui/FadeUp'

const services = [
  {
    title: 'Web Development',
    desc:  'Modern, responsive and high-performance websites and web applications designed around your business goals and users.',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  },
  {
    title: 'Software Solutions',
    desc:  'Custom software built to streamline processes, improve productivity and solve specific business challenges at scale.',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    title: 'Digital Platforms',
    desc:  'Scalable digital platforms that connect businesses, customers, teams and data in one coherent system.',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>,
  },
  {
    title: 'IT Solutions',
    desc:  'Technology solutions that help businesses improve their infrastructure, systems and digital operations reliably.',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>,
  },
  {
    title: 'Business Automation',
    desc:  'Automate repetitive workflows and processes to save time, reduce errors and free your team for high-value work.',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  },
  {
    title: 'Digital Consulting',
    desc:  'Technology strategy and guidance to help organisations make smarter digital decisions with confidence and clarity.',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>,
  },
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal mb-4">What We Build</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 id="services-heading" className="text-[clamp(34px,5vw,58px)] font-extrabold tracking-[-0.025em] leading-[1.1] text-cream">
              Technology That Solves<br />Real Problems
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="max-w-[560px] mx-auto mt-4 text-[17px] leading-[1.75] text-cream/55">
              From digital experiences to business systems, we build practical technology solutions designed around your goals.
            </p>
          </FadeUp>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 80}>
              {/* group enables child group-hover: selectors */}
              <div className="service-card group relative bg-surface border border-gold/10 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:border-cta/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(237,87,37,0.05)] cursor-default h-full">

                {/* Icon */}
                <div className="w-[46px] h-[46px] bg-teal/10 rounded-[10px] flex items-center justify-center mb-5 text-teal transition-all duration-300 group-hover:bg-teal/15 group-hover:shadow-[0_0_16px_rgba(34,175,169,0.2)]">
                  {s.icon}
                </div>

                <h3 className="text-[17px] font-bold text-cream tracking-[-0.01em] mb-2.5">{s.title}</h3>
                <p className="text-sm leading-[1.7] text-cream/55">{s.desc}</p>

                {/* Reveal arrow on hover */}
                <span className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-medium text-cta opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Learn more
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
