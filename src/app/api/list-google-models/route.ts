import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        if (!process.env.GOOGLE_AI_API_KEY) {
            return NextResponse.json({ error: 'Google AI API key not found' });
        }

        // First, let's try to list available models
        try {
            const listResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GOOGLE_AI_API_KEY}`);

            if (listResponse.ok) {
                const listData = await listResponse.json();
                return NextResponse.json({
                    message: 'Available Google AI Models',
                    models: listData.models || [],
                    apiKey: process.env.GOOGLE_AI_API_KEY?.substring(0, 10) + '...'
                });
            } else {
                const errorText = await listResponse.text();
                return NextResponse.json({
                    message: 'Failed to list models',
                    status: listResponse.status,
                    error: errorText,
                    apiKey: process.env.GOOGLE_AI_API_KEY?.substring(0, 10) + '...'
                });
            }
        } catch (error) {
            return NextResponse.json({
                message: 'Error listing models',
                error: error instanceof Error ? error.message : 'Unknown error',
                apiKey: process.env.GOOGLE_AI_API_KEY?.substring(0, 10) + '...'
            });
        }

    } catch (error) {
        return NextResponse.json({
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}
