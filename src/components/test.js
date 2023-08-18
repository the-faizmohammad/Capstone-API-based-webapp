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
      const success = await InvolvementAPI.recordLike(123); // Provide a mock item ID
    expect(success).toBe(true);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('should handle like recording failure', async () => {
    fetch.mockResolvedValue({ status: 200, json: async () => mockLikesData });

    const success = await InvolvementAPI.recordLike(123); // Provide a mock item ID
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