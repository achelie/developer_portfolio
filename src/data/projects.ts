import rabbitImage from '../assets/rabbit.png'
import lostFoundImage from '../assets/lost-found.png'
import fileProjectImage from '../assets/file-project.png'

export interface Project {
  id: string
  name: string
  description: string
  stack: string[]
  imageUrl: string
  link: string
  type: string
  fullDescription?: string
  images?: string[]
  about?: string
}

// Project metadata can be expanded without changing view logic.
export const projects: Project[] = [
  {
    id: 'rabbit',
    name: '小兔鲜商城',
    description: '基于 Spring Boot 的电商平台，提供商品浏览、购物车和订单管理功能。',
    stack: ['Vue3', 'Pinia', 'Element Plus', 'Spring Boot', 'MySQL', 'MyBatis-Plus'],
    imageUrl: rabbitImage,
    link: '/projects/rabbit',
    type: 'Full-Stack',
    fullDescription: '小兔鲜商城是一个完整的电商平台，集商品展示、购物车管理、订单处理于一体。前端采用 Vue3 + Element Plus 构建现代化的用户界面，后端使用 Spring Boot 构建高性能的 API 服务。',
    images: [rabbitImage],
    about: '基于 Spring Boot 的电商平台，提供商品浏览、购物车和订单管理功能。'
  },
  {
    id: 'file-project',
    name: '文件管理系统',
    description: '为校园工作室开发的文件管理系统，支持文件上传、分类和权限控制。',
    stack: ['Vue3', 'Pinia','Element Plus', 'Spring Boot', 'MySQL','MyBatis-Plus', 'Redis'],
    imageUrl: fileProjectImage,
    link: '/projects/file-project',
    type: 'Full-Stack',
    fullDescription: '为校园工作室开发的专业级文件管理系统，支持文件上传、分类、权限控制等功能。采用 Vue3 构建前端，Spring Boot + Redis 提供后端服务，确保高效的文件查询和操作。',
    images: [fileProjectImage],
    about: '为校园工作室开发的文件管理系统，支持文件上传、分类和权限控制。'
  },
  {
    id: 'lost-found',
    name: '失物招领系统',
    description: '校园内的失物招领平台，支持物品发布、认领和信息查询。',
    stack: ['Vue3', 'Pinia', 'Element Plus', 'WebSocket', 'Spring Boot', 'MySQL', 'MyBatis-Plus'],
    imageUrl: lostFoundImage,
    link: '/projects/lost-found',
    type: 'Full-Stack',
    fullDescription: '校园内的失物招领平台，通过 WebSocket 实现实时通知功能，支持物品发布、认领和信息查询。前后端采用最新的技术栈，确保用户体验流畅。',
    images: [lostFoundImage],
    about: '校园内的失物招领平台，支持物品发布、认领和信息查询。'
  },
]
