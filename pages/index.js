import carsData from '../data/carData'
import Categories from '../components/module/Categories'
import AllButtons from '../components/module/AllButtons'
import SearchBar from "../components/module/SearchBar"
import CarsPage from "../components/template/CarsPage"
export default function index() {
  const cars = carsData.slice(0, 3)

  return (
    <div>
   <SearchBar />
      <Categories />
      <AllButtons />
      <CarsPage data={cars} />    </div>
  )
}
