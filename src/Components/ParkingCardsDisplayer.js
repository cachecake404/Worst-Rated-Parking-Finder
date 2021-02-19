import { useAtom } from "jotai";
import ParkingCard from "./ParkingCard";
import globalData from "../Data/GlobalStoreData";

function ParkingCardsDisplayer() {
    const [parkDetails, setParkDetails] = useAtom(globalData.parkDetailsAtom);
    if(parkDetails.length===0) {
        return (
            <div className="Main Page">
            </div>
          );
    } else {
        return parkDetails.map((data) => ParkingCard(data))
    }

  }
  
  export default ParkingCardsDisplayer;
  