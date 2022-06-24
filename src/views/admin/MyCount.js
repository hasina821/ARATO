import React from "react"

import FooterAdmin from "components/Footers/FooterAdmin.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Tables from "views/admin/Tables.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CardProfile from "components/Cards/CardProfile"

const MonCompte  = () =>{
     return(
          <>
          <Sidebar />
               <div className="relative md:ml-64 bg-blueGray-100">
                    <AdminNavbar />
                    <div className="mt-8">
                         <CardProfile/>
                    </div>
               </div>
          <FooterAdmin />
          </>
     )
}

export default MonCompte;