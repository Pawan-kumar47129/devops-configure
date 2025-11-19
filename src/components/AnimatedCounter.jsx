import { useEffect, useRef } from 'react'
import { useInView, motion } from 'framer-motion'

function AnimatedCounter({ end, duration = 2, suffix = '' }) {
  const countRef = useRef(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime = null
    const startValue = 0

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(startValue + (end - startValue) * easeOutQuart)
      
      if (countRef.current) {
        countRef.current.textContent = current + suffix
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration, suffix])

  return (
    <span ref={ref}>
      <span ref={countRef}>0{suffix}</span>
    </span>
  )
}

export default AnimatedCounter

