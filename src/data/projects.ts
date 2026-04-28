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
}

// Project metadata can be expanded without changing view logic.
export const projects: Project[] = [
  {
    id: 'rabbit',
    name: '小兔鲜商城',
    description: '基于 Spring Boot 的电商平台，提供商品浏览、购物车和订单管理功能。',
    stack: ['Vue3', 'Pinia', 'Element Plus', 'Spring Boot', 'MySQL', 'MyBatis-Plus'],
    imageUrl: rabbitImage,
    link: '#',
  },
  {
    id: 'file-project',
    name: '文件管理系统',
    description: '为校园工作室开发的文件管理系统，支持文件上传、分类和权限控制。',
    stack: ['Vue3', 'Pinia','Element Plus', 'Spring Boot', 'MySQL','MyBatis-Plus', 'Redis'],
    imageUrl: fileProjectImage,
    link: '#',
  },
  {
    id: 'lost-found',
    name: '失物招领系统',
    description: '校园内的失物招领平台，支持物品发布、认领和信息查询。',
    stack: ['Vue3', 'Pinia', 'Element Plus', 'WebSocket', 'Spring Boot', 'MySQL', 'MyBatis-Plus'],
    imageUrl: lostFoundImage,
    link: '#',
  },
]
