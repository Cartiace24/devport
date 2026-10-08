import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const code = [
  <><b>export default</b> function <strong>GoodWork</strong>() {'{'}</>,
  <>  <b>return</b> (</>,
  <>    &lt;<strong>ThingsThatMatter</strong></>,
  <>      <em>withCare</em>={'{'}true{'}'}</>,
  <>      <em>forPeople</em>={'{'}true{'}'}</>,
  <>    /&gt;</>,
  <>  )</>,
  <>{'}'}</>,
]

export default function Intro() {
  const reduced = useReducedMotion()
  return <section className="intro" id="top">
    <div className="intro-kicker"><span className="eyebrow">Independent web developer <span className="intro-star">✳</span></span><span className="intro-location">City / Remote <i/> Working everywhere</span></div>
    <div className="intro-stage">
      <div className="intro-copy"><span className="intro-index">INDEPENDENT DEVELOPER — CITY / REMOTE</span><h1>No noise.<br/><span className="headline-second">Just the work.</span></h1><div className="intro-lower"><p>I build digital products with sharp interfaces, solid systems, and nothing extra.</p><a className="scroll-cue" href="#work"><span>See the work</span><ArrowDown size={15}/></a></div></div>
      <div className="intro-art" aria-label="Code editor showing a React component"><div className="intro-art-stamp">BUILT<br/>WITH<br/>CARE</div><div className="intro-window"><div className="intro-window-bar"><span/><span/><span/><i>✳ portfolio.tsx</i></div><div className="intro-window-body">
        <div className="code-lines" aria-label="Animated React code sample">{code.map((line, index) => <motion.div key={index} initial={reduced ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduced ? 0 : .3, delay: reduced ? 0 : .3 + index * .1, ease: 'easeOut' }}><i>{String(index + 1).padStart(2, '0')}</i><span>{line}</span></motion.div>)}</div>
        <span className="window-note">// ship something good<span className="code-cursor">▍</span></span>
      </div></div><motion.span className="floating-code float-one" aria-hidden="true" animate={reduced ? undefined : { y: [0, -8, 0], opacity: [.45, .9, .45] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>{'{ }'}</motion.span><motion.span className="floating-code float-two" aria-hidden="true" animate={reduced ? undefined : { y: [0, 7, 0], opacity: [.3, .8, .3] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: .8 }}>async</motion.span><div className="intro-sunburst">✳</div><span className="intro-art-note">REACT · TYPESCRIPT<br/>AND GOOD QUESTIONS</span></div>
    </div>
    <div className="intro-side-note">DESIGN THINKING<br/>MEETS GOOD CODE</div>
  </section>
}
