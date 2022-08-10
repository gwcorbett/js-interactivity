const message = document.querySelector(`#message`);


function addmovie(event){
    event.preventDefault();
    const inputField = document.querySelector(`input`);
    const movie = document.createElement(`li`);

    const movieTitle = document.createElement(`span`);
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener(`click`, crossOffMovie);

    movie.appendChild(movieTitle)

    const listHolder = document.querySelector(`ul`);
    listHolder.appendChild(movie);

    const deleteBtn = document.createElement(`button`);
    deleteBtn.textContent = `Delete`
    deleteBtn.addEventListener(`click`, deleteMovie)
    movie.appendChild(deleteBtn)

    inputField.value = ``
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = (`Movie Deleted!`)
}

function crossOffMovie(event){
    event.target.classList.toggle(`checked`);

    if (event.target.classList.contains(`checked`)){
    message.textContent = (`Movie Watched!`)}
    else {message.textContent = (`Movie Added Back!`)};
}

const theForm = document.querySelector(`form`);
theForm.addEventListener(`submit`, addmovie)