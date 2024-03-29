import axios from 'axios';
import { ErrorHandler } from '../middleware/ErrorMiddleware';
import { API_KEY, BASE_URL } from '../utils/config';
import type IApiWholeResponse from '../interfaces/ApiWholeResponse';
import type IMovieData from '../interfaces/ApiSingleResponse';
import type IVideoData from '../interfaces/ApiVideoResponse';
import type ICreditsData from '../interfaces/ApiCreditResponse';

export async function getTrending(
    pageNumber: string
): Promise<IApiWholeResponse> {
    try {
        let page: number = parseInt(pageNumber);
        if (page === 0 || page > 1000) {
            page = 1;
        }
        console.log(page);

        const response = await axios(
            `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`
        );

        return response.data;
    } catch (err) {
        throw ErrorHandler(err);
    }
}

export async function getImdbMovies(
    pageNumber: string
): Promise<IApiWholeResponse> {
    try {
        let page: number = parseInt(pageNumber);
        if (page === 0 || page > 1000) {
            page = 1;
        }
        const response = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.overview&include_adult=false&include_video=false&page=${page}`
        );
        return response.data;
    } catch (err) {
        throw ErrorHandler(err);
    }
}

export async function getMovieDetail(movieId: string): Promise<IMovieData> {
    try {
        const id: number = parseInt(movieId);

        const response = await axios.get(
            `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        return response.data;
    } catch (err) {
        throw ErrorHandler(err);
    }
}

export async function getMovieVideos(movieId: string): Promise<IVideoData> {
    try {
        const id: number = parseInt(movieId);

        const response = await axios.get(
            `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
        );
        return response.data;
    } catch (err) {
        throw ErrorHandler(err);
    }
}

export async function getMovieCredits(movieId: string): Promise<ICreditsData> {
    try {
        const id: number = parseInt(movieId);

        const response = await axios.get(
            `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        return response.data;
    } catch (err) {
        throw ErrorHandler(err);
    }
}
