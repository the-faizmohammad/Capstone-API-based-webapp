import { createCard } from './Card.js';
import { recordLike, getLikes } from './InvolvementAPI.js';

const API_URL = 'https://api.tvmaze.com/shows';

export default async function fetchAndDisplayShows() {
  fetch(API_URL)
    .then((response) => response.json())
    .then(async (data) => {
      const showList = document.getElementById('showList');
      const totalItems = document.getElementById('totalItems');

      totalItems.textContent = `Total Shows: ${data.length}`;

      const likesData = await getLikes(); // Fetch initial likes data

      data.forEach((show) => {
        const showLikes = likesData.find((item) => item.item_id === show.id);
        const card = createCard(show, showLikes ? showLikes.likes : 0);

        const likeButton = card.querySelector('.like-button');

        likeButton.addEventListener('click', async () => {
          const success = await recordLike(show.id);
          if (success) {
            const updatedLikesData = await getLikes();
            const updatedShowLikes = updatedLikesData.find((item) => item.item_id === show.id);
            if (updatedShowLikes) {
              likeButton.textContent = `❤️ Like (${updatedShowLikes.likes})`; // Update like count on click
            }
          }
        });

        showList.appendChild(card);
      });
    });
}
