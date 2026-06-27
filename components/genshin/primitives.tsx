/* Shared glassmorphism primitives for the Genshin Impact page. */

export function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  )
}

export function SectionHeader({
  title,
  meta,
}: {
  title: string
  meta?: React.ReactNode
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <h2 className="text-xl font-semibold tracking-tight text-[#f5e6b8] sm:text-2xl">
        {title}
      </h2>
      {meta ? <div className="text-right">{meta}</div> : null}
    </div>
  )
}

export function Pill({
  label,
  value,
  accent = false,
}: {
  label: string
  value: string | number
  accent?: boolean
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs ${
        accent
          ? "border-[#d4a853]/40 bg-[#d4a853]/10 text-[#f5e6b8]"
          : "border-white/10 bg-white/[0.04] text-[#ece5d8]/70"
      }`}
    >
      <span className="font-semibold text-[#d4a853]">{label}</span>
      <span>{value}</span>
    </span>
  )
}

export function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-center backdrop-blur-xl">
      <div className="text-sm font-bold text-[#f5e6b8]">{value}</div>
      <div className="text-[0.65rem] uppercase tracking-wider text-[#ece5d8]/40">
        {label}
      </div>
    </div>
  )
}

export function DetailChip({
  label,
  children,
  className = "",
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 ${className}`}
    >
      <div className="text-[0.6rem] uppercase tracking-wider text-[#d4a853]/60">
        {label}
      </div>
      <div className="mt-0.5 text-xs">{children}</div>
    </div>
  )
}
