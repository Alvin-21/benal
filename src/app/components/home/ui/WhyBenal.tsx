import FadeUp from '@/app/components/ui/FadeUp'

const cards = [
  {
    num: '01', title: 'Built Around Your Business',
    desc: 'Solutions designed around real organisational needs rather than generic templates. We take time to understand your operations, your users and your goals before writing a single line of code.',
    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0H5m14 0h2m-2 0h-2M5 21H3m2 0h2M9 7h6m-6 4h6m-6 4h4" /></svg>,
  },
  {
    num: '02', title: 'Designed to Scale',
    desc: 'We build systems that can evolve alongside your organisation — architectures that handle growth without requiring a complete rebuild every few years.',
    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  },
  {
    num: '03', title: 'Modern Technology Stack',
    desc: "We use contemporary technologies, development practices and cloud-native architectures — chosen not because they're popular, but because they're the right tool for the problem.",
    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    num: '04', title: 'Long-Term Partnership',
    desc: "We provide ongoing support, optimisation and continuous improvement after launch. A successful project doesn't end at go-live — it evolves with your needs.",
    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  },
]

export default function WhyBenal() {
  return (
    <section id="why" aria-labelledby="why-heading" className="why-gradient-bg py-28 relative">
      {/* Gold vertical line */}
      <div className="why-gold-line absolute top-0 left-1/2 -translate-x-1/2 w-px h-20" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal mb-4">Our Approach</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 id="why-heading" className="text-[clamp(34px,5vw,58px)] font-extrabold tracking-[-0.025em] leading-[1.1] text-cream">
              Technology With Purpose
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="max-w-[560px] mx-auto mt-4 text-[17px] leading-[1.75] text-cream/55">
              We focus on business outcomes, not technology for its own sake. Every solution starts with
              understanding what your organisation actually needs to achieve.
            </p>
          </FadeUp>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <FadeUp key={c.num} delay={i * 100}>
              <div className="relative bg-surface border border-gold/10 rounded-2xl p-9 h-full">
                {/* Decorative icon */}
                <div className="absolute top-8 right-8 w-9 h-9 text-teal/30" aria-hidden="true">
                  {c.icon}
                </div>
                <p className="text-[11px] font-bold tracking-[0.15em] text-gold mb-3.5">{c.num}</p>
                <h3 className="text-[20px] font-bold text-cream tracking-[-0.02em] mb-2.5">{c.title}</h3>
                <p className="text-[15px] leading-[1.75] text-cream/55">{c.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
