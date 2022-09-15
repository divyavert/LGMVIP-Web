
import './App.css';
import { useState } from 'react';



function App() {
 
  const [user, setuser] = useState([]);
  const loaduser =  ()=>{
    const reponse =  fetch("https://reqres.in/api/users?page=2");
    

    reponse.then((response) => {
      const jsonPromise = response.json();
      jsonPromise.then((data) => {
        setuser(data.data)
        console.log(data.data)
        
      });
    });
   

    
  }

  

  return (
    <>
       

       <div>
       <nav className="navbar bg-dark">
      <div className="container-fluid">
      <a className="navbar-brand" href=''>User Data finder</a>
      <button className="btn btn-light" onClick={loaduser} >Find user</button>
      </div>
      </nav>
     </div >

      <div className='main'>
        {
          user.map(({id,email,first_name,avatar,last_name,})=>(
            <>
            {/* <img className={first_name} src={avatar} alt="" />
           
            <div className="user-conatiner">
            
            <p className='detail'>First name : {first_name}</p>
            <p className='detail'>Last name : {last_name}</p>
            <p className='detail'>email: {email}</p>
            </div>
          */}
            <div className="card bg-dark" >
           <img className="card-img-top" src={avatar} alt="Card  cap" />
            <div className="card-body">
             <p className="card-text">First name : {first_name}</p>
             <p className="card-text">last name : {last_name}</p>
             <p className="card-text">email: {email}</p>
            </div>
            </div>
           
            </>
            
            
          
          )
          )
          }
     </div>
    
    </>
  );
}

export default App;
