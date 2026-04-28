export default function Header() {
  return (
    <header className="sticky top-0 z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 backdrop-blur-sm">
      <span className="text-sm font-semibold tracking-[0.25em] text-white/80">DEWTTOW</span>
      <a
        href="#"
        className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider text-white transition hover:border-cyan-300/60 hover:text-cyan-200"
      >
        BLOG
      </a>
    </header>
  )
}
