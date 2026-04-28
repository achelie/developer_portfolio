import { useState } from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  const [active, setActive] = useState(0)

  const activeProject = projects[active] || projects[0]

  return (
    <section className="w-full px-0 py-24 sm:px-6" id="projects">
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">项目展示</h2>
        <span className="text-xs uppercase tracking-[0.3em] text-white/45">Works</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 items-start">
        <aside className="relative lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-auto lg:pr-8">
          <div className="mb-6">
            <div className="text-[56px] lg:text-[88px] font-extrabold text-white/10 leading-none">
              {String(active + 1).padStart(2, '0')}
            </div>
            <div className="text-sm text-white/40 mt-1">/ {String(projects.length).padStart(2, '0')}</div>
          </div>
          <div className="flex flex-col gap-8">
            {projects.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => setActive(idx)}
                className={`text-left group flex flex-col items-start gap-2 transition-all duration-300 focus:outline-none ${
                  idx === active ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <div className={`-ml-4 pl-4 border-l-2 ${idx === active ? 'border-white/30' : 'border-white/6'}`}>
                  <span className={`text-[28px] lg:text-[48px] font-extrabold uppercase tracking-tight ${idx === active ? 'text-white' : 'text-white/70'}`}>
                    {project.name}
                  </span>
                  <span className="text-xs text-white/50">{project.stack?.join(' • ')}</span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <div className="relative lg:pl-8">
          <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-black">
            <img
              src={activeProject.imageUrl}
              alt={activeProject.name}
              className="w-full h-[min(70vh,720px)] object-cover block"
              loading="lazy"
            />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.6))]" />

            <div className="absolute left-6 bottom-6 right-6 pointer-events-auto">
              <div className="max-w-[560px] bg-gradient-to-t from-black/60 via-black/40 to-transparent p-6 rounded-lg">
                <div className="text-sm text-white/60 uppercase tracking-wider mb-2">{activeProject.stack?.[0] || ''}</div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{activeProject.name}</h3>
                <p className="text-sm text-white/80 mb-4">{activeProject.description}</p>
                <a
                  href={activeProject.link}
                  className="inline-flex items-center gap-3 rounded-full bg-white/6 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                >
                  View Project
                  <span className="opacity-60">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
