"use client"

import Image from "next/image"
import { useState, useRef, useCallback, useEffect } from "react"

const galleryImages = [
  {
    src: "https://i.pinimg.com/736x/34/02/96/340296aa3215cf268cca35e9244d3d88.jpg",
    alt: "id.pinterest.com/honkin_viewpoint/",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://i.pinimg.com/736x/87/67/89/8767895e78561598f790377be1ad5255.jpg",
    alt: "Ssshhh",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://i.pinimg.com/736x/b0/bc/5b/b0bc5bcbc7189b223eddf93bfca9413c.jpg",
    alt: "id.pinterest.com/Axelsan18/",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzN5OWd6MDltczR5NjQ1aHJ3MHl0MGpycGYybTdqbjJyNWtkdjk3bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/CikJoFbzI7OufamC9F/giphy.gif",
    alt: "Arlecchino - Father of the House of the Hearth",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://static.wikia.nocookie.net/gensin-impact/images/7/7d/Arlecchino_Wish.png/revision/latest/scale-to-width-down/1000?cb=20240424055957",
    alt: "Arlecchino Splash Art",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://i.pinimg.com/736x/fb/03/e2/fb03e26a3dfd4be2954c0e85eb539a17.jpg",
    alt: "id.pinterest.com/Darius554/",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://i.pinimg.com/1200x/25/8c/82/258c82477f8ad5dc31f899bd2721845d.jpg",
    alt: "id.pinterest.com/mothermiranda_",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://i.pinimg.com/1200x/e6/61/c5/e661c5e289258c22d037ee3825ca5e82.jpg",
    alt: "id.pinterest.com/matcha0lover/",
    span: "col-span-2 row-span-1",
  },
]

export default function CrimsonMoonPage() {
  const [selected, setSelected] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScript = document.getElementsByTagName("script")[0]
    firstScript.parentNode?.insertBefore(tag, firstScript)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).onYouTubeIframeAPIReady = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      playerRef.current = new (window as any).YT.Player("yt-hero-player", {
        events: {
          onReady: () => {},
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onStateChange: (e: any) => {
            // YT.PlayerState.PLAYING === 1
            setIsPlaying(e.data === 1)
          },
        },
      })
    }

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).onYouTubeIframeAPIReady
    }
  }, [])

  const togglePlay = useCallback(() => {
    const player = playerRef.current
    if (!player) return
    if (isPlaying) {
      player.pauseVideo()
    } else {
      player.playVideo()
    }
  }, [isPlaying])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 z-0" onClick={togglePlay}>
          <div className="absolute inset-0 scale-150 pointer-events-none">
            <iframe
              id="yt-hero-player"
              ref={iframeRef}
              src="https://www.youtube.com/embed/etJuE22vDr0?si=Sl4MCPJbZA4azZo_&start=36&enablejsapi=1&autoplay=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=etJuE22vDr0&mute=1&rel=0"
              title="Arlecchino Background Video"
              className="w-full h-full pointer-events-none"
              style={{ border: "none" }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(70,5,6,0.7) 0%, rgba(155,20,20,0.4) 40%, rgba(70,5,6,0.85) 100%)",
            }}
          />
          {/* Bottom fade to gallery */}
          <div
            className="absolute bottom-0 left-0 right-0 h-48"
            style={{
              background: "linear-gradient(to bottom, transparent, #0a0a0a)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="mb-6">
            <span
              className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.3em] uppercase rounded-full border"
              style={{
                borderColor: "rgba(155,20,20,0.6)",
                background: "rgba(155,20,20,0.15)",
                color: "#e8a0a0",
              }}
            >
              4th Fatui Harbinger — The Knave
            </span>
          </div>
          <h1
            className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
            style={{
              background:
                "linear-gradient(135deg, #f5d5d5 0%, #9b1414 50%, #460506 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Arlecchino
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-4">
            &quot;The Knave&quot; — Fourth of the Fatui Harbingers. The
            mysterious &quot;Father&quot; of the House of the Hearth who wields
            the power of the Crimson Moon and commands flames born from a dark,
            ancient bloodline.
          </p>
          <p className="text-sm text-neutral-500 italic">
            Anger makes you impulsive, and sorrow causes you to waver. Always
            maintain control over your emotions.
          </p>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          {/* Play / Pause hint */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              togglePlay()
            }}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer"
            style={{
              borderColor: "rgba(155,20,20,0.5)",
              border: "1px solid rgba(155,20,20,0.5)",
              background: "rgba(155,20,20,0.15)",
              color: "#e8a0a0",
            }}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
            {isPlaying ? "Pause" : "Play"} Video
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative px-4 md:px-8 lg:px-16 pb-24 pt-12 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{
              background: "linear-gradient(135deg, #f5d5d5, #9b1414)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Gallery
          </h2>
          <div
            className="w-24 h-0.5 mx-auto rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #9b1414, transparent)",
            }}
          />
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-3 md:gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${img.span}`}
              style={{
                border: "1px solid rgba(155,20,20,0.2)",
              }}
              onClick={() => setSelected(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-120"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Hover Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(70,5,6,0.9) 0%, rgba(155,20,20,0.2) 50%, transparent 100%)",
                }}
              >
                <span className="text-sm font-medium text-neutral-200 tracking-wide">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ background: "rgba(10,10,10,0.95)" }}
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors text-2xl"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>
          <div className="relative w-full max-w-5xl aspect-video">
            <Image
              src={galleryImages[selected].src}
              alt={galleryImages[selected].alt}
              fill
              className="object-contain rounded-lg"
              sizes="90vw"
            />
          </div>
          <p className="absolute bottom-8 text-neutral-400 text-sm tracking-wide">
            {galleryImages[selected].alt}
          </p>
        </div>
      )}

      {/* Footer accent */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #9b1414, #460506, transparent)",
        }}
      />
    </main>
  )
}
