import { SectionHeader } from '@/components/utils/SectionHeader'
import { ExperienceItem } from './ExperienceItem'

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Our Team" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  )
}

const experience = [
  {
    title: 'AmirHosein Tahmasb.',
    position: 'CEO',
    time: 'Aug 2021 - Now',
    location: '',
    description: 'Visionary leader of PHYLON.',
    tech: [],
  },
  {
    title: 'Ali Poudine.',
    position: 'CTO',
    location: '',
    time: 'May 2021 - Now',

    description: 'The person that makes things happen.',
    tech: [],
  },
  {
    title: 'Amir Shayan Shayeganfar.',
    position: 'Head of Product Design',
    time: 'Apr 2022 - Now',
    location: '',
    description: 'The Master Engineer. Pushing for 3d scanning innovation.',
    tech: [],
  },
  {
    title: 'Amir Ariyan.',
    position: 'Chief Front-End Developer',
    time: 'Aug 2022 - Now',
    location: '',
    description: 'Leading our Front development department.',
    tech: [],
  },
]
