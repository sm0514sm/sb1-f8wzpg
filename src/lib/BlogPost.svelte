<script>
  export let title;
  export let description;
  export let tags;
  export let author;
  export let date;
  export let image = null;
</script>

<article class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
  <div class="flex gap-4">
    <div class="flex-grow">
      <h2 class="text-xl font-bold mb-2 dark:text-white">{title}</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        {#each tags as tag}
          <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded-full text-sm">{tag}</span>
        {/each}
      </div>
      <div class="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </div>
    {#if image}
      <div class="flex-shrink-0">
        <img src={image} alt="" class="w-24 h-24 object-cover rounded-lg">
      </div>
    {/if}
  </div>
</article>