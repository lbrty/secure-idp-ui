export const GRAPHQL_ENDPOINT = process.env.VUE_APP_GRAPHQL_ENDPOINT;

// Environment flags
export const IS_DEV = process.env.NODE_ENV === "development";

// 20 MB
export const MAX_FILE_SIZE = 20971520;

// API related base urls
export const DOMAIN = process.env.VUE_APP_DOMAIN;
export const API_URL = process.env.VUE_APP_API_URL;

// Misc
export const APP_TITLE = process.env.VUE_APP_TITLE || "IDP";
