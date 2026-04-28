import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24" id="projects">
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">项目展示</h2>
        <span className="text-xs uppercase tracking-[0.3em] text-white/45">Works</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="space-y-3 text-left">
          {projects.map((project) => (
            <p key={project.id} className="text-sm text-white/60">
              <span className="font-semibold text-white/85">{project.name}</span>
              {' - '}
              {project.description.slice(0, 18)}...
            </p>
          ))}
        </aside>

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
            >
              <img
                src={project.imageUrl}
                alt={project.name}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
              <div className="space-y-4 p-5 text-left">
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <p className="text-sm text-white/70">{project.description}</p>
                <p className="text-xs uppercase tracking-wider text-cyan-200/90">
                  {project.stack.join(' • ')}
                </p>
                <a
                  href={project.link}
                  className="inline-flex text-sm font-medium text-cyan-200 hover:text-cyan-100"
                >
                  查看详情
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
