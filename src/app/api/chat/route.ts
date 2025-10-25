import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { message, conversationHistory } = await request.json();

        // System prompt with HaiIntel context
        const systemPrompt = `You are HaiIntel's AI assistant. HaiIntel partners with CIOs to embed human-rooted AI into enterprise transformation — accelerating outcomes through domain-aware, intelligence-first systems.

HaiIntel's Products (HaiProducts):
- HaiIntel-Recode: AI-powered legacy system modernization
- HaiReach: Customer engagement and outreach automation
- HaiOnboarding: Streamlined customer onboarding processes
- HaiResolve: Intelligent issue resolution and support
- HaiModels: Custom AI model development and deployment
- Unified Intelligence Platform: Comprehensive AI solution suite

HaiIntel's AI PODs (HaiPODs):
- Customer Onboarding AI POD: Specialized AI for onboarding processes
- Rewards AI POD: AI-driven rewards and loyalty programs
- Modernization AI POD: Legacy system transformation AI
- Citizen Services AI POD: Government and public sector AI solutions
- Experience AI POD: Customer experience enhancement AI

Key Information:
- HaiIntel works with CIOs as transformation co-pilots
- Focus on enterprise transformation through AI
- Domain-aware, intelligence-first approach
- Cross-industry expertise with domain-agnostic methodology
- Technology-agnostic approach
- Enterprise-grade, best-in-class, integration-ready solutions

Key Transformation Areas:
- Legacy Modernization
- Customer Experience Enhancement
- Operational Efficiency Optimization
- Data Intelligence & Analytics
- Compliance & Security Automation
- Innovation Acceleration

Provide helpful, accurate information about HaiIntel's services, products, and approach. Be conversational and professional. If asked about something not related to HaiIntel, politely redirect to HaiIntel topics.`;

        // Try OpenAI first
        if (process.env.OPENAI_API_KEY) {
            try {
                console.log('Attempting OpenAI API...');
                console.log('OpenAI API Key preview:', process.env.OPENAI_API_KEY.substring(0, 10) + '...');

                // Prepare messages for OpenAI API
                const messages = [
                    { role: 'system', content: systemPrompt },
                    ...conversationHistory.map((msg: any) => ({
                        role: msg.isUser ? 'user' : 'assistant',
                        content: msg.text
                    })),
                    { role: 'user', content: message }
                ];

                console.log('OpenAI Messages count:', messages.length);
                console.log('OpenAI System prompt length:', systemPrompt.length);

                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: messages,
                        max_tokens: 500,
                        temperature: 0.7,
                        stream: false,
                    }),
                });

                console.log('OpenAI API response status:', response.status);

                if (response.ok) {
                    const data = await response.json();
                    const aiResponse = data.choices[0]?.message?.content || 'I apologize, but I could not generate a response at this time.';

                    console.log('OpenAI API successful, response length:', aiResponse.length);
                    return NextResponse.json({
                        response: aiResponse,
                        success: true,
                        provider: 'openai'
                    });
                } else {
                    const errorData = await response.text();
                    console.error('OpenAI API error response:', errorData);

                    // Check for specific error types
                    if (response.status === 429) {
                        console.log('OpenAI quota exceeded, trying Google AI...');
                    } else if (response.status === 401) {
                        console.log('OpenAI API key invalid, trying Google AI...');
                    } else {
                        console.log('OpenAI API failed, trying Google AI...');
                    }
                }
            } catch (error) {
                console.error('OpenAI API exception:', error);
                console.log('OpenAI API error, trying Google AI...');
            }
        } else {
            console.log('OpenAI API key not found, trying Google AI...');
        }

        // Fallback to Google AI
        if (process.env.GOOGLE_AI_API_KEY) {
            try {
                console.log('Attempting Google AI API...');
                console.log('Google AI API Key preview:', process.env.GOOGLE_AI_API_KEY.substring(0, 10) + '...');

                // Prepare content for Google AI
                const conversationContext = conversationHistory
                    .map((msg: any) => `${msg.isUser ? 'User' : 'Assistant'}: ${msg.text}`)
                    .join('\n');

                const fullPrompt = `${systemPrompt}\n\nConversation History:\n${conversationContext}\n\nUser: ${message}\n\nAssistant:`;

                console.log('Google AI Prompt length:', fullPrompt.length);

                // Try Google AI Studio API instead
                const response = await fetch(`https://ai.google.dev/api/rest/v1beta/models/gemini-pro:generateContent?key=${process.env.GOOGLE_AI_API_KEY}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: fullPrompt
                            }]
                        }],
                        generationConfig: {
                            maxOutputTokens: 500,
                            temperature: 0.7,
                        }
                    }),
                });

                console.log('Google AI API response status:', response.status);

                if (response.ok) {
                    const data = await response.json();
                    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'I apologize, but I could not generate a response at this time.';

                    console.log('Google AI API successful, response length:', aiResponse.length);
                    return NextResponse.json({
                        response: aiResponse,
                        success: true,
                        provider: 'google'
                    });
                } else {
                    const errorData = await response.text();
                    console.error('Google AI API error response:', errorData);
                }
            } catch (error) {
                console.error('Google AI API exception:', error);
            }
        } else {
            console.log('Google AI API key not found');
        }

        // If both APIs fail
        console.error('Both OpenAI and Google AI APIs failed');
        return NextResponse.json({
            response: 'I apologize, but I\'m experiencing technical difficulties. Please try again later or contact HaiIntel directly for assistance.',
            success: false,
            error: 'All AI services unavailable'
        });

    } catch (error) {
        console.error('AI API Error:', error);

        return NextResponse.json({
            response: 'I apologize, but I\'m experiencing technical difficulties. Please try again later or contact HaiIntel directly for assistance.',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}