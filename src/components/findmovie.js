function FindMovie({setSearchResult, listMovies}){

    const handleInput = (event) =>{
        setSearchResult(event.target.value) //https://www.devhandbook.com/javascript/dom/event-target/

    }

    const sendSearch = (event) =>{ 
        event.preventDefault() //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    }

    return ( //https://www.w3schools.com/howto/howto_css_search_button.asp
        <form onSubmit={sendSearch} className="searchbox">
            <input type="text" placeholder="Title" onChange={handleInput} />
            <button type="submit" onClick={listMovies}>Search<i class="fa fa-search"></i></button>
        </form>
    )
}

export default FindMovie;