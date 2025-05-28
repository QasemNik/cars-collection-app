import CarsList from "../../components/template/CarsList";
import carsData from "../../data/carData";

function Suv() {
  const suvCars = carsData.filter((car) => car.category === "suv");

  return <CarsList data={suvCars} />;
}

export default Suv;