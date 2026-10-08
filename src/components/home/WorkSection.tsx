import { AnimatePresence } from 'framer-motion'
import { useProjectFilter } from '../../hooks/useProjectFilter'
import CategoryFilter from './CategoryFilter'
import ProjectCard from './ProjectCard'
export default function WorkSection() {
  const { category, setCategory, filtered } = useProjectFilter()
  return <section className="work-section section-wrap" id="work"><div className="section-heading"><div><span className="eyebrow">A running list of things I’ve put on the internet</span><h2>Work, in progress<span className="period">.</span></h2></div><span className="section-side">A few recent collaborations<br/>2024 — now</span></div><CategoryFilter active={category} onChange={setCategory} count={filtered.length}/><div className="project-grid"><AnimatePresence mode="popLayout">{filtered.map((project, index) => <ProjectCard key={project.slug} project={project} index={index}/>)}</AnimatePresence></div><div className="work-endnote"><span>Good work is never quite finished.</span><span>More stories soon <span className="asterisk">✳</span></span></div></section>
}
