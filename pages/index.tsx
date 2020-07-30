import Head from 'next/head'
import Layout from '../components/layout'
// import { getSortedPostsData } from '../lib/posts'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Automarket</title>
      </Head>
      Home page
    </Layout>
  )
}

// export async function getStaticProps() {
//   const allPostsData = []
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
