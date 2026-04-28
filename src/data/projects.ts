export interface Project {
  id: string
  name: string
  description: string
  stack: string[]
  imageUrl: string
  link: string
}

// Project metadata can be expanded without changing view logic.
export const projects: Project[] = [
  {
    id: 'portfolio-v2',
    name: 'Portfolio V2',
    description: '新一代个人作品集，强调滚动叙事与项目可视化。',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://placehold.co/960x540/0f1011/ffffff?text=Portfolio+Preview',
    link: '#',
  },
  {
    id: 'workflow-center',
    name: 'Workflow Center',
    description: '团队协作与流程编排平台，支持可视化任务追踪。',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    imageUrl: 'https://placehold.co/960x540/111316/e8f3ff?text=Workflow+Center',
    link: '#',
  },
]
