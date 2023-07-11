import React, { useEffect, useRef,useState } from "react";



const AdminJoburi = () => {
    const API_URL_VACA = "/api/cow";
    const API_URL="api/dieta"
    const API_URL_EVENT="api/event"
    const [diete, setDiete]=useState([])
    const [isLoading, setIsLoading] = useState(true);
    

    const [cows, setCows] = useState([]);
    
    const [selectedCow, setSelectedCow] = useState(null);
    const API_URL2="/api/dieta"
    const tableRef = useRef(null);


    


  



  


  const [formValues, setFormValues] = useState({
    id:"",
    sarcina:"",
    dieta: ''
  });

  useEffect(() => {
      fetch(API_URL)
      .then((response) => response.json())
      .then(function(data){
        setDiete(Array.isArray(data) ? data : []);
        setIsLoading(false);
        
      } );
  
      
    },[]);

    useEffect(() => {
      fetch(API_URL_VACA)
      .then((response) => response.json())
      .then(function(data){
        setCows(Array.isArray(data) ? data : []);
        setIsLoading(false);
        
      } );
  
      
    },[]);

    console.log(diete)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues)
    fetch(API_URL_EVENT, {
      method: 'POST',            ///////    <-------
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      

      window.location.href = "/admin";
    })
    .catch(error => console.error(error));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));}

    
  

  


return(
    <section style={{ overflowY: 'scroll', height: '100vh' }}>
    <div className="flex place-content-center ">

    
    <form onSubmit={handleSubmit} className="w-full   max-w-xl ">
  <div className=" place-content-center  flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/3 mb-10 ">
      
    </div>


    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Categorie
      </label>
      <div className="relative">
        <select name="categorie" id="categorie" value={formValues.categorie} onChange={handleChange} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >

        
        
        <option key=" " value=" "> </option>
        <option key="Vaci" value="Vaci">Vaci</option>
          <option key="Parcele" value="Parcele">Parcele</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0   items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
<div className="mt-20 mb-20">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
  Nr crotalii
</label>
    <select disabled={formValues.categorie !== "Vaci"} name="id" value={formValues.id} onChange={handleChange}>
  {cows.map(cow => (
    <option key={cow.id} value={cow.id}>{cow.
      numar_crotalii}</option>
  ))}
</select>
</div>

    
      

  </div>
  
  <div className=" place-content-center   flex-wrap -mx-3 mb-2">
  
    <div className="w-full md:w-1/3 mb-10">
      

      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
  Dieta
</label>
<div className="relative">
  <select name="dieta" id="dieta" value={formValues.dieta} onChange={handleChange} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "disabled={formValues.categorie !== "Parcele"}>
    {diete.map((dieta) => (
      <option key={dieta._id} value={dieta._id}>{dieta.nume}</option>
    ))}
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0   items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>

    </div>
    <div className="">
      <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-20" htmlFor="grid-last-name">
        Mesaj sarcină
      </label>
      <textarea
  name="sarcina"
  id="sarcina"
  value={formValues.sarcina}
  onChange={handleChange}
  className="block w-full h-32 bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-10 leading-tight resize-none focus:outline-none focus:bg-white focus:border-gray-500"
/>
    </div>
    
  </div>
 <a style={{ height: '100vh' }}>
  <button  type="submit" className="bg-blue-500 bg-center place-content-center hover:bg-blue-700  text-white font-bold py-2 px-4  mt-6 rounded">
             Creează Eveniment
          </button>

          </a>
 
</form>

</div>

</section>
)




}

export default AdminJoburi;