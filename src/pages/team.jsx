import Head from 'next/head'
import Link from 'next/link'
import  { Header } from '@/components/Header'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

const people = [
    {
      name: 'Roan Henslin',
      role: 'Bass II',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Roans biography'
    }, {
        name: 'Maximilian Holzmann',
        role: 'Tenor I, Web Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Maxs biography'
      },
      {
        name: 'Zachary Holzmann',
        role: 'Bass I',
        imageUrl:
          'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Zachs bio'
      },
      {
        name: 'Jerome Poltrock',
        role: 'Tenor II / Lead',
        imageUrl:
          'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Jeromes bio'
      },
    // More people...
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
              <p className="text-3xl font-bold leading-7 text-indigo-600">Meet The Blueberries</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Learn a little more about the individuals behind the quartet. 
                </p>
              </div>
              <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
              >
                {people.map((person) => (
                  <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                    <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
                    <div className="flex-auto">
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                      <p className="text-base leading-7 text-gray-600">{person.role}</p>
                      <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>          
    </>
  )
}
