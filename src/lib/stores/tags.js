import { writable } from 'svelte/store';
import { fetchTags } from '../api/tags';

export const tags = writable([]);
export const loading = writable(false);
export const error = writable(null);

export async function loadTags() {
  loading.set(true);
  error.set(null);
  
  try {
    const data = await fetchTags();
    tags.set(data);
  } catch (err) {
    error.set(err.message);
    tags.set([]);
  } finally {
    loading.set(false);
  }
}