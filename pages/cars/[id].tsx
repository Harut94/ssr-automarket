import Head from 'next/head'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import { CarsInnerInterface } from '../../interfaces/cars-inner-interface'
//services
import { getCarsIds, getCar } from '../../services/cars-services'

export default function Posts({ car, ids }: CarsInnerInterface) {
  const router = useRouter()
  const { id } = router.query

  const goPreviousCar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    const prevCarId = ids.indexOf(+id) - 1;
    router.push('/cars/[id]', `/cars/${ids[prevCarId]}`)
  }

  const goNextCar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    const nextCarId = ids.indexOf(+id) + 1;
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
      {ids.indexOf(+id) - 1 >= 0 ? <div onClick={goPreviousCar}>
        back
      </div> : null}
      {ids.indexOf(+id) + 1 >= 0 ? <div onClick={goNextCar}>
        next
      </div> : null}
    </Layout>
  )
}


export async function getStaticPaths() {
  const ids = await getCarsIds()

  const paths = ids.map((id:number) => {
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

export async function getStaticProps({ params }: { params: { id: number } }) {
  const ids = await getCarsIds()
  const car = await getCar(params.id)
  return {
    props: {
      car,
      ids
    }
  }
}