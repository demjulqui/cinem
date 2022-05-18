
const language = "it";
const region = "IT";
const API_KEY_V3 = "a39e12e45742a56081665355c89ed801"



const topratedTV = {
    url: 'https://api.themoviedb.org/3/tv/top_rated',
    method: 'GET',
    params: {
        api_key: API_KEY_V3,
        language: language,
        region: region
    }
}


const topratedMovies = {
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    method: 'GET',
    params: {
        api_key: API_KEY_V3,
        language: language,
        region: region
    }
}


const popularTV = {
    url: 'https://api.themoviedb.org/3/tv/popular',
    method: 'GET',
    params: {
        api_key: API_KEY_V3,
        language: language,
        region: region
    }
}


const popularMovies = {
    url: 'https://api.themoviedb.org/3/movie/popular',
    method: 'GET',
    params: {
        api_key: API_KEY_V3,
        language: language,
        region: region
    }
}





