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
        <section style={{ overflowY: 'scroll', height: '100vh', textAlign: 'center' }}>
            <h1>Administrare fermă</h1>
            <br />
            <p>Bine ați venit!</p>
            {/* <div className="flexGrow">
                <Link to="/">Home</Link>
            </div> */}
       



       <div className="flex flex-nowrap ">
       <div className="mx-4 xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border border-gray-500 p-4 rounded-lg text-center">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 mx-auto">
              Evenimente
            </h2>
            
            <div ref={tableRef} className="min-w-full divide-y divide-gray-200 p-8">
</div>


            <a className="text-green-500 inline-flex items-center" href="AdminJoburi">
              Creare eveniment
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>


          <div className="mx-4 xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border border-gray-500 p-4 rounded-lg text-center">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 mx-auto">
              Rețete
            </h2>
            
            <div ref={tableRef} className="min-w-full divide-y divide-gray-200 p-8">
</div>


            <a className="text-green-500 inline-flex items-center" href="AdminJoburi">
              Creare rețetă
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="mx-4 xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border border-gray-500 p-4 rounded-lg text-center">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 mx-auto">
              Rețete
            </h2>
            
            <div ref={tableRef} className="min-w-full divide-y divide-gray-200 p-8">
</div>


            <a className="text-green-500 inline-flex items-center" href="AdminJoburi">
              Creare rețetă
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

    
          </div>
</section>


    )
}

export default Admin
