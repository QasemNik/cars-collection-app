import React from 'react'
import carsData from '../../data/carData'
import CarsList from '../../components/template/CarsList'

export default function Sedan() {
    const sedanCars = carsData.filter(car=>car.category === "sedan")

  return <CarsList data={sedanCars}/>
}
