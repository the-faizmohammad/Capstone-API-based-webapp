import createCard from './Card.js'; // Add .js extension
import InvolvementAPI from './InvolvementAPI.js'; // Add .js extension

const API_URL = 'https://api.tvmaze.com/shows';

const fetchAndDisplayShows = async () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then(async (data) => {
      const showList = document.getElementById('showList');
      const totalItems = document.getElementById('totalItems');

      totalItems.textContent = `Total Shows: ${data.length}`;

      data.forEach(async (show) => {
        const card = createCard(show);

        const likeButton = card.querySelector('.like-button');

        likeButton.addEventListener('click', async () => {
          const success = await InvolvementAPI.recordLike(show.id);
          if (success) {
            const likesData = await InvolvementAPI.getLikes();
            if (likesData) {
              const showLikes = likesData.find((item) => item.item_id === show.id);
              if (showLikes) {
                likeButton.textContent = `❤️ Like (${showLikes.likes})`;
              }
            }
          }
        });

        showList.appendChild(card);
      });
    });
};

export default fetchAndDisplayShows; // Export as default
