import { useEffect, useRef } from 'react'

/**
 * useReveal — attaches an IntersectionObserver to a container ref
 * and adds the 'visible' class to any .reveal children when they
 * enter the viewport. Returns the ref to attach to your wrapper element.
 *
 * Usage:
 *   const ref = useReveal()
 *   return <section ref={ref}><div className="reveal">...</div></section>
 */
export default function useReveal(threshold = 0.2) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    el.querySelectorAll('.reveal').forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
