import {useState, createContext,useEffect} from "react"
import { DemandeAxios } from "utils/api/demande"

export const DemandeContext=createContext()

export const DemandeContextProvider=(props)=>{
    const [demandes,setDemandes]=useState([])
    const addDemande = (demande)=> {
     setDemandes([...demandes,demande]);}

    useEffect(()=>{
        async function fetchDemande(){
            await DemandeAxios.get('/dossier/').then((response)=>{
               const data=response.data
               setDemandes(data)
            })
        }
        fetchDemande()
    },[])
    return(
        <DemandeContext.Provider value={{demandes, setDemandes,addDemande}}>
            {props.children}
        </DemandeContext.Provider>
    )
}
