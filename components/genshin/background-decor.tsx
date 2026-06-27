/* Ambient blurred color glows behind the page content. */

export function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#d4a853]/10 blur-[120px]" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#4cc2f1]/10 blur-[130px]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#b08fc2]/10 blur-[120px]" />
    </div>
  )
}
