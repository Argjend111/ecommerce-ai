// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
  try {
    // Parse messages from client
    const { messages } = await request.json(); // [{ role: "user", content: "..." }]

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Messages must be provided" }, { status: 400 });
    }

    // Get the userId from Clerk (optional)
    const { userId } = await auth();

    // Initialize OpenAI client
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    // Call OpenAI Chat Completion
    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-3.5-turbo"
      messages: messages,
      temperature: 0.7,
    });

    // Return OpenAI response to client
    return NextResponse.json({
      userId,
      response: completion.choices[0].message,
    });
  } catch (error: any) {
    console.error("OpenAI error:", error);
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
  }
}
