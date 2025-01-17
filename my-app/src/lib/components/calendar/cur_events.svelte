<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import Calendar from "$lib/components/calendar/calendar.svelte"
</script>
<div class="flex justify-center">
  <Card.Root class="bg-sky-50 m-14 max-w-3xl w-full">
    <Card.Header>
      <Card.Title class="flex items-center justify-center text-blue-600 text-2xl">Upcoming Events</Card.Title>
    </Card.Header>
    <Calendar timeframe="future" />
  </Card.Root>
</div>
