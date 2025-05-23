import React from "react";
import { createRoot } from "react-dom/client"; 

// React Elelment : WHEN I CREATE A DOM ELELMENT, This is a react-element. 
// React.createElement ==> Object ==> HTTPElement(render);


const heading = React.createElement("h1", {}, "Hello This is aman Friernd Yuvraj Singh");

const jsxHeading = <h1 id="name">Namaste Yuvi! using JSX. </h1>
console.log("headng--->>>", heading);
console.log("JSX--->>", jsxHeading);

// React Functional Componenet Element

const number = 576876;
const HeadingComponent = () => {
  return <h1>This is my functional component</h1>
}
// React Elelment

const AnotherComponent = () => (
 
  <div className="IdS">
   {number}
  <HeadingComponent />
  <h1>This is another component</h1>

  </div>
)

const root = createRoot(document.getElementById("root"));

// JSX (Jsx transpiled before if reaches JS Engine).. -->>> It dones by Parcel.. --->> It's done by parcel.  

root.render(<AnotherComponent />)
