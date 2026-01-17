import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const API_KEY = process.env.GEMINI_API_KEY || "";

export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();

        if (!API_KEY) {
            return NextResponse.json(
                { error: "AI Assistant not configured. Please set GEMINI_API_KEY." },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash-latest",
            systemInstruction: "Eres el 'Asistente de Introspección' del podcast 'Más que seres'. Tu tono es calmado, empático, profundo y reflexivo. Ayudas a los oyentes a profundizar en temas de psicología, espiritualidad laica, conexión humana y autoconocimiento. Tus respuestas deben ser cortas, poéticas pero prácticas, y siempre invitar a la reflexión personal con una pregunta al final.",
        });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ text });
    } catch (error) {
        console.error("Gemini API Error:", error);
        return NextResponse.json(
            { error: "Failed to generate AI response." },
            { status: 500 }
        );
    }
}
