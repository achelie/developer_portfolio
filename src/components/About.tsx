import { skills } from '../data/skills'

export default function About() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24" id="about">
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">关于我</h2>
        <span className="text-xs uppercase tracking-[0.3em] text-white/45">Skills</span>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <ul className="space-y-4 text-left text-sm leading-7 text-white/70">
          {skills.map((skill) => (
            <li key={skill.id}>{skill.description}</li>
          ))}
        </ul>

        <div className="space-y-4 text-right">
          {skills.map((skill, index) => (
            <p
              key={skill.id}
              className={`text-3xl font-semibold transition ${
                index === 0
                  ? 'text-white drop-shadow-[0_0_24px_rgba(125,211,252,0.45)]'
                  : 'text-white/30'
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
