import CarsList from "../../components/template/CarsList";
import carsData from "../../data/carData";

function Sport() {
  const sportCars = carsData.filter((car) => car.category === "sport");

  return <CarsList data={sportCars} />;
}

export default Sport;