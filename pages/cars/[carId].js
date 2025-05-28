import { useRouter } from "next/router";
import CarDetails from "../../components/template/CarDetails";
import carsData from "../../data/carData";

function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;
  const carInfo = carsData[carId - 1];

  return <CarDetails {...carInfo} />;
}

export default CarDetail;