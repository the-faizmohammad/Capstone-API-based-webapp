// MovieList.js
import createCard from './Card.js'; // Import createCard from Card.js
import InvolvementAPI from './InvolvementAPI.js';

const API_URL = 'https://api.tvmaze.com/shows';

const fetchAndDisplayShows = async () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then(async (data) => {
      const showList = document.getElementById('showList');
      const totalItems = document.getElementById('totalItems');

      totalItems.textContent = `Total Shows: ${data.length}`;

      data.forEach(async (show) => {
        const likesData = await InvolvementAPI.getLikes();
        const showLikes = likesData.find((item) => item.item_id === show.id);

        const initialLikes = showLikes ? showLikes.likes : 0;

        const card = createCard(show, initialLikes);

        const likeButton = card.querySelector('.like-button');

        likeButton.addEventListener('click', async () => {
          const success = await InvolvementAPI.recordLike(show.id);
          if (success) {
            const updatedLikesData = await InvolvementAPI.getLikes();
            const updatedShowLikes = updatedLikesData.find((item) => item.item_id === show.id);
            if (updatedShowLikes) {
              likeButton.textContent = `❤️ Like (${updatedShowLikes.likes})`;
            }
          }
        });

        showList.appendChild(card);
      });
    });
};

export default fetchAndDisplayShows;
