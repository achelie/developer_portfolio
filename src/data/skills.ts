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
  {
    id: 'frontend2',
    name: 'Frontend Engineering2',
    description:
      '专注 React + TypeScript 架构设计，重视可维护组件与交互体验。',
  },
  {
    id: 'backend2',
    name: '',
    description: '擅长 Node.js 与 API 设计，关注性能、稳定性与可观测性。',
  },
  {
    id: 'devops2',
    name: '',
    description: '具备自动化部署与云资源管理经验，支持持续交付流程。',
  },
  {
    id: 'frontend3',
    name: '',
    description:
      '专注 React + TypeScript 架构设计，重视可维护组件与交互体验。',
  },
  {
    id: 'backend3',
    name: '',
    description: '擅长 Node.js 与 API 设计，关注性能、稳定性与可观测性。',
  },
  {
    id: 'devops3',
    name: '',
    description: '具备自动化部署与云资源管理经验，支持持续交付流程。',
  },
]
