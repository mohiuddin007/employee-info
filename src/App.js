import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './components/Body/Body';
import { useState } from 'react';
import fakeData from './fakeData'



function App() {
  // const [user, setuser] = useState([]);

  // useEffect(() =>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => {
  //         setuser(data);
  //   })
  // },[])
  
  const fakeInformations = fakeData;
  const[user, setuser] = useState(fakeInformations)

  const [count, setcount] = useState([]);

  const handleClick = (user) => {
    // console.log('clicked', user)
    // setcount(count+1);
    const newCount = [...count, user];
    setcount(newCount);
  }
  const totalSalary = count.reduce((total, user) => total + user.salary,0);
  return (
    <div className="App">
    
      <header className="App-header">
      
        <h1>Employee Information</h1>
  <h3>Employee Added:{count.length}</h3>
  <h3>Total Salary: ${totalSalary}</h3>
        {
          user.map(user => <Body users={user} key={user.id} addHandleClick={handleClick}></Body>)
        }
        
        
        <img src={logo} className="App-logo" alt="logo" />
       
       
      </header>
    </div>
  );
}

export default App;
