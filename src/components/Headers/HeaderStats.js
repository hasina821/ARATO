import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";


export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative  md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="cursor-pointer w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="DEMANDE D'EQUIVALENCE"
                  statTitle="104"
                  statArrow="up"
                  statPercent="32"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Depuis le mois dernier"
                  statIconName="fas fa-graduation-cap"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="cursor-pointer w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="RENOUVELLEMENT DE CONTRAT"
                  statTitle="100"
                  statArrow="up"
                  statPercent="29.32"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Depuis le mois dernier"
                  statIconName="far fa-clipboard"
                  statIconColor="bg-green-600"
                />
              </div>
              <div className="cursor-pointer w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="RECLASSEMENT INDICIAIRE"
                  statTitle="102"
                  statArrow="up"
                  statPercent="30"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Depuis le mois dernier"
                  statIconName="fas fa-balance-scale"
                  statIconColor="bg-black"
                />
              </div>
              <div className="cursor-pointer duration-150 w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PROCEDURE DE NOMINATION"
                  statTitle="3"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-red-500"
                  statDescripiron="Depuis le mois dernier"
                  statIconName="fas fa-vote-yea"
                  statIconColor="bg-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


