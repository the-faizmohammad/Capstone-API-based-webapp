import InvolvementAPI from './InvolvementAPI.js';

const showPopup = async (show) => {
  // Create and style the popup container
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  // Fetch details about the selected show from TVmaze API
  const response = await fetch(`https://api.tvmaze.com/shows/${show.id}`);
  const showDetails = await response.json();
