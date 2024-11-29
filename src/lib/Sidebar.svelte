<script>
  import { onMount } from 'svelte';
  import { tags, loading, error, loadTags } from './stores/tags';

  onMount(() => {
    loadTags();
  });
</script>

<aside class="p-4">
  <section class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-4">
    <h3 class="text-lg font-bold mb-4 dark:text-white">🔥 가장 많이 읽은 글</h3>
    <div class="flex gap-2 mb-2 overflow-x-auto">
      <button class="px-3 py-1 rounded-full bg-primary dark:bg-primary-dark text-white whitespace-nowrap">최근 24시간</button>
      <button class="px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 dark:text-gray-300 whitespace-nowrap hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">최근 7일</button>
      <button class="px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 dark:text-gray-300 whitespace-nowrap hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">최근 1달</button>
    </div>
    <ul class="space-y-2 mt-4 dark:text-gray-300">
      <li>1. Transpiler, "사용"할고 "활용"하기</li>
      <li>2. 테스트 메니저의 과거, 토스의 전략, 그리고 미래</li>
      <li>3. 그래서 코틀린이 뭔데?</li>
      <li>4. FIDO2 릴라이언트 SDK 오픈소스 소개</li>
      <li>5. marksheet</li>
    </ul>
  </section>
  
  <section class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
    <h3 class="text-lg font-bold mb-4 dark:text-white">🏷️ 태그</h3>
    {#if $loading}
      <div class="text-center py-2">
        <span class="text-gray-600 dark:text-gray-400">Loading tags...</span>
      </div>
    {:else if $error}
      <div class="bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-400 p-4 rounded-lg">
        <p class="font-semibold">Error loading tags:</p>
        <p class="text-sm mt-1">{$error}</p>
        <button 
          class="mt-2 text-sm px-3 py-1 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 rounded-full transition-colors duration-200"
          on:click={loadTags}
        >
          Try Again
        </button>
      </div>
    {:else}
      <div class="flex flex-wrap gap-2">
        {#each $tags as tag}
          <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded-full text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
            {tag.tagName}
          </span>
        {/each}
      </div>
    {/if}
  </section>
</aside>