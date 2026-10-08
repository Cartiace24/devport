import type { Project } from '../../data/projects'

type Token = { text: string; color?: string }
type Line = { indent?: number; tokens: Token[] }
type Snippet = { file: string; language: string; lines: Line[] }

const syntax = {
  text: '#d3d8d1', muted: '#77817b', keyword: '#ed9e72', name: '#a0c1c9',
  string: '#d5b98e', prop: '#c5c9a4', punctuation: '#929b94',
}
const t = (text: string, color = syntax.text): Token => ({ text, color })
const snippets: Record<string, Snippet> = {
  field: { file: 'TrailPage.tsx', language: 'TypeScript React', lines: [
    { tokens: [t('type ', syntax.keyword), t('Trail'), t(' = {')] },
    { indent: 1, tokens: [t('name', syntax.prop), t(': string', syntax.punctuation)] },
    { indent: 1, tokens: [t('distance', syntax.prop), t(': number', syntax.punctuation)] },
    { indent: 1, tokens: [t('difficulty', syntax.prop), t(': ', syntax.punctuation), t("'easy' | 'steady' | 'hard'", syntax.string)] },
    { tokens: [t('}')] },
    { tokens: [] },
    { tokens: [t('export ', syntax.keyword), t('default ', syntax.keyword), t('async function '), t('TrailPage', syntax.name), t('() {')] },
    { indent: 1, tokens: [t('const ' , syntax.keyword), t('trail = '), t('await ', syntax.keyword), t('getTrail', syntax.name), t('()')] },
    { tokens: [] },
    { indent: 1, tokens: [t('return ', syntax.keyword), t('(')] },
    { indent: 2, tokens: [t('<'), t('TrailStory', syntax.name)] },
    { indent: 3, tokens: [t('title', syntax.prop), t('={trail.name}')] },
    { indent: 3, tokens: [t('distance', syntax.prop), t('={trail.distance}')] },
    { indent: 2, tokens: [t('/>')] },
    { indent: 1, tokens: [t(')')] },
    { tokens: [t('}')] },
  ] },
  soft: { file: 'LessonPlayer.tsx', language: 'TypeScript React', lines: [
    { tokens: [t('import ', syntax.keyword), t('{ useState } ', syntax.prop), t('from ', syntax.keyword), t("'react'", syntax.string)] },
    { tokens: [] },
    { tokens: [t('type ', syntax.keyword), t('Lesson'), t(' = {')] },
    { indent: 1, tokens: [t('title', syntax.prop), t(': string', syntax.punctuation)] },
    { indent: 1, tokens: [t('duration', syntax.prop), t(': number', syntax.punctuation)] },
    { tokens: [t('}')] },
    { tokens: [] },
    { tokens: [t('export ', syntax.keyword), t('function '), t('LessonPlayer', syntax.name), t('({ lesson }: Props) {')] },
    { indent: 1, tokens: [t('const ' , syntax.keyword), t('[complete, setComplete] = '), t('useState', syntax.name), t('('), t('false', syntax.keyword), t(')')] },
    { tokens: [] },
    { indent: 1, tokens: [t('return ', syntax.keyword), t('(')] },
    { indent: 2, tokens: [t('<'), t('article', syntax.name), t(' className='), t('"lesson"', syntax.string), t('>')] },
    { indent: 3, tokens: [t('<'), t('h2', syntax.name), t('>{lesson.title}</'), t('h2', syntax.name), t('>')] },
    { indent: 3, tokens: [t('<'), t('button', syntax.name), t(' onClick={setComplete} />')] },
    { indent: 2, tokens: [t('</'), t('article', syntax.name), t('>')] },
    { indent: 1, tokens: [t(')')] },
    { tokens: [t('}')] },
  ] },
  north: { file: 'routes.products.$handle.tsx', language: 'Hydrogen · TypeScript', lines: [
    { tokens: [t('export ', syntax.keyword), t('async function '), t('loader', syntax.name), t('({ params, context }) {')] },
    { indent: 1, tokens: [t('const ' , syntax.keyword), t('product = '), t('await ', syntax.keyword), t('context.storefront.query', syntax.name), t('(')] },
    { indent: 2, tokens: [t('PRODUCT_BY_HANDLE', syntax.prop), t(',')] },
    { indent: 2, tokens: [t('{ variables: { handle: params.handle } }')] },
    { indent: 1, tokens: [t(')')] },
    { tokens: [] },
    { indent: 1, tokens: [t('if ', syntax.keyword), t('(!product) '), t('throw ', syntax.keyword), t('new '), t('Response', syntax.name), t('(')] },
    { indent: 2, tokens: [t("'Not found'", syntax.string), t(', { status: 404 }')] },
    { indent: 1, tokens: [t(')')] },
    { tokens: [] },
    { indent: 1, tokens: [t('return ', syntax.keyword), t('{ product }')] },
    { tokens: [t('}')] },
    { tokens: [] },
    { tokens: [t('const ', syntax.keyword), t('PRODUCT_BY_HANDLE', syntax.prop), t(' = '), t('`query Product($handle: String!) {')] },
    { indent: 1, tokens: [t('product', syntax.name), t('(handle: $handle) { id title') ] },
    { indent: 2, tokens: [t('featuredImage { url altText }')] },
  ] },
  measure: { file: 'useWeeklyImpact.ts', language: 'TypeScript', lines: [
    { tokens: [t('type ', syntax.keyword), t('Action'), t(' = { date: Date; points: number }')] },
    { tokens: [] },
    { tokens: [t('export ', syntax.keyword), t('function '), t('useWeeklyImpact', syntax.name), t('(actions: Action[]) {')] },
    { indent: 1, tokens: [t('const ', syntax.keyword), t('thisWeek = actions.filter', syntax.name), t('(')] },
    { indent: 2, tokens: [t('(action) => isThisWeek(action.date)')] },
    { indent: 1, tokens: [t(')')] },
    { tokens: [] },
    { indent: 1, tokens: [t('const ', syntax.keyword), t('points = thisWeek.reduce', syntax.name), t('(')] },
    { indent: 2, tokens: [t('(total, action) => total + action.points, 0')] },
    { indent: 1, tokens: [t(')')] },
    { tokens: [] },
    { indent: 1, tokens: [t('return ', syntax.keyword), t('{')] },
    { indent: 2, tokens: [t('points,')] },
    { indent: 2, tokens: [t('change: '), t('Math.round', syntax.name), t('(points / 12)')] },
    { indent: 2, tokens: [t('days: new Set(thisWeek.map(a => a.date)).size')] },
    { indent: 1, tokens: [t('}')] },
    { tokens: [t('}')] },
  ] },
  almost: { file: 'drawWanderingPath.ts', language: 'Canvas · TypeScript', lines: [
    { tokens: [t('export ', syntax.keyword), t('function '), t('drawWanderingPath', syntax.name), t('(ctx: CanvasRenderingContext2D) {')] },
    { indent: 1, tokens: [t('const ', syntax.keyword), t('points = '), t('makeRoute', syntax.name), t('({')] },
    { indent: 2, tokens: [t('start: '), t('[24, 286]', syntax.string), t(',')] },
    { indent: 2, tokens: [t('turns: '), t('6', syntax.string), t(',')] },
    { indent: 2, tokens: [t('curiosity: '), t('0.82', syntax.string)] },
    { indent: 1, tokens: [t('})')] },
    { tokens: [] },
    { indent: 1, tokens: [t('ctx.beginPath', syntax.name), t('()')] },
    { indent: 1, tokens: [t('ctx.moveTo', syntax.name), t('(points[0].x, points[0].y)')] },
    { tokens: [] },
    { indent: 1, tokens: [t('for ', syntax.keyword), t('('), t('const ', syntax.keyword), t('point of points) {')] },
    { indent: 2, tokens: [t('ctx.bezierCurveTo', syntax.name), t('(...point.control, point.x, point.y)')] },
    { indent: 1, tokens: [t('}')] },
    { tokens: [] },
    { indent: 1, tokens: [t('ctx.strokeStyle = '), t("'currentColor'", syntax.string)] },
    { indent: 1, tokens: [t('ctx.stroke', syntax.name), t('()')] },
    { tokens: [t('}')] },
  ] },
}

