import ResturantCard from "./ResturantCard";
import React from "../app"
import { useState } from "react";
import resLis from "../utils/mockData";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resLis)

    return (
      <div className="body">
        <div className="filter">
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