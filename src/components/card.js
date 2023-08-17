const createCard = (show, initialLikes = 0) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <img src="${show.image.medium}" alt="${show.name}">
  <div class="card-content">
      <h3>${show.name}</h3>
  </div>
  <div class="card-buttons">
      <button class="like-button" data-show-id="${show.id}">
          ❤️ Like (${initialLikes})
      </button>
      <button class="comment-button">💬 Comment</button>
  </div>
`;
return card;
};

export default { createCard };

