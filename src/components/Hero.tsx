export default function Hero() {
  return (
    <section className="relative flex min-h-[72vh] w-full items-center px-0 pb-20 pt-8 sm:px-6">
      <div className="max-w-2xl text-left">
        <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-cyan-200">
          Portfolio 2026
        </p>
        <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl">
          全栈工程师
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
          我构建高性能 Web 产品，从设计系统到后端架构，聚焦可维护性与商业价值。
        </p>
      </div>

      <p className="absolute bottom-6 left-0 origin-center animate-spin-slow text-xs uppercase tracking-[0.35em] text-white/40 sm:left-6">
        build • learn • iterate •
      </p>
    </section>
  )
}