export default function ProjectArtwork({ project, large = false }: { project: Project; large?: boolean }) {
  const snippet = snippets[project.visual] ?? snippets.field
  const view = project.visual
  const terminal = view === 'soft'
  const diff = view === 'north'
  const chart = view === 'measure'
  const canvas = view === 'almost'
  const sidebar = view === 'field'
  const codeStart = sidebar ? 214 : 42
  return <div className={`artwork artwork-code${large ? ' artwork-large' : ''}`} role="img" aria-label={`${project.title} code preview`}>
    <svg viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice" className="code-image" aria-hidden="true">
      <rect width="1000" height="640" fill="#171b1e"/>
      <rect width="1000" height="48" fill="#22282c"/>
      <path d="M0 48H1000" stroke="#343b3e"/>
      <circle cx="24" cy="24" r="6" fill="#cf7460"/><circle cx="45" cy="24" r="6" fill="#c89e66"/><circle cx="66" cy="24" r="6" fill="#91a89c"/>
      <rect x="104" y="8" width="204" height="40" rx="5" fill="#171b1e"/><path d="M104 47H308" stroke="#ed9e72" strokeWidth="2"/>
      <text x="121" y="34" fill="#e8e5dc" fontSize="14" fontFamily="DM Mono, monospace">{snippet.file}</text>
      <text x="850" y="30" fill="#858f91" fontSize="11" fontFamily="DM Mono, monospace">{snippet.language}</text>
      {sidebar && <g><rect y="49" width="174" height="555" fill="#14181b"/><path d="M174 49V604" stroke="#30373a"/>
        <text x="20" y="82" fill="#77817b" fontSize="11" fontFamily="DM Mono, monospace">EXPLORER</text><text x="22" y="118" fill="#c6c9bb" fontSize="13" fontFamily="DM Mono, monospace">⌄  src</text><text x="38" y="148" fill="#929b94" fontSize="12" fontFamily="DM Mono, monospace">⌄  components</text><rect x="0" y="161" width="174" height="29" fill="#282e31"/><rect x="36" y="170" width="6" height="11" rx="1" fill="#ed9e72"/><text x="50" y="181" fill="#e1e1d8" fontSize="11" fontFamily="DM Mono, monospace">{snippet.file}</text><text x="38" y="215" fill="#929b94" fontSize="12" fontFamily="DM Mono, monospace">⌄  data</text><text x="50" y="244" fill="#7d8780" fontSize="11" fontFamily="DM Mono, monospace">projects.ts</text><text x="21" y="580" fill="#77817b" fontSize="10" fontFamily="DM Mono, monospace">GIT  ● main</text></g>}
      {terminal && <g><rect x="20" y="68" width="960" height="500" rx="5" fill="#101315" stroke="#30373a"/><text x="45" y="102" fill="#a0c1c9" fontSize="12" fontFamily="DM Mono, monospace">$ pnpm test LessonPlayer</text><text x="45" y="145" fill="#77817b" fontSize="11" fontFamily="DM Mono, monospace"> RUN  v2.1.4 /src/components</text>{['✓ lesson renders title and duration', '✓ completion state persists on click', '✓ keyboard controls move between lessons', '✓ reduced motion preference is respected'].map((line, i) => <text key={line} x="45" y={190 + i * 35} fill={i === 1 ? '#d5b98e' : '#aab4a6'} fontSize="12" fontFamily="DM Mono, monospace">{line}</text>)}<text x="45" y="360" fill="#ed9e72" fontSize="11" fontFamily="DM Mono, monospace">Test Files  1 passed (1) · Tests  4 passed (4)</text><path d="M45 390H620" stroke="#30373a"/></g>}
      {(diff || chart || canvas || sidebar) && snippet.lines.map((line, index) => <g key={`${snippet.file}-${index}`}>
        <text x={codeStart - 19} y={86 + index * 28} fill="#69736e" fontSize="12" textAnchor="end" fontFamily="DM Mono, monospace">{String(index + 1).padStart(2, '0')}</text>
        {diff && index > 2 && index < 6 && <rect x="0" y={67 + index * 28} width="1000" height="25" fill={index % 2 ? '#30201d' : '#192722'}/>}
        {diff && <text x="23" y={86 + index * 28} fill={index > 2 && index < 6 ? (index % 2 ? '#d98d73' : '#8ea99c') : '#69736e'} fontSize="12" fontFamily="DM Mono, monospace">{index > 2 && index < 6 ? (index % 2 ? '−' : '+') : ' '}</text>}
        <text x={codeStart + (line.indent ?? 0) * 18} y={86 + index * 28} fontSize="14" fontFamily="DM Mono, monospace">{line.tokens.map((token, tokenIndex) => <tspan key={tokenIndex} fill={token.color ?? syntax.text}>{token.text}</tspan>)}</text>
      </g>)}
      {chart && <g><rect x="660" y="80" width="305" height="215" rx="4" fill="#14181b" stroke="#30373a"/><text x="680" y="110" fill="#818b84" fontSize="10" fontFamily="DM Mono, monospace">WEEKLY POINTS</text>{[74, 119, 96, 158, 132, 184, 147].map((h, i) => <rect key={i} x={685 + i * 34} y={260 - h * .68} width="17" height={h * .68} fill={i === 5 ? '#ed9e72' : '#667d82'}/>)}<path d="M680 261H941" stroke="#343b3e"/><text x="680" y="282" fill="#77817b" fontSize="9" fontFamily="DM Mono, monospace">MON     TUE     WED     THU     FRI</text></g>}
      {canvas && <g><rect x="615" y="82" width="350" height="355" rx="4" fill="#14181b" stroke="#30373a"/><path d="M650 367C720 320 665 254 754 248S822 150 914 128" fill="none" stroke="#a0c1c9" strokeWidth="3"/><circle cx="650" cy="367" r="5" fill="#ed9e72"/><circle cx="914" cy="128" r="5" fill="#ed9e72"/><path d="M650 390H933M650 105V390" stroke="#343b3e" strokeDasharray="3 8"/><text x="650" y="420" fill="#77817b" fontSize="10" fontFamily="DM Mono, monospace">canvas · route 06</text></g>}
      <path d={`${sidebar ? '174' : '0'},604H1000`} stroke="#30373a"/><text x={sidebar ? '193' : '20'} y="626" fill="#818b84" fontSize="10" fontFamily="DM Mono, monospace">Ln 08, Col 12</text><text x="859" y="626" fill="#818b84" fontSize="10" fontFamily="DM Mono, monospace">UTF-8 · {snippet.language}</text>
    </svg>
  </div>
}
