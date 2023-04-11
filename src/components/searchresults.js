import MovieCard from "./moviecard";
import FindMovie from "./findmovie";

function Movies({movies, setSearchResult, listMovies}){
    return (
        <>
        <FindMovie setSearchResult={setSearchResult} listMovies={listMovies} />
        <section className='movies'>
            {movies.map((movie, i) => ( //https://lms.webtricks.blog/kurs/uin/asynkron-databehandling-i-react/recipe-api-oppsett
                <MovieCard key={i} title={movie.Title} img={movie.Poster} year={movie.Year}/>

            ))}
            </section>
        </>
    );
}

export default Movies;