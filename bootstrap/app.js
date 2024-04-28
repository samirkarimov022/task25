fetch('https://api.tvmaze.com/shows')
    .then(res => res.json())
    .then(a => {
        getFilms(a);
    });
   

var area = document.getElementById("film-1");

function getFilms(shows) {
   area.innerHTML = "";
   shows.forEach(film =>{
    area.innerHTML +=`
    <div class="card col-md-2">
        <img src="${film.image.medium}" class="card-img-top" alt="">
      
        <div class="card-body">
          <h5 class="card-title">${film.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `
   })
    }

function searchShows(query) { 
  axios.get(`https:api.tvmaze.com/search/shows?q=${query}`) .then(response => {
     getFilms(response.data.map(item => item.show)); 
    }) 
} 
const searchForm = document.getElementById("form-search");
 searchForm.addEventListener('submit', function (event) { 
  event.preventDefault(); 
  const searchInput = document.getElementById("input-search");
   const query = searchInput.value;
    searchShows(query);
    //  console.log(query) ;
  });

   