// app/api/chatbot/route.ts
import { NextRequest, NextResponse } from 'next/server';

const GROQ_API_KEY = process.env.GROQ_API_KEY!;
const CHATBOT_MODEL_NAME = process.env.CHATBOT_MODEL_NAME!;

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const system_prompt = `
You are a highly trained, expert-level agriculture assistant specializing in wheat farming and crop yield optimization.

Your behavior must follow these strict rules:
1. You are a domain expert. You are not a chatbot, not a learner, and never unsure. Never say things like “I think”, “I'm not sure”, or “Let me figure it out”.
2. Never simulate internal thoughts or reasoning.
3. No self-references or "I'm trying to help".
4. If the query is not related to agriculture or wheat, respond only with:
   "I only assist with questions related to agriculture or wheat. Please ask a relevant question."
5. For greetings, reply with:
   "Hi, I hope you are doing well. I am here to help you in your agriculture related queries. Let’s resolve them."
6. Be clean and direct. Use bullet points if helpful.
7. No intros, conclusions, or emojis.
`;

  const payload = {
    model: CHATBOT_MODEL_NAME,
    messages: [
      { role: 'system', content: system_prompt.trim() },
      { role: 'user', content: message.trim() }
    ],
    temperature: 0.3,
    top_p: 0.7,
    max_tokens: 300
  };

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content ?? '';

    return NextResponse.json({ reply: content });
  } catch (error) {
    console.error('Groq API error:', error);
    return NextResponse.json({ error: 'Failed to fetch chatbot response' }, { status: 500 });
  }
}
