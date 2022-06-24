import React from "react";

// components

export default function CardSocialTraffic() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Nombre de demandes
              </h3>
            </div>
        </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-green-600 text-white blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Statut
                </th>
                <th className="px-6 bg-green-600 text-white align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Nombre total
                </th>
                <th className="px-6 bg-green-600 text-white align-middle border border-solid border-blueGray-100 py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Pourcentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left">
                  Nouveau
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                  47
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">47%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-base flex rounded bg-black">
                        <div
                          style={{ width: "47%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left">
                  En cours
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                  20
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">20%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-base flex rounded bg-lightBlue-500">
                        <div
                          style={{ width: "20%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left">
                  Terminé
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                  30
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">30%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-base flex rounded bg-green-600">
                        <div
                          style={{ width: "30%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left text-red-500">
                  Rejeté
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-red-500">
                  3
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">3%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-base flex rounded bg-purple-200">
                        <div
                          style={{ width: "3%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
