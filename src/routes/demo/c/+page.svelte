<script lang="ts">
  // Demo C: Bold. Loud brand red, chunky type, playful cards.
  import { eBoardMembers, alumni } from "$lib/data/people";
  import { recordings } from "$lib/data/recordings";
  import { links, about, placementsBlurb, placements, schedule, startHere, isPast, formatDate, nextLecture } from "$lib/data/site";

  const next = nextLecture();
  const cardColors = ["bg-amber-300", "bg-sky-300", "bg-lime-300", "bg-pink-300", "bg-violet-300", "bg-orange-300"];

  // "Quant Dev @ Citadel, ex-Meta" -> { role: "Quant Dev", org: "Citadel", extra: "ex-Meta" }
  function splitPosition(position: string) {
    const [main, ...rest] = position.split(", ");
    const [role, org] = main.split(/ @ | at /);
    return { role, org: org ?? "", extra: rest.join(", ") };
  }
</script>

<svelte:head>
  <title>MassAI · Demo C</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="page min-h-screen bg-[#fff6ec] text-black">
  <header class="sticky top-0 z-20 bg-red-600 text-white border-b-4 border-black">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#top" class="flex items-center gap-2">
        <img src="/images/ml-logo-border.png" alt="" class="h-9 w-auto" />
        <span class="text-2xl font-extrabold">MassAI</span>
      </a>
      <nav class="flex items-center gap-5 font-semibold">
        <a href="#lectures" class="hidden sm:inline hover:underline">Lectures</a>
        <a href="#resources" class="hidden sm:inline hover:underline">Resources</a>
        <a href="#people" class="hidden sm:inline hover:underline">People</a>
        <a href={links.join} target="_blank" rel="noopener noreferrer" class="btn bg-yellow-300 text-black">Join!</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section id="top" class="bg-red-600 text-white border-b-4 border-black">
    <div class="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-5 gap-10 items-center">
      <div class="md:col-span-3">
        <h1 class="text-6xl sm:text-8xl font-extrabold leading-[0.9] tracking-tight">Get weirdly good at AI.</h1>
        <p class="mt-8 text-xl text-red-50 max-w-xl">{about}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href={links.join} target="_blank" rel="noopener noreferrer" class="btn bg-yellow-300 text-black text-lg">Join MassAI →</a>
          <a href="#lectures" class="btn bg-white text-black text-lg">See the lectures</a>
        </div>
      </div>
      {#if next}
        <div class="md:col-span-2 rotate-2 bg-white text-black border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0_#000]">
          <div class="text-sm font-bold uppercase text-red-600">Up next · {formatDate(next.date)}</div>
          <div class="mt-2 text-3xl font-extrabold leading-tight">{next.title}</div>
          <div class="mt-3 text-gray-600">with {next.speakers}</div>
          <a href={links.calendar} target="_blank" rel="noopener noreferrer" class="mt-5 inline-block font-semibold underline">Add to calendar</a>
        </div>
      {/if}
    </div>
  </section>

  <!-- Placements marquee -->
  <section class="bg-black text-white py-4 overflow-hidden border-b-4 border-black">
    <div class="marquee flex gap-6 w-max">
      {#each [...placements, ...placements, ...placements, ...placements] as p}
        <div class="h-16 w-36 shrink-0 bg-white rounded-lg flex items-center justify-center p-2"><img src={p.logo} alt={p.name} class="max-h-full max-w-full object-contain" /></div>
      {/each}
    </div>
  </section>
  <p class="text-center font-semibold max-w-3xl mx-auto px-6 pt-8">{placementsBlurb}</p>

  <!-- Lectures -->
  <section id="lectures" class="max-w-6xl mx-auto px-6 py-20 scroll-mt-16">
    <h2 class="text-5xl sm:text-6xl font-extrabold">Fall 2026 Lectures</h2>
    <p class="mt-3 text-lg">Every Wednesday. No experience needed, just show up.</p>
    <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {#each schedule as l, i}
        <div class="card {l.off ? 'bg-white border-dashed' : cardColors[i % cardColors.length]} {isPast(l.date) ? 'opacity-50' : ''}">
          <div class="text-sm font-bold uppercase">{formatDate(l.date)}</div>
          <div class="mt-2 text-xl font-extrabold leading-snug {l.off ? 'font-semibold italic' : ''}">{l.title}</div>
          {#if l.speakers}<div class="mt-3 text-sm font-semibold">🎤 {l.speakers}</div>{/if}
        </div>
      {/each}
    </div>
  </section>

  <!-- Resources -->
  <section id="resources" class="bg-yellow-300 border-y-4 border-black scroll-mt-16">
    <div class="max-w-6xl mx-auto px-6 py-20">
      <h2 class="text-5xl sm:text-6xl font-extrabold">Learn stuff</h2>
      <p class="mt-3 text-lg">The best free material on the internet, hand-picked, plus our own lecture recordings.</p>
      <div class="mt-10 grid md:grid-cols-3 gap-5">
        {#each startHere as g}
          <div class="card bg-white">
            <div class="text-2xl font-extrabold mb-4">{g.group}</div>
            <ul class="space-y-3">
              {#each g.items as r}
                <li>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" class="font-semibold hover:text-red-600 hover:underline">{r.name}</a>
                  <div class="text-sm text-gray-600">{r.by} · {r.kind}</div>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
      <div class="mt-10 text-2xl font-extrabold">📼 Past MassAI lectures</div>
      <div class="mt-4 flex flex-wrap gap-3">
        {#each recordings as r}
          <a href={r.videoUrl} target="_blank" rel="noopener noreferrer" class="btn bg-white text-black">▶ {r.title}</a>
        {/each}
      </div>
    </div>
  </section>

  <!-- People -->
  <section id="people" class="max-w-6xl mx-auto px-6 py-20 scroll-mt-16">
    <h2 class="text-5xl sm:text-6xl font-extrabold">The crew</h2>
    <div class="mt-10 flex flex-wrap justify-center gap-10">
      {#each eBoardMembers as m, i}
        <div class="text-center w-52">
          <img src={m.picture} alt={m.name} class="w-44 h-44 mx-auto rounded-full object-cover border-4 border-black shadow-[6px_6px_0_#000] {i % 2 ? '-rotate-3' : 'rotate-3'}" />
          <div class="mt-5 text-2xl font-extrabold">{m.name}</div>
          <div class="font-semibold text-red-600">{m.title}</div>
        </div>
      {/each}
    </div>

    <h2 class="text-5xl sm:text-6xl font-extrabold mt-24">Where alumni went</h2>
    <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {#each alumni as a, i}
        {@const p = splitPosition(a.position)}
        <div class="card {cardColors[(i + 2) % cardColors.length]}">
          <div class="text-3xl font-extrabold">{p.org || p.role}</div>
          <div class="text-sm font-semibold">{p.org ? p.role : ""}{p.extra ? ` · ${p.extra}` : ""}</div>
          <div class="flex items-center gap-3 mt-5">
            <img src={a.picture} alt={a.name} class="w-10 h-10 rounded-full object-cover border-2 border-black" />
            <span class="font-bold">{a.name}</span>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <footer class="bg-black text-white">
    <div class="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-4 font-semibold">
      <span>© {new Date().getFullYear()} MassAI ❤️ UMass Amherst</span>
      <span class="flex gap-5">
        <a href={links.discord} target="_blank" rel="noopener noreferrer" class="hover:text-yellow-300">Discord</a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" class="hover:text-yellow-300">LinkedIn</a>
        <a href={links.join} target="_blank" rel="noopener noreferrer" class="hover:text-yellow-300">Linktree</a>
      </span>
    </div>
  </footer>
</div>

<style>
  .page { font-family: "Bricolage Grotesque", system-ui, sans-serif; }
  .btn {
    display: inline-block;
    padding: 0.5rem 1.1rem;
    border: 3px solid #000;
    border-radius: 999px;
    font-weight: 700;
    box-shadow: 3px 3px 0 #000;
    transition: transform 0.1s, box-shadow 0.1s;
  }
  .btn:hover { transform: translate(-2px, -2px); box-shadow: 5px 5px 0 #000; }
  .card {
    border: 3px solid #000;
    border-radius: 1rem;
    padding: 1.25rem;
    box-shadow: 5px 5px 0 #000;
  }
  .marquee { animation: scroll 30s linear infinite; }
  @keyframes scroll { to { transform: translateX(-50%); } }
  @media (prefers-reduced-motion: reduce) { .marquee { animation: none; } }
</style>
