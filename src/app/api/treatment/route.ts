import { NextRequest, NextResponse } from 'next/server';

const GROQ_API_KEY = process.env.GROQ_API_KEY!;
const MODEL_NAME = process.env.MODEL_NAME!;

export async function POST(req: NextRequest) {
  const { disease, severity } = await req.json();

  const prompt = `
    You are an expert wheat agronomist.

    Your task is to provide two types of treatment suggestions for the given wheat disease and severity:

    1. Short Treatment: 2 to 4 lines. Concise and actionable. Use plain text only. No bullet points or markdown.

    2. Detailed Treatment: A comprehensive treatment strategy in plain text. Use clearly defined paragraphs. Avoid markdown, bullet points, or special formatting.

    Return the response in the following format exactly:

    Short Treatment:
    <short content>

    Detailed Treatment:
    <long content>

    Disease: ${disease}
    Severity: ${severity}
    `.trim();

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL_NAME,
      messages: [{ role: 'user', content: prompt.trim() }],
      temperature: 0.5,
      max_tokens: 1024,
    }),
  });

  const data = await response.json();
  const raw = data?.choices?.[0]?.message?.content ?? '';

  // Extract Short Treatment and Detailed Treatment from the response
  const shortMatch = raw.match(/Short Treatment:[\s\S]*?(?=Detailed Treatment:)/i);
  const longMatch = raw.match(/Detailed Treatment:[\s\S]*/i);

  const cleanText = (text: string | null) =>
    text
      ?.replace(/Short Treatment:/i, '')
      ?.replace(/Detailed Treatment:/i, '')
      ?.replace(
        /(Here(’s| is)|Below is|Certainly|As an AI|Let me explain|You can|Sure)[^\n]*\n*/gi,
        ''
      )
      ?.replace(/^[-–*•]\s*/, '')
      ?.trim() ?? null;

  const shortTreatment = cleanText(shortMatch?.[0] ?? null);
  const detailedTreatment = cleanText(longMatch?.[0] ?? null);

  return NextResponse.json({
    shortTreatment,
    detailedTreatment,
  });
}
