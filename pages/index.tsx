import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// import { getSortedPostsData } from '../lib/posts'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Automarket</title>
      </Head>
      Home page
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = []
  return {
    props: {
      allPostsData
    }
  }
}
