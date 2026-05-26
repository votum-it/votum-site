import { useEffect, useRef } from 'react'

export default function useReveal(threshold = 0.2) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    const observe = (el) => {
      if (!el.classList.contains('visible')) io.observe(el)
    }

    // Observe elements present on mount
    container.querySelectorAll('.reveal').forEach(observe)

    // Re-observe any .reveal elements added or updated later (language switches
    // update text in-place, but if new DOM nodes appear they need observation too)
    const mo = new MutationObserver(() => {
      container.querySelectorAll('.reveal').forEach(observe)
    })
    mo.observe(container, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [threshold])

  return ref
}
