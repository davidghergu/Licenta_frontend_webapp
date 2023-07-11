
import React, { useEffect, useRef } from "react";



import { useState} from "react";







const EventsIstoric = () => {
  const [cows, setCows] = useState([]);
  const [events, setEvents] = useState([])


  const [diete, setDiete]=useState([])
  const [selectedCow, setSelectedCow] = useState(null);
  const [selectedEvent, setselectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "/api/cow";
  const API_URL2="/api/dieta"
  const API_URL_EVENT="/api/event"
  const tableRef = useRef(null);

  

  
  
    


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


  


  return (
    
    <section style={{ overflowY: 'scroll', height: '100vh' }}>
      <div  >
      
      <br />
      
      <div className="flex  w-full  font-bold justify-center items-center">
        
        
        <div className="table-cell text-center py-8  bg-slate-600 w-1/3 mx-4 rounded-md text-slate-100 drop-shadow-2xl text-xl">Istoric Evenimente</div>

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
            if (event.status === "Terminat") {
            return(
          
          <tr key={event._id} className="trBody">
              <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{event.schimbariVite ? JSON.parse(event.schimbariVite).$set.categorie : ""}</td>
              <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{event.filtruVite ? JSON.parse(event.filtruVite)._id : ""}</td>
              <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">          {event.schimbariVite ? (JSON.parse(event.schimbariVite).$set.dieta === "641c2d29157eb1678f02dd22" ? "mentinere" : JSON.parse(event.schimbariVite).$set.dieta) : ""}
</td>
              <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{event.sarcina}</td>
              <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{event.status}</td>

              <td className="border place-content-center bg-center border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
              

              
              
              
              
              
              </td>
            </tr> );}
            })}</tbody>
        )}
        
      </table>
      </div>
      
       
          
     
    </section>
   
  );
};

export default EventsIstoric;

