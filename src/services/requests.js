const API_KEY = "b43e3ec";

// OMDB doesn't support discovery like TMDB. 
// We will use specific search terms to mimic the categories.
const requests = {
    fetchTrending: `?apikey=${API_KEY}&s=marvel&type=movie`,
    fetchNetflixOriginals: `?apikey=${API_KEY}&s=stranger things&type=series`,
    fetchTopRated: `?apikey=${API_KEY}&s=harry potter&type=movie`,
    fetchActionMovies: `?apikey=${API_KEY}&s=mission impossible&type=movie`,
    fetchComedyMovies: `?apikey=${API_KEY}&s=hangover&type=movie`,
    fetchHorrorMovies: `?apikey=${API_KEY}&s=conjuring&type=movie`,
    fetchRomanceMovies: `?apikey=${API_KEY}&s=notebook&type=movie`,
    fetchDocumentaries: `?apikey=${API_KEY}&s=planet earth&type=series`,
};

export default requests;
