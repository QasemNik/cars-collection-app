import { useRouter } from 'next/router'
import carsData from '../../data/carData'
import CarsList from '../../components/template/CarsList'

export default function FilteredCars() {
    const router = useRouter()
    const [min, max] = router.query.slug || []

    const filteredData = carsData.filter(car=> car.price > min && car.price < max)

    if(!filteredData.length) return <h3>NOT FOUND</h3>

  return    <CarsList data={filteredData} />;

}
