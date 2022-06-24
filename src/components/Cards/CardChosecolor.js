
const ChoseColor = (statut) =>{
     let color="bg-black"
     if(statut==1){
         color="bg-lightBlue-500"
     }else if(statut==2){
         color="bg-green-600"
     }else if(statut==3){
         color="bg-red-500"
     }
 
     return color
   }

export default ChoseColor;