import { DOMAIN } from "@/config";

/*
 * https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API
 * PerformanceNavigation.type Read only
 * An unsigned short which indicates how the
 * navigation to this page was done. Possible values are:
 * 1. TYPE_NAVIGATE     (0)   - The page was accessed by following a link,
 *                              a bookmark, a form submission, or a script,
 *                              or by typing the URL in the address bar.
 *
 * 2. TYPE_RELOAD       (1)   - The page was accessed by clicking the Reload button
 *                              or via the Location.reload() method.
 *
 * 3. TYPE_BACK_FORWARD (2)   - The page was accessed by navigating into the history.
 *
 * 4. TYPE_RESERVED     (255) - Any other way.
 */

/*
 * Checks if browser was loaded if link was accessed
 */
const TYPE_NAVIGATE = 0;
const TYPE_RELOAD = 1;

export function browserOnLoad() {
  if (window.performance) {
    return performance.navigation.type === TYPE_NAVIGATE;
  }

  return true;
}

/*
 * Checks if browser was reloaded/refreshed
 */
export function browserReloaded() {
  if (window.performance) {
    return performance.navigation.type === TYPE_RELOAD;
  }

  return true;
}

export function transformQueryParams(params) {
  const keys = Object.keys(params);
  let result = {};

  keys.forEach(key => {
    if (params[key] !== undefined) {
      if (isNaN(params[key])) {
        result[key] = params[key];
      } else {
        result[key] = parseInt(params[key], 10);
      }
    }
  });

  return result;
}

/*
 * Set application specific cookies
 * ``jwt_token`` is also used by resty
 * to verify permissions to access cetain
 * documents which were uploaded for IDP.
 */
export function setCookies(token) {
  document.cookie = `jwt_token=${token};domain=${DOMAIN}`;
  document.cookie = `jwt_token=${token};domain=.${DOMAIN}`;
}

/**
 * Sets up session for user and installs cookie and saves
 * authentication token in ``localStorage``
 * @param {Object} data authentication information
 * @returns {Object} user authenticated user information
 */
export function setupSession(data) {
  const token = data.tokenAuth.token;

  // Setup session for user
  setCookies(token);
  localStorage.setItem("token", token);

  return data.tokenAuth.user;
}
