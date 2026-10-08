// All site copy and links live here so they can be edited without touching layout.
// Bracketed values like [$X] are placeholders carried over from the design.

export const site = {
  name: 'Fox Hunt Digital',
  tagline: 'Product & tech advisory · fitness + wellness',
  legalName: 'Fox Hunt Digital LLC',
  location: 'Orange County, CA',
  email: '[email]',
}

export const nav = [
  { label: 'The program', href: '#program' },
  { label: 'PR board', href: '#prs' },
  { label: 'Coach', href: '#coach' },
  { label: 'Services', href: '#services' },
]

export const cta = { label: 'Book an assessment', href: '#book' }

export const stats = [
  { value: '18', label: 'live apps led at Xponential Fitness' },
  { value: '12 yrs', label: 'coaching clients on the floor' },
  { value: '1 → 6', label: 'products built as CPTO at Physmodo' },
  { value: '10+ yrs', label: 'running product in fitness tech' },
]

export const workoutLog = [
  { movement: 'Roadmap audit', sets: '1 × 2 wk' },
  { movement: 'Team + vendor review', sets: '1 × 5' },
  { movement: 'Ship one thing users feel', sets: '3 × 30d' },
  { movement: 'Board update, plain English', sets: '1 × mo' },
]

export type BlockIcon = 'assess' | 'build' | 'peak'

export const programBlocks: {
  icon: BlockIcon
  label: string
  title: string
  body: string
  deliverable: string
}[] = [
  {
    icon: 'assess',
    label: 'Block 1 · Weeks 1 to 2',
    title: 'Assess',
    body: 'I audit the product, the roadmap, the code and the team. I use the app like a member and like a trainer.',
    deliverable: 'You get: a written assessment and a 90-day plan.',
  },
  {
    icon: 'build',
    label: 'Block 2 · Weeks 3 to 12',
    title: 'Build',
    body: 'I run product day to day with your developers, your agency, or engineers I bring in. Specs, design, QA, releases.',
    deliverable: 'You get: shipped work every two weeks.',
  },
  {
    icon: 'peak',
    label: 'Block 3 · Ongoing',
    title: 'Peak',
    body: 'Launch, train your staff and partners, report to your board, and hand the system to a team that can run it.',
    deliverable: 'You get: a product that runs without me.',
  },
]

export type PrIcon = 'portfolio' | 'growth' | 'scan' | 'hardware'

export const prs: {
  icon: PrIcon
  company: string
  role: string
  lift: string
  record: string
}[] = [
  {
    icon: 'portfolio',
    company: 'Xponential Fitness',
    role: 'Sr. Director of Product',
    lift: 'Led product for the member apps across the brand portfolio, plus streaming, connected fitness and partner launches with Meta, LG and lululemon Studio.',
    record: '18 live apps, 23 products total',
  },
  {
    icon: 'growth',
    company: 'XPASS',
    role: 'Xponential',
    lift: 'Turned a class-booking app into a loyalty game. Apple Health steps became a daily and weekly game show with points for free classes and partner prizes.',
    record: 'Booking app to daily habit',
  },
  {
    icon: 'scan',
    company: 'Physmodo',
    role: 'CPTO (contract)',
    lift: 'Took an iPad mobility scan and built the ecosystem around it: partner dashboard, mobile apps, Apple Watch biometrics. Led design, engineering, QA and support.',
    record: '1 product to a suite of 6',
  },
  {
    icon: 'hardware',
    company: 'Inspire Fitness',
    role: 'Director of Product',
    lift: 'Pitched an equipment manufacturer into software. Built the studio, the content operation, the production dashboard and the apps, through the merger into Centr.',
    record: 'Hardware company to app company',
  },
]

export const skills = [
  'Product strategy',
  'iOS + web',
  'Wearables + biometrics',
  'AI + automation',
  'Franchise rollouts',
]

export const plans = [
  {
    cadence: 'One-time · 2 weeks',
    title: 'Product assessment',
    body: 'A full audit of your product, roadmap and team, with a written 90-day plan you can run with or without me.',
    price: '[$X] fixed',
    featured: false,
  },
  {
    cadence: 'Monthly · 3-month minimum',
    title: 'Fractional product lead',
    body: 'Your head of product and technology, part time. I own the roadmap, run the team, and answer to you.',
    price: '[$X]/mo · [X] days a week',
    featured: true,
  },
  {
    cadence: 'Hourly · as needed',
    title: 'Advisory sessions',
    body: 'A second opinion on a hire, a vendor, a build-or-buy call, or a roadmap. For founders who mostly have it handled.',
    price: '[$X]/hr',
    featured: false,
  },
]

// The two Fox Hunt service sites. Set `href` to each live URL; until then they link nowhere.
export const serviceSites = [
  { label: 'The Short List: get your studio named by AI', href: '' },
  { label: 'AI operators: texts that win back clients', href: '' },
]
