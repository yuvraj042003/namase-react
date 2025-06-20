import React, {useState} from "react";
import { createRoot } from "react-dom/client"; 
import { CiSearch } from "react-icons/ci"; 
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
// SWiggy API
const resList = [
  {
    info: {
      id: "10894",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "2nd Stage",
      areaName: "New Delhi",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      deliveryTime: 31,
    },
  },
  {
    info: {
      id: "211192",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "lczhp9lptdzbqn09nfns",
      locality: "2nd Stage",
      areaName: "Gurgoan",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4,
      parentId: "4961",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      deliveryTime: 28,
    },
  },
  {
    info: {
      id: "477963",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      locality: "2nd Stage",
      areaName: "New Delhi 2nd Stage",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.3,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      deliveryTime: 32,
    },
  },
  {
    info: {
      id: "23683",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1c999aef-c166-496d-a9f1-8508e83e6d5a_23683.jpg",
      locality: "2nd Stage",
      areaName: "Galleria Market, Gurgoan",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.2,
      parentId: "630",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      deliveryTime: 28,
    },
  },
  {
    info: {
      id: "255038",
      name: "Andhra Gunpowder",
      cloudinaryImageId: "e996wruqpmrrrqglp7hs",
      locality: "NS Palya",
      areaName: "Noida",
      costForTwo: "₹350 for two",
      cuisines: ["Andhra", "Biryani", "South Indian"],
      avgRating: 4.3,
      parentId: "10496",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      deliveryTime: 29,
    },
  },
  {
    info: {
      id: "240178",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_240178.jpg",
      locality: "Indiranagar",
      areaName: "JP Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.3,
      parentId: "371281",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      deliveryTime: 39,
    },
  },
  {
    info: {
      id: "290271",
      name: "Thalairaj Biryani",
      cloudinaryImageId: "qf8lwn0ehi8sgvjvsi2l",
      locality: "5th Phase",
      areaName: "New Delhi",
      costForTwo: "₹300 for two",
      cuisines: [
        "Andhra",
        "Biryani",
        "Hyderabadi",
        "South Indian",
        "Indian",
        "Beverages",
      ],
      avgRating: 4.2,
      parentId: "433875",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      deliveryTime: 35,
    },
  },
  {
    info: {
      id: "17312",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/768a43ed-602d-4e08-b6ab-a2bf8f7d3e33_17312.JPG",
      locality: "4th Phase",
      areaName: "Malveeya Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.1,
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      deliveryTime: 27,
    },
  },
  {
    info: {
      id: "49704",
      name: "California Burrito",
      cloudinaryImageId: "p57honbbzdgf7tyt2vay",
      locality: "5th Phase",
      areaName: "Old Delhi",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food",
        "Desserts",
      ],
      avgRating: 4.5,
      parentId: "1252",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      deliveryTime: 35,
    },
  },
  {
    info: {
      id: "246645",
      name: "Great Indian Khichdi by EatFit",
      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
      locality: "2nd Stage",
      areaName: "Cyber City, Gurgoan",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "Indian",
        "North Indian",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "Rajasthani",
        "South Indian",
        "Maharashtrian",
        "Sweets",
      ],
      avgRating: 4.2,
      parentId: "319582",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      deliveryTime: 29,
    },
  },
  {
    info: {
      id: "643652",
      name: "WeFit - Protein Bowls, Salads & Sandwiches",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/8162aab2-4ccd-431e-8163-ad18749b95f5_643652.JPG",
      locality: "16TH MAIN",
      areaName: "New Delhi, Cental Secetirent",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
      avgRating: 4.4,
      parentId: "355285",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      deliveryTime: 35,
    },
  },
  {
    info: {
      id: "750212",
      name: "Daily Kitchen - Homely Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/4ec6a5b6-7c8d-4e10-b8a3-317922e419da_750212.JPG",
      locality: "2nd stage",
      areaName: "New Delhi",
      costForTwo: "₹400 for two",
      cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
      avgRating: 4.3,
      parentId: "444382",
      avgRatingString: "4.3",
      totalRatingsString: "50+",
      deliveryTime: 30,
    },
  },
  {
    info: {
      id: "390045",
      name: "NH1 Bowls - Highway To North",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/18/8dd09eab-b40e-43ed-b46d-c88f50e450a3_390045.JPG",
      locality: "2nd stage",
      areaName: "Rajeev Chauk,New Delhi",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Punjabi", "Home Food"],
      avgRating: 4.6,
      parentId: "22452",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      deliveryTime: 30,
    },
  },
  {
    info: {
      id: "374525",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "npp2m7tuszixwcc69pqd",
      locality: "2nd Stage",
      areaName: "New Delhi Layout",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.6,
      veg: true,
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      deliveryTime: 20,
    },
  },
  {
    info: {
      id: "758321",
      name: "NIC Ice Creams",
      cloudinaryImageId: "5bbe809ee274743ba5e09eab110cd813",
      locality: "MICO Employees Grinirman",
      areaName: "New Delhi layout",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.9,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.9",
      totalRatingsString: "10+",
      deliveryTime: 16,
    },
  },
  {
    info: {
      id: "590119",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/24/11e95f9e-ba33-472c-85ae-ed6d5c289992_590119.JPG",
      locality: "1st  Stage",
      areaName: "New Delhi Layout",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.3,
      parentId: "3818",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      deliveryTime: 27,
    },
  },
  {
    info: {
      id: "399138",
      name: "Aubree",
      cloudinaryImageId: "65faa4b5046cb2215fe285a8b96c9bd7",
      locality: "JP Nagar",
      areaName: "JP Nagar",
      costForTwo: "₹700 for two",
      cuisines: ["Bakery", "Italian", "Snacks", "Desserts"],
      avgRating: 4.5,
      parentId: "3807",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      deliveryTime: 33,
    },
  },
  {
    info: {
      id: "108097",
      name: "Ambur Star Briyani Since 1890",
      cloudinaryImageId: "yktanq9i7yfjrixaghuj",
      locality: "2nd Stage",
      areaName: "Malveeya Nagar",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Chettinad", "Andhra", "Beverages", "Seafood"],
      avgRating: 4.3,
      parentId: "21400",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      deliveryTime: 21,
    },
  },
  {
    info: {
      id: "622017",
      name: "MOJO Pizza - 2X Toppings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/0fbf3dd4-03fc-403e-b861-6d7455bcb69b_622017.JPG",
      locality: "New Delhi",
      areaName: "New Delhi 2nd Stage",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      avgRating: 4.5,
      parentId: "11329",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      deliveryTime: 35,
    },
  },
  {
    info: {
      id: "558760",
      name: "HRX by EatFit",
      cloudinaryImageId: "d8d85afa5c5e92461d30ff2ca867a587",
      locality: "2nd Stage",
      areaName: "New Delhi",
      costForTwo: "₹450 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Pastas"],
      avgRating: 4.3,
      parentId: "335529",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      deliveryTime: 35,
    },
  },
];
// Restro-Cart
const RestroCart = (props) => {
  const {resList} = props;
  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime
  } = resList?.info;
  return (
    <div className="res-card">
    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
      className="food-img"
      alt="SGY Not Comming"
    />
    <div className="res-items">

      <h3> {name}</h3>
      <h4>{cuisines.join(", ").slice(0, 30)}
          {cuisines.join(", ").length > 30 ? "..." : ""}</h4>
      <h4>Avg. Rating: {avgRating}</h4>
      <h4>Delivery Time: {deliveryTime} min</h4>
      <h4 >{areaName}</h4>
    </div>
    </div>
    
  )
}
const Footer = () => {
  return (
    <div className="footer">
      <h2 style={{paddingLeft:'10px'}} >Cock-tails</h2>
      <hr />
      <div className="footer-head">
        <ul>
          <li>About
          <ul>
            <li>Who are we</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Invester Relations</li>
            <li>Report Fraud</li>
            <li>Contact us</li>
          </ul>
          </li>
          <li>For Restaurant
          <ul>
            <li>Partner With Us</li>
            <li>App For You</li>
          </ul>
          </li>
          <li>Learn More
          <ul>
            <li>Privacy</li>
            <li>Security</li>
            <li>Teams</li>
          </ul>
          </li>
          <li>Social Links</li>
          
        </ul>
      </div>

    </div>
  )
}

