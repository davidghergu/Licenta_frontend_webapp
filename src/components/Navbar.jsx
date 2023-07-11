import { Link } from "react-router-dom"

function Navbar() {

    // const userFromStorage = JSON.parse(sessionStorage.getItem("user"));
    //     //console.log(userFromStorage.roles[0]);
    //     userFromStorage.roles[0] = "Angajat";
        
        // const userFromStorage = JSON.parse(sessionStorage.getItem("user"));
        // if (userFromStorage.roles[0] === null) {
        //   userFromStorage.roles[0] = "Angajat";
        // }


        const userFromStorage = JSON.parse(sessionStorage.getItem("user"));
        if (userFromStorage && userFromStorage.roles && userFromStorage.roles[0] === null) {
          userFromStorage.roles[0] = "Angajat";
        }
        

  return (
    <header>
      <div className="flex items-center flex-grow p-1 py-2 bg-green-900">
        <Link to="Lounge">
          <div className="flex items-center flex-grow mt-2 sm:flex-grow-0">
            <img
              className="object-contain px-4 cursor-pointer"
              //src="https://links.papareact.com/f90"
              src="src\components\LogoSteak.png"
              width={75}
              height={50}
              alt=""
            />
          </div>
        </Link>
      
     

        <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
          
          <div className="link">
            <p ><Link to="Vaci" className="font-bold md:text-lg ">Vite</Link></p>
            
          </div>
          <div className="link">
            <p ><Link to="Cereale" className="font-bold md:text-lg ">Cereale</Link></p>
            
          </div>
      
          <div className="link">
            <p><Link to="Events">Evenimente</Link></p>
            <p className="font-bold md:text-sm"> Trimise</p>
          </div>

          <div className="link">
            <p><Link to="Eventsacceptate">Evenimente</Link></p>
            <p className="font-bold md:text-sm">Accepate</p>
          </div>

          <div className="link">
            <p><Link to="Eventsistoric">Istoric</Link></p>
            <p className="font-bold md:text-sm">Evenimente</p>
          </div>


          
          

{userFromStorage && userFromStorage.roles && (
  <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
    {userFromStorage.roles[0] === "Admin" && (
      <p>
        <Link to="Admin" className="font-bold md:text-lg">
          Administrare Fermă
        </Link>
      </p>
    )}
    {userFromStorage.roles[0] === "Angajat" && <p> </p>}
  </div>
)}

        
        </div>
        <div className="link ml-auto">
    <p>
      <Link to="/login" className=" font-bold text-white md:text-lg">
        Logout
      </Link>
    </p>
  </div>
      </div>
      <div className="flex items-center p-2 pl-6 space-x-4 text-sm text-green-700 bg-green-700 ">
        <p className="flex items-center font-bold link"> 
         A
        </p>
        
      </div>
    </header>
  );
}

export default Navbar;

