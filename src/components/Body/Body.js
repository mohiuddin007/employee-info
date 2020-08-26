import React from 'react';
import './Body.css';


const Body = (props) => {
    const {name, phone, email, address, image, salary} = props.users;
    // console.log(props)

   
   
   return (
        <div className="container">
               <img src={image} alt=""/>
                <h2>Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Salary: ${salary}</p>
                <h4>Address:</h4>
                <p>City: {address.city}</p>
                <p>Street: {address.street}</p>
                <p>Zipcode: {address.zipcode}</p>
                <button onClick={() =>props.addHandleClick(props.users)}>Add</button>
                  
                  
         </div>
    );
};

export default Body;