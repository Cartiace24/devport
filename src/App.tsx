import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import PageTransition from './components/layout/PageTransition'
import SmoothScroll, { useLenis } from './components/layout/SmoothScroll'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import NotFound from './pages/NotFound'
import CodeWallpaper from './components/ui/CodeWallpaper'
function ScrollReset() { const location = useLocation(); const lenis = useLenis(); useEffect(() => { if (lenis) lenis.scrollTo(0, { immediate: true }); else window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior }) }, [location.pathname, lenis]); return null }
export default function App() { return <SmoothScroll><CodeWallpaper/><ScrollReset/><Header/><PageTransition><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/project/:slug" element={<Project/>}/><Route path="*" element={<NotFound/>}/></Routes></PageTransition><Footer/></SmoothScroll> }
