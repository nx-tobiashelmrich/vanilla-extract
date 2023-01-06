import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Headline } from '../src/components/Atoms/headline'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Vanilla Extract</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Headline tag="h2">Test</Headline>
    </>
  )
}
