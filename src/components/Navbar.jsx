import { Link } from "react-router-dom"

function Navbar() {

  return (
    <header>
      <div className="flex items-center flex-grow p-1 py-2 bg-green-400">
        <Link href="/">
          <div className="flex items-center flex-grow mt-2 sm:flex-grow-0">
            <img
              className="object-contain px-4 cursor-pointer"
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              alt=""
            />
          </div>
        </Link>

     

        <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
          
          <div className="link">
            <p>tauri</p>
            
          </div>
          <div className="link">
            <p>vitelusi</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link">
            <p>Retrurns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
       
        </div>
      </div>
      <div className="flex items-center p-2 pl-6 space-x-4 text-sm text-green-500 bg-green-500 ">
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

