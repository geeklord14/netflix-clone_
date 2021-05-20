import axios from 'axios'

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    
})

export default instance;


// https://api.themoviedb.org/3/trending/all/week?api_key=3df6588fc7df11a24543d08c1ed8ee9b&languages=en-US