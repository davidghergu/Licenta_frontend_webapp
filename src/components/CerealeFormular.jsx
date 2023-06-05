import React, { useEffect, useRef,useState } from "react";



const CerealeFormular = () => {

    const API_URL_CEREALE = "/api/cereale";
   
   //const [isLoading, setIsLoading] = useState(true);

  const [formValues, setFormValues] = useState({
    nume: '',
    cantitate:'',
    calorii: '',
    proteine: '',
    grasimi: '',
    carbohidrati: '',
    
  });



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues)
    fetch(API_URL_CEREALE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      

      window.location.href = "/Cereale";
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
  <div className="w-full md:w-1/3 mb-10">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Nume
      </label>
      <div className="relative">
        <select name="nume" id="nume" value={formValues.nume} onChange={handleChange} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
          <option key="Ovaz" value="ovaz">Ovaz</option>
          <option key="Soia" value="soia">Soia</option>
          <option key="Porumb" value="porumb">Porumb</option>
          <option key="Grau" value="grau">Grau</option>
          <option key="Orz" value="orz">Orz</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0   items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>

    </div>
    <div className="">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Cantitate
      </label>
      <input name="cantitate" id="cantitate" value={formValues.cantitate} onChange={handleChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="1000"/>
    </div>
    <div className="">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Calorii
      </label>
      <input name="calorii" id="calorii" value={formValues.calorii} onChange={handleChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="200"/>
    </div>
    <div className="">
      <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Proteine
      </label>
      <input name="proteine" id="proteine" value={formValues.proteine} onChange={handleChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="230"/>
    </div>

    <div className="">
      <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Grasimi
      </label>
      <input name="grasimi" id="grasimi" value={formValues.grasimi} onChange={handleChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="234"/>
    </div>

    <div className="">
      <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Carbohidrati
      </label>
      <input name="carbohidrati" id="carbohidrati" value={formValues.carbohidrati} onChange={handleChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="234"/>
    </div>

  </div>
  
  
 
  <button  type="submit" className="bg-blue-500 bg-center place-content-center hover:bg-blue-700  text-white font-bold py-2 px-4  mt-6 rounded">
             Adauga Cereale
          </button>
 
</form>

</div>

</section>
  );
};

export default CerealeFormular;
