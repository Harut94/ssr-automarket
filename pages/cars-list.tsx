import React from 'react'
import Layout from '../components/layout'
import { CarListInterface, MapedCarsInterface } from '../interfaces/car-list-interface'
//services
import { getCars } from '../services/cars-services'
//components
import CarInfo from '../components/car-info'

export default function CarList({ cars }: CarListInterface) {
  

  return (
    <Layout>
      {cars.map((car: MapedCarsInterface, i: number) => (
        <div key={i}>
          <CarInfo car={car}  />
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