import React, { useEffect } from "react"

import FooterAdmin from "components/Footers/FooterAdmin.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Tables from "views/admin/Tables.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";


const ListeDemande = () =>{
     
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


