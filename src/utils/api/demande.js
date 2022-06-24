import Axios from "axios"


const DemandeAxios=Axios.create({
    baseURL:"http://iteam-s.mg:8040"
})

export{
    DemandeAxios
}