import { Link } from "react-router-dom";
import DataTable from "datatables.net-dt";
import React, { useEffect, useRef } from "react";
import "datatables.net-select-dt";
import RequireAuth from "./RequireAuth";
import { useState} from "react";
import ModalModifAnimale from "./ModalModifAnimale";

//TODO  Varsta vacilor sa fie in nr de luni

import $ from "jquery";
import "datatables.net";

const Vaci = () => {
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
    setModalOpen(true);
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

  


  return (
    
    <section style={{ overflowY: 'auto', maxHeight: '730px' }}>
      <div  >
      
      <br />
      
      <div className="flex  w-full  font-bold">
        
        <div className="table-cell text-center py-8 bg-green-400 w-1/3 mx-4 rounded-md text-slate-700 drop-shadow-2xl text-xl">Nr. vite <br/>{cows.length}</div>
        
        <div className="table-cell text-center  py-8 bg-green-500 w-1/3 mx-4 rounded-md text-slate-800 drop-shadow-2xl text-xl">Greutate medie  <br/>{averageWeight} kg</div>
        <div className="table-cell text-center  py-8 bg-green-400 w-1/3 mx-4 rounded-md text-slate-700 drop-shadow-2xl text-xl">Varsta medie  <br/>{averageVarsta.toFixed(1)}</div>
      </div>
      <div className="table w-full h-12"> </div>
      
      <table ref={tableRef} className="min-w-full divide-y divide-gray-200 p-8" >
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
              O PIX
              </button>
              
              
              </td>
            </tr> ))}</tbody>
        )}
        
      </table>
      </div>
      <div className="place-content-around  w-full flex ">
        <a href="/VaciFormular">
          <button className="bg-slate-400 bg-center place-content-center hover:bg-slate-700  text-white font-bold py-2 px-4  mt-6 rounded">
             Adauga animale
          </button>
          
          </a>
        <a >
    

          <button 
  className="bg-slate-400 bg-center place-content-center hover:bg-slate-700 text-white font-bold py-2 px-4 mt-6 rounded">
  Modifica animale 
   </button>{modalOpen && <ModalModifAnimale onClose={handleCloseModal} cow={selectedCow} />}

          </a>
          
      </div>
    </section>
   
  );
};

export default Vaci;

