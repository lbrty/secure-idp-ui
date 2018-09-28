import { timestamp } from "@/helpers/dates";
export const isLoginPage = route => String(route).toLowerCase() === "login";

// We will check token every 15 minutes
export const CHECK_IN_EXPIRES = 15 * 60;

export const getToken = () => localStorage.getItem("token");

export const checkIn = () => {
  const ts = timestamp();
  localStorage.setItem("checkin", ts);
  return ts;
};

export const mayBeCheckIn = () => {
  if (checkInExpired()) {
    console.info("Time to check-in…");
    checkIn();
  }
};

export const checkInExpired = () => {
  const oldTimestamp = localStorage.getItem("checkin");

  if (oldTimestamp) {
    const diff = Math.abs(+oldTimestamp - timestamp()) / 1000;
    return diff > CHECK_IN_EXPIRES;
  }

  return true;
};

export const toLoginPage = router => {
  localStorage.removeItem("token");
  localStorage.removeItem("checkin");
  router.push({ name: "login" });
};
