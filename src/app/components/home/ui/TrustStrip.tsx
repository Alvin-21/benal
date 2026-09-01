const items = [
  {
    label: 'Web Development',
    icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  },
  {
    label: 'Custom Software',
    icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    label: 'Digital Platforms',
    icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>,
  },
  {
    label: 'IT Solutions',
    icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
  },
  {
    label: 'Business Automation',
    icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  },
  {
    label: 'Digital Consulting',
    icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>,
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
            <span className="text-[13px] font-medium text-cream/55 whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
