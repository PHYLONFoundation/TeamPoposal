import { MyLinks } from '@/components/nav/components/MyLinks'
import { Reveal } from '@/components/utils/Reveal'
import { SectionHeader } from '@/components/utils/SectionHeader'
import styles from './about.module.scss'
import { Stats } from './Stats'
import { AiFillCode, AiOutlineArrowRight } from 'react-icons/ai'

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="Empower Your Vision" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Short on Time to Design Your App?
              <br />
              Let Us Handle It!
              <br />
              <br />
              Whether you are crafting a cutting-edge cryptocurrency application,
              a dynamic web app, or a robust SaaS system, our professional
              design team is here to bring your vision to life. <br />
              <AiFillCode style={{ fontSize: '22px', color: `#bd5fff` }} />
              Send Us Your App Details: Start by sharing your vision and
              requirements.
              <br />
              <br />- Preview Your Design Prototype: Approve the design only
              when it meets your expectations. - We Build and Publish Your App:
              From initial coding to final launch, we manage everything.
              <br />- Enjoy Free Lifetime Technical Support: Continuous support
              to ensure your app runs smoothly. At Onesie, we take you from zero
              to launch, handling every detail so you can focus on what
              matters—your business.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Our primary focus lies in crafting immersive 3D experiences, an
              area at the forefront of contemporary design trends. We have
              deliberately chosen to specialize in this field because it demands
              a unique blend of artistic flair and technical prowess. Excelling
              in both realms is a rarity, yet We possess a rare combination of
              aesthetic sensibility and advanced mathematical and development
              skills. This multidisciplinary approach allows us to bring
              unparalleled depth and innovation to our work, setting us apart in
              the competitive landscape of digital design and development.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Transform Your Ideas into Applications with Onesie Team App
              Builder
              <br />
              Feature-Rich Solutions Tailored for Your Needs:
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              - All-in-One Package: From the user interface to backend
              infrastructure and innovative blockchain solutions, get everything
              you need to build your application seamlessly.
              <br />
              - Custom Design System: Our professional design team creates
              visually appealing and functional designs tailored to your
              specific requirements.
              <br />
              - Advanced Frontend & Backend Systems: We develop robust frontend
              and backend systems that are scalable, secure, and efficient.
              <br />- Blockchain Innovation Core: Leverage our blockchain
              expertise to integrate cutting-edge decentralized technologies
              into your application.
            </p>
          </Reveal>
          <Reveal>
            <SectionHeader title="Zero to lunch" dir="l" />
            <p className={styles.aboutText}>
              <br />
              Projects Speak for Themselves:
              <br />
              We have successfully delivered diverse applications, from
              comprehensive SaaS systems to dynamic web apps and pioneering
              blockchain platforms. Each project exemplifies our commitment to
              excellence and innovation.
              <br />
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Why Choose Onesie?
              <br />
              - See Before You Commit: Review your design prototype and make
              sure it aligns with your vision before approval.
              <br />
              - Zero to Launch: We handle everything from design to deployment,
              ensuring a smooth transition through all phases of development.
              <br />
              - Lifetime Technical Support: Benefit from our ongoing support and
              updates at no additional cost.
              <br />
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>Our links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  )
}
