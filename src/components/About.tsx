import { useState, useEffect, useRef, useCallback } from 'react'
import { skills } from '../data/skills'

export default function About() {
  const [selectedSkillId, setSelectedSkillId] = useState<string>(skills[0]?.id || '')
  const [highlightedIds, setHighlightedIds] = useState<Set<string>>(new Set())
  const skillRefsMap = useRef<Map<string, HTMLParagraphElement>>(new Map())
  const sectionRef = useRef<HTMLElement>(null)

  const areSetsEqual = useCallback((a: Set<string>, b: Set<string>) => {
    if (a.size !== b.size) return false
    for (const v of a) if (!b.has(v)) return false
    return true
  }, [])

  useEffect(() => {
    let rafId: number | null = null

    const getLineY = () => window.innerHeight * 0.4

    const update = () => {
      const targetY = getLineY()
      const newHighlighted = new Set<string>()

      let closestId: string | null = null
      let closestDistance = Infinity

      // Iterate through refs and decide which are above the 40% line
      skillRefsMap.current.forEach((el, skillId) => {
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2

        // 如果元素中心在40%线之上，则高亮
        if (center <= targetY) {
          newHighlighted.add(skillId)
        }

        const dist = Math.abs(center - targetY)
        if (dist < closestDistance) {
          closestDistance = dist
          closestId = skillId
        }
      })

      setHighlightedIds((prev) => (areSetsEqual(prev, newHighlighted) ? prev : newHighlighted))

      if (closestId && closestId !== selectedSkillId) {
        setSelectedSkillId(closestId)
      }

      rafId = null
    }

    const onScroll = () => {
      if (rafId != null) return
      rafId = requestAnimationFrame(update)
    }

    // 初始更新
    update()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      if (rafId != null) cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
     
  }, [areSetsEqual, selectedSkillId])

  return (
    <section ref={sectionRef} className="w-full px-0 py-24 sm:px-6" id="about">
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">关于我</h2>
        <span className="text-xs uppercase tracking-[0.3em] text-white/45">Skills</span>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* 左侧描述，只显示距离40%线最近的skill的描述 */}
        <ul className="space-y-4 text-left text-sm leading-7 text-white/70">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className={`transition-all duration-500 overflow-hidden ${
                selectedSkillId === skill.id ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
              }`}
            >
              {skill.description}
            </li>
          ))}
        </ul>

        {/* 右侧技能名称：在40%线以上的高亮，下面的变灰，可同时多个高亮 */}
        <div className="space-y-2 text-right flex flex-col justify-center h-full">
          {skills.map((skill) => (
            <p
              key={skill.id}
              ref={(el) => {
                if (el) {
                  skillRefsMap.current.set(skill.id, el)
                } else {
                  skillRefsMap.current.delete(skill.id)
                }
              }}
              data-skill-id={skill.id}
              className={`text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight transition-all duration-300 cursor-pointer ${
                highlightedIds.has(skill.id)
                  ? 'text-white drop-shadow-[0_0_24px_rgba(125,211,252,0.45)]'
                  : 'text-white/30 hover:text-white/50'
              }`}
            >
              {skill.name}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
