import FadeUp from '@/app/components/ui/FadeUp'

const steps = [
  { num: '01', title: 'Discover',     desc: 'Understand the business, users, challenges and objectives. We ask the right questions before proposing any solution.' },
  { num: '02', title: 'Design',       desc: 'Create the architecture, user experience and solution strategy. Aligning on approach before development begins.' },
  { num: '03', title: 'Develop',      desc: 'Build, integrate, test and refine the solution. Iterative delivery keeps you informed and involved throughout.' },
  { num: '04', title: 'Deploy & Grow',desc: 'Launch, monitor, maintain and continuously improve the solution as your business evolves and grows.' },
]

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="relative py-28 overflow-hidden">
      <div className="process-radial-bg absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-teal mb-4">How We Work</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 id="process-heading" className="text-[clamp(34px,5vw,58px)] font-extrabold tracking-[-0.025em] leading-[1.1] text-cream">
              From Idea to Impact
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="max-w-[560px] mx-auto mt-4 text-[17px] leading-[1.75] text-cream/55">
              A structured, transparent process that keeps you informed and in control at every stage.
            </p>
          </FadeUp>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector — visible on md+ only */}
          <div
            className="process-connector hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0" role="list">
            {steps.map((s, i) => {
              const isAccent = i % 2 === 1
              return (
                <FadeUp key={s.num} delay={i * 100}>
                  <div
                    role="listitem"
                    className="relative z-10 flex md:block items-start md:items-center gap-5 md:gap-0 text-left md:text-center px-0 md:px-6"
                  >
                    {/* Step circle */}
                    <div className="flex md:justify-center mb-0 md:mb-6 shrink-0">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center text-[13px] font-bold tracking-[0.05em] border ${
                        isAccent
                          ? 'bg-cta/8 border-cta/25 text-cta'
                          : 'bg-surface border-gold/[0.18] text-teal'
                      }`}>
                        {s.num}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[17px] font-bold text-cream tracking-[-0.01em] mb-2.5">{s.title}</h3>
                      <p className="text-sm leading-[1.7] text-cream/55">{s.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
