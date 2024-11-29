<script>
  import { onMount } from 'svelte';
  import Header from './lib/Header.svelte';
  import SearchBar from './lib/SearchBar.svelte';
  import BlogPost from './lib/BlogPost.svelte';
  import Sidebar from './lib/Sidebar.svelte';
  import ThemeToggle from './lib/components/ThemeToggle.svelte';
  import { posts, loading, error, loadPosts } from './lib/stores/posts';

  onMount(() => {
    loadPosts();
  });
</script>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
  <Header />
  
  <main class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <SearchBar />
        <div class="space-y-4 mt-4">
          {#if $loading}
            <div class="text-center py-4">
              <span class="text-gray-600 dark:text-gray-400">Loading posts...</span>
            </div>
          {:else if $error}
            <div class="bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-400 p-4 rounded-lg">
              Error: {$error}
            </div>
          {:else if $posts.length === 0}
            <div class="text-center py-4">
              <span class="text-gray-600 dark:text-gray-400">No posts found</span>
            </div>
          {:else}
            {#each $posts as post}
              <BlogPost {...post} />
            {/each}
          {/if}
        </div>
      </div>
      <div class="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
  </main>
  
  <ThemeToggle />
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>