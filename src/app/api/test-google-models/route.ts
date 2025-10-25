import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        if (!process.env.GOOGLE_AI_API_KEY) {
            return NextResponse.json({ error: 'Google AI API key not found' });
        }

        // Test different model names
        const models = [
            'gemini-pro',
            'gemini-1.5-pro',
            'gemini-1.5-flash',
            'gemini-1.0-pro',
            'gemini-pro-vision'
        ];

        const results = [];

        for (const model of models) {
            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GOOGLE_AI_API_KEY}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: "Hello, this is a test message."
                            }]
                        }],
                        generationConfig: {
                            maxOutputTokens: 10,
                            temperature: 0.7,
                        }
                    }),
                });

                results.push({
                    model: model,
                    status: response.status,
                    available: response.ok,
                    error: response.ok ? null : await response.text()
                });
            } catch (error) {
                results.push({
                    model: model,
                    status: 'error',
                    available: false,
                    error: error instanceof Error ? error.message : 'Unknown error'
                });
            }
        }

        return NextResponse.json({
            message: 'Google AI Model Test Results',
            results: results,
            apiKey: process.env.GOOGLE_AI_API_KEY?.substring(0, 10) + '...'
        });

    } catch (error) {
        return NextResponse.json({
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}
