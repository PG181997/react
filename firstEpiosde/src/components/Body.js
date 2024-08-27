import ResturantCard from "./ResturantCard";
import React from "../app"
import { useState, useEffect } from "react";
import Shimmer from "./shimmer"

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [searchText, setSearchText] = useState(" ")
    
    useEffect(() => {
      featchData()
    },[])
    
    const featchData = async () =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log('json: ', json)
      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    
    // conditional rendering 

    
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
      <div className="body">
        <div className="filter">
        <div className = "serach">
          <input className = "search-box" type="text" value={searchText} onChange={(e) => {
            // console.log(e)
            setSearchText(e.target.value)
          }}></input>
          <button className = "search" onClick={() =>{
            //filter the res and update in ui
            //search text
            console.log('SearchText')
          }}>Search</button>
        </div>
            <button className="filter-btn" onClick = {() => {
                // filter logic
                newListOfRestaurants = listOfRestaurants.filter((res) => res.info.avgRating>4.5),
                console.log(newListOfRestaurants)
                setListOfRestaurants(newListOfRestaurants)
            }}>Top Rated Resturents</button>
        </div>
        <div className="res-container">

        {
          // not using key is not acceptable, using index as key is ok but using unique id is best.
          listOfRestaurants.map(listOfRestaurants => <ResturantCard key={listOfRestaurants.info.id} resData={listOfRestaurants}/>)
        }
        
        </div>
      </div>
    );
  };

  export default Body