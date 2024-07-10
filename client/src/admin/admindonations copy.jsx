import React from 'react';
import img4 from '../assets/img4.png'
import { Link } from 'react-router-dom';
import {useState,useEffect}  from 'react';
const AdminDonation = () => {
    const [meetdata, setMeetData] = useState([]);
    useEffect(() => {
      // Fetch data when the component mounts
      getMeetData();
    }, []);
  
    //delete meet
    const deleterealmeet = async(pet_id) =>{
  try{
  const deleterealmeet = await fetch(`http://localhost:5000/realmeet/${pet_id}`,{
    method:'DELETE'
  });
  setMeetData(meetdata.filter(pet =>pet.pet_id !== pet_id));
  console.log("delete meet");
  }catch(err){
  console.error(err.message);
  
  
  }
  
  
    }
  
  
  
    const getMeetData = async () => {
      try {
        const response = await fetch("http://localhost:5000/realmeet");
        const jsonData = await response.json();
        console.log(jsonData);
  
        // Update state with fetched data
        setMeetData(jsonData);
      } catch (err) {
        console.error(err.message);
      }}
   
    return (
    <div className='h-full bg-[#F4F3F3] px-30 scroll-py-10'>
      <div className='flex place-items-center px-40 py-30 '>
       <div className="w-[50%] h-[50%] py-9 bg-[#D1AB1A] rounded-[40px] px-8 mx-80 my-32">
        <h1 className='text-4xl text-black text-center '>DONATION BOOKINGS</h1>
        </div>
     </div>   
    <div className='h-4/4  pt-6 bg-[white] rounded-t-xl flex items-center mx-20 my-1 '>
      
    <div className='  grid grid-cols-3 gap-24 px-0 py-8 mx-40'>
      {meetdata.map((pet, pet_id) => (
        <div key={pet.pet_id} className='flex flex-col w-80 rounded-xl px-1 py-6 bg-[#CBC5C5]'>
          
          <div className='pt- pl-12'>
            <h2 className='text-xl font-bold pb-2'>Customer Name:{' '}{pet.parentname}</h2>
            <h2 className='text-xl  pb-2'>Petname:{' '}{pet.petname}</h2>
            <h2 className='text-xl  pb-2'>Category:{' '}{pet.category}</h2>
            <h2 className='text-md font-light pb-4'>Meetdate:{' '}{pet.meetdate}</h2>
            <h2 className='text-md font-light pb-4'>Phone Number:{' '}{pet.phonenumber}</h2>
           
            <h2 className='text-md font-light pb-4'>Description:{' '}{pet.description}</h2>
            <div className='pl-4 py-5'>
  
              <button className=''onClick={() =>deleterealmeet(pet.pet_id)}>Delete</button>
             
            </div>
          </div>
        </div>
      ))}
       
    </div>
   
   
  </div>
  
    
   
    
      
     </div>   
     
    )
  
}

export default AdminDonation