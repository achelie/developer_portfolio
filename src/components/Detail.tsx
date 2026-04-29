import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProjectDetail } from '../data/detail'

export default function Detail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // 滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])
  
  const project = getProjectDetail(id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">项目未找到</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-3 rounded-full bg-white/6 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            返回首页
            <span className="opacity-60">←</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-ink text-white">
      {/* 背景渐变 */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(103,232,249,0.15),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.12),transparent_38%)]" />

      <div className="relative px-[15%]">
        {/* 返回按钮 */}
        <div className="py-6">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-base text-white/60 hover:text-white transition-colors"
          >
            <span>←</span>
            <span>返回</span>
          </button>
        </div>

        {/* 主容器 */}
        <div className="grid gap-12 lg:grid-cols-2 items-start pb-24">
          {/* 左侧信息 */}
          <aside className="relative lg:sticky lg:top-24">
            <div className="space-y-6">
              {/* 关于 */}
              <div className="pb-6 border-b border-white/10">
                <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">关于</h3>
                <p className="text-xl leading-relaxed text-white/80 font-medium">
                  {project.about || project.description}
                </p>
              </div>

              {/* 类型 */}
              <div className="pb-6 border-b border-white/10">
                <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">类型</h3>
                <div className="inline-block rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 border border-cyan-500/30">
                  <span className="text-base font-medium text-cyan-300">{project.type}</span>
                </div>
              </div>

              {/* 技术栈 */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">技术栈</h3>
                <div className="flex flex-col gap-2.5">
                  {project.stack.map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <span className="text-cyan-500/50 text-sm">▪</span>
                      <span className="text-base text-white/75">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* 右侧图片 */}
          <div className="relative">
            <div className="space-y-6">
              {/* 主图片展示 */}
              <div className="relative">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-white/10 bg-black">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.name} ${currentImageIndex + 1}`}
                    className="h-full w-full object-cover transition-opacity duration-300"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.3))]" />

                  {/* 图片导航按钮 */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setCurrentImageIndex(
                            currentImageIndex === 0
                              ? project.images.length - 1
                              : currentImageIndex - 1
                          )
                        }
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                        aria-label="上一张图片"
                      >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          setCurrentImageIndex(
                            currentImageIndex === project.images.length - 1
                              ? 0
                              : currentImageIndex + 1
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                        aria-label="下一张图片"
                      >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* 页码指示 */}
                      <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-base text-white backdrop-blur-sm">
                        {currentImageIndex + 1} / {project.images.length}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* 缩略图列表 */}
              {project.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex
                          ? 'border-cyan-500 ring-2 ring-cyan-500/50'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`缩略图 ${idx + 1}`}
                        className="h-16 w-24 object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* 项目标题和描述 */}
              <div className="bg-white/5 border border-white/10 rounded-[20px] p-8 backdrop-blur-md">
                <div className="text-base text-white/60 uppercase tracking-wider mb-3">
                  {project.stack?.[0] || '项目'}
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                  {project.name}
                </h1>
                <p className="text-lg leading-relaxed text-white/80 mb-8">
                  {project.fullDescription}
                </p>

                {/* 操作按钮 */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate('/')}
                    className="inline-flex items-center gap-3 rounded-full bg-white/6 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    返回项目列表
                  </button>
                </div>
              </div>

              {/* 额外图片展示 */}
              {project.images && project.images.length > 1 && (
                <div className="space-y-4">
                  {project.images.slice(1).map((image, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-white/10 bg-black"
                    >
                      <img
                        src={image}
                        alt={`${project.name} 截图 ${idx + 2}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.3))]" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
