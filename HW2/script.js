function search() {
    let artist = document.getElementById("searchField").value

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist)
        .then(response => {
            return response.json()
        })
        .then(musicList => {
            musicList.data.forEach(element => {
                //console.log(element.artist.name)
                document.getElementById("searchResults").style.display = "block"
                document.getElementById("nomeArtista").classList.add('d-block')
                let imgCover = element.artist.picture_big
                let songTitle = element.title
                let albumTitle = element.album.title
                console.log(imgCover)

                let cardContainer = document.querySelector(".card-wrapper")

                cardContainer.innerHTML += `<div class="card col    ">
                <img src="${imgCover}" class="card-img-top w-100" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${songTitle}</h5>
                  <p class="card-text">${albumTitle}</p>
                  <a href="#" class="btn" style="background-color:rgb(60, 211, 60);"><i class="bi bi-play"></i></a>
                </div>
              </div>`
            })

        })
}

