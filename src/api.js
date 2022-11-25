import axios from 'axios'

const api = axios.create({
    // Precisa terminar com /
    baseURL: 'https://agoravai-thales.onrender.com/' ,
     timeout: 5000,
     // Envia os cookies de volta em todas as requisições
     withCredentials: true 
     /*headers:{
        'x-access-token': window.sessionStorage.getItem('app-data')
     }*/
})

export default api