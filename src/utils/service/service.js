import {DemandeAxios} from "utils/api/demande"
class DemandeService{
     
     UpdateDemande(nom_prop,raison,statut,prenom_prop,adresse_prop,numero_prop,id){
          return DemandeAxios.put(`/dossier/${id}/`,{
               nom_prop,
               raison,
               statut,
               prenom_prop,
               adresse_prop,
               numero_prop,
               id
               })
          
     }
     
}

export default new DemandeService()