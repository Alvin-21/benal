import FadeUp from '@/app/components/ui/FadeUp'

const services = [
  {
    title: 'Software Development',
    desc:  'Custom software built to streamline processes, improve productivity and solve specific business challenges at scale.',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    title: 'Digital Marketing',
    desc:  'Strategic campaigns designed to increase brand visibility, drive targeted traffic, and maximise customer conversion across digital channels.',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>,
  },
  {
    title: 'Networking & Infrastructure',
    desc:  'Secure, reliable connectivity solutions designed to optimize network architecture, streamline systems management, and safeguard enterprise IT environments.',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <path d="M8.5 7.5h7M8.5 16.5h7M7 8.5l-1 1.5M17 8.5l1 1.5M7 15.5l-1-1.5M17 15.5l1-1.5" />
      </svg>,
  },
  {
    title: 'Security & Surveillance',
    desc:  'Advanced physical and digital security solutions engineered to protect assets, ensure real-time threat monitoring, and safeguard organizational operations.',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.75 18.5 5v6.5c0 4.42-2.9 8.3-6.5 10.25C8.4 19.8 5.5 15.92 5.5 11.5V5L12 2.75Z" />
        <path d="M9.5 12.5 11.1 14l3.4-4" />
      </svg>,
  },
  {
    title: 'Computer Literacy',
    desc:  'Essential digital skills training to empower users, improve workplace productivity, and build long-term organizational capability.',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
  },
  {
    title: 'IT Support & Maintenance',
    desc:  'Proactive technical support and maintenance services engineered to optimize system uptime, resolve infrastructure issues, and deliver continuous peak performance.',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  },
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-teal mb-4">What We Build</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 id="services-heading" className="text-[clamp(34px,5vw,58px)] font-extrabold tracking-[-0.025em] leading-[1.1] text-cream">
              Technology That Solves<br />Real Problems
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="max-w-[560px] mx-auto mt-4 text-xl leading-[1.75] text-cream/55">
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

                <h3 className="text-xl font-bold text-cream tracking-[-0.01em] mb-2.5">{s.title}</h3>
                <p className="text- leading-[1.7] text-cream/55">{s.desc}</p>

                {/* Reveal arrow on hover */}
                <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-cta opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
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
