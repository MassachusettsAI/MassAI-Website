import axios from 'axios';
import pkg from 'node-ical';
const { async: icalAsync } = pkg;
import { json } from '@sveltejs/kit';

function formatDate(date) {
  const estDate = new Date(date.toLocaleString("en-US", {timeZone: "America/New_York"}));
  const month = (estDate.getMonth() + 1).toString().padStart(2, '0');
  const day = estDate.getDate().toString().padStart(2, '0');
  const year = estDate.getFullYear();
  return `${month}-${day}-${year}`;
}

function formatTime(date) {
  const estDate = new Date(date.toLocaleString("en-US", {timeZone: "America/New_York"}));
  let hours = estDate.getHours();
  const minutes = estDate.getMinutes().toString().padStart(2, '0');
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
        const end = new Date(event.end)

        return {
          title: event.summary,
          track: event.description ?
            (event.description.includes('href="') ?
                event.description.split('href="')[1].split('"')[0] :
                event.description.toLowerCase()
            ) : 'mislabeled',
          date: formatDate(start),
          time: `${formatTime(start)} - ${formatTime(end)}`,
          location: event.location || 'TBD'
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