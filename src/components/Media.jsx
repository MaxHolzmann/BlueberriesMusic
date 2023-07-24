import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Media() {
  return (
    <Container className="mb-10 mt-0 text-center">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Performances
      </h1>
      <p className="mt-5 text-xl text-slate-900">
        Our current performance recordings are not the highest quality videos,
        however we hope that you can get a good idea of what we sound like from
        them.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="mx-auto w-1/2">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl">
            <iframe
              src="https://www.youtube.com/embed/Tl9wQ2w14Sc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full object-cover"
            ></iframe>
          </div>
        </div>
        <div className="mx-auto w-full">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl">
            <iframe
              src="https://www.youtube.com/embed/qllf-tiHxu4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full object-cover"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  )
}