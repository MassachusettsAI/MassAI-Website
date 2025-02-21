<script>
  import Navbar from "$lib/components/navbar.svelte";
  import CurEvents from "$lib/components/calendar/cur_events.svelte";
  import PrevEvents from "$lib/components/calendar/prev_events.svelte";
  import Tracks from "$lib/components/tracks/tracks.svelte";
  import Officers from "$lib/components/officers.svelte";
  import AboutUs from "$lib/components/about_us.svelte";
  import Backdrop from "$lib/components/backdrop.svelte";
  import Lectures from "$lib/components/lectures.svelte";
  let showBanner = false;
</script>

<Navbar />

<div class="relative">
  {#if showBanner}
    <a href="https://forms.gle/Fv9UyQnhCicxHZka8" target="_blank" class="block text-center h-20 bg-emerald-600 text-lg text-white hover:bg-emerald-700 transition-colors flex items-center justify-center font-medium p-4 shadow-md mt-16 pb-1">
      Project Matching is Open! Click Here to Build a Project with MassAI!
      <button on:click|preventDefault={() => showBanner = false} class="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">&times;</button>
    </a>
  {:else}
    <div class="mt-16"></div>
  {/if}
</div>

<Backdrop />

<section id="about" class="bg-slate-300 bg-gradient-section text-white py-24 px-8 relative overflow-hidden dark:bg-slate-925">
  <div class="sm:mx-14">
    <AboutUs />
  </div>
</section>

<section id="tracks" class="bg-slate-225 text-black py-24 px-8 dark:bg-slate-950">
  <div class="sm:mx-14">
    <Tracks />
  </div>
</section>

<section id="events" class="bg-slate-150 text-black py-24 px-8 dark:bg-slate-975">
  <div class="sm:mx-14">
    <CurEvents />
  </div>
  <PrevEvents />
</section>

<section id="officers" class="bg-slate-75 py-24 px-8 dark:bg-slate-1000">
  <div class="sm:mx-14">
    <Officers />
  </div>
</section>

<section id="lectures" class="text-black py-24 px-8 dark:bg-slate-1025">
  <div class="sm:mx-14">
    <Lectures />
  </div>
</section>