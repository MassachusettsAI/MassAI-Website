<!-- CalendarEvents.svelte -->
<script lang="ts">
    export let timeframe: 'past' | 'future';
    import * as Card from "$lib/components/ui/card";

    const trackStyles = {
        project: {
            cardBg: 'bg-emerald-50',
            textColor: 'text-emerald-500'
        },
        research: {
            cardBg: 'bg-indigo-100',
            textColor: 'text-indigo-500'
        }
    };

    // Sample event data
    const events = [
        {
            title: 'Project Team Formation Meeting',
            track: 'project',
            trackName: 'Project Track',
            date: '02-05-2024',
            time: '7 - 8 pm',
            location: 'Integrative Learning Center S220'
        },
        {
            title: 'Reading Group Inaugural Meeting',
            track: 'research',
            trackName: 'Research Track',
            date: '02-07-2025',
            time: '7 - 8 pm',
            location: 'Worcester Dining Commons 3rd Floor, Room 301'
        }
    ];

    // Function to create a date with time set to start of day
    function parseEventDate(dateStr: string): Date {
        const [month, day, year] = dateStr.split('-').map(Number);
        return new Date(year, month - 1, day);
    }

    // Filter events based on timeframe
    $: filteredEvents = events.filter(event => {
        const eventDate = parseEventDate(event.date);
        const today = new Date();
        // Set time to start of day for fair comparison
        today.setHours(0, 0, 0, 0);

        if (timeframe === 'past') {
            return eventDate < today;
        } else {
            return eventDate >= today;
        }
    });

    // Sort events by date
    $: sortedEvents = filteredEvents.sort((a, b) => {
        const dateA = parseEventDate(a.date);
        const dateB = parseEventDate(b.date);
        return timeframe === 'past' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
    });
</script>

<div class="p-6">
  {#each sortedEvents as event, index}
    <div class="rounded-lg border border-gray-200 {trackStyles[event.track].cardBg} {index !== sortedEvents.length - 1 ? 'mb-8' : ''} transition-transform duration-200 hover:-translate-y-1">
      <div class="p-6">
        <div class="flex justify-between gap-2">
                    <span>
                        <h3 class="text-xl font-semibold leading-7">{event.title}</h3>
                    </span>
          <span>
                        <h3 class="text-base font-semibold leading-7 {trackStyles[event.track].textColor}">
                            {event.trackName}
                        </h3>
                    </span>
        </div>
        <div class="mt-2 text-gray-700">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <span class="text-md">{event.date}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-md">{event.time}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span class="text-md">{event.location}</span>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>