export default interface IMovieData {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: object | null;
    budget: number;
    genres: Array<{ id: number; name: string }>;
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: Array<{
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }>;
    production_countries: Array<{ iso_3166_1: string; name: string }>;
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: Array<{ iso_639_1: string; name: string }>;
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
