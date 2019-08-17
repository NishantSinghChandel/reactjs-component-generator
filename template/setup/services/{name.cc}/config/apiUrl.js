const DEV_URL = "";
const PROD_URL = "";

export const API_URL = process.env.NODE_ENV === "development" ? DEV_URL : PROD_URL;
