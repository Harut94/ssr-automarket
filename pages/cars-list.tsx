import React from 'react'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import { CarListInterface, MapedCarsInterface } from '../interfaces/car-list-interface'
//services
import { getCars } from '../services/cars-services'

export default function CarList({cars}: CarListInterface) {
  const router = useRouter()

  const redirectCarInner = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
    e.preventDefault()
    router.push('/cars/[id]',`/cars/${id}`)
  }
    return (
    <Layout>
      {cars.map((car: MapedCarsInterface, i:number) => (
        <div onClick={event => redirectCarInner(event, car.id)} key={i}>
          <div>{car.make}{' '}{car.model}{' '}{car.productionDate}</div>
        </div>
      ))}
    </Layout>
    )
}

export async function getStaticProps() {
  const cars = await getCars()
  return {
    props: {
      cars
    }
  }
}