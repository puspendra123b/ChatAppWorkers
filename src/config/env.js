import "dotenv/config";

export const env = {
  REDIS_URI: process.env.REDIS_URI,

  // Google SMTP
  SMTP_HOST: process.env.SMTP_HOST || "smtp.gmail.com",
  SMTP_PORT: process.env.SMTP_PORT || 587,
  SMTP_USER: process.env.SMTP_USER || "",
  SMTP_PASS: process.env.SMTP_PASS || "",
};
