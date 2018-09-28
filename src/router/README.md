# Router

Router is responsible to

1. Handle navigation across the application,
2. Load initial data (bootstrapping),
3. Provide global loading bar.

Also responsible to keep internal pages/view secure thus the following routines
performed every 15 minutes

1. Check if last token verification time is more that 15 minutes,
2. If more then 15 minutes then send query to API to validate token,
3. If token is invalid then redirect to login page and cleanup token from browser.
