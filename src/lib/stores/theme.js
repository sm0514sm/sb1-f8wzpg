import { writable } from 'svelte/store';

// Initialize theme from localStorage if available, otherwise default to light
const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light';
export const theme = writable(storedTheme || 'light');

// Subscribe to theme changes and update localStorage and document class
if (typeof window !== 'undefined') {
  theme.subscribe(value => {
    localStorage.setItem('theme', value);
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
}