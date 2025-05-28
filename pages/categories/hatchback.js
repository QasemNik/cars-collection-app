import carsData from '../../data/carData'
import CarsList from '../../components/template/CarsList'


export default function hatchback() {
    const hatchbackCar = carsData.filter(car=> car.category === "hatchback")
  return <CarsList data={hatchbackCar}/>
}

