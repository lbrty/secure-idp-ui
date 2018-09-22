import { format } from "date-fns";
import parse from "date-fns/parse";

/**
 * Return date in YYYY-MM-DD format.
 * This format is used by API backend.
 * @param {date} Date object
 * @returns {date} String date formatted YYYY-MM-DD
 */
export function asDateString(date) {
  if (typeof date === "object") {
    return format(date, "YYYY-MM-DD");
  }

  if (typeof date === "string") {
    const parts = String(date).split("-");

    if (parts.length !== 3) {
      return null;
    }
  }

  return date;
}

export function dateDisplay(date) {
  let newDate = date;

  if (typeof date === "string") {
    newDate = parse(date);
  }

  return format(newDate, "DD.MM.YYYY");
}
