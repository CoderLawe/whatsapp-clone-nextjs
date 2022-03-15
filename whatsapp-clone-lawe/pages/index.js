// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Overlay from '../components/Overlay'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <nav className='z-10'>
      <Nav />
    </nav>
      <main className="">
          <Overlay />
      </main>
    </div>
  )
}

export default Home
