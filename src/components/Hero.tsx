import { useEffect, useRef, useState } from 'react'

type TitleMotion = {
  x: number
  y: number
  rotateX: number
  rotateY: number
}

export default function Hero() {
  const ringText = 'SCROLL DOWN SCROLL DOWN '
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const targetRef = useRef<TitleMotion>({ x: 0, y: 0, rotateX: 0, rotateY: 0 })
  const [titleMotion, setTitleMotion] = useState<TitleMotion>({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
  })

  useEffect(() => {
    const maxShiftX = 3
    const maxShiftY = 2
    const maxRotateX = 1.6
    const maxRotateY = 2.2

    const animate = () => {
      setTitleMotion((prev) => {
        const easing = 0.11
        const nextX = prev.x + (targetRef.current.x - prev.x) * easing
        const nextY = prev.y + (targetRef.current.y - prev.y) * easing
        const nextRotateX = prev.rotateX + (targetRef.current.rotateX - prev.rotateX) * easing
        const nextRotateY = prev.rotateY + (targetRef.current.rotateY - prev.rotateY) * easing

        const settled =
          Math.abs(nextX - targetRef.current.x) < 0.1 &&
          Math.abs(nextY - targetRef.current.y) < 0.1 &&
          Math.abs(nextRotateX - targetRef.current.rotateX) < 0.08 &&
          Math.abs(nextRotateY - targetRef.current.rotateY) < 0.08

        if (settled) {
          frameRef.current = null
          return { ...targetRef.current }
        }

        frameRef.current = requestAnimationFrame(animate)
        return {
          x: nextX,
          y: nextY,
          rotateX: nextRotateX,
          rotateY: nextRotateY,
        }
      })
    }

    const startAnimation = () => {
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    const handlePointerMove = (event: MouseEvent) => {
      const heading = headingRef.current
      if (!heading) {
        return
      }

      const focusRect = heading.getBoundingClientRect()
      const centerX = focusRect.left + focusRect.width / 2
      const centerY = focusRect.top + focusRect.height / 2

      const normalizedX = (event.clientX - centerX) / (focusRect.width / 2)
      const normalizedY = (event.clientY - centerY) / (focusRect.height / 2)
      const clampedX = Math.max(-1, Math.min(1, normalizedX))
      const clampedY = Math.max(-1, Math.min(1, normalizedY))

      targetRef.current = {
        x: clampedX * maxShiftX,
        y: clampedY * maxShiftY,
        rotateX: -clampedY * maxRotateX,
        rotateY: clampedX * maxRotateY,
      }

      startAnimation()
    }

    const handlePointerLeave = () => {
      targetRef.current = { x: 0, y: 0, rotateX: 0, rotateY: 0 }
      startAnimation()
    }

    const handleWindowMouseOut = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        handlePointerLeave()
      }
    }

    window.addEventListener('mousemove', handlePointerMove)
    window.addEventListener('mouseout', handleWindowMouseOut)
    window.addEventListener('blur', handlePointerLeave)

    return () => {
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('mouseout', handleWindowMouseOut)
      window.removeEventListener('blur', handlePointerLeave)

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <section className="relative flex min-h-[92vh] w-full items-center px-0 pb-20 pt-8 sm:px-6">
      <div className="w-full text-left">
        <div className="relative w-fit [perspective:1000px]">
          <h1
            ref={headingRef}
            className="text-[clamp(3.2rem,18vw,7rem)] font-semibold leading-[0.88] tracking-[0.08em] text-white sm:text-[clamp(4.8rem,16vw,10rem)] lg:text-[clamp(7rem,14vw,16rem)]"
            style={{
              transform: `translate3d(${titleMotion.x}px, ${titleMotion.y}px, 0) rotateX(${titleMotion.rotateX}deg) rotateY(${titleMotion.rotateY}deg)`,
              transformStyle: 'preserve-3d',
              textShadow: `${-titleMotion.rotateY * 0.9}px ${titleMotion.rotateX * 0.9}px 26px rgba(8, 12, 16, 0.45)`,
            }}
          >
            <span className="block" style={{ transform: 'translateZ(22px)' }}>
              全栈
            </span>
            <span className="mt-2 block sm:mt-4 lg:mt-6" style={{ transform: 'translateZ(14px)' }}>
              工程师
            </span>
          </h1>
        </div>
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

      <div className="absolute bottom-7 right-2 flex items-center gap-3 sm:right-6 xl:gap-5" aria-label="Open to work">
        <div className="absolute -inset-2 rounded-full bg-white/5 blur-xl animate-pulse opacity-60" aria-hidden="true" />
        <h3 className="relative z-10 text-sm font-normal uppercase tracking-[0.28em] text-white/90 sm:text-base xl:text-[26px] 2xl:text-[32px]">
          Open to work
        </h3>
        <div className="relative z-10 grid h-7 w-7 place-items-center rounded-full border border-white/20 bg-white/5 sm:h-8 sm:w-8">
          <span className="animate-spin-slow text-lg leading-none text-white">✶</span>
        </div>
      </div>
    </section>
  )
}
