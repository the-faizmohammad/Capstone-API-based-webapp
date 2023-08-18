import InvolvementAPI from './InvolvementAPI.js';
import showPopup from './PopupModule.js';
// Create cards
const createCard = (show, initialLikes = 0) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
        <img src="${show.image.medium}" alt="${show.name}">
        <div class="card-content">
            <h3>${show.name}</h3>
        </div>
        <div class="card-buttons">
            <button class="like-button" data-show-id="${show.id}" data-likes="${initialLikes}">
                ❤️ Like (${initialLikes})
            </button>
            <button class="comment-button">💬 Comment</button>
        </div>
    `;
  return card;
};

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
        const commentButton = card.querySelector('.comment-button');

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

        commentButton.addEventListener('click', () => {
          showPopup(show); // Show popup with details and comments
        });

        showList.appendChild(card);
      });
    });
};

export default fetchAndDisplayShows;