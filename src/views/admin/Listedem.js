import React, { useEffect } from "react"

import FooterAdmin from "components/Footers/FooterAdmin.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Tables from "views/admin/Tables.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import { DemandeContext } from "utils/context/Demande";
import { useContext } from "react";


const ListeDemande = () =>{

     const {demandes} = useContext(DemandeContext)
     console.log(demandes)

     useEffect(()=>{
          console.log(demandes);
     },[])
     
     return(
          <>
               <Sidebar />
                    <div className="relative md:ml-64 bg-blueGray-100">
                         <AdminNavbar />
                         <Tables/>
                    </div>
               <FooterAdmin />
          
          </>
     )


}

export default ListeDemande;


