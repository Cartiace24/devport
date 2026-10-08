import { useMemo, useState } from 'react'
import { projects, type ProjectCategory } from '../data/projects'
export function useProjectFilter() {
  const [category, setCategory] = useState<ProjectCategory>('Selected')
  const filtered = useMemo(() => category === 'Selected' ? projects : projects.filter(project => project.category === category), [category])
  return { category, setCategory, filtered }
}
