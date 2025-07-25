import { url } from "inspector";

export const config = {
  bot: {
    token: process.env.DISCORD_TOKEN,
    client_id: process.env.CLIENT_ID,
  },
  b3api: {
    url: 'https://b3api.vercel.app/api',
  },
  brapi_v1: {
    url: 'https://brapi.dev/api',
  },
  brapi_v2: {
    url: 'https://brapi.dev/api/v2',
  }
}