import { google } from "googleapis";

const calendar = google.calendar("v3");

/**
 * Fetches upcoming events from Google Calendar
 * @returns {Promise<Array>} -
 */
export async function getCalendarEvents() {
  try {
    const now = new Date();

    const res = await calendar.events.list({
      key: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY,
      calendarId: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID,
      timeMin: now.toISOString(),
      singleEvents: true,
      orderBy: "startTime",
    });

    const events = res.data.items;

    return events || [];
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    return [];
  }
}
