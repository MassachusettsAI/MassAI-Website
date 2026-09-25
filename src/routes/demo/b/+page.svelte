<script lang="ts">
  // Demo B: Terminal. Dark, monospace accents, bento grid.
  import { eBoardMembers, alumni } from "$lib/data/people";
  import { recordings } from "$lib/data/recordings";
  import { links, about, placements, schedule, startHere, isPast, formatDate, nextLecture } from "$lib/data/site";

  const next = nextLecture();
  const lectureCount = schedule.filter((l) => !l.off).length;
</script>

<svelte:head>
  <title>MassAI · Demo B</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
</svelte:head>

<div class="page min-h-screen bg-[#0b0b0d] text-zinc-100">
  <header class="sticky top-0 z-20 bg-[#0b0b0d]/80 backdrop-blur border-b border-zinc-800">
    <div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
      <a href="#top" class="flex items-center gap-2">
        <img src="/images/ml-logo-border.png" alt="" class="h-7 w-auto" />
        <span class="font-bold tracking-tight">MassAI</span>
      </a>
      <nav class="flex items-center gap-5 mono text-xs">
        <a href="#schedule" class="hidden sm:inline text-zinc-400 hover:text-white">./schedule</a>
        <a href="#resources" class="hidden sm:inline text-zinc-400 hover:text-white">./resources</a>
        <a href="#people" class="hidden sm:inline text-zinc-400 hover:text-white">./people</a>
        <a href={links.join} target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-md bg-rose-500 text-black font-semibold hover:bg-rose-400">join →</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section id="top" class="relative overflow-hidden">
    <div class="grid-bg absolute inset-0"></div>
    <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-rose-600/25 blur-3xl"></div>
    <div class="relative max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
      <span class="mono text-xs px-3 py-1 rounded-full border border-zinc-700 text-zinc-400">umass amherst · ml + ai</span>
      <h1 class="mt-6 text-5xl sm:text-7xl font-bold tracking-tight">Build the future of AI<br /><span class="bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent">at UMass.</span></h1>
      <p class="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">{about}</p>
      <div class="mt-10 flex justify-center gap-3">
        <a href={links.join} target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-md bg-white text-black font-semibold hover:bg-zinc-200">Join MassAI</a>
        <a href={links.discord} target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-md border border-zinc-700 hover:border-zinc-500">Discord</a>
      </div>
    </div>
  </section>

  <!-- Bento -->
  <section class="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-4">
    <div class="md:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div class="mono text-xs text-rose-400">$ next_lecture</div>
      {#if next}
        <div class="mt-4 text-3xl font-bold">{next.title}</div>
        <div class="mt-2 text-zinc-400">{formatDate(next.date)} · {next.speakers}</div>
      {:else}
        <div class="mt-4 text-2xl font-bold">See you next semester!</div>
      {/if}
      <a href={links.calendar} target="_blank" rel="noopener noreferrer" class="mt-6 inline-block mono text-xs text-zinc-400 hover:text-white">+ add to google calendar</a>
    </div>
    <div class="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-between">
      <div class="mono text-xs text-rose-400">$ fall_2026 --stats</div>
      <div class="mt-4 grid grid-cols-2 gap-4">
        <div><div class="text-4xl font-bold">{lectureCount}</div><div class="text-sm text-zinc-500">lectures</div></div>
        <div><div class="text-4xl font-bold">Wed</div><div class="text-sm text-zinc-500">every week</div></div>
      </div>
    </div>
    <div class="md:col-span-3 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div class="mono text-xs text-rose-400 mb-5">$ where_members_went</div>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {#each placements as p}
          <div class="h-20 rounded-xl bg-white flex items-center justify-center p-3"><img src={p.logo} alt={p.name} class="max-h-full max-w-full object-contain" /></div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Schedule -->
  <section id="schedule" class="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800 scroll-mt-14">
    <h2 class="text-4xl font-bold">Fall 2026 Lecture Series</h2>
    <p class="text-zinc-400 mt-2">Weekly lectures from members and guest speakers. No experience needed.</p>
    <ol class="mt-10 relative border-l border-zinc-800 ml-2">
      {#each schedule as l}
        {@const isNext = next && l.date === next.date}
        <li class="pl-6 pb-6 relative {isPast(l.date) || l.off ? 'opacity-40' : ''}">
          <span class="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full {isNext ? 'bg-rose-500 shadow-[0_0_12px] shadow-rose-500' : 'bg-zinc-600'}"></span>
          <div class="flex flex-wrap items-baseline gap-x-4">
            <time class="mono text-sm text-zinc-500 w-16">{formatDate(l.date)}</time>
            <span class="font-semibold {isNext ? 'text-rose-300' : ''} {l.off ? 'italic font-normal' : ''}">{l.title}</span>
            {#if l.speakers}<span class="mono text-xs text-zinc-500">@ {l.speakers}</span>{/if}
          </div>
        </li>
      {/each}
    </ol>
  </section>

  <!-- Resources -->
  <section id="resources" class="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800 scroll-mt-14">
    <h2 class="text-4xl font-bold">Resources</h2>
    <p class="text-zinc-400 mt-2">Curated material to learn from, plus our own lecture archive.</p>
    {#each startHere as g}
      <div class="mono text-xs text-rose-400 mt-10 mb-3">// {g.group.toLowerCase()}</div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {#each g.items as r}
          <a href={r.url} target="_blank" rel="noopener noreferrer" class="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-rose-500/60 transition">
            <div class="mono text-[10px] uppercase tracking-wider text-zinc-500">{r.kind}</div>
            <div class="mt-1 font-semibold group-hover:text-rose-300">{r.name}</div>
            <div class="text-sm text-zinc-500">{r.by}</div>
          </a>
        {/each}
      </div>
    {/each}
    <div class="mono text-xs text-rose-400 mt-10 mb-3">// massai lecture archive</div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {#each recordings as r}
        <a href={r.videoUrl} target="_blank" rel="noopener noreferrer" class="group rounded-xl border border-zinc-800 p-4 hover:border-rose-500/60 transition">
          <div class="mono text-[10px] uppercase tracking-wider text-zinc-500">▶ recording</div>
          <div class="mt-1 font-semibold group-hover:text-rose-300">{r.title}</div>
        </a>
      {/each}
    </div>
  </section>

  <!-- People -->
  <section id="people" class="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800 scroll-mt-14">
    <h2 class="text-4xl font-bold">Leadership</h2>
    <div class="mt-8 grid sm:grid-cols-3 gap-4">
      {#each eBoardMembers as m}
        <div class="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 flex items-center gap-4">
          <img src={m.picture} alt={m.name} class="w-16 h-16 rounded-xl object-cover" />
          <div><div class="font-semibold">{m.name}</div><div class="mono text-xs text-zinc-500">{m.title}</div></div>
        </div>
      {/each}
    </div>
    <h2 class="text-4xl font-bold mt-16">Alumni</h2>
    <div class="mt-8 rounded-2xl border border-zinc-800 divide-y divide-zinc-800 overflow-hidden">
      {#each alumni as a}
        <div class="flex items-center gap-4 px-4 py-3 hover:bg-zinc-900">
          <img src={a.picture} alt={a.name} class="w-9 h-9 rounded-lg object-cover" />
          <span class="font-medium flex-1">{a.name}</span>
          <span class="mono text-xs sm:text-sm text-zinc-400 text-right">{a.position}</span>
        </div>
      {/each}
    </div>
  </section>

  <footer class="border-t border-zinc-800">
    <div class="max-w-6xl mx-auto px-6 py-8 flex justify-between mono text-xs text-zinc-500">
      <span>© {new Date().getFullYear()} massai</span>
      <span class="flex gap-4">
        <a href={links.discord} target="_blank" rel="noopener noreferrer" class="hover:text-white">discord</a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" class="hover:text-white">linkedin</a>
      </span>
    </div>
  </footer>
</div>

<style>
  .page { font-family: "Space Grotesk", system-ui, sans-serif; }
  .mono { font-family: "JetBrains Mono", ui-monospace, monospace; }
  .grid-bg {
    background-image: linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgb(255 255 255 / 0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse at top, black 30%, transparent 75%);
  }
</style>
