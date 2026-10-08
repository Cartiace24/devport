import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectArtwork from '../components/ui/ProjectArtwork'
export default function ProjectPage() {
  const { slug } = useParams()
  const index = projects.findIndex(project => project.slug === slug)
  const project = projects[index]
  if (!project) return <Navigate to="/not-found" replace/>
  const next = projects[(index + 1) % projects.length]
  return <main className="project-page"><div className="project-page-top"><Link className="back-link" to="/"><ArrowLeft size={14}/> All work</Link><span className="eyebrow">Project {project.number} / 05</span></div><div className="project-title-row"><div><span className="eyebrow">{project.category} · {project.year}</span><h1>{project.title}<span className="period">.</span></h1></div><span className="project-role">{project.role}</span></div><div className="project-hero-art"><ProjectArtwork project={project} large/></div><section className="project-overview"><span className="eyebrow">A little context</span><p>{project.description}</p><div className="project-meta"><div><span>WHAT I DID</span><b>{project.role}</b></div><div><span>BUILT WITH</span><b>{project.stack.join(' · ')}</b></div><div><span>MADE IN</span><b>{project.year}</b></div><a href="mailto:hello@example.com">Ask me about it <ArrowUpRight size={14}/></a></div></section><section className="project-note"><div className="project-note-mark">✳</div><div><span className="eyebrow">The good part</span><p>Every project has a moment when the pieces start to click. For this one, it was making the complicated feel simple without sanding away the character.</p></div></section><Link className="next-project" to={`/project/${next.slug}`}><span className="eyebrow">Up next · {next.category}</span><span>{next.title}<ArrowRight size={21}/></span></Link></main>
}
