import Image from 'next/image'
import { motion } from 'framer-motion'
import { StandardButton } from '@/components/buttons/StandardButton'
import { Reveal } from '@/components/utils/Reveal'
import { DotGrid } from './DotGrid'
import styles from './hero.module.scss'
import Profile from '@/public/jc.jpg'

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              We&apos;re Onesie<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              we&apos;re making your <span>Dream App</span> comes true
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              With Onesie, accelerate your business processes, minimize costs,
              and fortify your data security. We manage the technical
              complexities, enabling you to concentrate on growing your
              business. Start building the future, today.
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView()
              }
            >
              Contact Us
            </StandardButton>
          </Reveal>
        </div>
      </div>
      <DotGrid />
    </section>
  )
}
