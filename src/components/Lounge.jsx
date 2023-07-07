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
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
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


            <a className="text-green-500 inline-flex items-center" href="Vaci">
              Modifică
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
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            Mentinere
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
            <a className="text-green-500 inline-flex items-center">
              Learn More
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
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            Alaptare
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
            <a className="text-green-500 inline-flex items-center">
              Learn More
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
        
      </div>
    </section>

    // <section>
    //     <h1>The Lounge</h1>
    //     <br />
    //     <p>Admins and Editors can hang out here.</p>
    //     <div className="flexGrow">
    //         <Link to="/">Home</Link>
    //     </div>
    // </section>
  );
};

export default Lounge;
