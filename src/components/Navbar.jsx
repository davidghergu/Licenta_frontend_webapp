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
            <p ><Link to="Vaci" className="font-extrabold md:text-lg ">Vite</Link></p>
            
          </div>
          <div className="link">
            <p ><Link to="Cereale" className="font-extrabold md:text-lg ">Cereale</Link></p>
            
          </div>
      
          <div className="link">
            <p>Retrurns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          

{userFromStorage && userFromStorage.roles && (userFromStorage.roles[0] === "Angajat" || userFromStorage.roles[0] === "Admin") && (
  <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">{userFromStorage.roles[0]}</div>
)}
        
        </div>
      </div>
      <div className="flex items-center p-2 pl-6 space-x-4 text-sm text-green-700 bg-green-700 ">
        <p className="flex items-center font-bold link"> 
         A
        </p>
        <p className="link"></p>
        <p className="link"></p>
        <p className="link"></p>
        <p className="hidden link lg:inline-flex"></p>
        <p className="hidden link lg:inline-flex"> </p>
        <p className="hidden link lg:inline-flex"></p>
        <p className="hidden link lg:inline-flex"></p>
        <p className="hidden link lg:inline-flex"></p>
        <p className="hidden link lg:inline-flex"></p>
        <p className="hidden link lg:inline-flex"></p>
        <p className="hidden link lg:inline-flex"></p>
        <p className="hidden link lg:inline-flex"></p>
      </div>
    </header>
  );
}

export default Navbar;

