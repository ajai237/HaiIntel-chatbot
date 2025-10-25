import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const results = {
        openai: { available: false, error: null as string | null },
        google: { available: false, error: null as string | null }
    };

    // Test OpenAI API Key
    if (process.env.OPENAI_API_KEY) {
        try {
            const response = await fetch('https://api.openai.com/v1/models', {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            });

            if (response.ok) {
                results.openai.available = true;
            } else {
                results.openai.error = `Status: ${response.status}`;
            }
        } catch (error) {
            results.openai.error = error instanceof Error ? error.message : 'Unknown error';
        }
    } else {
        results.openai.error = 'API key not found in environment';
    }

    // Test Google AI API Key
    if (process.env.GOOGLE_AI_API_KEY) {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GOOGLE_AI_API_KEY}`);

            if (response.ok) {
                results.google.available = true;
            } else {
                results.google.error = `Status: ${response.status}`;
            }
        } catch (error) {
            results.google.error = error instanceof Error ? error.message : 'Unknown error';
        }
    } else {
        results.google.error = 'API key not found in environment';
    }

    return NextResponse.json({
        message: 'API Key Test Results',
        results,
        environment: {
            openai_key_exists: !!process.env.OPENAI_API_KEY,
            google_key_exists: !!process.env.GOOGLE_AI_API_KEY,
            openai_key_preview: process.env.OPENAI_API_KEY?.substring(0, 10) + '...',
            google_key_preview: process.env.GOOGLE_AI_API_KEY?.substring(0, 10) + '...'
        }
    });
}
