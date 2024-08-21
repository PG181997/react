import React from "react";
import ReactDOM from "react-dom/client";

// Header
//   - logi
//   - Nav Items
// Body
//   -Search
//   -resturentContainer
//   -resturentCard
//      -image, name of res, rating, cuisine, delv time
// Footer
//   -copyRight
//   -Links
//   -Address
//   -Contact

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvpRK7V4OpCNy2fl8qukRM9GjxI-Exj1Dz1A&s"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>30min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard resName="KFC" cuisine="fast food" rating="4.5" />
        <ResturantCard
          resName="pakashala"
          cuisine="Indian, chinese"
          rating="5"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
