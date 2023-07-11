import React, { useEffect, useRef,useState } from "react";



const Conturi = () => {

    const API_URL_CONTURI = "/api/angajat";
    const API_URL="api/dieta"
    const [diete, setDiete]=useState([])
    const [isLoading, setIsLoading] = useState(true);

  const [formValues, setFormValues] = useState({
    nume:'',
    parola:'',
    rol: 'Angajat',
    
  });

 

    console.log(diete)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues)
    fetch(API_URL_CONTURI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      

      window.location.href = "/Admin";
    })
    .catch(error => console.error(error));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  return (
    <section>
    <div className="flex place-content-center ">

    
    <form onSubmit={handleSubmit} className="w-full   max-w-xl ">
  <div className=" place-content-center  flex-wrap -mx-3 mb-6">
    <div className="">
      <label className=" place-content-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
       Nume
      </label>
      <input name="nume" id="nume" value={formValues.nume} onChange={handleChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-10 leading-tight outline-2 focus:bg-white"  type="text" placeholder="1234"/>
      </div>
    <div className="">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Parola
      </label>
      <input name="parola" id="parola" value={formValues.parola} onChange={handleChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Doe"/>
    </div>
    
    
  </div>
  
  <div className=" place-content-center   flex-wrap -mx-3 mb-2">
 
    <div className="w-full md:w-1/3 mb-10">
     
    

     




    </div>
    <div>

    </div>
  </div>
 
  <button  type="submit" className="bg-blue-500 bg-center place-content-center hover:bg-blue-700  text-white font-bold py-2 px-4  mt-6 rounded">
             Adauga Vaca
          </button>
 
</form>

</div>

</section>
  );
};

export default Conturi;
