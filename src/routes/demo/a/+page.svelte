<script lang="ts">
  // Demo A: Editorial. Light, serif headlines, generous whitespace.
  import { eBoardMembers, alumni } from "$lib/data/people";
  import { recordings } from "$lib/data/recordings";
  import { links, about, placementsBlurb, placements, schedule, startHere, isPast, formatDate, nextLecture } from "$lib/data/site";

  const next = nextLecture();
  const nav = [["#lectures", "Lectures"], ["#resources", "Resources"], ["#people", "People"]];
</script>

<svelte:head>
  <title>MassAI · Demo A</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
</svelte:head>

<div class="page min-h-screen bg-[#faf8f5] text-stone-900">
  <header class="sticky top-0 z-20 bg-[#faf8f5]/90 backdrop-blur border-b border-stone-200">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#top" class="flex items-center gap-2">
        <img src="/images/ml-logo-border.png" alt="" class="h-8 w-auto" />
        <span class="serif text-xl font-extrabold">MassAI</span>
      </a>
      <nav class="flex items-center gap-6 text-sm">
        {#each nav as [href, label]}<a {href} class="hidden sm:inline text-stone-600 hover:text-red-700">{label}</a>{/each}
        <a href={links.join} target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-full bg-red-700 text-white font-medium hover:bg-red-800">Join us</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section id="top" class="max-w-5xl mx-auto px-6 pt-24 pb-20">
    <p class="text-red-700 font-medium tracking-wide text-sm uppercase mb-6">UMass Amherst · Machine Learning & AI</p>
    <h1 class="serif text-5xl sm:text-7xl font-extrabold leading-[1.05] max-w-3xl">Learn modern AI, <em class="font-normal text-red-700">together.</em></h1>
    <p class="mt-8 text-lg text-stone-600 max-w-2xl leading-relaxed">{about}</p>
    {#if next}
      <a href="#lectures" class="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-stone-300 hover:border-red-700 transition">
        <span class="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
        <span class="text-sm"><span class="text-stone-500">Next lecture · {formatDate(next.date)}</span> <span class="font-semibold">{next.title}</span></span>
      </a>
    {/if}
  </section>

  <!-- Placements -->
  <section class="border-y border-stone-200 bg-white">
    <div class="max-w-5xl mx-auto px-6 py-12">
      <p class="text-center text-sm text-stone-500 mb-8">{placementsBlurb}</p>
      <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
        {#each placements as p}
          <img src={p.logo} alt={p.name} class="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition" />
        {/each}
      </div>
    </div>
  </section>

  <!-- Lecture series -->
  <section id="lectures" class="max-w-5xl mx-auto px-6 py-24 scroll-mt-16">
    <div class="grid md:grid-cols-3 gap-10">
      <div>
        <h2 class="serif text-4xl font-extrabold">Fall 2026 Lecture Series</h2>
        <p class="mt-4 text-stone-600 leading-relaxed">Every Wednesday, members and guest speakers walk through a core area of modern AI. No experience needed.</p>
        <a href={links.calendar} target="_blank" rel="noopener noreferrer" class="mt-6 inline-block text-sm font-medium text-red-700 hover:underline">Add to Google Calendar →</a>
      </div>
      <ol class="md:col-span-2 divide-y divide-stone-200 border-y border-stone-200">
        {#each schedule as l, i}
          <li class="grid grid-cols-[3.5rem_4rem_1fr] gap-3 py-4 items-baseline {isPast(l.date) || l.off ? 'text-stone-400' : ''}">
            <span class="serif text-stone-400 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            <time class="text-sm font-medium tabular-nums">{formatDate(l.date)}</time>
            <div>
              <div class="font-semibold {l.off ? 'italic font-normal' : ''}">{l.title}</div>
              {#if l.speakers}<div class="text-sm text-stone-500">{l.speakers}</div>{/if}
            </div>
          </li>
        {/each}
      </ol>
    </div>
  </section>

  <!-- Resources -->
  <section id="resources" class="bg-white border-y border-stone-200 scroll-mt-16">
    <div class="max-w-5xl mx-auto px-6 py-24">
      <h2 class="serif text-4xl font-extrabold">Resources</h2>
      <p class="mt-3 text-stone-600 max-w-2xl">Our own lecture recordings, plus the outside material we'd hand a friend who wants to get into ML.</p>

      <div class="grid md:grid-cols-2 gap-12 mt-12">
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-widest text-red-700 mb-4">Start here</h3>
          {#each startHere as g}
            <h4 class="serif text-lg font-semibold mt-6 mb-2">{g.group}</h4>
            <ul class="space-y-2">
              {#each g.items as r}
                <li>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" class="group flex justify-between gap-4">
                    <span class="group-hover:text-red-700 group-hover:underline">{r.name}</span>
                    <span class="text-sm text-stone-400 shrink-0">{r.by}</span>
                  </a>
                </li>
              {/each}
            </ul>
          {/each}
        </div>
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-widest text-red-700 mb-4">MassAI lecture archive</h3>
          <ul class="divide-y divide-stone-200">
            {#each recordings as r}
              <li class="py-3 flex items-baseline justify-between gap-4">
                <span class="font-medium">{r.title}</span>
                <span class="flex gap-3 text-sm shrink-0">
                  <a href={r.videoUrl} target="_blank" rel="noopener noreferrer" class="text-red-700 hover:underline">Video</a>
                  {#each r.resources as res}<a href={res.url} target="_blank" rel="noopener noreferrer" class="text-stone-500 hover:underline">{res.name.replace("Lecture ", "")}</a>{/each}
                </span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- People -->
  <section id="people" class="max-w-5xl mx-auto px-6 py-24 scroll-mt-16">
    <h2 class="serif text-4xl font-extrabold">Leadership</h2>
    <div class="grid sm:grid-cols-3 gap-8 mt-10">
      {#each eBoardMembers as m}
        <div>
          <img src={m.picture} alt={m.name} class="w-full aspect-[4/5] object-cover rounded-sm" />
          <div class="mt-3 serif text-xl font-semibold">{m.name}</div>
          <div class="text-sm text-stone-500">{m.title}</div>
        </div>
      {/each}
    </div>

    <h2 class="serif text-4xl font-extrabold mt-24">Alumni</h2>
    <ul class="mt-8 grid sm:grid-cols-2 gap-x-12 border-t border-stone-200">
      {#each alumni as a}
        <li class="flex items-center gap-4 py-4 border-b border-stone-200">
          <img src={a.picture} alt={a.name} class="w-11 h-11 rounded-full object-cover" />
          <div>
            <div class="font-semibold">{a.name}</div>
            <div class="text-sm text-stone-500">{a.position}</div>
          </div>
        </li>
      {/each}
    </ul>
  </section>

  <footer class="border-t border-stone-200">
    <div class="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-stone-500">
      <span>© {new Date().getFullYear()} MassAI · UMass Amherst</span>
      <span class="flex gap-5">
        <a href={links.discord} target="_blank" rel="noopener noreferrer" class="hover:text-red-700">Discord</a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" class="hover:text-red-700">LinkedIn</a>
        <a href={links.join} target="_blank" rel="noopener noreferrer" class="hover:text-red-700">Linktree</a>
      </span>
    </div>
  </footer>
</div>

<style>
  .page { font-family: "Inter", system-ui, sans-serif; }
  .serif { font-family: "Fraunces", Georgia, serif; }
</style>
