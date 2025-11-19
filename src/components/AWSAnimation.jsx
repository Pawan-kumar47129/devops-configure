import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './AWSAnimation.css'

function AWSAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = 800
    canvas.height = 400

    // EC2 Instances
    const instances = [
      { x: 150, y: 100, id: 'EC2-1', status: 'running', pulse: 0 },
      { x: 350, y: 100, id: 'EC2-2', status: 'running', pulse: 0.5 },
      { x: 550, y: 100, id: 'EC2-3', status: 'running', pulse: 1 },
      { x: 250, y: 250, id: 'EC2-4', status: 'running', pulse: 0.3 },
      { x: 450, y: 250, id: 'EC2-5', status: 'running', pulse: 0.7 },
    ]

    // Network connections
    const connections = [
      [0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4], [3, 4]
    ]

    let animationFrame = 0

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw cloud background
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.beginPath()
      ctx.arc(100, 50, 60, 0, Math.PI * 2)
      ctx.arc(150, 50, 80, 0, Math.PI * 2)
      ctx.arc(200, 50, 60, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.arc(600, 50, 60, 0, Math.PI * 2)
      ctx.arc(650, 50, 80, 0, Math.PI * 2)
      ctx.arc(700, 50, 60, 0, Math.PI * 2)
      ctx.fill()

      // Draw connections
      ctx.strokeStyle = 'rgba(102, 126, 234, 0.3)'
      ctx.lineWidth = 2
      connections.forEach(([from, to]) => {
        ctx.beginPath()
        ctx.moveTo(instances[from].x, instances[from].y)
        ctx.lineTo(instances[to].x, instances[to].y)
        ctx.stroke()
      })

      // Draw data flow
      animationFrame += 0.02
      connections.forEach(([from, to], idx) => {
        const progress = (animationFrame + idx * 0.3) % 1
        const x1 = instances[from].x
        const y1 = instances[from].y
        const x2 = instances[to].x
        const y2 = instances[to].y
        const x = x1 + (x2 - x1) * progress
        const y = y1 + (y2 - y1) * progress

        ctx.fillStyle = '#667eea'
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw EC2 instances
      instances.forEach((instance, idx) => {
        const pulse = (animationFrame + instance.pulse) % 1
        const scale = 1 + Math.sin(pulse * Math.PI * 2) * 0.1

        // Outer glow
        const gradient = ctx.createRadialGradient(
          instance.x, instance.y, 0,
          instance.x, instance.y, 40
        )
        gradient.addColorStop(0, `rgba(102, 126, 234, ${0.3 * (1 - pulse)})`)
        gradient.addColorStop(1, 'rgba(102, 126, 234, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(instance.x, instance.y, 40 * scale, 0, Math.PI * 2)
        ctx.fill()

        // Instance box
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(instance.x - 30, instance.y - 20, 60, 40)

        ctx.strokeStyle = '#667eea'
        ctx.lineWidth = 2
        ctx.strokeRect(instance.x - 30, instance.y - 20, 60, 40)

        // Status indicator
        ctx.fillStyle = '#4ade80'
        ctx.beginPath()
        ctx.arc(instance.x + 20, instance.y - 10, 5, 0, Math.PI * 2)
        ctx.fill()

        // Instance ID
        ctx.fillStyle = '#333'
        ctx.font = 'bold 10px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(instance.id, instance.x, instance.y + 5)
      })

      requestAnimationFrame(draw)
    }

    draw()
  }, [])

  return (
    <motion.div 
      className="aws-animation-container"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div 
        className="aws-animation-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <motion.h3
          animate={{ 
            textShadow: [
              "0 0 10px rgba(255,255,255,0.5)",
              "0 0 20px rgba(255,255,255,0.8)",
              "0 0 10px rgba(255,255,255,0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🌩️ AWS EC2 Infrastructure
        </motion.h3>
        <p>Live Infrastructure Visualization</p>
      </motion.div>
      <div className="canvas-wrapper">
        <canvas ref={canvasRef} className="aws-canvas"></canvas>
        <motion.div 
          className="aws-stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="stat-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="stat-value">5</div>
            <div className="stat-label">EC2 Instances</div>
          </motion.div>
          <motion.div 
            className="stat-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="stat-value running"
              animate={{ 
                color: ["#4ade80", "#22c55e", "#4ade80"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Running
            </motion.div>
            <div className="stat-label">Status</div>
          </motion.div>
          <motion.div 
            className="stat-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="stat-value">7</div>
            <div className="stat-label">Connections</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AWSAnimation

