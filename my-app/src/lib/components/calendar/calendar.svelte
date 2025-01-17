<script lang="ts">
    export let timeframe: 'past' | 'future';
    import * as Card from "$lib/components/ui/card";
    import { onMount, onDestroy } from 'svelte';

    // Event card styles
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

    /*  Event data
        Modify this to add and remove events

        Field Formatting Info:
        title - No special formatting
        track - Must be a name from the event card styles in the trackStyles object above (i.e. project, research, etc.)
        trackName - No special formatting
        date - Must be in the format mm-dd-yyyy
        time - Must be in the format (hour):(minute) - (hour):(minute) am/pm. I'll work on the edge case
        location - No special formatting
    */
    const events = [
        // Basic formats
        {
            title: 'Reactivity Test',
            track: 'project',
            trackName: 'Project Track',
            date: '01-17-2025',
            time: '4:00 - 4:01 pm',  // Should not be "Happening Now" at 6pm
            location: 'Location 1'
        },
        {
            title: 'Basic PM-PM Format',
            track: 'project',
            trackName: 'Project Track',
            date: '01-16-2025',
            time: '8:00 - 9:00 pm',  // Should not be "Happening Now" at 6pm
            location: 'Location 1'
        },
        {
            title: 'Basic AM-PM Format',
            track: 'project',
            trackName: 'Project Track',
            date: '01-16-2025',
            time: '8:00 am - 5:00 pm',  // Should not be "Happening Now" at 6pm
            location: 'Location 2'
        },

        // Edge Cases - Meridian Handling
        {
            title: 'No Start Meridian',
            track: 'project',
            trackName: 'Project Track',
            date: '01-16-2025',
            time: '8:00 - 9:00 pm',  // Should interpret as 8:00 PM
            location: 'Location 3'
        },
        {
            title: 'No Minutes',
            track: 'project',
            trackName: 'Project Track',
            date: '01-16-2025',
            time: '8 am - 9 pm',  // Should handle missing minutes
            location: 'Location 4'
        },

        // Time Crossing Cases
        {
            title: 'AM to PM Crossing',
            track: 'research',
            trackName: 'Research Track',
            date: '01-16-2025',
            time: '11:00 am - 2:00 pm',  // Should not be "Happening Now" at 6pm
            location: 'Location 5'
        },
        {
            title: 'Currently Happening',
            track: 'research',
            trackName: 'Research Track',
            date: '01-16-2025',
            time: '5:00 pm - 7:00 pm',  // Should be "Happening Now" at 6pm
            location: 'Location 6'
        },

        // Format Variations
        {
            title: 'Compact Format',
            track: 'project',
            trackName: 'Project Track',
            date: '01-16-2025',
            time: '8am - 5pm',  // Should handle no spaces before meridian
            location: 'Location 7'
        },
        {
            title: 'Period Instead of Colon',
            track: 'project',
            trackName: 'Project Track',
            date: '01-16-2025',
            time: '8.00 am - 5.00 pm',  // Should handle periods instead of colons
            location: 'Location 8'
        },

        // Noon/Midnight Cases
        {
            title: 'Noon Crossing',
            track: 'research',
            trackName: 'Research Track',
            date: '01-16-2025',
            time: '11:00 am - 1:00 pm',  // Tests noon crossing
            location: 'Location 9'
        },
        {
            title: '12 Hour Format Edge',
            track: 'research',
            trackName: 'Research Track',
            date: '01-16-2025',
            time: '12:00 pm - 1:00 pm',  // Tests proper handling of 12 PM
            location: 'Location 10'
        },

        // Current Time Edge Cases
        {
            title: 'Just Before Current Time',
            track: 'project',
            trackName: 'Project Track',
            date: '01-16-2025',
            time: '5:45 pm - 6:15 pm',  // Should be "Happening Now" at 6pm
            location: 'Location 11'
        },
        {
            title: 'Spans Current Time',
            track: 'project',
            trackName: 'Project Track',
            date: '01-16-2025',
            time: '5:00 pm - 7:00 pm',  // Should be "Happening Now" at 6pm
            location: 'Location 12'
        }
    ];

    // Gets current EST time
    function getCurrentEST(): Date {
        return new Date(new Date().toLocaleString("en-US", {timeZone: "America/New_York"}));
    }

    // Add current time state
    $: currentTime = getCurrentEST();

    onMount(() => {
        // Update current time every second
        setInterval(() => {
            currentTime = getCurrentEST();
        }, 1000);
    });

    // Create a date with time set to start of event
    function parseEventStartDate(dateStr: string, timeStr: string): Date {
        // Parse date
        const [month, day, year] = dateStr.split('-').map(Number);

        // Split time string into start and end components
        const [startTime, endTime] = timeStr.split('-').map(s => s.trim());

        // Parse start time with optional colons
        const startMatch = startTime.match(/^(\d+)(?:[:.]?(\d+))?\s*(am|pm)?$/i);
        if (!startMatch) return new Date(year, month - 1, day);

        // Parse end time to get meridian if start doesn't have one
        const endMatch = endTime.match(/(\d+)(?:[:.]?(\d+))?\s*(am|pm)$/i);
        if (!endMatch) return new Date(year, month - 1, day);

        let hours = parseInt(startMatch[1]);
        const minutes = startMatch[2] ? parseInt(startMatch[2]) : 0;
        // Use start meridian if exists, otherwise use end meridian
        const meridian = (startMatch[3] || endMatch[3]).toLowerCase();

        // Convert to 24-hour format
        if (meridian === 'pm' && hours !== 12) {
            hours += 12;
        } else if (meridian === 'am' && hours === 12) {
            hours = 0;
        }

        const date = new Date(year, month - 1, day);
        date.setHours(hours, minutes, 0, 0);
        return date;
    }

    // Create a date with time set to end of event
    function parseEventEndDate(dateStr: string, timeStr: string): Date {
        // Parse date
        const [month, day, year] = dateStr.split('-').map(Number);

        // Split time string and get end time
        const [_, endTime] = timeStr.split('-').map(s => s.trim());

        // Parse end time with optional colons
        const timeMatch = endTime.match(/^(\d+)(?:[:.]?(\d+))?\s*(am|pm)$/i);
        if (!timeMatch) return new Date(year, month - 1, day);

        let hours = parseInt(timeMatch[1]);
        const minutes = timeMatch[2] ? parseInt(timeMatch[2]) : 0;
        const meridian = timeMatch[3].toLowerCase();

        // Convert to 24-hour format
        if (meridian === 'pm' && hours !== 12) {
            hours += 12;
        } else if (meridian === 'am' && hours === 12) {
            hours = 0;
        }

        const date = new Date(year, month - 1, day);
        date.setHours(hours, minutes, 0, 0);
        return date;
    }

    // Filter out events that aren't in the past or present/future depending on the timeframe variable
    $: filteredEvents = events.filter(event => {
        const eventStartDate = parseEventStartDate(event.date, event.time);
        const eventEndDate = parseEventEndDate(event.date, event.time);

        if (timeframe === 'past') {
            // Show in past events if:
            // 1. Event has ended (end time is in the past)
            return eventEndDate < currentTime;
        } else {
            // Show in future events if:
            // 1. Event hasn't started yet (start time is in the future) OR
            // 2. Event is ongoing (started but hasn't ended yet)
            return eventStartDate >= currentTime || (eventStartDate <= currentTime && eventEndDate >= currentTime);
        }
    });

    // Sort events by date and time
    $: sortedEvents = filteredEvents.sort((a, b) => {
        const dateA = parseEventStartDate(a.date, a.time);
        const dateB = parseEventStartDate(b.date, b.time);
        return timeframe === 'past' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
    });

    // Converts the raw event date into a more readable format including weekdays and months in text
    function formatEventDate(eventDate: Date): string {
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const nextWeekStart = new Date(currentTime);
        nextWeekStart.setDate(currentTime.getDate() + 7);

        // Get start of current week (Sunday)
        const currentWeekStart = new Date(currentTime);
        currentWeekStart.setDate(currentTime.getDate() - currentTime.getDay());

        // Get start of next week
        const nextWeekEnd = new Date(nextWeekStart);
        nextWeekEnd.setDate(nextWeekStart.getDate() + 6);

        const weekdayName = weekdays[eventDate.getDay()];

        // Format the date part (e.g., "January 16, 2025")
        const datePart = `${months[eventDate.getMonth()]} ${eventDate.getDate()}, ${eventDate.getFullYear()}`;

        // Check if date is in current week
        if (eventDate >= currentWeekStart && eventDate < nextWeekStart) {
            return `${weekdayName}, ${datePart}`;
        }
        // Check if date is in next week
        else if (eventDate >= nextWeekStart && eventDate <= nextWeekEnd) {
            return `Next ${weekdayName}, ${datePart}`;
        }
        // Otherwise, just return the full date with weekday
        else {
            return `${weekdayName}, ${datePart}`;
        }
    }

    // Creates indicator that the event is happening now, today, tomorrow, this week, or next week
    function getEventTimeframe(startDate: Date, endDate: Date): string {
        if (timeframe === 'past') {
            return "";
        }

        // Check if event is happening now
        if (currentTime >= startDate && currentTime <= endDate) {
            return "Happening Now!";
        }

        // Check if event is today
        if (startDate.getFullYear() === currentTime.getFullYear() &&
            startDate.getMonth() === currentTime.getMonth() &&
            startDate.getDate() === currentTime.getDate()) {
            return "Today!";
        }

        // Check if event is tomorrow
        const tomorrow = new Date(currentTime);
        tomorrow.setDate(currentTime.getDate() + 1);
        if (startDate.getFullYear() === tomorrow.getFullYear() &&
            startDate.getMonth() === tomorrow.getMonth() &&
            startDate.getDate() === tomorrow.getDate()) {
            return "Tomorrow!";
        }

        // Get start of current week (Sunday)
        const currentWeekStart = new Date(currentTime);
        currentWeekStart.setDate(currentTime.getDate() - currentTime.getDay());

        // Get start of next week
        const nextWeekStart = new Date(currentWeekStart);
        nextWeekStart.setDate(currentWeekStart.getDate() + 7);

        // Get end of next week
        const nextWeekEnd = new Date(nextWeekStart);
        nextWeekEnd.setDate(nextWeekStart.getDate() + 6);

        // Check if event is this week
        if (startDate >= currentWeekStart && startDate < nextWeekStart) {
            return "This Week";
        }

        // Check if event is next week
        if (startDate >= nextWeekStart && startDate <= nextWeekEnd) {
            return "Next Week";
        }

        return ""; // Return empty string if none of the above conditions are met
    }
</script>

<div class="p-6 text-base">
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
        <div class="flex justify-between gap-2">
          <span>
            <div class="mt-2 text-gray-700">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                <span class="text-md">{formatEventDate(parseEventStartDate(event.date, event.time))}</span>
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
          </span>
          <span class="flex">
            <div class="mt-auto">
              {#if getEventTimeframe(
                parseEventStartDate(event.date, event.time),
                parseEventEndDate(event.date, event.time)
              )}
                {getEventTimeframe(
                  parseEventStartDate(event.date, event.time),
                  parseEventEndDate(event.date, event.time)
                )}
              {/if}
            </div>
          </span>
        </div>
      </div>
    </div>
  {/each}
</div>