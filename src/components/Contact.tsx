export default function Contact() {
  return (
    <section className="flex w-full justify-end px-0 pb-12 sm:px-6" id="contact">
      <div className="space-y-2 text-right text-sm text-white/80">
        <p>
          邮箱：
          <a href="mailto:hello@example.com" className="text-cyan-200 hover:text-cyan-100">
            hello@example.com
          </a>
        </p>
        <p>
          GitHub：
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-200 hover:text-cyan-100"
          >
            github.com/yourname
          </a>
        </p>
      </div>
    </section>
  )
}
