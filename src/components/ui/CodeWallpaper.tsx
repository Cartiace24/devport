import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const fragments = [
  'const route = await load()', 'git status --short', 'return <TrailStory />',
  'type Result = { ok: true }', 'useEffect(() => subscribe())', 'pnpm run build',
  'const [open, setOpen] = useState(false)', 'export { default } from ./page',
  'SELECT * FROM projects', 'ctx.bezierCurveTo(x, y)', 'response.status(200)',
  'aria-live="polite"', 'await Promise.all(tasks)', 'git commit -m "ship"',
]
const rgbCycle = ['#ff3b5c', '#ff8a32', '#f4dc3f', '#50e58a', '#32d4ff', '#5487ff', '#c178ff']

export default function CodeWallpaper() {
  const reduced = useReducedMotion()
  return <div className="code-wallpaper" aria-hidden="true">{fragments.map((fragment, index) => <motion.span
    key={fragment}
    className={`wallpaper-code ${index % 4 === 0 ? 'wallpaper-cyan' : ''}`}
    style={{ ...(index % 2 ? { right: `${1 + (index * 3) % 7}%` } : { left: `${1 + (index * 3) % 7}%` }), top: `${5 + (index * 31) % 88}%` }}
    animate={reduced ? undefined : {
      x: [0, index % 2 ? -22 : 22, 0],
      y: [0, index % 3 ? -30 : 26, 0],
      opacity: [.11, .34, .11],
      color: [...rgbCycle.slice(index % rgbCycle.length), ...rgbCycle.slice(0, index % rgbCycle.length)],
    }}
    transition={{ duration: 12 + index % 6, delay: index * .23, repeat: Infinity, ease: 'easeInOut', color: { duration: 9 + index % 4, repeat: Infinity, ease: 'linear' } }}
  >{fragment}</motion.span>)}</div>
}
