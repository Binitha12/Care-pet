import React , { useState,useEffect }  from 'react';
import {GoogleLogin, GoogleLogout} from '@react-oauth/google';
import { Link } from 'react-router-dom';
//import pawss  from '../assets/pawss.png'
import animals from '../assets/animals.png'
import cat from '../assets/cat.png'
import pug from '../assets/pug.png'
import fishes from '../assets/fishes.png'
import parrot from '../assets/parrot.png'
import cat4 from '../assets/cat4.png'
import dog2 from '../assets/dog2.png'
import bird2 from '../assets/bird2.png'

function AdminCategory() {
    const [catname, setCatName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [ownername, setOwnername] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
  
    const onSubmitForm = async (e) => {
      e.preventDefault();
      try {
        const body = {
          catname,
          gender,
          age,
          location,
          ownername,
          phonenumber
        };
  
        const response = await fetch('http://localhost:5000/cat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
  
        // Assuming you want to redirect to '/' after the data is saved
        if (response.ok) {
          console.log('Data Saved Successfully');
          window.location = '/';
        } else {
          console.error('Failed to save data');
        }
      } catch (err) {
        console.error(err.message);
      }
    };


  //dogdata
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/dog");
      const jsonData = await response.json();
      console.log(jsonData);

      // Update state with fetched data
      setPetData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  //catdata
  const [catdata, setCatData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    getCatData();
  }, []);

  const getCatData = async () => {
    try {
      const response = await fetch("http://localhost:5000/cat");
      const jsonData = await response.json();
      console.log(jsonData);

      // Update state with fetched data
      setCatData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  //birddata
  const [birddata, setBirdData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    getBirdData();
  }, []);

  const getBirdData = async () => {
    try {
      const response = await fetch("http://localhost:5000/bird");
      const jsonData = await response.json();
      console.log(jsonData);

      // Update state with fetched data
      setBirdData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  const [selectedAnimal, setSelectedAnimal] = useState('cat');

  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal);
  };

  
 

  return (
    <div className='w-full h-screen bg-[#D9D9D9]  justify-between py-16 px-16 overflow-y-auto'>
   
    
     <div className='flex flex-row pt-8'>
     <div className='w-1/3'>
     <h1 className='text-4xl text-[#103559] pt-56 pl-40 pb-4'>Category</h1>
   </div>
   <div className=' flex items-center w-3/4'>
    
   <div className='flex-col'>
    <h1 className='text-5xl text-[#103559] font-extrabold mr-8'>Everyday Everywhere </h1>
   
    
    <div className='ml-40 pt-6'>
        <h1 className='text-5xl  text-[#103559] font-extrabold mr- flex items-center'>Pet Care</h1>
    </div>
   
    <div className=' pt-12'>
      
    </div>
   
    </div>

   
   
          
    <img src={animals}></img>
   </div>
  
     </div>
     <div className='pb-8  '>
     <div className='w-2/4 items-center h-1/4 mx-auto flex bg-[#ef8f45] rounded-xl'>
    
    <div className='flex justify-between items-center rounded-xl px-14'>
<img className='transform hover:scale-110 transition-transform duration-360 cursor-pointer' src={cat}
 onClick={() => handleAnimalClick('cat')}></img>
    </div>
    <div className='flex justify-between items-center rounded-xl h-full px-14'>
<img className='transform hover:scale-110 transition-transform duration-360 cursor-pointer' 
onClick={() => handleAnimalClick('pug')}
src={pug} alt='pug'></img>

    </div>
    
    <div className='flex justify-between items-center rounded-xl h-full px-14'>
<img className='transform hover:scale-110 transition-transform duration-360 cursor-pointer'
onClick={() => handleAnimalClick('parrot')}
src={parrot}></img>
    </div>
  
  
    </div>
     </div>
     
     {selectedAnimal ==='cat' &&(
  <div className='h-4/4  pt-6 bg-white rounded-t-xl flex items-center'>
    
  <div className='  grid grid-cols-2 gap-40 px-80 py-8'>
    {catdata.map((pet, index) => (
      <div key={index} className='flex flex-col w-96 rounded-xl px-10 py-8 bg-[#CBC5C5]'>
        <img className=' w-40 rounded-xl pl-14 flex items-center' src={cat4} alt={`Pet ${index + 1}`} />
        <div className='pt- pl-14'>
          <h2 className='text-xl font-bold pb-2'>PetName:{' '}{pet.catname}</h2>
          <h2 className='text-xl  pb-2'>Gender:{' '}{pet.gender}</h2>
          <h2 className='text-md font-light pb-4'>Age:{' '}{pet.age}</h2>
          <h2 className='text-md font-light pb-4'>Location:{' '}{pet.location}</h2>
          <h2 className='text-md pb-4'>Ownername:{' '}{pet.ownername}</h2>
          <h2 className='text-md font-light pb-4'>Phone:{' '}{pet.phoneno}</h2>
          <div className='pl-4 py-5'>
            <Link to='/meet'>
              <button className="rounded-full flex justify-between items-center mr-6 p-3 px-6 bg-[#103559] text-white font-semibold">Adopt me</button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
 
</div>
)
  }

 {selectedAnimal === 'pug' && (
  
  <div className='h-4/4  pt-6 bg-white rounded-t-xl flex items-center'>
    
    <div className='  grid grid-cols-2 gap-40 px-80 py-8'>
      {petData.map((pet, index) => (
        <div key={index} className='flex flex-col w-96 rounded-xl px-10 py-8 bg-[#CBC5C5]'>
          <img className=' w-48 rounded-xl pl-14 flex items-center' src={dog2} alt={`Pet ${index + 1}`} />
          <div className='pt- pl-14'>
            <h2 className='text-xl font-bold pb-2'>PetName:{' '}{pet.petsname}</h2>
            <h2 className='text-xl  pb-2'>Gender:{' '}{pet.gender}</h2>
            <h2 className='text-md font-light pb-4'>Age:{' '}{pet.age}</h2>
            <h2 className='text-md font-light pb-4'>Location:{' '}{pet.location}</h2>
            <h2 className='text-md pb-4'>Ownername:{' '}{pet.ownername}</h2>
            <h2 className='text-md font-light pb-4'>Phone:{' '}{pet.phoneno}</h2>
            <div className='pl-4 py-5'>
              <Link to='/bookNow'>
                <button className="rounded-full flex justify-between items-center mr-6 p-3 px-6 bg-[#103559] text-white font-semibold">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

  
      {selectedAnimal ==='parrot' &&(
 <div className='h-4/4  pt-6 bg-white rounded-t-xl flex items-center'>
    
 <div className='  grid grid-cols-2 gap-40 px-80 py-8'>
   {birddata.map((pet, index) => (
     <div key={index} className='flex flex-col w-96 rounded-xl px-10 py-8 bg-[#CBC5C5]'>
       <img className=' w-40 rounded-xl pl-14 flex items-center' src={bird2} alt={`Pet ${index + 1}`} />
       <div className='pt- pl-14'>
         <h2 className='text-xl font-bold pb-2'>PetName:{' '}{pet.birdname}</h2>
         <h2 className='text-xl  pb-2'>Gender:{' '}{pet.gender}</h2>
         <h2 className='text-md font-light pb-4'>Age:{' '}{pet.age}</h2>
         <h2 className='text-md font-light pb-4'>Location:{' '}{pet.location}</h2>
         <h2 className='text-md pb-4'>Ownername:{' '}{pet.ownername}</h2>
         <h2 className='text-md font-light pb-4'>Phone:{' '}{pet.phoneno}</h2>
         <div className='pl-4 py-5'>
           <Link to='/bookNow'>
             <button className="rounded-full flex justify-between items-center mr-6 p-3 px-6 bg-[#103559] text-white font-semibold">Book Now</button>
           </Link>
         </div>
       </div>
     </div>
   ))}
 </div>
 
</div>
)}
<br></br><br></br>
<h1  className='text-3xl'>Details</h1>
<br></br>
<form onSubmit={onSubmitForm}>
              <div className='grid grid-cols-2 gap-5'>
                <div className='flex flex-col'>
                  <input
                    type='text'
                    placeholder='Cat Name'
                    className='form-input p-2 border rounded h-10 text-black'
                    value={catname}
                    onChange={(e) => setCatName(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <input
                    type='text'
                    placeholder='Gender'
                    className='form-input p-2 border rounded h-10 text-black'
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <input
                    type='text'
                    placeholder='Age'
                    className='form-input p-2 border rounded h-10 text-black'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <input
                    type='text'
                    placeholder='Location'
                    className='form-input p-2 border rounded h-10 text-black'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <input
                    type='text'
                    placeholder='Ownername'
                    className='form-input p-2 border rounded h-20 text-black'
                    value={ownername}
                    onChange={(e) => setOwnername(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <input
                    type='text'
                    placeholder='Description'
                    className='form-input p-2 border rounded h-20 text-black'
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <br />
              <div className='text-center'>
                <button
                  className='bg-black text-white text-lg py-2 px-7 rounded-full hover:bg-[#0d0f10] focus:outline-none'
                  type='submit'
                >
                  Submit
                </button>
                
              </div>
            </form>

   
     </div>
      
  
    
  )
}

export default AdminCategory