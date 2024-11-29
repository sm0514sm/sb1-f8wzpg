<script>
  let categories = ['All', 'Frontend', 'Backend', 'DevOps', 'AI', 'Software Architecture', 'Else'];
  let selectedCategory = 'All';
</script>

<header class="p-4 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200">
  <div class="logo-section mb-8">
    <h1 class="text-center text-4xl font-bold mb-2 dark:text-white">당신을 위한 기술 개발 블로그 모음</h1>
    <div class="text-center text-3xl dark:text-white">
      <span class="text-orange-500">&lt;V&gt;</span>elopers
    </div>
  </div>
  
  <nav class="categories max-w-3xl mx-auto">
    <ul class="flex justify-center gap-6 border-b border-gray-200 dark:border-gray-700">
      {#each categories as category}
        <li>
          <button 
            class="py-2 px-4 transition-colors duration-200 {
              selectedCategory === category 
                ? 'text-primary-dark dark:text-primary border-b-2 border-primary-dark dark:border-primary' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }"
            on:click={() => selectedCategory = category}
          >
            {category}
          </button>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  .categories {
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .categories::-webkit-scrollbar {
    display: none;
  }
  
  ul {
    white-space: nowrap;
    padding-bottom: 2px;
  }
</style>