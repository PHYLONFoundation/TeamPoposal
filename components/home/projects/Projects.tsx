import { SectionHeader } from '@/components/utils/SectionHeader'
import { Project } from './Project'
import styles from './projects.module.scss'

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />
        })}
      </div>
    </section>
  )
}

const projects = [
  {
    title: 'Phylon',
    imgSrc: '/project-imgs/phylon.png',
    code: '#',
    projectLink: 'https://phylon.io/',
    tech: ['React', 'Nextjs', 'Threejs', 'GLSL', 'Tailwind'],
    description: 'A Decentralized Escro Platform.',
    modalContent: (
      <>
        <p>
          Worked as a front-end developer and created dynamic reusable
          components and base layout from a mock-up.
        </p>
        <p>
          The tech stack is based on Threejs for 3D experience and using OpenGL
          Shading Language made highly optimzation on performance.
        </p>
      </>
    ),
  },
  {
    title: 'INfraFund',
    imgSrc: '/project-imgs/infraFund.png',
    code: 'https://www.github.com',
    projectLink: 'https://www.infrafund.net/',
    tech: ['React', 'MUI', 'MongoDB', 'Postgres', 'Python'],
    description: 'WEB 3.0 CROWDFUNDING FOR INFRASTRUCTURE',
    modalContent: (
      <>
        <p>
          Worked as a front-end developer for this web application. Integrated
          api&apos;s, Created dynamic and reusable components.
        </p>
        <p>
          I work primarily on the frontend, creating reusable components and
          integrating api.
        </p>
        <p>
          The team in total consists of 3 developers. This is a passion project
          for all of us.
        </p>
      </>
    ),
  },
  {
    title: 'Smart City',
    imgSrc: '/project-imgs/smart-city.png',
    code: 'https://www.github.com',
    projectLink: '#',
    tech: ['React', 'Nextjs', 'Threejs', 'Expressjs', 'MongoDB'],
    description: 'A 3D experience Innovative electricity Optimization app.',
    modalContent: (
      <>
        <p>
          Worked as a Full-Stack developer and created dynamic reusable
          components, integrated calendly, messaging and project management
          features.
        </p>
        <p>
          The tech stack is based on Nextjs with the custom Styled components,
          connected to a Node Express backend, with data stored in MongoDB.
        </p>
      </>
    ),
  },
  {
    title: 'Social Order',
    imgSrc: '/project-imgs/social-order.png',
    code: 'https://www.github.com',
    projectLink: 'https://qa.socialorder.io/',
    tech: ['React', 'Nextjs', 'Threejs', 'Expressjs', 'MongoDB'],
    description: 'A Web3 Social Media App.',
    modalContent: (
      <>
        <p>
          Worked as a Full-Stack developer and created dynamic reusable
          components, integrated calendly, messaging and project management
          features.
        </p>
        <p>
          The tech stack is based on Nextjs with the custom Styled components,
          connected to a Node Express backend, with data stored in MongoDB.
        </p>
      </>
    ),
  },
  {
    title: 'Web3.0 Extension',
    imgSrc: '/project-imgs/extension.jpg',
    code: 'https://www.github.com',
    projectLink: 'https://worshiphim.vercel.app/',
    tech: ['React', 'Nextjs', 'Web3', 'Nestjs', 'Framer-motion'],
    description: 'ease of buying from Amazon using Crypto ',
    modalContent: (
      <>
        <p>
          A chrome Extension that ease your purchase from Amazon using Crypto
        </p>
        <p>
          I integrated ko-fi donation and uses Template for this Nextjs Project.
          I also use a plugin for scrapping data from our google play to display
          directly on the landing page.
        </p>
      </>
    ),
  },
  {
    title: 'WorshipHIM Landing Page',
    imgSrc: '/project-imgs/worshiphim.png',
    code: 'https://www.github.com',
    projectLink: 'https://worshiphim.vercel.app/',
    tech: ['React', 'Nextjs', 'Tailwind', 'Google Play Scrapper', 'Ko-Fi'],
    description:
      'Landing Page of WorshipHIM mobile application for showcasing feature rich and tools of the app.',
    modalContent: (
      <>
        <p>
          This is another self project that i made to showcase our mobile app.
        </p>
        <p>
          I integrated ko-fi donation and uses Template for this Nextjs Project.
          I also use a plugin for scrapping data from our google play to display
          directly on the landing page.
        </p>
      </>
    ),
  },

  {
    title: 'WorshipHIM',
    imgSrc: '/project-imgs/wh_app.png',
    code: 'https://www.github.com',
    projectLink: '#',
    tech: ['React', 'React Native', 'Styled Components', 'Android'],
    description:
      'WorshipHIM is a chord and lyrics app developed to help ease everyone in their worship to God.',
    modalContent: (
      <>
        <p>
          WorshipHIM is a chord and lyrics app developed to help ease everyone
          in their worship to God. So that all may know, from the rising of the
          sun to its setting, That there is none besides God. He is the Lord and
          there&apos;s no other! Praise Him, Worship Him!
        </p>
        <p>This is a very fun project that i made using React Native.</p>
      </>
    ),
  },
]
