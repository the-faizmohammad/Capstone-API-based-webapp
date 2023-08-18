import InvolvementAPI from './InvolvementAPI.js';

// Mock the fetch function
global.fetch = jest.fn();
// Define mock data for likes and comments
const mockLikesData = [
  { item_id: 123, likes: 5 },
  { item_id: 456, likes: 10 },
];
