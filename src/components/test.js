import InvolvementAPI from './InvolvementAPI.js';

// Mock the fetch function
global.fetch = jest.fn();
// Define mock data for likes and comments
const mockLikesData = [
  { item_id: 123, likes: 5 },
  { item_id: 456, likes: 10 },
];
describe('InvolvementAPI Tests', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear all mock calls after each test
  });

  // Test the recordLike function
  it('should record a like successfully', async () => {
    fetch.mockResolvedValue({ status: 201 });
    // Provide a mock item ID
    const success = await InvolvementAPI.recordLike(123);
    expect(success).toBe(true);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('should handle like recording failure', async () => {
    fetch.mockResolvedValue({ status: 200, json: async () => mockLikesData });
    // Provide a mock item ID
    const success = await InvolvementAPI.recordLike(123);
    expect(success).toBe(false);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  // Test the getLikes function
  it('should get likes successfully', async () => {
    // const mockCommentsData = [
    //   { item_id: 123, comment: 'Test comment 1' },
    //   { item_id: 123, comment: 'Test comment 2' },
    // ];
    fetch.mockResolvedValue({
      status: 200,
      json: async () => mockLikesData,
    });

    const likes = await InvolvementAPI.getLikes();
    expect(likes).toEqual(mockLikesData);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should handle likes retrieval failure', async () => {
    fetch.mockResolvedValue({ status: 500 });

    const likes = await InvolvementAPI.getLikes();
    expect(likes).toBeNull();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

// Test the recordComment function
it('should record a comment successfully', async () => {
  fetch.mockResolvedValue({ status: 201 });
  const success = await InvolvementAPI.recordComment(123, 'username', 'test comment');
  expect(success).toBe(true);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it('should handle comment recording failure', async () => {
  fetch.mockResolvedValue({ status: 400, json: async () => ({}) });

  const success = await InvolvementAPI.recordComment(123, 'username', 'test comment');
  expect(success).toBe(false);
  // Use setTimeout with a delay of 0 milliseconds
  await new Promise((resolve) => setTimeout(resolve, 0));
  setTimeout(() => {
    expect(fetch).toHaveBeenCalledTimes(1);
  }, 0);
});

// Test the getComments function
it('should get comments successfully', async () => {
  const mockComments = [/* Mocked comment data here */];
  fetch.mockResolvedValue({
    status: 200,
    json: async () => mockComments,
  });
  // Provide a mock item ID
  const comments = await InvolvementAPI.getComments(123);
  expect(comments).toEqual(mockComments);

  setTimeout(() => {
    expect(fetch).toHaveBeenCalledTimes(1);
  }, 0);
});

it('should handle comments retrieval failure', async () => {
  fetch.mockResolvedValue({ status: 500, json: async () => [] });
  try {
    const comments = await InvolvementAPI.getComments(123); // Provide a mock item ID
    expect(comments).toBeNull();
    expect(fetch).toHaveBeenCalledTimes(1);
  } catch (error) {
    // Handle errors if needed
  }
});
