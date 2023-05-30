import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

//temporarily removed Testiomonals until we have a bunch of them to use
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>Blueberries Music</title>
        <meta
          name="description"
          content="Blueberries Music, an acapella group based out of Fond du Lac, Wisconsin."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
        <Faqs />
      </main>
      <Footer />
    </div>
  )
}
