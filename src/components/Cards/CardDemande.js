import React,{useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { DemandeContext } from "utils/context/Demande";
import { useContext } from "react";
import ChoseType from "./ChooseType";
import ChoseStatut from "./CardChoseStatut";
import {Grid} from "@mui/material"
import {DemandeAxios} from "utils/api/demande"
import { Link } from "react-router-dom";
import ChoseColor from "./CardChosecolor";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function CardDemande() {
  const {demandes} = useContext(DemandeContext)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  const handleDelete = async (id) =>{
    try {
        await DemandeAxios.delete(`/dossier/${id}/`)
        handleClose()
        window.location.reload();
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-center text-blueGray-700">
                STATISTIQUE DU MOIS 
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-green-600 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Nom
                </th>
                <th className="px-6 bg-green-600 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Prenom
                </th>
                <th className="px-6 bg-green-600 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Sujet de la demande
                </th>
                <th className="px-6 bg-green-600 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Statut
                </th>
                <th className="px-6 bg-green-600 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
            {demandes.map((demande)=>( 
              <tr key={demande.id} >
                <th className="font-semibold text-2xl italic border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-left">
                {demande.nom_prop}
                </th>
                <td className="font-semibold border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                {demande.prenom_prop}
                </td>
                <td className="font-semibold border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                {ChoseType(demande.type_id)}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap ">
                    <div
                    className={
                      "text-white p-3 text-center inline-flex items-center justify-center w-24 h-2 shadow-lg " + ChoseColor(demande.statut)
                    }
                    style={{borderRadius:'10px 10px'}} >
                    <i>{ChoseStatut(demande.statut)}</i>
                  </div>
                </td>
                <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-base whitespace-nowrap">
                <span className="flex items-stretch">
                  <Link to={`/demande/${demande.id}`}>
                  <button  className="bg-green-600 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " 
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8 bg-green-600" fill="none" viewBox="0 0 24 24" stroke="white"><title>MODIFIER_PROJET</title>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button> 
                  </Link>         
                  <button onClick={handleOpen}  className="bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " 
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>SUPRIMER_PROJET</title>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                  </button>
                </span>
                </td>
                <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Voulez-vous vraiment supprimer cette demande?
                </Typography>
                <Grid container>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={4}>
                      <Button onClick={handleClose} style={{backgroundColor:'green',color:'white'}}>NON</Button>
                    </Grid>
                    <Grid item={2}>
                    </Grid>
                    <Grid item xs={4}>
                    <Button onClick={()=>handleDelete(demande.id)} style={{backgroundColor:'red',color:'white'}}>OUI</Button>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
              </Box>
            </Modal>
              </tr>
               ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
