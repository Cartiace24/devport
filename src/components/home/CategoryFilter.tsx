import { motion } from 'framer-motion'
import { categories, type ProjectCategory } from '../../data/projects'
export default function CategoryFilter({ active, onChange, count }: { active: ProjectCategory; onChange: (category: ProjectCategory) => void; count: number }) {
  return <div className="filter-row"><div className="filters" role="group" aria-label="Filter projects by type">{categories.map(category => <button key={category} onClick={() => onChange(category)} className={active === category ? 'filter-active' : ''}>{category}{active === category && <motion.i layoutId="filter-dot"/>}</button>)}</div><span className="project-count">{String(count).padStart(2, '0')} projects</span></div>
}
