import ResturantCard from "./ResturantCard";

let listOfRestaurants = [{
    info: {
      id: "30328",
      name: "Theobroma",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/0cf9fe71-170f-4ad2-ba4c-c29d8f6b9525_303248.jpg",
      costForTwo: "₹400 for two",
      cuisines: [
        "Desserts",
        "Bakery",
        "Beverages"
      ],
      avgRating: 4.7,
      sla: {
        deliveryTime: 25,
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
          },
        ],
    },
  
  },
}, {
    info: {
      id: "303248",
      name: "KFC",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/0cf9fe71-170f-4ad2-ba4c-c29d8f6b9525_303248.jpg",
      costForTwo: "₹400 for two",
      cuisines: [
        "Desserts",
        "Bakery",
        "Beverages"
      ],
      avgRating: 3.5,
      sla: {
        deliveryTime: 25,
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
          },
        ],
    },
  
  },
},
{
    info: {
      id: "3303248",
      name: "McD",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/0cf9fe71-170f-4ad2-ba4c-c29d8f6b9525_303248.jpg",
      costForTwo: "₹400 for two",
      cuisines: [
        "Desserts",
        "Bakery",
        "Beverages"
      ],
      avgRating: 4.1,
      sla: {
        deliveryTime: 25,
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
          },
        ],
    },
  
  },
}]
const Body = () => {
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick = {() => {
                // filter logic
                listOfRestaurants = listOfRestaurants.filter((res) => res.info.avgRating>4),
                console.log(listOfRestaurants)
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