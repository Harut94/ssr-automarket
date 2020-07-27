import React from 'react'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import { CarListInterface, MapedCarsInterface } from '../interfaces/car-list-interface'

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
    const response = await fetch(`https://automarkettest.ameriabank.am/v1/api/Cars?pageNumber=1&pageSize=10`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'HTTP_USER_ID' :'9cd325d7232dd71b939496e5adc5bced'
    },
  })
  const cars = await response.json();
  return {
    props: {
        cars
    }
  }
}