<script lang="ts">
  // Temporary design preview. Not linked from the site; delete before merging.
  import Navbar from "$lib/components/navbar.svelte";
  import Officers from "$lib/components/officers.svelte";
  import { eBoardMembers, alumni } from "$lib/data/people";

  const designs = [
    { id: "current", label: "Current" },
    { id: "a", label: "A · Roster" },
    { id: "b", label: "B · Portraits" },
    { id: "c", label: "C · Spotlight" },
  ];

  // "Quant Dev @ Citadel, ex-Meta" -> { role: "Quant Dev", org: "Citadel", extra: "ex-Meta" }
  function splitPosition(position: string) {
    const [main, ...rest] = position.split(", ");
    const [role, org] = main.split(/ @ | at /);
    return { role, org: org ?? "", extra: rest.join(", ") };
  }
</script>

<Navbar />

<div class="mt-16 sticky top-16 z-10 bg-white/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-200 dark:border-slate-800">
  <div class="flex flex-wrap gap-2 justify-center py-3 px-4">
    {#each designs as d}
      <a href="#{d.id}" class="px-3 py-1.5 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800 dark:text-white hover:bg-red-100 dark:hover:bg-red-900 transition-colors">{d.label}</a>
    {/each}
  </div>
</div>

<!-- Current -->
<section id="current" class="bg-slate-75 py-24 px-8 dark:bg-slate-1000 scroll-mt-32">
  <p class="text-center text-sm uppercase tracking-widest text-red-600 dark:text-red-400 mb-6">Current</p>
  <div class="sm:mx-14"><Officers /></div>
</section>

<!-- A: Roster. Horizontal leadership cards, alumni as a tidy list. -->
<section id="a" class="bg-white py-24 px-8 dark:bg-slate-950 dark:text-white scroll-mt-32">
  <p class="text-center text-sm uppercase tracking-widest text-red-600 dark:text-red-400 mb-6">Design A · Roster</p>
  <div class="max-w-4xl mx-auto">
    <h1 class="font-fraunces font-extrabold text-5xl text-center mb-10">Leadership</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {#each eBoardMembers as m}
        <div class="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <img src={m.picture} alt={m.name} class="w-16 h-16 rounded-full object-cover shrink-0" />
          <div class="min-w-0">
            <div class="font-bold leading-tight">{m.name}</div>
            <div class="text-sm text-red-600 dark:text-red-400">{m.title}</div>
          </div>
        </div>
      {/each}
    </div>

    <h2 class="font-fraunces font-extrabold text-4xl text-center mt-20 mb-8">Alumni</h2>
    <ul class="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
      {#each alumni as a}
        {@const p = splitPosition(a.position)}
        <li class="flex items-center gap-4 py-4">
          <img src={a.picture} alt={a.name} class="w-12 h-12 rounded-full object-cover shrink-0" />
          <div class="font-semibold flex-1 min-w-0">{a.name}</div>
          <div class="text-right text-sm sm:text-base">
            <span class="text-slate-500 dark:text-slate-400">{p.role}</span>
            {#if p.org}<span class="font-semibold"> · {p.org}</span>{/if}
            {#if p.extra}<div class="text-xs text-slate-400 dark:text-slate-500">{p.extra}</div>{/if}
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- B: Portraits. Big square photos, grayscale until hover. -->
<section id="b" class="bg-slate-100 py-24 px-8 dark:bg-slate-975 dark:text-white scroll-mt-32">
  <p class="text-center text-sm uppercase tracking-widest text-red-600 dark:text-red-400 mb-6">Design B · Portraits</p>
  <div class="max-w-5xl mx-auto">
    <h1 class="font-fraunces font-extrabold text-5xl text-center mb-10">Leadership</h1>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
      {#each eBoardMembers as m}
        <div class="group">
          <div class="aspect-square overflow-hidden rounded-2xl shadow-lg">
            <img src={m.picture} alt={m.name} class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500" />
          </div>
          <div class="mt-3 text-center">
            <div class="font-bold text-lg">{m.name}</div>
            <div class="text-slate-500 dark:text-slate-400">{m.title}</div>
          </div>
        </div>
      {/each}
    </div>

    <h2 class="font-fraunces font-extrabold text-4xl text-center mt-20 mb-8">Alumni</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {#each alumni as a}
        <div class="group text-center">
          <div class="aspect-square overflow-hidden rounded-xl">
            <img src={a.picture} alt={a.name} class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
          </div>
          <div class="mt-2 font-semibold text-sm">{a.name}</div>
          <div class="text-xs text-slate-500 dark:text-slate-400">{a.position}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- C: Spotlight. Bold brand-red band for leadership, alumni cards led by the company. -->
<section id="c" class="scroll-mt-32">
  <div class="bg-gradient-to-br from-red-600 to-red-900 text-white py-24 px-8">
    <p class="text-center text-sm uppercase tracking-widest text-red-200 mb-6">Design C · Spotlight</p>
    <h1 class="font-fraunces font-extrabold text-5xl text-center mb-12">Leadership</h1>
    <div class="flex flex-wrap justify-center gap-12">
      {#each eBoardMembers as m}
        <div class="text-center w-48">
          <img src={m.picture} alt={m.name} class="w-40 h-40 mx-auto rounded-full object-cover ring-4 ring-white/80 shadow-2xl" />
          <div class="mt-4 font-bold text-xl">{m.name}</div>
          <div class="text-red-100">{m.title}</div>
        </div>
      {/each}
    </div>
  </div>
  <div class="bg-slate-75 dark:bg-slate-1000 dark:text-white py-24 px-8">
    <h2 class="font-fraunces font-extrabold text-4xl text-center mb-3">Where Our Alumni Are</h2>
    <p class="text-center text-slate-500 dark:text-slate-400 mb-10">Former MassAI leaders, now at</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
      {#each alumni as a}
        {@const p = splitPosition(a.position)}
        <div class="relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-md p-5 border-l-4 border-red-600">
          <div class="text-2xl font-fraunces font-extrabold">{p.org || p.role}</div>
          <div class="text-sm text-slate-500 dark:text-slate-400">{p.org ? p.role : ""}{p.extra ? ` · ${p.extra}` : ""}</div>
          <div class="flex items-center gap-3 mt-4">
            <img src={a.picture} alt={a.name} class="w-9 h-9 rounded-full object-cover" />
            <span class="font-medium">{a.name}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
