import React from "react"

import FooterAdmin from "components/Footers/FooterAdmin.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Tables from "views/admin/Tables.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CardSettings from "components/Cards/CardSettings.js";
import CardType from "components/Cards/CardType"



const TypeDemande = () =>{
     return(
          <>
          <Sidebar />
               <div className="relative md:ml-64 bg-blueGray-100">
                    <AdminNavbar />
                    <div className="mt-8">
                    <CardType/> 
                    </div>
               </div>
               <FooterAdmin />
          </>
     )
}

export default TypeDemande;