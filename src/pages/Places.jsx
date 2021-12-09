import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import "../Style/Places.css";
function Places() {
  const [City, setCity] = useState();
  let PlacesArr = [
    {
      Name: "Nick Stalin",
      ImageUrl:
        "https://cdn.discordapp.com/attachments/900789323908153437/901691123330863104/17.jpg",
      details: "Plant Name : Banyan tree Plant phase:3",
    },
    {
      Name: "Aman Yadav",
      ImageUrl:
        "https://cdn.discordapp.com/attachments/900789323908153437/901691126103293962/26.jpg",
      details: "Plant Name : Tulsi plant Plant phase:2",
    },
    {
      Name: "Ranjan Ninad",
      ImageUrl:
        "https://cdn.discordapp.com/attachments/900789323908153437/901691128628277268/28.jpg",
      details: "Plant Name : Neem plant Plant phase:3",
    },
    {
      Name: "Sanjana Deo",
      ImageUrl:
        "https://cdn.discordapp.com/attachments/900789323908153437/901691610260197386/3.jpg",
      details: "Plant Name : Peepal Tree Plant phase:4",
    },
    {
      Name: "Pratik Vipin",
      ImageUrl:
        "https://cdn.discordapp.com/attachments/900789323908153437/901691143752908820/79.jpg",
      details: "Plant Name : Mahagony tree Plant phase:3",
    },
    {
      Name: "Amit Gayathri",
      ImageUrl:
        "https://cdn.discordapp.com/attachments/900789323908153437/901691130771554314/42_1.jpg",
      details: "Plant Name : Eucalyptus tree Plant phase:2",
    },
  ];
  return (
     
    <div className="Places">
      <div className="Options">
        <label htmlFor="city">Choose your city:</label>
        <select name="Cities" id="cities" className="cities" onChange={(e)=>{setCity(e.target.value)}} >
          <option value="none" selected disabled hidden>
            Select city
          </option>
          <option value="jabalpur">
            Jabalpur
          </option>
          <option value="delhi">
            Delhi
          </option>
          <option value="kolkata">
            Kolkata
          </option>
          <option value="mumbai">
            Mumbai
          </option>
          <option value="agra">
            Agra
          </option>
        </select>
      </div>
        <div className="Places_list">
         {City?PlacesArr.map((item, index) => (
          <Link to="/dash" className="placeDet">
            <Cards
              key={index}
              Name={item.Name}
              ImageUrl={item.ImageUrl}
              details={item.details}
              amount={item.amount}
            />
          </Link>
          )):
          <div className="Places_list_alter"><h1>First Select your city.........</h1></div>}
        </div>
    </div>
  );
}

export default Places;
