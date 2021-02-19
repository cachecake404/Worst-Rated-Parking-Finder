import { Input } from "antd";
import { useAtom } from "jotai";
import globalData from "../Data/GlobalStoreData";

const { Search } = Input;
const onSearch = async (value, setParkDetails) => {
  var requestUrl = `/getWorstParkingLots?location=${value}`;
  var response = await fetch(requestUrl);
  var json = await response.json();
  setParkDetails(json.businesses);
  console.log(json);
};

function SearchBar() {
  const [parkDetails, setParkDetails] = useAtom(globalData.parkDetailsAtom);
  return (
    <Search
      placeholder="Enter Desired Location"
      onSearch={(value) => {
        onSearch(value, setParkDetails);
      }}
      enterButton
    />
  );
}

export default SearchBar;
