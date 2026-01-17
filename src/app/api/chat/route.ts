import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    // Read key INSIDE the handler to ensure fresh environment access
    const API_KEY = process.env.GEMINI_API_KEY;

    try {
        const body = await req.json();
        const prompt = body.prompt;

        if (!API_KEY || API_KEY === "ESCRIBE_AQUI_TU_CLAVE_DE_GEMINI") {
            console.error("GEMINI_API_KEY is missing or placeholder");
            return NextResponse.json(
                {
                    error: "AI Assistant not configured.",
                    details: "La clave GEMINI_API_KEY no se ha detectado en el servidor. Asegúrate de añadirla en Vercel y hacer un 'Redeploy'."
                },
                { status: 500 }
            );
        }

        if (!prompt) {
            return NextResponse.json(
                { error: "No prompt provided" },
                { status: 400 }
            );
        }

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash-002",
            systemInstruction: "Eres el 'Asistente de Introspección' del podcast 'Más que seres'. Tu tono es calmado, empático, profundo y reflexivo. Ayudas a los oyentes a profundizar en temas de psicología, espiritualidad laica, conexión humana y autoconocimiento. Tus respuestas deben ser cortas, poéticas pero prácticas, y siempre invitar a la reflexión personal con una pregunta al final.",
        });

        // Use standard contents format
        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: prompt }] }]
        });

        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ text });
    } catch (error: any) {
        console.error("Gemini Failure:", error);

        return NextResponse.json(
            {
                error: "Error en el servidor de IA",
                details: (error.message || "Error desconocido") + " (v3)"
            },
            { status: 500 }
        );
    }
}
