import Head from 'next/head'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-fetch'
import { CarsInnerInterface } from '../../interfaces/cars-inner-interface'


export default function Posts({car, ids}: CarsInnerInterface) {
  const router = useRouter()
  const { id } = router.query
  
  const goPreviousCar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    const prevCarId = ids.indexOf(+id)-1;
    router.push('/cars/[id]',`/cars/${ids[prevCarId]}`)
  }

  const goNextCar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    const nextCarId = ids.indexOf(+id)+1;
    router.push('/cars/[id]', `/cars/${ids[nextCarId]}`)
  }

  return (
    <Layout>
      <Head>
        <title>{car.make}</title>
        <meta
          name="description"
          content={`${car.make} ${car.model}`}
        />
      </Head>
      {car.make}
      <br />
      {car.model}
      <br />
      <br />
      {car.productionDate}
      <br />
      {ids.indexOf(+id)-1 >= 0 ? <div onClick={goPreviousCar}>
        back
      </div> : null}
      {ids.indexOf(+id)+1 >= 0 ? <div onClick={goNextCar}>
      next
      </div> : null}
    </Layout>
  )
}


export async function getStaticPaths() {
  const response = await fetch(`https://automarkettest.ameriabank.am/v1/api/Cars?pageNumber=1&pageSize=10`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'HTTP_USER_ID' :'9cd325d7232dd71b939496e5adc5bced'
    },
  })
  const ids = JSON.parse(response.headers.get('x-pagination')).ids
  
  
  const paths = ids.map(id => {
    return {
      params: {
        id: id.toString()
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: {params: {id: number}}) {
  const response = await fetch(`https://automarkettest.ameriabank.am/v1/api/Cars/${params.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'HTTP_USER_ID' :'9cd325d7232dd71b939496e5adc5bced'
    },
  })
  const carsIdsRespone = await fetch(`https://automarkettest.ameriabank.am/v1/api/Cars?pageNumber=1&pageSize=10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'HTTP_USER_ID' :'9cd325d7232dd71b939496e5adc5bced'
      },
    })
  const ids = JSON.parse(carsIdsRespone.headers.get('x-pagination')).ids
  const car = await response.json() 
  return {
    props: {
      car,
      ids
    }
  }
}