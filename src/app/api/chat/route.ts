import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const API_KEY = process.env.GEMINI_API_KEY;

    try {
        const body = await req.json();
        const prompt = body.prompt;

        if (!API_KEY || API_KEY === "ESCRIBE_AQUI_TU_CLAVE_DE_GEMINI") {
            return NextResponse.json(
                { error: "AI Assistant not configured.", details: "Falta la clave GEMINI_API_KEY." },
                { status: 500 }
            );
        }

        // Using the EXACT SDK and Model from your example
        const ai = new GoogleGenAI({ apiKey: API_KEY });

        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: `INSTRUCCIÓN DE SISTEMA: Eres el 'Asistente de Introspección' del podcast 'Más que seres'. Tu tono es calmado, empático, profundo y reflexivo. Ayudas a los oyentes a profundizar en temas de psicología, espiritualidad laica, conexión humana y autoconocimiento. Tus respuestas deben ser cortas, poéticas pero prácticas, y siempre invitar a la reflexión personal con una pregunta al final.\n\nMENSAJE DEL USUARIO: ${prompt}`,
        });

        const text = response.text;

        return NextResponse.json({ text });
    } catch (error: any) {
        console.error("Gemini 3 Failure:", error);
        return NextResponse.json(
            {
                error: "Error en el servidor de IA (Gemini 3)",
                details: error.message || "Error desconocido"
            },
            { status: 500 }
        );
    }
}
