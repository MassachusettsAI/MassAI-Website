<script lang="ts">
  import { schedule as lectures, isPast, formatDate } from "$lib/data/site";
</script>

<div class="text-lg text-center mb-6">
  This fall, MassAI is all about lectures! Every week, members and guest speakers walk through a core area of modern AI, from neural network basics and LLMs to agents, safety, and world models. No experience needed, just show up! :D
</div>

<ol class="max-w-2xl mx-auto divide-y divide-gray-300 dark:divide-gray-700">
  {#each lectures as l}
    {@const past = isPast(l.date)}
    <li class="flex gap-4 py-3 {past || l.off ? 'opacity-50' : ''}">
      <time class="w-16 shrink-0 font-semibold text-sky-600 dark:text-sky-400">{formatDate(l.date)}</time>
      <div class="min-w-0">
        <div class="font-semibold {l.off ? 'italic' : ''}">{l.title}</div>
        {#if l.speakers}
          <div class="text-sm text-gray-500 dark:text-gray-400">{l.speakers}</div>
        {/if}
      </div>
    </li>
  {/each}
</ol>
