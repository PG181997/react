import ResturantCard from "./ResturantCard";
import React from "../app";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // state var
  const [filteredListOfRestarunts, setFilteredListOfRestarunts] = useState([
    listOfRestaurants,
  ]);
  const [searchText, setSearchText] = useState(""); // stare var

  // useEffect (hookes)
  // Whenever state var update, react triggers a reconcilation cycle(re-renders the component)
  // if no dependency array ==> useEffect is called on every render
  // if dependency array is empty = [] ==> useEffect is called on initial render(only once)
  // if dependency array is [btnNameReact] ==> use effect is called after everytime [btnNameReact] changes
  useEffect(() => {
    featchData();
  }, []);

  const featchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log("json: ", json);
    apiData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("apiData: ", apiData);
    setListOfRestaurants(apiData);
    setFilteredListOfRestarunts(apiData);
  };

  // conditional rendering
  console.log("listOfRestaurants: ", listOfRestaurants);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="serach">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              // console.log(e)
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search"
            onClick={() => {
              //filter the res and update in ui

              const filteredRes = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              // console.log(searchText)
              // console.log("filteredRes: ", filteredRes);
              setFilteredListOfRestarunts(filteredRes);
              // console.log(listOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            (newListOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            )),
              // console.log(newListOfRestaurants);
              setListOfRestaurants(newListOfRestaurants);
          }}
        >
          Top Rated Resturents
        </button>
      </div>
      <div className="res-container">
        {
          // not using key is not acceptable, using index as key is ok but using unique id is best.
          filteredListOfRestarunts.map((listOfRestaurants) => (
            <ResturantCard
              key={listOfRestaurants.info.id}
              resData={listOfRestaurants}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
