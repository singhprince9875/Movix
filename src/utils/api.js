import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTdjM2U0NzI5ZTQzMjU3YzA3OGJkYzYzMGNjNmVkYyIsInN1YiI6IjY0ZDkzY2JhMDAxYmJkMDExZDkxMzRkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AH4sWTwzwtSU8mjDLEeveiAcrCyiZB4-ElToxk0FfGs"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
