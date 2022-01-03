export const AIRTABLE_API_URL =
  "https://api.airtable.com/v0/appgUwLHw6zd6z1wF/Job%20Postings";

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
  },
};
