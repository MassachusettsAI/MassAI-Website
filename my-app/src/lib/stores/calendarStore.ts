import { writable } from 'svelte/store';

export interface Event {
    title: string;
    track: string;
    date: string;
    time: string;
    location: string;
}

function createCalendarStore() {
    const { subscribe, set } = writable<Event[]>([]);
    let initialized = false;

    async function fetchEvents() {
        try {
            const response = await fetch('/api/calendar', {
                cache: 'no-store'
            });
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            const events = await response.json();
            set(events);
            initialized = true;
        } catch (error) {
            console.error('Error fetching calendar events:', error);
            set([]);
        }
    }

    return {
        subscribe,
        fetch: fetchEvents,
        isInitialized: () => initialized
    };
}

export const calendarStore = createCalendarStore();