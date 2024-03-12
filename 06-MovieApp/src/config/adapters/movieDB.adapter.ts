import { THE_MOVIE_APP_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";


export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params:{
        // api_key: "2948f2d0fe3690d24111d5cda1fb82cb",
        api_key: THE_MOVIE_APP_KEY ?? 'No-key',
        language: "es",
    },
})
