const API_URL = 'https://api.tvmaze.com/shows';

export async function fetchAndDisplayShows() {
  fetch(API_URL)
    .then(response => response.json())
    .then(async data => {
      const showList = document.getElementById('showList');
      const totalItems = document.getElementById('totalItems');

      totalItems.textContent = `Total Shows: ${data.length}`;

      const likesData = await getLikes(); // Fetch initial likes data

     
    });
}
