import { timestamp } from "@/helpers/dates";

export const isLoginPage = route => String(route).toLowerCase() === "login";

// We will check token every 15 minutes
// Since it is Javascript we need to multiply by 1000
export const CHECK_IN_EXPIRES = 15 * 60 * 1000 * 1000;

export const getToken = () => localStorage.getItem("token");

export const checkIn = () => {
  const ts = timestamp();
  localStorage.setItem("checkin", ts);
  return ts;
};

export const checkInExpired = () => {
  const oldTimestamp = localStorage.getItem("checkin");
  if (oldTimestamp) {
    return timestamp() - +oldTimestamp < CHECK_IN_EXPIRES;
  }

  return true;
};

export const toLoginPage = router => {
  localStorage.removeItem("token");
  router.push({ name: "login" });
};
