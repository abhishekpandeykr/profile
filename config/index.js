const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://profile-iv9wtgtz6-abhishekpandeykr.vercel.app";
