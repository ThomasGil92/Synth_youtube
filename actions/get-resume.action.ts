"use server";
import { YoutubeTranscript } from "youtube-transcript";
import OpenAi from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

export async function getResume(videoId: string) {
  const transcript = await YoutubeTranscript.fetchTranscript(videoId);
  const transcriptText = transcript.map((item) => item.text).join(" ");
  const resume = await sendToChatGpt(transcriptText);
  return resume;
}

const sendToChatGpt = async (transcriptText: string) => {
  const client = new OpenAi({ apiKey: process.env.OPENAI_API_KEY });

  const systemMessage: ChatCompletionMessageParam = {
    role: "system",
    content:
      "you must summarize as much as possible the text that I am going to provide you, highlight the important and concrete information. If any unclear words or names appear, infer their meaning based on the general context of the transcript to avoid ambiguities. Provide a title, an introduction, some key points and a conclusion. The response must be in french and in markdown format.",
  };

  const userMessage: ChatCompletionMessageParam = {
    role: "user",
    content: transcriptText,
  };

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [systemMessage, userMessage],
  });

  return completion.choices[0].message.content;
};
