import { url } from '../../configs'
import fetch from 'isomorphic-fetch'

export const getCars = async () => {
    const response = await fetch(`${url.carList}?pageNumber=1&pageSize=10`, {
        headers: {
            'Content-Type': 'application/json',
            'HTTP_USER_ID': '9cd325d7232dd71b939496e5adc5bced'
        },
    })
    const cars = await response.json();
    return cars
}

export const getCar = async (id: number | string) => {
    const response = await fetch(`${url.car}/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'HTTP_USER_ID': '9cd325d7232dd71b939496e5adc5bced'
        },
    })
    const car = await response.json();
    return car
}



export const getCarsIds = async () => {
    const response = await fetch(`https://automarkettest.ameriabank.am/v1/api/Cars?pageNumber=1&pageSize=10`, {
        headers: {
        'Content-Type': 'application/json',
        'HTTP_USER_ID' :'9cd325d7232dd71b939496e5adc5bced'
        },
    })
  const ids = JSON.parse(response.headers.get('x-pagination')).ids
  return ids
}

