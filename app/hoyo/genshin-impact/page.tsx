import { getGenshinData } from "@/lib/genshin-api"
import { GenshinNav } from "@/components/genshin/genshin-nav"

export default async function GenshinImpactPage() {
  const data = await getGenshinData()

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="text-primary">~</span>
          <span>/</span>
          <span>hoyo</span>
          <span>/</span>
          <span className="text-secondary">genshin-impact</span>
        </div>

        <GenshinNav data={data} />

        {/* Footer */}
        <div className="mt-12 border-t border-border/30 pt-4">
          <p className="text-center font-mono text-[10px] text-muted-foreground">
            Data sourced from genshin.dotcchix.dev &mdash; Not affiliated with
            HoYoverse
          </p>
        </div>
      </div>
    </main>
  )
}