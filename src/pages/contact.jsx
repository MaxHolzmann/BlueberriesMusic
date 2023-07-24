import Head from 'next/head'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Header></Header>

      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            The Blueberries
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Contact Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            For all booking needs or any inquiries, please contact us via our
            provided contact information.
          </p>
        </div>

        <div className="mx-auto mt-32 grid max-w-2xl grid-cols-1 place-items-center gap-9 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              Call Or Text
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <a href="tel:920-266-9602">(920) 266-9602</a>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              Email
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <a href="mailto:business@blueberriesmusic.com">
                business@blueberriesmusic.com
              </a>
            </address>
          </div>
          <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">
              Social Media
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <a
                target="_blank"
                href="https://www.facebook.com/people/Blueberries-Music/100088449282150/"
              >
                Facebook
              </a>
            </address>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
