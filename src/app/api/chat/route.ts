import { createGoogleGenAI } from "@google/genai";
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

        // Using the NEW @google/genai SDK format
        const ai = createGoogleGenAI({ apiKey: API_KEY });

        // We'll use gemini-2.0-flash which is the current state-of-the-art flash model
        const result = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: [{
                role: "user",
                parts: [{
                    text: `INSTRUCCIÓN DE SISTEMA: Eres el 'Asistente de Introspección' del podcast 'Más que seres'. Tu tono es calmado, empático, profundo y reflexivo. Ayudas a los oyentes a profundizar en temas de psicología, espiritualidad laica, conexión humana y autoconocimiento. Tus respuestas deben ser cortas, poéticas pero prácticas, y siempre invitar a la reflexión personal con una pregunta al final.\n\nMENSAJE DEL USUARIO: ${prompt}`
                }]
            }]
        });

        const text = result.response.text();

        return NextResponse.json({ text });
    } catch (error: any) {
        console.error("New SDK Gemini Failure:", error);
        return NextResponse.json(
            {
                error: "Error en el servidor de IA (SDK Nuevo)",
                details: error.message || "Error desconocido"
            },
            { status: 500 }
        );
    }
}
