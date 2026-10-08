import { ArrowUpRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const close = () => setOpen(false)
  return <>
    <header className="site-header">
      <Link className="wordmark" to="/" onClick={close} aria-label="Your Name, home"><span className="mark">YN</span><span>Your Name<span className="wordmark-role"> / developer</span></span></Link>
      <div className="header-right"><span className="availability"><i /> Available for select projects</span><nav className="desktop-nav" aria-label="Main navigation"><NavLink to="/" end>Work</NavLink><NavLink to="/about">About</NavLink><a href="mailto:hello@example.com">Let’s talk <ArrowUpRight size={13}/></a></nav></div>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={19}/> : <Menu size={19}/>}</button>
    </header>
    <AnimatePresence>{open && <motion.nav className="mobile-nav" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} aria-label="Mobile navigation"><NavLink onClick={close} to="/">Work <span>01</span></NavLink><NavLink onClick={close} to="/about">About <span>02</span></NavLink><a onClick={close} href="mailto:hello@example.com">Get in touch <ArrowUpRight size={16}/></a><small>{location.pathname === '/' ? 'Independent developer · City / Remote' : 'Building on the internet since 2018'}</small></motion.nav>}</AnimatePresence>
  </>
}
