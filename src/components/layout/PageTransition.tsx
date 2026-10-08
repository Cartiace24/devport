import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import type { PropsWithChildren } from 'react'
export default function PageTransition({ children }: PropsWithChildren) {
  const location = useLocation()
  const reduced = useReducedMotion()
  return <motion.div key={location.pathname} initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .32, ease: [.22, 1, .36, 1] }}>{children}</motion.div>
}
