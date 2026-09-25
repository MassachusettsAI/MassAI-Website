<script lang="ts">
  // Temporary design previews for the team. Not linked from the site; delete demo/ once a design is picked.
  const demos = [
    { href: "/", name: "Current site", note: "The live homepage" },
    { href: "/demo/a", name: "A · Editorial", note: "Light, calm, lots of whitespace. Reads like a lab or journal site." },
    { href: "/demo/b", name: "B · Terminal", note: "Dark, technical, bento-grid layout. Feels like a dev tool." },
    { href: "/demo/c", name: "C · Bold", note: "Loud MassAI red, big type, playful. Built to recruit freshmen." },
    { href: "/demo/people", name: "Officers only", note: "The earlier Leadership / Alumni variants" },
  ];
</script>

<svelte:head><title>MassAI · Design demos</title></svelte:head>

<main class="min-h-screen bg-slate-50 text-slate-900 px-6 py-20">
  <div class="max-w-2xl mx-auto">
    <h1 class="text-4xl font-bold mb-2">Design demos</h1>
    <p class="text-slate-500 mb-10">Same content, different directions. Pick one (or mix pieces) and it becomes the real homepage.</p>
    <div class="grid gap-3">
      {#each demos as d}
        <a href={d.href} class="block p-5 rounded-xl bg-white border border-slate-200 hover:border-red-500 hover:shadow-md transition">
          <div class="font-semibold text-lg">{d.name} →</div>
          <div class="text-slate-500 text-sm">{d.note}</div>
        </a>
      {/each}
    </div>
  </div>
</main>
