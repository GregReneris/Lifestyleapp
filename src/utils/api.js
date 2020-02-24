import axios from "axios";
const URL = "https://lifestyleapi.herokuapp.com"

const API = {
    // getAllAnimals: ()=>{
    //     return axios.get(`${URL}/api/animals`)
    // },
    // getAllByClass: (className)=>{
    //     return axios.get(`${URL}/api/animals/class/${className}`)
    // },
    // deleteAnimal: (id)=>{
    //     return axios.delete(`${URL}/api/animals/delete/${id}`)
    // },
    // createAnimal : (animalToMake)=>{
    //     return axios.post(`${URL}/api/animals`,animalToMake);
    // },
    login:(user)=>{
        return axios.post(`${URL}/api/auth/login`,user,{withCredentials:true})
    },
    isAuthenticated:()=>{
        return axios.get(`${URL}/api/auth/loggedinuser`,{withCredentials:true});
    },
    createUser: (user) =>{
        return axios.post(`${URL}/api/auth/signup`, {withCredentials:true})
    },
    
    searchPlaces: (search) =>{
        return axios.get(`${URL}/api/places/${search}`)
    },

    getWeather: (city) => {
        return axios.get(`${URL}/api/weather/${city}`)
    },

    getEvents: (date) => {
        return axios.get (`${URL}/api/events/${date}`, {withCredentials:true})
    },
    putUser: (newUserData) => {
        return axios({
            url:`${URL}/api/user`,
            method: "PUT",
            data: newUserData,
            withCredentials: true
        })
    },
    getHikes: () => {
        return axios.get (`${URL}/api/hikes`, {withCredentials:true})
    },

    addEvent:(id) => { // this saves to activities array. non functional rn.
        return axios.get (`${URL}/api/addactivity/${id}`, {withCredentials:true})
    },

    addCompletedActivity:(id) => { // this is to save the selected activity to the user collections and put the activitiy in the completedActivities collection within.
        return axios.post (`${URL}/api/saveEventToUser/${id}`, {withCredentials:true})
    },

    getUser:() => {
        return axios.get (`${URL}/api/user`, {withCredentials:true})
    },

    deleteActivity:(id) => {
        return axios.delete (`${URL}/api/delete/${id}`, {withCredentials:true})
    }

}
export default API;