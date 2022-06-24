

const ChoseType = (id_type)=>{
     let Tpe = "Recrutement"
     if(id_type==2){
          Tpe="Renouvellement de contrat"
     }else if(id_type==3){
          Tpe="Integration d'Agent"
     }else if(id_type==4){
          Tpe="Equivalence administratifs"
     }else if(id_type==5){
          Tpe="Traduction codis"
     }else if(id_type==6){
          Tpe="nomination"
     }else if(id_type==7){
          Tpe="Reclassement indiciaire"
     }
     return Tpe;
}

export default ChoseType;