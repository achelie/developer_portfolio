import rabbitImage from '../assets/rabbit.png'
import rabbit1Image from '../assets/rabbit1.png'
import rabbit2Image from '../assets/rabbit2.png'
import rabbit3Image from '../assets/rabbit3.png'

import lostFoundImage from '../assets/lost-found.png'
import lostFound1Image from '../assets/lost-found1.png'
import lostFound2Image from '../assets/lost-found2.png'
import lostFound3Image from '../assets/lost-found3.png'
import lostFound4Image from '../assets/lost-found4.png'

import fileProjectImage from '../assets/file-project.png'

export interface ProjectDetail {
  id: string
  name: string
  description: string
  fullDescription: string
  about: string
  type: string
  stack: string[]
  images: string[]
  thumbnails?: string[]
}

export const projectDetails: Record<string, ProjectDetail> = {
  rabbit: {
    id: 'rabbit',
    name: '小兔鲜商城',
    description: '基于 Spring Boot 的电商平台，提供商品浏览、购物车和订单管理功能。',
    fullDescription: '小兔鲜商城是一个完整的电商平台，集商品展示、购物车管理、订单处理于一体。前端采用 Vue3 + Element Plus 构建现代化的用户界面，后端使用 Spring Boot 构建高性能的 API 服务，数据库采用 MySQL 存储，使用 MyBatis-Plus 进行 ORM 映射。',
    about: '基于 Spring Boot 的电商平台，提供商品浏览、购物车和订单管理功能。',
    type: 'Full-Stack',
    stack: ['Vue3', 'Pinia', 'Element Plus', 'Spring Boot', 'MySQL', 'MyBatis-Plus'],
    images: [rabbitImage, rabbit1Image, rabbit2Image, rabbit3Image],
    thumbnails: [rabbitImage, rabbit1Image, rabbit2Image, rabbit3Image],
  },
  'file-project': {
    id: 'file-project',
    name: '文件管理系统',
    description: '为校园工作室开发的文件管理系统，支持文件上传、分类和权限控制。',
    fullDescription: '为校园工作室开发的专业级文件管理系统，支持文件上传、分类、权限控制等功能。采用 Vue3 + Pinia 状态管理构建前端，Spring Boot + MyBatis-Plus 提供后端 API，引入 Redis 缓存机制提升查询效率，确保大规模文件操作的高效进行。',
    about: '为校园工作室开发的文件管理系统，支持文件上传、分类和权限控制。',
    type: 'Full-Stack',
    stack: ['Vue3', 'Pinia', 'Element Plus', 'Spring Boot', 'MySQL', 'MyBatis-Plus', 'Redis'],
    images: [fileProjectImage],
    thumbnails: [fileProjectImage],
  },
  'lost-found': {
    id: 'lost-found',
    name: '失物招领系统',
    description: '校园内的失物招领平台，支持物品发布、认领和信息查询。',
    fullDescription: '校园内的失物招领平台，通过 WebSocket 实现实时通知功能，支持物品发布、认领和信息查询。前端采用 Vue3 + Element Plus 提供流畅的用户体验，后端基于 Spring Boot 架构，集成 WebSocket 实现双向实时通信，支持消息推送和动态更新。',
    about: '校园内的失物招领平台，支持物品发布、认领和信息查询。',
    type: 'Full-Stack',
    stack: ['Vue3', 'Pinia', 'Element Plus', 'WebSocket', 'Spring Boot', 'MySQL', 'MyBatis-Plus'],
    images: [lostFoundImage, lostFound1Image, lostFound2Image, lostFound3Image, lostFound4Image],
    thumbnails: [lostFoundImage, lostFound1Image, lostFound2Image, lostFound3Image, lostFound4Image],
  },
}

export function getProjectDetail(id: string | undefined): ProjectDetail | null {
  if (!id) return null
  return projectDetails[id] || null
}
