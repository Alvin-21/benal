import Link from 'next/link'
import FadeUp from '@/app/components/ui/FadeUp'

export default function CTA() {
  return (
    <section id="cta" aria-labelledby="cta-heading" className="relative py-28 overflow-hidden">
      <div className="cta-radial-bg absolute inset-0" aria-hidden="true" />
      {/* Centre glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(237,87,37,0.12),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="text-center max-w-[640px] mx-auto">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cta/80 mb-5">
              Ready to Start?
            </p>
            <h2
              id="cta-heading"
              className="text-[clamp(34px,5vw,58px)] font-extrabold tracking-[-0.025em] leading-[1.1] text-cream mb-4"
            >
              Have a Digital<br />Challenge?
            </h2>
            <p className="text-[17px] text-cream/55 mb-9 leading-[1.8]">
              Let&apos;s turn your idea, challenge or opportunity into a technology solution that works —
              and keeps working as your organisation grows.
            </p>
            <div className="flex flex-wrap gap-3.5 justify-center">
              <Link
                href="mailto:hello@benaldigital.com"
                className="inline-flex items-center gap-2 bg-cta text-white text-[15px] font-semibold px-8 py-3.5 rounded-[9px] transition-all duration-200 hover:bg-[#f06535] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(237,87,37,0.4)]"
              >
                Let&apos;s Talk
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link
                href="#services"
                className="text-[15px] font-medium text-cream/75 px-6 py-3.5 rounded-[9px] border border-gold/[0.18] transition-all duration-200 hover:text-cream hover:border-gold/35"
              >
                View Our Solutions
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
