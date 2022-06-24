
const ChoseStatut = (statut) =>{
     let title="Nouveau"
     if(statut==1){
         title="En cours"
     }else if(statut==2){
         title="Terminé"
     }else if(statut==3){
         title="Rejeté"
     }
 
     return title
   }
export default ChoseStatut;