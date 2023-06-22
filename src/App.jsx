import Home from "./components/Admin";
import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Admin from "./components/Admin";
import Missing from "./components/Missing";
import Unauthorized from "./components/Unauthorized";
import Lounge from "./components/Lounge";
import LinkPage from "./components/LinkPage";
import RequireAuth from "./components/RequireAuth";
import Vaci from "./components/Vaci";
import Navbar from "./components/Navbar"
import VaciFormular from "./components/VaciFormular";
import Cereale from "./components/Cereale";
import PersistLogin from "./components/PersistLogin";

import { Routes, Route } from "react-router-dom";
import CerealeFormular from "./components/CerealeFormular";

const ROLES = {
  User: "Angajat",
  Admin: "Admin",
};
function App() {
  return (
    <div className="h-full ">
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="vaci" element={<Vaci />} />
        <Route path="cereale" element={<Cereale />} />
        <Route path="vaciformular" element={<VaciFormular/>} />
        <Route path="cerealeformular" element={<CerealeFormular/>} />
        <Route path="admin" element={<Admin />} />

        {/* we want to protect these routes */}
       
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.User,ROLES.Admin]} />}>
          
          <Route path="/" element={<Home />} />
        </Route>

        <Route
          element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}
        >
          <Route path="lounge" element={<Lounge />} />
        </Route>
    
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
    </div>
    
  );
}

export default App;
