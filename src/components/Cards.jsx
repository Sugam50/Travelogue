import React from 'react';
import '../Style/Cards.css';

function Cards({Name,ImageUrl,details,amount}) {
   
    return (

        <div className='Cards_list'>
            <img src={ImageUrl} alt="" />
            <div className="details">
                <h5>{Name}</h5>
                <p>{details}
                </p>
            </div>
        </div>
    )
}

export default Cards
