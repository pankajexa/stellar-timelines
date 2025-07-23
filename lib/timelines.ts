export interface Timeline {
  id: string
  title: string
  teaser: string
  description?: string
  successMetrics?: string[]
}

export const timelines: Timeline[] = [
  {
    id: 'earth-3120',
    title: 'Earth-3120',
    teaser: 'You bought 1,000 Bitcoin for $10 in 2010. This morning, you checked your old laptop...',
    description: 'The timeline where you listened to that random forum post about "digital money"',
    successMetrics: ['$67M Portfolio', 'Crypto Pioneer', 'Financial Freedom']
  },
  {
    id: 'earth-7451', 
    title: 'Earth-7451',
    teaser: 'Your random lottery ticket from last week just hit all six numbers. Your phone is ringing...',
    description: 'The universe where your gut feeling about those numbers was spot on',
    successMetrics: ['$340M Jackpot', 'Overnight Millionaire', 'Dream Life Unlocked']
  },
  {
    id: 'earth-9901',
    title: 'Earth-9901',
    teaser: 'The app you built as a joke just got acquired by Google. The offer is on your screen...',
    description: 'Where your weekend project became the next billion-dollar acquisition',
    successMetrics: ['$2.1B Acquisition', 'Tech Visionary', 'Silicon Valley Legend']
  }
]

export const getTimelineById = (id: string): Timeline | undefined => {
  return timelines.find(timeline => timeline.id === id)
}

export const getAllTimelines = (): Timeline[] => {
  return timelines
} 