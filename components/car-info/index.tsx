import React from 'react';
import { url } from '../../configs'
import Link from 'next/link'
//interface
import CarInfoInterface from './interface'
//style
import style from './style.module.css'

const CarInfo = ({ car }: CarInfoInterface) => {


    return (
        <div className={style.carWrapper}>
            <Link href={'/cars/[id]'} as={`/cars/${car.id}`} >
                <a className={style.carInfo}>
                    <div className={style.carTitle}>{car.make}{' '}{car.model}{' '}{car.productionDate}</div>
                    <div
                        style={{ backgroundImage: `url(${url.sourceUrl}${car.mainImage})` }}
                    />
                    <img src={`${url.sourceUrl}${car.mainImage}`}
                        width="300" height="255" alt="lorem" />
                </a>
            </Link>
        </div>
    )
};

export default CarInfo