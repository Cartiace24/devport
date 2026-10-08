export type ProjectCategory = 'Selected' | 'Websites' | 'Products' | 'Experiments'
export type Project = {
  slug: string; number: string; title: string; client: string; year: string; category: Exclude<ProjectCategory, 'Selected'>
  description: string; role: string; stack: string[]; visual: string; accent: string; featured?: boolean
}

export const projects: Project[] = [
  { slug: 'field-notes', number: '01', title: 'Field Notes', client: 'A living archive for the outdoors', year: '2025', category: 'Websites', description: 'A quiet digital home for people who would rather be outside. Field Notes pairs a tactile reading experience with an evolving collection of trails, essays, and hard-won advice.', role: 'Design engineering · Creative direction', stack: ['React', 'TypeScript', 'Sanity', 'Mapbox'], visual: 'field', accent: '#d8e1a9', featured: true },
  { slug: 'soft-serve', number: '02', title: 'Soft Service', client: 'A better way to share what you know', year: '2025', category: 'Products', description: 'An online teaching platform built around the small details that make learning feel human. Class discovery, notes, and progress all live in one calm, considered space.', role: 'Product design · Frontend', stack: ['React', 'TypeScript', 'Supabase', 'Motion'], visual: 'soft', accent: '#f5b7a4', featured: true },
  { slug: 'northstar', number: '03', title: 'Northstar Editions', client: 'Books for curious people', year: '2024', category: 'Websites', description: 'A lively storefront for an independent publisher. A custom editorial system gives every book a world of its own while making the whole catalogue a pleasure to wander.', role: 'Frontend · Commerce', stack: ['Shopify', 'Hydrogen', 'React', 'CSS'], visual: 'north', accent: '#b7cae0' },
  { slug: 'good-measure', number: '04', title: 'Good Measure', client: 'Small actions, made visible', year: '2024', category: 'Products', description: 'A tiny tool with a wide lens: Good Measure turns personal climate choices into clear, encouraging progress. No streaks, no guilt, just a little more perspective.', role: 'Product engineering', stack: ['React', 'TypeScript', 'D3', 'Vite'], visual: 'measure', accent: '#e3a673' },
  { slug: 'almost-there', number: '05', title: 'Almost There', client: 'A playful study in getting lost', year: '2024', category: 'Experiments', description: 'A map that rewards the scenic route. This small interaction experiment remixes generative paths, place names, and gentle surprises into a reminder to take your time.', role: 'Creative coding', stack: ['Canvas', 'TypeScript', 'Mapbox'], visual: 'almost', accent: '#c2b5e7' },
]

export const categories: ProjectCategory[] = ['Selected', 'Websites', 'Products', 'Experiments']
