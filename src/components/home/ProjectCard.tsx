import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import ProjectArtwork from '../ui/ProjectArtwork'
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <motion.article className={`project-card ${index === 0 ? 'project-featured' : ''}`} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: .42, delay: index * .045, layout: { duration: .35 } }}><Link to={`/project/${project.slug}`} className="project-link"><div className="project-image"><ProjectArtwork project={project}/><span className="project-open"><ArrowUpRight size={18}/></span></div><div className="project-info"><div><span className="project-index">{project.number} / {project.category}</span><h3>{project.title}</h3></div><span className="project-client">{project.client}<span>{project.year}</span></span></div></Link></motion.article>
}
