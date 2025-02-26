
import React from "react";
import './../styles/App.css';
import Reviews from "./Reviews";

const App = () => {
  return (
    <div className="container">
         <h1 id="review-heading">Our Reviews</h1>
        <Reviews />
    </div>
  )
}

export default App


