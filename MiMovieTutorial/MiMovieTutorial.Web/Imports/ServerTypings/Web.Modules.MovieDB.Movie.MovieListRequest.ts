namespace MiMovieTutorial.Web.Modules.MovieDB.Movie {
    export interface MovieListRequest extends Serenity.ListRequest {
        Genres?: number[];
    }
}
