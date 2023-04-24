import { Link } from "react-router-dom";
import React, { useState } from 'react';

const LOGIN_URL = "/api/cow";

const VaciFormular = () => {

  const [formValues, setFormValues] = useState({
    numar_crotalii: '',
    categorie:'Mama',
    sex: 'M',
    rasa: '',
    varsta: '',
    masa_corporala: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues)
    fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })
    .then(response => response.json())
    .then(data => console.log(data))
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
       Nr. Crotalii
      </label>
      <input name="numar_crotalii" id="numar_crotalii" value={formValues.numar_crotalii} onChange={handleChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-10 leading-tight outline-2 focus:bg-white"  type="text" placeholder="1234"/>
      </div>
    <div className="">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Rasa
      </label>
      <input name="rasa" id="rasa" value={formValues.rasa} onChange={handleChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Doe"/>
    </div>
    <div className="">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Varsta
      </label>
      <input name="varsta" id="varsta" value={formValues.varsta} onChange={handleChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Doe"/>
    </div>
    <div className="">
      <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Masa Corporala
      </label>
      <input name="masa_corporala" id="masa_corporala" value={formValues.masa_corporala} onChange={handleChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Doe"/>
    </div>
  </div>
  
  <div className=" place-content-center   flex-wrap -mx-3 mb-2">
  <div className="w-full md:w-1/3 mb-10 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Sex
      </label>
      <div className="relative">
        <select name="sex" id="sex" value={formValues.sex} onChange={handleChange} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
          <option value="M">M</option>
          <option value="F">F</option>
          
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0   items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 mb-10">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Categorie
      </label>
      <div className="relative">
        <select name="categorie" id="categorie" value={formValues.categorie} onChange={handleChange} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
          <option value="Mama">Mama</option>
          <option value="Taur">Taur</option>
          <option value="Vitel Tanar">Vitel Tanar</option>
          <option value="Vitel pe ingrasare">Vitel pe ingrasare</option>
          <option value="Juninca">Juninca</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0   items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
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

export default VaciFormular;
