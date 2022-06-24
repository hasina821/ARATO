import React,{useState} from "react"


import FooterAdmin from "components/Footers/FooterAdmin.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Tables from "views/admin/Tables.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CardSettings from "components/Cards/CardSettings.js";

const GestDemande = () =>{



     return(
          <>
          <Sidebar />
               <div className="relative md:ml-64 bg-blueGray-100">
                    <AdminNavbar />
                    <div className="mt-8">
                         <CardSettings/>
                    </div>
               </div>
               <FooterAdmin />
          </>

     )

}

export default GestDemande;