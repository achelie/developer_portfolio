import { useState, useEffect, useRef, useCallback } from 'react'
import { skills } from '../data/skills'

export default function About() {
  const [selectedSkillId, setSelectedSkillId] = useState<string>(skills[0]?.id || '')
  const [highlightedIds, setHighlightedIds] = useState<Set<string>>(new Set())
  const [isDescFixed, setIsDescFixed] = useState(false)
  const [descTop, setDescTop] = useState(0)
  const [descLeft, setDescLeft] = useState(0)
  const [isDescVisible, setIsDescVisible] = useState(true)
  const skillRefsMap = useRef<Map<string, HTMLParagraphElement>>(new Map())
  const sectionRef = useRef<HTMLElement>(null)
  const descContainerRef = useRef<HTMLDivElement>(null)

  const renderSkillName = (name: string, isActive: boolean) => {
    const chars = Array.from(name)
    const totalDuration = 600 // ms
    const staggerAmount = 300 // ms

    return chars.map((char, index) => {
      const displayChar = char === ' ' ? '\u00A0' : char

      // 归一化进度
      const progress = index / (chars.length - 1 || 1)

      // 前密后疏的 delay 计算
      const delay = isActive
        ? Math.pow(progress, 0.6) * staggerAmount
        : Math.pow(1 - progress, 0.6) * staggerAmount

      return (
        <span
          key={`${name}-${index}`}
          className={`inline-block will-change-[opacity,transform] transition-all text-white ${
            isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-20 translate-y-4 scale-90'
          }`}
          style={{
            transitionDuration: `${totalDuration}ms`,
            transitionDelay: `${delay}ms`,
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {displayChar}
        </span>
      )
    })
  }

  const areSetsEqual = useCallback((a: Set<string>, b: Set<string>) => {
    if (a.size !== b.size) return false
    for (const v of a) if (!b.has(v)) return false
    return true
  }, [])

  useEffect(() => {
    let rafId: number | null = null

    const getLineY = () => window.innerHeight * 0.5

    const update = () => {
      const targetY = getLineY()
      const newHighlighted = new Set<string>()
      let closestHighlightedId: string | null = null
      let closestHighlightedDistance = Infinity

      // Iterate through refs and decide which are above the 40% line
      skillRefsMap.current.forEach((el, skillId) => {
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2

        // 如果元素中心在50%线之上，则高亮
        if (center <= targetY) {
          newHighlighted.add(skillId)
          
          // 在高亮的元素中找离50%线最近的
          const dist = Math.abs(center - targetY)
          if (dist < closestHighlightedDistance) {
            closestHighlightedDistance = dist
            closestHighlightedId = skillId
          }
        }
      })

      setHighlightedIds((prev) => (areSetsEqual(prev, newHighlighted) ? prev : newHighlighted))

      // 确保selectedSkillId是高亮集合中离50%线最近的，这样描述和高亮才会同步
      if (closestHighlightedId && closestHighlightedId !== selectedSkillId) {
        setSelectedSkillId(closestHighlightedId)
      }

      // 检查最后一个skill是否到达视口20%线
      const lastSkillId = skills[skills.length - 1]?.id
      if (lastSkillId) {
        const lastSkillEl = skillRefsMap.current.get(lastSkillId)
        if (lastSkillEl) {
          const rect = lastSkillEl.getBoundingClientRect()
          const lineY20 = window.innerHeight * 0.2
          // 如果最后一个skill的bottom还在20%线之上，显示描述；否则隐藏
          setIsDescVisible(rect.bottom > lineY20)
        }
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

  // 管理描述容器的fixed/relative定位
  useEffect(() => {
    let rafId: number | null = null

    const updateDescPosition = () => {
      if (!sectionRef.current || !descContainerRef.current) {
        rafId = null
        return
      }

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const sectionBottom = sectionRect.bottom
      const sectionTop = sectionRect.top
      const sectionLeft = sectionRect.left
      const viewportHeight = window.innerHeight
      const descHeight = descContainerRef.current.offsetHeight
      const targetY = viewportHeight * 0.5 - descHeight / 2 // 视口中间，垂直居中

      // 检查section是否在视口范围内
      const sectionVisible = sectionBottom > 0 && sectionTop < viewportHeight

      if (!sectionVisible) {
        setIsDescFixed(false)
        setDescTop(0)
      } else {
        // 计算fixed位置时，确保不超出section的上下边界
        let fixedTop = targetY

        // 如果超出section上边界，使用section的top位置
        if (sectionTop > targetY) {
          fixedTop = sectionTop
        }

        // 如果超出section下边界，调整使其不超过section底部
        if (sectionTop + sectionRect.height - descHeight < targetY) {
          fixedTop = sectionTop + sectionRect.height - descHeight
        }

        setIsDescFixed(true)
        setDescTop(Math.max(0, fixedTop))
        
        // 更新left值用于fixed定位
        setDescLeft(sectionLeft)
      }

      rafId = null
    }

    const onScroll = () => {
      if (rafId != null) return
      rafId = requestAnimationFrame(updateDescPosition)
    }

    updateDescPosition()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      if (rafId != null) cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full px-0 py-24 sm:px-6" id="about">
      <div className="mb-10 flex items-end justify-between gap-4">
      </div>

      <div className="grid gap-10 md:grid-cols-2 relative">
        {/* 左侧描述容器，占位用 */}
        <div className="md:h-full">
          {/* 实际描述内容，根据isDescFixed切换fixed/relative */}
          <div
            ref={descContainerRef}
            className={`${isDescFixed ? 'fixed' : 'relative'} pointer-events-none`}
            style={
              isDescFixed
                ? {
                    top: `${descTop}px`,
                    left: `${descLeft}px`,
                    width: 'calc(50% - 20px)',
                  }
                : {}
            }
          >
            <ul
              className={`relative min-h-[12rem] transition-opacity duration-500 ease-out ${
                isDescVisible && highlightedIds.size > 0
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              {skills.map((skill) => (
                <li
                  key={skill.id}
                  className={`absolute inset-0 flex items-center justify-start transition-all duration-300 ease-out ${
                    selectedSkillId === skill.id
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-3 scale-95'
                  }`}
                >
                  <div>
                    {(() => {
                      const raw = skill.description || ''
                      const parts = raw.split(/(?<=[。.!?])\s*/)
                      const first = (parts[0] || '').trim()
                      const second = parts.slice(1).join(' ').trim()
                      // 视觉上 box 被翻转，当前是右句在先，左句在后，故这里颠倒渲染顺序
                      return (
                        <p
                          className="max-w-[22rem] text-balance text-left text-base sm:text-lg leading-8 sm:leading-9 text-white/85 font-medium tracking-wide"
                          style={{
                            transform: 'rotate(-90deg)',
                            whiteSpace: 'normal',
                            display: 'inline-block',
                          }}
                        >
                          {second ? (
                            <>
                              <span className="block">{second}</span>
                              <span className="block mt-2">{first}</span>
                            </>
                          ) : (
                            <span className="block">{first}</span>
                          )}
                        </p>
                      )
                    })()}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 右侧技能名称：在50%线以上的高亮，下面的变灰，可同时多个高亮 */}
        <div className="space-y-10 sm:space-y-25 text-right flex flex-col justify-center h-full">
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
              className={`about uppercase font-bold text-right text-[40px] lg:text-[100px] first-p leading-[0.9] sm:leading-[0.88] transition-all duration-300 cursor-pointer ${
                highlightedIds.has(skill.id)
                  ? 'text-white'
                  : 'text-white/30 hover:text-white/50'
              }`}
              style={{ backgroundPositionX: '0%' }}
            >
              {renderSkillName(skill.name, highlightedIds.has(skill.id))}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
