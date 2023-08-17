const API_BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const APP_ID = 'kWOTV5VjYokcGzg5Fbds';
// Function to record a like for a specific item
export async function recordLike(itemId) {
    const response = await fetch(`${API_BASE_URL}apps/${APP_ID}/likes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: itemId }),
    });
  
    if (response.status === 201) {
      return true; // Like recorded successfully
    } else {
      return false; // Like recording failed
    }
  }