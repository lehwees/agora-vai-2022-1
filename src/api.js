import axios from 'axios'

const api = axios.create({
    // Precisa terminar com /
    baseURL: 'https://agoravai-thales.onrender.com/'  
})

export default api