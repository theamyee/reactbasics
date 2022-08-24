import React, { useEffect, useState } from 'react';
import axios from 'axios'


function APIData() {

    const [offersList, updateOffersList] = useState([])

    //useEffect is called once before return is called. 
    useEffect(()=>{
        axios.get("http://localhost:4111/get/offers")
            .then((response)=>{
                //console.log(response)
                console.log(response.data)
                //update offersList state with response.data
                updateOffersList(response.data)
            })
    },[])

    const displayOffersList=()=>{
        return offersList.map((offer)=>{
            console.log(offer)
            return (
                <li key={offer._id}>
                    <b> {offer.discountcode}</b> 
                    <span style={{color:"red", fontSize:"22px"}}>
                        @ {offer.discountpercent}%
                    </span>    
                </li>
            )
        })
    }


    return ( 
        <div style={{border:"2px solid red", borderRadius:"5px", margin:"4px", padding:"4px"}}>
            <h1>Get data from remote API!</h1>
            <div>
                <ol>
                    {displayOffersList()}
                </ol>
            </div>
        </div>
     );
}

export default APIData;