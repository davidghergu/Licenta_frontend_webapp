import { Link } from "react-router-dom"
import React, { useEffect, useRef } from "react";
import "datatables.net-select-dt";




import { useState} from "react";
import ModalModifAnimale from "./ModalModifAnimale";
import "datatables.net";


const Admin = () => {

    const [cows, setCows] = useState([]);
  const [diete, setDiete]=useState([])
  const [selectedCow, setSelectedCow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "/api/cow";
  const API_URL2="/api/dieta"
  const tableRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = (cow) => {
    setSelectedCow(cow);
    console.log(cow)
    setModalOpen(true)
  };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };


    useEffect(() => {
        Promise.all([fetch(API_URL), fetch(API_URL2)])
          .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
          .then(([data1, data2]) => {
            
            setCows(Array.isArray(data1) ? data1 : []);
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
    
      const sectionHeight = window.innerHeight + "px";
      
    




    return (
        <section style={{ overflowY: 'scroll', height: '100vh' }}>
            <h1>Admins Page</h1>
            <br />
            <p>You must have been assigned an Admin role.</p>
            {/* <div className="flexGrow">
                <Link to="/">Home</Link>
            </div> */}
       



<div  >

<br />

<div className="flex  w-full  font-bold">
  
  <div className="table-cell text-center py-8 bg-green-400 w-1/3 mx-4 rounded-md text-slate-700 drop-shadow-2xl text-xl">Nr. vite <br/>{cows.length}</div>
  
  <div className="table-cell text-center  py-8 bg-green-500 w-1/3 mx-4 rounded-md text-slate-800 drop-shadow-2xl text-xl">Greutate medie  <br/>{averageWeight} kg</div>
  <div className="table-cell text-center  py-8 bg-green-400 w-1/3 mx-4 rounded-md text-slate-700 drop-shadow-2xl text-xl">Varsta medie  <br/>{averageVarsta.toFixed(1)}</div>
</div>
<div className="table w-full h-12"> </div>

<table ref={tableRef} className=" min-w-full divide-y divide-gray-200 p-8" >
  <thead className="bg-gray-200">
    <tr className="trHead">
      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
        Numar Crotalii</th>
      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
        Categorie</th>
      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
        Sex</th>
      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
        Rasa</th>
      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
        Varsta</th>
      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
        Masa Corp</th>
      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
        Randament</th>
      <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
        Dieta</th>

        <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
        Selectie</th>
    </tr>
  </thead>
  
  {isLoading ? (
  <tbody><tr><td>Loading</td></tr></tbody>
) : (
  <tbody className="divide-y divide-gray-200">
    {cows.map((cow) => (
    
    <tr key={cow._id} className="trBody">
        <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{cow.numar_crotalii}</td>
        <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{cow.categorie}</td>
        <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{cow.sex}</td>
        <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{cow.rasa}</td>
        <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{cow.varsta}</td>
        <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{cow.masa_corporala}</td>
        <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{(cow.masa_corporala/(cow.varsta*12)).toFixed(1)}</td>
        <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{cow.dieta ? cow.dieta.nume : ''}</td>
        <td className="border border-slate-300 px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
        

        
        <button className="bg-slate-400 bg-center place-content-center hover:bg-slate-700  text-white font-bold py-2 px-4 mt-6 rounded" onClick={() => handleButtonClick(cow)}>
        Modifica
        </button>
        {modalOpen && (
  <ModalModifAnimale
    cow={selectedCow}
    onClose={() => setModalOpen(false)}
  />
)}
        
        
        </td>
      </tr> ))}</tbody>
  )}
  
</table>
</div>
<div className="place-content-around  w-full flex ">

<a href="/VaciFormular" style={{ height: '50vh' }}>
<button className="bg-green-400  bg-center place-content-center hover:bg-green-500 text-white font-bold py-2 px-4 mt-6 rounded">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg>
</button>
</a>

</div>
 
    

</section>


    )
}

export default Admin
