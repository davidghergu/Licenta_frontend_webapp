
import React, { useEffect, useRef } from "react";



import { useState} from "react";







const Events = () => {
  const [cows, setCows] = useState([]);
  const [events, setEvents] = useState([])


  const [diete, setDiete]=useState([])
  const [selectedCow, setSelectedCow] = useState(null);
  const [selectedEvent, setselectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "/api/cow";
  const API_URL2="/api/dieta"
  const API_URL_EVENT="/api/event"
  const API_URL_EVENT2="/api/event/accept"
  const tableRef = useRef(null);

  

  const handleButtonClick = (event) => {
   
    console.log(event)
    const requestBody = {
        id: event._id
      };
        fetch(API_URL_EVENT2, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify(requestBody)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      window.location.reload(); // Reîncărcarea paginii
    })
    .catch(error => console.error(error));
};
  
    


  useEffect(() => {
    Promise.all([fetch(API_URL_EVENT), fetch(API_URL2)])
      .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
      .then(([data1, data2]) => {
        
        setEvents(Array.isArray(data1) ? data1 : []);
        setDiete(Array.isArray(data2) ? data2 : []);
        setIsLoading(false);
    
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);



  const totalWeight = cows.reduce((sum, cow) => sum + cow.masa_corporala, 0);
  const averageWeight = Math.floor(totalWeight / cows.length);

  const totalVarsta=cows.reduce((sum,cow)=> sum+cow.varsta,0)
  const averageVarsta=totalVarsta/cows.length

  const dietaMapping = {
    "641c2d29157eb1678f02dd22": "mentinere",
    "641c2d20157eb1678f02dd20": "ingrasare",
    "641c2d54157eb1678f02dd24": "alaptare"
  };


  


  return (
    
    <section style={{ overflowY: 'scroll', height: '100vh' }}>
      <div  >
      
      <br />
      
      <div className="flex  w-full  font-bold justify-center items-center">
        
        
        <div className="table-cell text-center py-8  bg-slate-600 w-1/3 mx-4 rounded-md text-slate-100 drop-shadow-2xl text-xl">Evenimete Disponibile</div>

      </div>
      <div className="table w-full h-12"> </div>
      
      <table ref={tableRef} className=" min-w-full divide-y divide-gray-200 p-8" >
        <thead className="bg-gray-200">
          <tr className="trHead">
            
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
              Categorie</th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
              Vita</th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
              Parcela</th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
              Îndrumări</th>
              <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
              Status</th>
            
            
            

              
          </tr>
        </thead>
        
        {isLoading ? (
        <tbody><tr><td>Loading</td></tr></tbody>
      ) : (
        <tbody className="divide-y divide-gray-200">
          {events.map((event) => {
            if (event.status === "Trimis") {
            return(
          
          <tr key={event._id} className="trBody">
              <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{event.schimbariVite ? JSON.parse(event.schimbariVite).$set.categorie : ""}</td>
              <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{event.filtruVite ? JSON.parse(event.filtruVite)._id : ""}</td>
              <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{event.schimbariVite ? (dietaMapping[JSON.parse(event.schimbariVite).$set.dieta] || JSON.parse(event.schimbariVite).$set.dieta) : ""}
</td>
              <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{event.sarcina}</td>
              <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{event.status}</td>

              <td className="border place-content-center bg-center border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
              

              
              <button className="bg-slate-400 bg-center place-content-center hover:bg-slate-700  text-white font-bold py-2 px-4 mt-6 rounded" onClick={() => handleButtonClick(event)}>
              Acceptă
              </button>
              
              
              
              </td>
            </tr> );}
            })}</tbody>
        )}
        
      </table>
      </div>
      
       
          
     
    </section>
   
  );
};

export default Events;

