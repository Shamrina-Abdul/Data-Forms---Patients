import React, { useState } from 'react'
import  {   selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import './nwin.css'
import Success from './success';
// import Card from './card';
import './card.css';
import img1 from '../images/doctor.jpg'
import img2 from '../images/sudheer.jpg';
import { login } from '../features/userSlice';







const Nwin = () => {


    







    const user = useSelector(selectUser);

   


    const [file, setFile] = useState(img2);

    const handleChange = (e) => {
      console.log(e.target.file);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
    

    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    

    const handleClick = (e) => {
      e.preventDefault();

      dispatch(login({
        error,
       
    }))
      
    }

    // const handle = (e) => {
    //   dispatch(submit({
    //     name : user.name,
    //     }));
    
    // }
    

 
   

      return ( 
        <div>
       
        <form onSubmit={(e) => handleClick(e)}>
          {error? <Success /> :
          <div id='fulldivcard'>
      <div id='card-img'>
      <div class="img-card">
        <img id='mg-card' src={img1} alt=''></img>
        <label class="label">
        <input type="file" id="filenone" accept='image/jpg, image/jpeg' onChange={(e) => handleChange(e)}  />
        <span ><img id='spancard' alt='' src={file}></img></span>
        </label>
       
        
        </div>
      </div>
      <hr class="center-ball" />
        <div id='content-card'>
        <div class="condiv1">
         <h1>Your Details :</h1>
          <h3> Name :  {user.name}  </h3>
          <h3> Age :  {user.age}  </h3>
          <h3>Address: {user.address}</h3>
          <h3>Height: {user.height} cm</h3>
          </div>
          <div class="condiv2">
          <h3>Weight: {user.weight} kg</h3>
          <h3>Name Of Hospital: {user.name_of_hospital}</h3>
          <h3>State: {user.state}</h3>
          </div>
         <button name={error}  class="cardbtn"   onClick={()=>{
      
      // fetch("http://localhost:5000/registry",{
      //   method:"POST",
      //   crossDomain:true,
      //   headers:{
      //     "Content-Type":"application/json",
      //     Accept:"application/json",
      //     "Access-Control-Allow-Origin":"*",
      //   },
      //   body:JSON.stringify({
      //     name:user.name,
      //     age:user.age,
      //     address:user.address,
      //     height:user.height,
      //     weight:user.weight,
      //     state:user.state,
      //     name_of_hospital:user.name_of_hospital
      //   }),
      // }).then((res)=>res.json())
      //   .then((data) => {
      //     console.log(data, "patientRegister");
      //   })
      

      setError(true)
     }}>Submit</button>
</div>
{/* <button onClick={(e) => handle(e)}>Edit</button> */}
         </div>



         
          }
          </form>

         
        
        </div>
       
         
         ); 
     
    
}

export default Nwin;
