export interface CarListInterface {
    cars: MapedCarsInterface
}

export interface MapedCarsInterface {
    id: number;
    make: string;
    model: string;
    productionDate: number;
    mainImage: string;
    map: any
}