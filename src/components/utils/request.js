const API_KEY = "";
const requests = {
    fecthTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv/?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fecthActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fecthComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fecthHorrowMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fecthRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fecthDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}
export default requests;