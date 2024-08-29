import {useEffect, useState} from "react";
import Shimmer from "./shimmer";

const ResturantMenu = () => {

    const [resInfo, setResInfo] = useState(null)
    useEffect(() =>{
        fetchMenu()
    }, [])

    const fetchMenu = async() =>{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log('json: ', json)
        setResInfo(json.data)

    }

  return (resInfo === null)?<Shimmer/>:(
    <div className="menu">
        console.log('aditya')
      <h1>{resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name}</h1>
      {/* <h2>Menu</h2> */}
      <ul>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};

export default ResturantMenu;
