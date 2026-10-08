import { ArrowDown, ArrowUpRight } from 'lucide-react'
export default function ContactPreview() {
  return <section className="contact-preview section-wrap"><div className="contact-label"><span className="eyebrow">Have a good one in mind?</span><span>LET’S KEEP IT SIMPLE</span></div><a className="contact-mail" href="mailto:hello@example.com">Tell me about it <ArrowUpRight size={24}/></a><div className="contact-small"><span>Usually back in a day or two.</span><a href="#top">Back to the top <ArrowDown size={13}/></a></div></section>
}
