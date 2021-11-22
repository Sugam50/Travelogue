import React,{useState} from 'react';
import '../Style/Cards.css';
import {Button} from 'react-bootstrap';

function Cards({Name,ImageUrl,details,amount}) {
    const [Option, setOption] = useState(false);
   
    return (
        <>
        <div className='Cards_list' onClick={()=>setOption(!Option)}>
            <img src={ImageUrl} alt="" />
            <div className="details">
                <h5>{Name}</h5>
                <p>{details}
                </p>
            </div>
            <div className="amount">
                Amount <br/>
                ${amount}
            </div>
        </div>
        <div className={Option?"Options ":"Options hide"}>
        <Button variant="dark">Donate</Button>
        </div>
        </>
    )
}

export default Cards
