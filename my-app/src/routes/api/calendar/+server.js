import axios from 'axios';
import pkg from 'node-ical';
const { async: icalAsync } = pkg;
import { json } from '@sveltejs/kit';

function formatDate(date) {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
}

function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const meridian = hours >= 12 ? 'pm' : 'am';

  if (hours > 12) hours -= 12;
  else if (hours === 0) hours = 12;

  return `${hours}:${minutes} ${meridian}`;
}

export async function GET() {
  try {
    const calendarId = 'officers.mass.ai@gmail.com';
    const url = `https://calendar.google.com/calendar/ical/${encodeURIComponent(calendarId)}/public/basic.ics`;
    const response = await axios.get(url);

    const events = await icalAsync.parseICS(response.data);

    const formattedEvents = Object.values(events)
      .filter(event => event.type === 'VEVENT')
      .map(event => {
        const start = new Date(event.start);
        const end = new Date(event.end);

        return {
          title: event.summary,
          track: event.description?.toLowerCase().includes('research') ? 'research' : 'project',
          date: formatDate(start),
          time: `${formatTime(start)} - ${formatTime(end)}`,
          location: event.location || 'No location specified'
        };
      });

    return json(formattedEvents);
  } catch (error) {
    console.error('Error fetching calendar:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch calendar events', details: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}