import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        // Test the chat API directly
        const testResponse = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: "What is HaiIntel?",
                conversationHistory: []
            }),
        });

        const testData = await testResponse.json();

        return NextResponse.json({
            message: 'Direct API Test',
            status: testResponse.status,
            response: testData,
            environment: {
                openai_key_exists: !!process.env.OPENAI_API_KEY,
                google_key_exists: !!process.env.GOOGLE_AI_API_KEY,
            }
        });

    } catch (error) {
        return NextResponse.json({
            message: 'Direct API Test Error',
            error: error instanceof Error ? error.message : 'Unknown error',
            environment: {
                openai_key_exists: !!process.env.OPENAI_API_KEY,
                google_key_exists: !!process.env.GOOGLE_AI_API_KEY,
            }
        });
    }
}
