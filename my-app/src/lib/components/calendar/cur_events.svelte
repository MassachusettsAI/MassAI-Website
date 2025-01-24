<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import Calendar from "$lib/components/calendar/calendar.svelte"
  const calendarUrl = `https://calendar.google.com/calendar/render?cid=${encodeURIComponent('officers.mass.ai@gmail.com')}`;
</script>
<div class="flex justify-center">
  <Card.Root class="bg-sky-200 mb-14 max-w-3xl w-full dark:bg-sky-950">
    <Card.Header>
      <Card.Title class="flex items-center justify-center text-blue-600 dark:text-blue-400 text-3xl">Upcoming Events</Card.Title>
    </Card.Header>
    <Calendar timeframe="future" />
    <div class="flex justify-center mb-6">
      <button
          class="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          on:click={() => window.open(calendarUrl, '_blank')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
        </svg>
        Add to Google Calendar
      </button>
    </div>
  </Card.Root>
</div>