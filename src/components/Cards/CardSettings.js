import React,{useEffect, useState} from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { DemandeAxios } from "utils/api/demande";
import ChoseColor from "./CardChosecolor"
import ChoseStatut from "./CardChoseStatut"
import DemandeService from "../../utils/service/service"
import { useParams,useHistory } from "react-router";

// components

export default function CardSettings() {

  const[nom,setNom]=useState("")
  const[prenom,setPrenom]=useState("")
  const[numero1,setNumero1]=useState("")
  const[adresse,setAdresse]=useState("")
  const[sujet,setSujet]=useState("")
  const[statut,setStatut]=useState(null)



  const[success,setSuccess]=useState(false)
  const [demande,setDemande] = useState([])

  const {id}=useParams()
  let history= useHistory()

  const [errer,setErrer]=useState(false)
  const [errormessage,setErrorMessage]=useState("");

  const validationSchema = Yup.object().shape({
    nom: Yup.string()
      .required('Votre nom est obligatoire'),
    prenom: Yup.string()
      .required('Votre prenom est obligatoire'),
    numero1: Yup.number()
      .required('Veuillez ecrire un numero valide'),
    adresse: Yup.string()
      .required('Votre adresse est obligatoire'),
    sujet: Yup.string()
    .required('Le sujet de votre demande est obligatoire'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async ()=> {
    try {
        await DemandeService.UpdateDemande(nom,sujet,statut,prenom,adresse,numero1,id)
        history.push(`/demande/${id}`)
        setSuccess(true)
        window.location.reload();
        
    } catch (error) {
      setErrer(true)
      console.log(error);
    }
    
};
  useEffect(()=>{
    async function fetchDemande(){
      await DemandeAxios.get(`/dossier/${id}/`).then((response)=>{
        console.log(response.data);
        setNom(response.data.nom_prop);
        setPrenom(response.data.prenom_prop)
        setNumero1(response.data.numero1)
        setAdresse(response.data.adresse)
        setSujet(response.data.raison)
        setStatut(response.data.statut)
      })
    }
    fetchDemande()
  },[])
  return (
    <>
      <div className="mt-16 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="mt-16 rounded-t bg-white mb-0 px-6 py-6">
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form >
            <div className="text-center flex justify-between">
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              {nom}
            </h6>
            <div className="flex flex-wrap " style={{textAlign:"justify",alignItems:"center",padding:'10px 10px',width:'30%'}}>
              <div className="md:items-stretch">
                Statut : <span className={"text-white p-3 text-center inline-flex items-center justify-center w-24 h-2 shadow-lg " + ChoseColor(statut)} style={{borderRadius:'10px 10px'}}>{ChoseStatut(statut)}</span>
              </div>
              <div className="md:items-stretch" style={{marginLeft:'5%'}}>
                <select name="statut" id="statut" onChange={e=>{setStatut(e.target.value)}}  name="statut"  className = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" style={{width:'150px'}} defaultValue={statut}>
                        <option value={0}>À faire</option>
                        <option value={1}>En cours</option>
                        <option value={2}>Verifié</option>
                        <option value={3}>Rejeté</option>
                </select>
              </div>
            </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Nom
                  </label>
                  <input
                    defaultValue={nom}
                    name="nom"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={e=>{setNom(e.target.value)}}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Numero1
                  </label>
                  <input
                    defaultValue={numero1}
                    name="numero1"
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="0342324391"
                    onChange={e=>{setNumero1(e.target.value)}}

                  />
                </div>
                <p className="text-red-500 italic">{errors.numero1?.message}</p>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Prenom
                  </label>
                  <input
                    defaultValue={prenom}
                    name="prenom"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={e=>{setPrenom(e.target.value)}}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Numero2
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    defaultValue={adresse}
                    name="adresse"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={e=>{setAdresse(e.target.value)}}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   Ville
                  </label>
                  <input
                    type="type"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="FIANARANTSOA"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Pays
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Madagascar"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Code Postal
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="301"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    SUJET DE DEMANDE
                  </label>
                  <input
                    defaultValue={sujet}
                    name="sujet"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    onChange={e=>{setSujet(e.target.value)}}
                  />
                </div>
              </div>
              <div className=" flex justify-between">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Pieces jointes
                    </label>
                    <input
                      type="file"
                      className=" border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 cursor-pointer"
                    />
                  </div>
                </div>
                <div className = "text-center mt-6 w-1/2" >
                    <button onClick={onSubmit} type="button" className = "bg-green-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" value="Enregistrer">Enregistrer</button>
                </div> 
              </div>
            </div>
          </form>
          {success&&(
            <div class="p-4 mb-4 text-sm text-white bg-green-600 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
              <span class="font-medium">Success alert!</span> Votre demande vient d'être mis à jour 
            </div>
          )}
        </div>
      </div>
    </>
  );
}
