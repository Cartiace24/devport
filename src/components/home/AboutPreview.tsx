import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function AboutPreview() {
  return <section className="about-preview section-wrap"><div className="about-preview-index">A NOTE ON<br/>HOW I WORK <span>↘</span></div><div className="about-preview-copy"><span className="eyebrow">Not just the pixels</span><p>I like the bit where a good idea becomes something real. The conversations, the small decisions, the detail someone might not notice but would miss if it wasn’t there.</p><Link className="text-link" to="/about">A little more about me <ArrowUpRight size={15}/></Link></div><div className="about-seal"><span>CURIOUS BY NATURE</span><b>MC</b><span>INDEPENDENT BY CHOICE</span></div></section>
}
