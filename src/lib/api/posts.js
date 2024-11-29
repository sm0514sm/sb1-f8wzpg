import { mockPosts } from '../data/mockPosts';

export async function fetchPosts() {
  try {
    const response = await fetch('http://1.1.1.3:8080/get/post');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('Using mock data due to API error:', error.message);
    return mockPosts;
  }
}