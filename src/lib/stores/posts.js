import { writable } from 'svelte/store';
import { fetchPosts } from '../api/posts';

export const posts = writable([]);
export const loading = writable(false);
export const error = writable(null);

export async function loadPosts() {
  loading.set(true);
  error.set(null);
  
  try {
    const data = await fetchPosts();
    posts.set(data);
  } catch (err) {
    error.set(err.message);
  } finally {
    loading.set(false);
  }
}