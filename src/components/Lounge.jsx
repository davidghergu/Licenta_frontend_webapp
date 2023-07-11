import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { useState} from "react";

const Lounge = () => {
  const tableRef = useRef(null);
  const [cows, setCows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "/api/cow";


  useEffect(() => {
    
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setCows(Array.isArray(data) ? data : []);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  




  return (
    <section className="text-gray-600 body-font" style={{ overflowY: 'scroll', height: '100vh' }}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
            Beef+
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Status Fermă
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-lg" style={{ lineHeight: "1.5" }}>
          Gust autentic, calitate superioară. Vite hrănite cu pasiune și grijă pentru a oferi cele mai delicioase experiențe culinare.
          </p>
        </div>
        <div className="flex flex-nowrap ">
          <div className="mx-4 xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border border-gray-500 p-4 rounded-lg text-center">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 mx-auto">
              Îngrășare
            </h2>
            
            <div ref={tableRef} className="min-w-full divide-y divide-gray-200 p-8">
  {isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="divide-y divide-gray-200">
      <div className="trBody">
        <p>{cows.filter(cow => cow.dieta._id === "641c2d20157eb1678f02dd20").length}</p>
      </div>
    </div>
  )}
</div>


           
          </div>
          <div className="mx-4 xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border border-gray-500 p-4 rounded-lg text-center">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            Menținere
            </h2>
            <div ref={tableRef} className="min-w-full divide-y divide-gray-200 p-8">
  {isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="divide-y divide-gray-200">
      <div className="trBody">
        <p>{cows.filter(cow => cow.dieta._id === "641c2d29157eb1678f02dd22").length}</p>
      </div>
    </div>
  )}
</div>
            
          </div>
          <div className="mx-4 xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border border-gray-500 p-4 rounded-lg text-center">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            Alăptare
            </h2>
            <div ref={tableRef} className="min-w-full divide-y divide-gray-200 p-8">
  {isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="divide-y divide-gray-200">
      <div className="trBody">
        <p>{cows.filter(cow => cow.dieta._id === "641c2d54157eb1678f02dd24").length}</p>
      </div>
    </div>
  )}
</div>
            
          </div>
          
        </div>
        
      </div>
    </section>

    
  );
};

export default Lounge;
