import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

import { Footer } from '@/components/Footer'

const people = [
  {
    name: 'Roan Henslin',
    role: 'Bass II',
    imageUrl: '/roan.png',
    bio: "Hi, I'm Roan! You'll hear me singing the low notes. Outside of singing, I am a fitness enthusiast attending Moraine Park Technichal College for Software Engineering!",
  },
  {
    name: 'Maximilian Holzmann',
    role: 'Tenor I, Website Designer',
    imageUrl: '/max.png',
    bio: "Hi! I'm Max. You'll hear me singing the high notes! Outside of The Blueberries, I am a Realtor, Web Developer and active community member, participating on two local Board of Directors in United Way FDL and South Shore Chorale!",
  },
  {
    name: 'Zachary Holzmann',
    role: 'Bass I',
    imageUrl: '/zach.png',
    bio: "Hi, I'm Zach! You'll hear me singing the notes that fill the chord, the baritone! Outside of singing, I am a student at UW Oshkosh majoring in Statistics with a minor in Psychology. I also love basketball!",
  },
  {
    name: 'Jerome Poltrock',
    role: 'Tenor II / Lead',
    imageUrl: '/jerome.png',
    bio: "Hi! I'm Jerome! You'll hear me singing the melody, or the lead parts! Outside of singing, I am an entreprenuer and a student of life! I love to learn new things and broaden my horizons in any way I can.",
  },
]

export default function Team() {
  return (
    <>
      <Head>
        <title>The Team</title>
      </Head>

      <Header></Header>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="text-4xl font-bold leading-7 text-indigo-600">
              Meet The Blueberries
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Learn a little more about the individuals behind the quartet.
            </p>

            <p className="mt-10 text-2xl font-semibold leading-6 text-indigo-600">
              Why We Sing
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Starting in high school, The Blueberries sang together in several
              acapella groups, some extracurricular and some entirely self
              operated. After graduating, they decided they wanted to keep music
              in their lives, and formed The Blueberries as a way of doing just
              that!
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          >
            {people.map((person) => (
              <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                <img
                  className="aspect-[4/5] w-44 flex-none rounded-4xl object-contain"
                  src={person.imageUrl}
                  alt=""
                />
                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600">
                    {person.role}
                  </p>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    {person.bio}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
