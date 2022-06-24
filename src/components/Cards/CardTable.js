import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

// components


import CardStats from "components/Cards/CardStats.js";
import CardDemandes from "components/Cards/CardDemandes";
import { DemandeContext } from "utils/context/Demande";
import { useContext } from "react";
import ChoseType from "components/Cards/ChooseType"
import ChoseStatut from "./CardChoseStatut";
import ChoseColor from "./CardChosecolor";

export default function CardTable({ color }) {
  const {demandes} = useContext(DemandeContext)
  return (
    <>
      <div className="relative  md:pt-32 pb-32 pt-12" style={{height:'600px'}}>
        <div className="px-4 md:px-10 mx-auto w-full ">
          <div>
            <div className="flex flex-wrap bg-white">
            {demandes.map((dem)=>(
              <div key={dem} className="w-full hover:mt-4 duration-150 lg:w-6/12 xl:w-3/12 px-4 mt-8 cursor-pointer">
              <Link to={`demande/${dem.id}`}>
                <CardDemandes
                  statSubtitle={dem.nom_prop + " " + dem.prenom_prop}
                  statTitle={dem.reference}
                  statArrow="up"
                  statPercent={dem.create_date}
                  statPercentColor="text-emerald-500"
                  statDescripiron={ChoseType(dem.type_id)}
                  statIconName="fa-thin fa-ballot"
                  statIconColor={ChoseColor(dem.statut)}
                  status={ChoseStatut(dem.statut)}
                /> 
              </Link>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
