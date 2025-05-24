import React from "react";
import { createRoot } from "react-dom/client"; 

// React Elelment : WHEN I CREATE A DOM ELELMENT, This is a react-element. 
// React.createElement ==> Object ==> HTTPElement(render);
// 

// 

// 
/**
 * Home
 *  -Logo
 * -Nav Items
 * Body
 *  -->> Search
 *  -->> Cart Container
 *  -->> RestaurantCaontainer
 *    -->>>>> RestaurantCar
 * Footer
 *  -->> Copyright
 * -->> Links
 * -->>Address
 * -->>Content 
 */
// 

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img  className="logo" src="https://static.vecteezy.com/system/resources/thumbnails/005/513/590/small/catering-quality-food-design-premium-logo-vector.jpg" alt="App Logo" />
      </div>
      <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>Restaurant</li>
            <li>Foods</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>

      </div>
    </div>
  )
}
// Restro-Cart
const RestroCart = () => {
  return (
    <div className="res-card">
    <img src="
      https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/9/b7f823ab-9291-4be3-bb39-e5415ca70c35_5a6a3c4d-1a35-44c7-b7f0-02fd55b9fc83.JPG
    "
      className="food-img"
    />
    <div className="res-items">

      <h3> Veg-Biryani 😋</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 Stars</h4>
      <h4>27 minutes</h4>
    </div>
    </div>
  )
}

// Body:::
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {/* Res-component */}
        <RestroCart />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = createRoot(document.getElementById("root"));

// JSX (Jsx transpiled before if reaches JS Engine).. -->>> It dones by Parcel.. --->> It's done by parcel.  

root.render(<AppLayout />)
