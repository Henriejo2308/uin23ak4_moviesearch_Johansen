function MovieCard({title, img, year}){
    return (
        <article className="movie-article"> 
            <h2>{title}</h2>
            <img src={img} alt={title} />
            <p>Released: <span>{year}</span></p>
        </article>
    )


}
export default MovieCard;