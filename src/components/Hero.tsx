export default function Hero() {
  const ringText = 'SCROLL DOWN SCROLL DOWN '

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

      <div className="absolute bottom-6 left-0 h-28 w-28 sm:left-6" aria-hidden="true">
        <svg
          className="h-full w-full animate-spin-slow overflow-visible text-white/75"
          viewBox="0 0 100 100"
          style={{ transformOrigin: '50% 50%', transformBox: 'fill-box' }}
        >
          <defs>
            <path id="hero-ring-path" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
          </defs>
          <text className="fill-current text-[11px] uppercase tracking-[0.36em]">
            <textPath href="#hero-ring-path" startOffset="50%" textAnchor="middle">
              {ringText}
            </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 grid place-items-center" style={{ transformOrigin: '50% 50%' }}>
          <svg className="h-8 w-8 animate-spin-slow-reverse text-white/80" viewBox="0 0 24 24" aria-hidden="true">
            <text
              x="12"
              y="12"
              className="fill-current"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontSize: '20px', lineHeight: 1 }}
            >
              ✶
            </text>
          </svg>
        </span>
      </div>
    </section>
  )
}
