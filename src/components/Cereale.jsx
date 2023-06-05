import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import "datatables.net-select-dt";
import { useState} from "react";


//TODO  Vreau sa fac o functie care sa imi calculeze in functie de dietele vitelor pentru cat timp imi ajung cerealele disponibile

import "datatables.net";

const Cereale = () => {
  const [cereale, setCereale] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "/api/cereale";
  const tableRef = useRef(null);

  useEffect(() => {
    fetch(API_URL)
    .then((response) => response.json())
    .then(function(data){
      setCereale(Array.isArray(data) ? data : []);
      setIsLoading(false);
      
      
    } );

   
  },[]);
   //console.log(cereale);

   const totalWeight = cereale.reduce((sum, cereala) => sum + cereala.cantitateTotala, 0);
   const averageWeight = Math.floor(totalWeight / cereale.length);

//   const totalVarsta=cows.reduce((sum,cow)=> sum+cow.varsta,0)
//   const averageVarsta=totalVarsta/cows.length


  return (<section>
    <div>
    <h1 className="text-center">Cereale</h1>
    <br />
    <div className="flex  w-full  font-bold">
        
        <div className="table-cell text-center py-8 bg-teal-400 w-1/3 mx-4 rounded-md text-slate-700 drop-shadow-2xl text-xl">Avem la dispozitie <br/>{cereale.length}<br/> cereale</div>
        
        <div className="table-cell text-center  py-8 bg-teal-500 w-1/3 mx-4 rounded-md text-slate-800 drop-shadow-2xl text-xl">Cantitate totala  <br/>{totalWeight} KG</div>
        <div className="table-cell text-center  py-8 bg-teal-400 w-1/3 mx-4 rounded-md text-slate-700 drop-shadow-2xl text-xl">Cantitate medie <br/>{averageWeight} KG</div>
      </div>
      <div className="table w-full h-12"> </div>
      
      <table ref={tableRef} className="min-w-full divide-y divide-gray-200 p-8 border-collapse" >
        <thead className="bg-gray-200">
          <tr className="trHead">
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
              Denumire</th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
              Cantitate Totala</th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
              Calorii in medie</th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
              Proteina medie</th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
              Grasime medie</th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
              Carbohidrati medie</th>
            
          </tr>
        </thead>
        
        {isLoading ? (
        <tbody><tr><td>Loading...</td></tr></tbody>
      ) : (
        <tbody className="divide-y divide-gray-200">
          {cereale.map((cereala) => (
          
          <tr key={cereala._id} className="trBody">
             <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap uppercase ">{cereala._id}</td>
             <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{cereala.cantitateTotala}</td>
             <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{cereala.caloriiMedii.toFixed(1)}</td>
             <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{cereala.proteineMedii.toFixed(1)}</td>
             <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{cereala.grasimiMedii.toFixed(1)}</td>
             <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{cereala.carbohidratiMedii.toFixed(1)}</td>
               
            </tr> ))}</tbody>
        )}
        
      </table>
      </div>
      <div className="place-content-around  w-full flex ">

      <a href="/CerealeFormular">
  <button className="bg-teal-400 bg-center place-content-center hover:bg-teal-500 text-white font-bold py-2 px-4 mt-6 rounded">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </button>
</a>


        {/* <a href="/CerealeFormular">
          <button href="/CerealeFormular" className="bg-slate-400 bg-center place-content-center hover:bg-slate-700  text-white font-bold py-2 px-4  mt-6 rounded">
             Adauga cereale
          </button>
          </a> */}
         
         
      </div>



   



  </section>
  );
}; 

export default Cereale;

