import React from "react";

// components

import CardDemande from "components/Cards/CardDemande.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 ">
          <CardDemande />
        </div>
        <div className="w-full xl:w-4/12 px-4">
        <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
