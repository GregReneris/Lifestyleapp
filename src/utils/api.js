import axios from "axios";
const URL = "http://localhost:8080"
// const URL = "https://joesreactzoo-api.herokuapp.com"
const API = {
    getAllAnimals: ()=>{
        return axios.get(`${URL}/api/animals`)
    },
    getAllByClass: (className)=>{
        return axios.get(`${URL}/api/animals/class/${className}`)
    },
    deleteAnimal: (id)=>{
        return axios.delete(`${URL}/api/animals/delete/${id}`)
    },
    createAnimal : (animalToMake)=>{
        return axios.post(`${URL}/api/animals`,animalToMake);
    },
    login:(user)=>{
        return axios.post(`${URL}/api/auth/login`,user,{withCredentials:true})
    },
    isAuthenticated:()=>{
        return axios.get(`${URL}/api/auth/loggedinuser`,{withCredentials:true});
    },
    createUser: (user) =>{
        return axios.post(`${URL}/api/auth/signup`, {withCredentials:true})
    }

}
export default API