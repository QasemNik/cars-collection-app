import Categories from "../../components/module/Categories"
import SearchBar from "../../components/module/SearchBar"
import CarsPage from "../../components/template/carsPage"
import carsData from "../../data/carData"

export default function Details() {

  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data = { carsData } />
    </div>
  )
}
