import axios from "axios";

export async function GET() {
  const response = await axios.post(
    `https://api.openai.com/v1/realtime/client_secrets`,
    {
      model: `gpt-4o-realtime-preview`,
      modalities: ["audio", "text"],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );

  return Response.json({ tempkey: response.data });
}
