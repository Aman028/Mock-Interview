/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-interview-mock_owner:8n3tCTUkRdLb@ep-odd-dream-a5so119x.us-east-2.aws.neon.tech/ai-interview-mock?sslmode=require",
  },
};