// Body:::
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredList, setFilteredList] = useState(resList);
  const [activeIndex, setActiveIndex] = useState(-1);
  // Searching Functionality
   const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearchText(keyword);

    if (keyword.length === 0) {
      setFilteredList(resList);
      setSuggestions([]);
      return;
    }

    const keywordLower = keyword.toLowerCase();

    const matches = resList.filter(({ info }) =>
      info.name.toLowerCase().includes(keywordLower) ||
      info.cuisines.join(", ").toLowerCase().includes(keywordLower)
    );

    const sugg = matches.map(({ info }) => info.name);
    setFilteredList(matches);
    setSuggestions(sugg.slice(0, 5)); 
  };
  // Handle Suggestions
  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setSuggestions([]);

    const result = resList.filter(({ info }) =>
      info.name.toLowerCase().includes(suggestion.toLowerCase())
    );
    setFilteredList(result);
  };
  // Handle Search Enter
  const handleSearchEnter = () => {
  if (searchText.trim() === "") {
    setFilteredList(resList);
    setSuggestions([]);
    return;
  }

  const keywordLower = searchText.toLowerCase();
  const result = resList.filter(({ info }) =>
    info.name.toLowerCase().includes(keywordLower) ||
    info.cuisines.join(", ").toLowerCase().includes(keywordLower)
  );

  setFilteredList(result);
  setSuggestions([]);
};


  return (
    <div className="body">
      <div className="search-box">
        <input placeholder="Search for restaurants and food" 
          value={searchText}
          onChange={handleSearch}  
        />
        <CiSearch className="search-icon" />
      </div>
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((sug, idx) => (
            <li key={idx} onClick={() => handleSuggestionClick(sug)}>
              {sug}
            </li>
          ))}
        </ul>
      )}
      <div className="res-container">
        {/* Res-component */}
        {filteredList.map((restaurant) => (
          <RestroCart 
            key={restaurant.info.id}
            resList={restaurant}
             onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchEnter();
                }
              }}
          />
        ))}
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const root = createRoot(document.getElementById("root"));

// JSX (Jsx transpiled before if reaches JS Engine).. -->>> It dones by Parcel.. --->> It's done by parcel.  

root.render(<AppLayout />)
