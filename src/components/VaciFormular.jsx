import { Link } from "react-router-dom";

const VaciFormular = () => {
  return (
    <section>
    <div className="flex place-content-center ">

    
    <form className="w-full   max-w-xl ">
  <div className=" place-content-center  flex-wrap -mx-3 mb-6">
    <div className="">
      <label className=" place-content-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
       Nr. Crotalii
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-10 leading-tight outline-2 focus:bg-white" id="grid-first-name" type="text" placeholder="1234"/>
      </div>
    <div className="">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Rasa
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
    <div className="">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Varsta
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
    <div className="">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Masa Corporala
      </label>
      <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  
  <div className=" place-content-center   flex-wrap -mx-3 mb-2">
  <div className="w-full md:w-1/3 mb-10 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Sex
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>M</option>
          <option>F</option>
          
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
        <select className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Mama</option>
          <option>Taur</option>
          <option>Vitel Tanar</option>
          <option>Vitel pe ingrasare</option>
          <option>Juninca</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0   items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
</form>

</div>
<div className="place-content-around  w-full flex ">
        <a href="/Vaci">
          <button href="/VaciFormular" className="bg-blue-500 bg-center place-content-center hover:bg-blue-700  text-white font-bold py-2 px-4  mt-6 rounded">
             Adauga Vaca
          </button>
          </a>
</div>
 
</section>
  );
};

export default VaciFormular;
