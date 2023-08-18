import InvolvementAPI from './InvolvementAPI.js';

const showPopup = async (show) => {
  // Create and style the popup container
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  // Fetch details about the selected show from TVmaze API
  const response = await fetch(`https://api.tvmaze.com/shows/${show.id}`);
  const showDetails = await response.json();
// Populate the popup content with show details
  popupContainer.innerHTML = `
    <div class="popup-header">
      <img src="${showDetails.image.medium}" alt="${showDetails.name}">
      <h2>${showDetails.name}</h2>
    </div>
    <div class="popup-content">
      <p>${showDetails.summary}</p><br>
      <a href="${show.url}" target="_blank">Learn More</a>
    </div>
    <button class="popup-close-button">✖</button>
    <div class="comment-form">
      <input type="text" id="commentName" placeholder="Your Name">
      <textarea id="commentText" placeholder="Your Comment"></textarea>
      <button class="popup-comment-button">💬 Add Comment</button>
    </div>
    <div class="comment-count">Comments (0)</div>
    <div class="comment-list">
      <!-- Comment list will be populated here -->
    </div>
  `;
const mainContainer = document.querySelector('main .container');
  mainContainer.parentNode.insertBefore(popupContainer, mainContainer);

  const commentListElement = popupContainer.querySelector('.comment-list');
  const commentCountElement = popupContainer.querySelector('.comment-count');

  // Handle the close button click inside the popup
  const closeButton = popupContainer.querySelector('.popup-close-button');
  closeButton.addEventListener('click', () => {
    popupContainer.remove();
  });
