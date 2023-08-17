const API_BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const APP_ID = 'kWOTV5VjYokcGzg5Fbds'; // Provided app_id

// Function to record a like for a specific item
const recordLike = async (itemId) => {
  const response = await fetch(`${API_BASE_URL}apps/${APP_ID}/likes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  });

  if (response.status === 201) {
    return true; // Like recorded successfully
  }
  return false; // Like recording failed
};

// Function to get a list of items with respective likes
const getLikes = async () => {
  const response = await fetch(`${API_BASE_URL}apps/${APP_ID}/likes/`);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return null;
};

export default {
  recordLike,
  getLikes,
};
