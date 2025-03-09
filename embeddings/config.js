import openai from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not set");
}

export default new openai({
  apikey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
