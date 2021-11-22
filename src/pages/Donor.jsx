import React from "react";
import Cards from "../components/Cards";
import "../Style/Donor.css";
function Donor() {
  let DonorArr=[
    {'Name':"Nick Stalin","ImageUrl":"https://cdn.discordapp.com/attachments/900789323908153437/901691123330863104/17.jpg","details":"Plant Name : Banyan tree Plant phase:3",'amount':"4"},
    {'Name':"Aman Yadav","ImageUrl":"https://cdn.discordapp.com/attachments/900789323908153437/901691126103293962/26.jpg","details":"Plant Name : Tulsi plant Plant phase:2",'amount':"2"},
    {'Name':"Ranjan Ninad","ImageUrl":"https://cdn.discordapp.com/attachments/900789323908153437/901691128628277268/28.jpg","details":"Plant Name : Neem plant Plant phase:3",'amount':"5"},
    {'Name':"Sanjana Deo","ImageUrl":"https://cdn.discordapp.com/attachments/900789323908153437/901691610260197386/3.jpg","details":"Plant Name : Peepal Tree Plant phase:4",'amount':"8"},
    {'Name':"Pratik Vipin","ImageUrl":"https://cdn.discordapp.com/attachments/900789323908153437/901691143752908820/79.jpg","details":"Plant Name : Mahagony tree Plant phase:3",'amount':"4"},
    {'Name':"Amit Gayathri","ImageUrl":"https://cdn.discordapp.com/attachments/900789323908153437/901691130771554314/42_1.jpg","details":"Plant Name : Eucalyptus tree Plant phase:2",'amount':"2"},
  ]
  return (
    <div className="Donor">
      <h1> Welcome!! Your Donations can save the planet.</h1>
      <div className="don_list">
        {
          DonorArr.map((item,index)=><Cards key={index} Name={item.Name} ImageUrl={item.ImageUrl} details={item.details} amount={item.amount} />)
        }
      </div>
    </div>
  );
}

export default Donor;
