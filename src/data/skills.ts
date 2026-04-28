export interface Skill {
  id: string
  name: string
  description: string
}

// Centralized skill data keeps UI components simple and reusable.
export const skills: Skill[] = [
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    description:
      '专注 React + TypeScript 架构设计，重视可维护组件与交互体验。',
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: '擅长 Node.js 与 API 设计，关注性能、稳定性与可观测性。',
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    description: '具备自动化部署与云资源管理经验，支持持续交付流程。',
  },
]
