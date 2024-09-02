import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=77949&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log("json: ", json);
    setResInfo(json.data);
  };
  console.log("see: ", resInfo?.cards[2]?.card?.card?.info ?? {});
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info ?? {};
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h4>{cuisines}</h4>
      <h4>{costForTwoMessage}</h4>
      <ul>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};

export default ResturantMenu;
