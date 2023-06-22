import React, { useEffect, useRef,useState } from "react";



const AdminJoburi = () => {
    const API_URL_VACA = "/api/cow";
    const API_URL="api/dieta"
    const [diete, setDiete]=useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [optiuneSelectata, setOptiuneSelectata] = useState('');

    const [cows, setCows] = useState([]);
    
    const [selectedCow, setSelectedCow] = useState(null);
    const API_URL2="/api/dieta"
    const tableRef = useRef(null);
  


  const [formValues, setFormValues] = useState({
    numar_crotalii: '',
    categorie:'Mama',
    sex: 'M',
    rasa: '',
    varsta: '',
    masa_corporala: '',
    dieta: '641c2d20157eb1678f02dd20'
  });

  useEffect(() => {
      fetch(API_URL)
      .then((response) => response.json())
      .then(function(data){
        setDiete(Array.isArray(data) ? data : []);
        setIsLoading(false);
        
      } );
  
      
    },[]);

    console.log(diete)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues)
    fetch(API_URL_VACA, {
      method: 'POST',            ///////    <-------
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      

      window.location.href = "/Vaci";
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
  const handleCategorieChange = (event) => {
    setOptiuneSelectata(event.target.value);
    console.log(event.target.value)
  }

  const TableVaci = () => {
    
   
    return (
      <div>
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
    );
  };


return(
    <section style={{ overflowY: 'scroll', height: '100vh' }}>
    <div className="flex place-content-center ">

    
    <form onSubmit={handleSubmit} className="w-full   max-w-xl ">
  <div className=" place-content-center  flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/3 mb-10 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Sex
      </label>
      <div className="relative">
        <select name="sex" id="sex" value={formValues.sex} onChange={handleChange} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
          <option key="M" value="M">M</option>
          <option key="F" value="F">F</option>
          
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0   items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>

    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Categorie
      </label>
      <div className="relative">
        <select name="categorie" id="categorie" value={formValues.categorie} onChange={handleCategorieChange} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
        <option key=" " value=" "> </option>
        <option key="Vaci" value="Vaci">Vaci</option>
          <option key="Parcele" value="Parcele">Parcele</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0   items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      {optiuneSelectata === 'Vaci' && (
  // Afișează tabelul cu vaci
  <TableVaci />
)}
{optiuneSelectata === 'Parcele' && (
  // Afișează meniul dropdown pentru parcele
  <DropdownParcele />
)}

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
  
    <div className="w-full md:w-1/3 mb-10">
      

      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
  Dieta
</label>
<div className="relative">
  <select name="dieta" id="dieta" value={formValues.dieta} onChange={handleChange} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
    {diete.map((dieta) => (
      <option key={dieta._id} value={dieta._id}>{dieta.nume}</option>
    ))}
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0   items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>



    </div>
    
  </div>
 <a style={{ height: '100vh' }}>
  <button  type="submit" className="bg-blue-500 bg-center place-content-center hover:bg-blue-700  text-white font-bold py-2 px-4  mt-6 rounded">
             Adauga Vaca
          </button>

          </a>
 
</form>

</div>

</section>
)




}

export default AdminJoburi