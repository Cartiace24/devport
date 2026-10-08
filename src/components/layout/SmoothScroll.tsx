import { createContext, useContext, useEffect, useState, type PropsWithChildren } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from '../../hooks/useReducedMotion'
const LenisContext = createContext<Lenis | null>(null)
export function useLenis() { return useContext(LenisContext) }
export default function SmoothScroll({ children }: PropsWithChildren) {
  const reduced = useReducedMotion()
  const [lenis, setLenis] = useState<Lenis | null>(null)
  useEffect(() => {
    if (reduced) { setLenis(null); return }
    const instance = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: .85 })
    setLenis(instance)
    let frame = 0
    const raf = (time: number) => { instance.raf(time); frame = requestAnimationFrame(raf) }
    frame = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(frame); instance.destroy() }
  }, [reduced])
  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
