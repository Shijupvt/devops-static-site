// Static movie data (since this is a static website)
const movies = [
  {
    title: "Inception",
    year: "2024",
    genre: "sci-fi",
    rating: "9.0",
    director: "Christopher Nolan",
    image: "https://via.placeholder.com/200x300",
    description: "A mind-bending sci-fi thriller about dreams within dreams."
  },
  {
    title: "The Comedy Club",
    year: "2025",
    genre: "comedy",
    rating: "8.5",
    director: "Jane Smith",
    image: "https://via.placeholder.com/200x300",
    description: "A hilarious take on modern stand-up comedy culture."
  },
  {
    title: "Dark Shadows",
    year: "2023",
    genre: "horror",
    rating: "7.8",
    director: "James Wilson",
    image: "https://via.placeholder.com/200x300",
    description: "A spine-chilling horror story set in an abandoned mansion."
  }
];

function searchMovies() {
  const searchTerm = document.getElementById("movie").value.toLowerCase().trim();
  const genre = document.getElementById("genre").value;
  const year = document.getElementById("year").value;
  const moviesGrid = document.getElementById("movies-grid");

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm) || 
                         movie.director.toLowerCase().includes(searchTerm);
    const matchesGenre = !genre || movie.genre === genre;
    const matchesYear = !year || movie.year === year;
    return matchesSearch && matchesGenre && matchesYear;
  });

  if (filteredMovies.length === 0) {
    moviesGrid.innerHTML = "<p>No movies found matching your criteria.</p>";
    return;
  }

  moviesGrid.innerHTML = filteredMovies.map(movie => `
    <div class="movie-card">
      <img src="${movie.image}" alt="${movie.title}" />
      <div class="movie-info">
        <h3>${movie.title} (${movie.year})</h3>
        <p class="rating">⭐ ${movie.rating}</p>
        <p class="genre">� ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</p>
        <p class="director">🎬 ${movie.director}</p>
        <p class="description">${movie.description}</p>
      </div>
    </div>
  `).join('');
}

// Load all movies when the page loads
window.onload = searchMovies;
