export interface Skill {
  id: string
  name: string
  description: string
}

// Centralized skill data keeps UI components simple and reusable.
export const skills: Skill[] = [
  {
    id: 'full-stack',
    name: 'Full-Stack',
    description: '在前端的神奇效果与后端的逻辑之间搭建桥梁。',
  },
  {
    id: 'vue',
    name: 'NUXT.JS/VUE',
    description: '达到完美并非在于没有东西可以再添加，而是在于没有东西可以再删减。',
  },
  {
    id: 'node',
    name: 'NODE.JS / EXPRESS',
    description: '人的本质在于其强大的适应能力。',
  },
  {
    id: 'databases',
    name: 'DATABASES',
    description:
      '从像素到服务器，每一层都至关重要。',
  },
  {
    id: 'api',
    name: 'API DESIGN',
    description: '没有策略的创造力被称为艺术。有策略的创造力则被称为工程学。',
  },
  {
    id: 'devops',
    name: 'DEVOPS',
    description: '开发者肩负着塑造用户在数字世界中体验方式的重任。',
  },
  {
    id: 'vibecoding',
    name: 'VIBE CODING',
    description: '编程不仅是技术，更是一种艺术形式，能够创造出令人惊叹的数字世界。',
  },
  {
    id: 'agent',
    name: 'AGENT',
    description:
      '在这个充满无限可能的时代，开发者不仅是技术的创造者，更是未来的塑造者。',
  },
]
