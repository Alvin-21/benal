'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const stats = [
  { num: '50', label: 'Projects delivered' },
  { num: '6',  label: 'Years of experience' },
  { num: '30', label: 'Clients served' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animFrame: number

    type Node = {
      x: number; y: number; vx: number; vy: number
      r: number; color: string; pulse: number; pulseSpeed: number
      alpha: number; anchor?: boolean
    }

    let nodes: Node[] = []
    let W = 0, H = 0
    const TEAL   = '#22AFA9'
    const ORANGE = '#ED5725'

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect()
      W = canvas!.width  = rect.width
      H = canvas!.height = rect.height
      initNodes()
    }

    function initNodes() {
      nodes = []
      const count = Math.min(28, Math.floor((W * H) / 14000))
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 2.5 + 1.5,
          color: Math.random() < 0.65 ? TEAL : ORANGE,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
          alpha: 0.4 + Math.random() * 0.5,
        })
      }
      nodes.push(
        { x: W*0.5,  y: H*0.5,  vx:0, vy:0, r:4,   color:TEAL,   pulse:0,          pulseSpeed:0.015, alpha:0.9,  anchor:true },
        { x: W*0.25, y: H*0.3,  vx:0, vy:0, r:3,   color:ORANGE, pulse:Math.PI,    pulseSpeed:0.018, alpha:0.85, anchor:true },
        { x: W*0.78, y: H*0.7,  vx:0, vy:0, r:3.5, color:TEAL,   pulse:Math.PI*.5, pulseSpeed:0.012, alpha:0.85, anchor:true },
      )
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H)
      const grd = ctx!.createRadialGradient(W*.5, H*.45, 0, W*.5, H*.45, W*.45)
      grd.addColorStop(0, 'rgba(34,175,169,0.04)')
      grd.addColorStop(1, 'transparent')
      ctx!.fillStyle = grd
      ctx!.fillRect(0, 0, W, H)

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i+1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 140) {
            const a = (1 - dist/140) * 0.25
            ctx!.strokeStyle = nodes[i].color === TEAL ? `rgba(34,175,169,${a})` : `rgba(237,87,37,${a*.7})`
            ctx!.lineWidth = 0.7
            ctx!.beginPath()
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.stroke()
          }
        }
      }

      nodes.forEach(node => {
        node.pulse += node.pulseSpeed
        const glowR = node.r * (1 + Math.sin(node.pulse) * 0.3)
        const g = ctx!.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowR*8)
        const isTeal = node.color === TEAL
        g.addColorStop(0, isTeal ? `rgba(34,175,169,${node.alpha*.3})` : `rgba(237,87,37,${node.alpha*.25})`)
        g.addColorStop(1, 'transparent')
        ctx!.fillStyle = g
        ctx!.beginPath()
        ctx!.arc(node.x, node.y, glowR*8, 0, Math.PI*2)
        ctx!.fill()
        ctx!.fillStyle = node.color
        ctx!.globalAlpha = node.alpha
        ctx!.beginPath()
        ctx!.arc(node.x, node.y, glowR, 0, Math.PI*2)
        ctx!.fill()
        ctx!.globalAlpha = 1
        if (!node.anchor && !prefersReduced) {
          node.x += node.vx; node.y += node.vy
          if (node.x < 0 || node.x > W) node.vx *= -1
          if (node.y < 0 || node.y > H) node.vy *= -1
        }
      })

      if (!prefersReduced) animFrame = requestAnimationFrame(draw)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement!)
    draw()
    return () => { cancelAnimationFrame(animFrame); ro.disconnect() }
  }, [])

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden pt-[120px] pb-20"
    >
      {/* Layered backgrounds */}
      <div className="hero-radial-bg absolute inset-0" aria-hidden="true" />
      <div className="hero-grid-bg absolute inset-0"   aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* ── Content ── */}
          <div>
            {/* Badge */}
            <div
              className="hero-animate inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-3.5 py-1.5 mb-7"
              aria-hidden="true"
            >
              <div className="pulse-dot w-1.5 h-1.5 rounded-full bg-teal" />
              <span className="text-[12px] font-medium text-teal">Digital Solutions Provider</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="hero-animate-delay text-[clamp(44px,7vw,82px)] font-extrabold tracking-[-0.03em] leading-[1.05] text-cream mb-5"
            >
              Digital Solutions<br />
              Built for the{' '}
              <span className="text-teal">Future</span>
            </h1>

            {/* Sub */}
            <p className="hero-animate-delay2 text-[clamp(16px,1.5vw,18px)] leading-[1.8] text-cream/75 mb-9 max-w-[480px]">
              We design, develop and deliver technology solutions that help businesses operate smarter,
              connect with their customers and grow in a digital-first world.
            </p>

            {/* CTAs */}
            <div className="hero-animate-delay3 flex flex-wrap gap-3 items-center">
              <Link
                href="#cta"
                className="inline-flex items-center gap-2 bg-cta text-white text-[15px] font-semibold px-7 py-3.5 rounded-[9px] transition-all duration-200 hover:bg-[#f06535] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(237,87,37,0.38)] group"
              >
                Consult Now
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-cream/75 px-5 py-3.5 rounded-[9px] border border-gold/[0.18] transition-all duration-200 hover:text-cream hover:border-gold/35"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Stats */}
            {/* <div
              className="hero-animate-delay3 flex gap-7 mt-11 pt-7 border-t border-gold/10"
              aria-label="Company highlights"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[28px] font-extrabold text-cream tracking-[-0.03em] leading-none mb-0.5">
                    {s.num}<span className="text-teal">+</span>
                  </div>
                  <div className="text-[12px] text-cream/55 font-medium">{s.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* ── Canvas visual ── */}
          <div aria-hidden="true" className="relative h-[260px] sm:h-[360px] lg:h-[520px]">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
