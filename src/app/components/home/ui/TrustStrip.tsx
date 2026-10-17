const items = [
  {
    label: 'Software Development',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    label: 'Digital Marketing',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>,
  },
  {
    label: 'Networking & Infrastructure',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <path d="M8.5 7.5h7M8.5 16.5h7M7 8.5l-1 1.5M17 8.5l1 1.5M7 15.5l-1-1.5M17 15.5l1-1.5" />
      </svg>
    ),
  },
  {
    label: 'Security & Surveillance',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.75 18.5 5v6.5c0 4.42-2.9 8.3-6.5 10.25C8.4 19.8 5.5 15.92 5.5 11.5V5L12 2.75Z" />
        <path d="M9.5 12.5 11.1 14l3.4-4" />
      </svg>
    ),
  },
  {
    label: 'Computer Literacy',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
  },
  {
    label: 'IT Support & Maintenance',
    icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  },
  
]

export default function TrustStrip() {
  return (
    <div
      aria-label="Core capabilities"
      className="py-7 border-t border-b border-gold/10 bg-surface/40"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center justify-center gap-2.5 px-8 py-3 text-teal border-b border-gold/10 ${
              i % 2 === 0 && i < items.length - 1 ? 'md:border-r md:border-gold/10' : ''
            } ${i % 3 === 2 && i < items.length - 1 ? 'lg:border-r lg:border-gold/10' : ''} last:border-b-0`}
          >
            {item.icon}
            <span className="font-medium text-cream/55 whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
