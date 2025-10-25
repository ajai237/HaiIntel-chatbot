import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { message, conversationHistory } = await request.json();

        console.log('Chat API Test - Input:');
        console.log('Message:', message);
        console.log('Conversation History Length:', conversationHistory?.length || 0);

        // Test with a simple message
        const testMessage = message || "Hello, what is HaiIntel?";
        const testHistory = conversationHistory || [];

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
                console.log('Testing OpenAI API...');

                // Prepare messages for OpenAI API
                const messages = [
                    { role: 'system', content: systemPrompt },
                    ...testHistory.map((msg: any) => ({
                        role: msg.isUser ? 'user' : 'assistant',
                        content: msg.text
                    })),
                    { role: 'user', content: testMessage }
                ];

                console.log('OpenAI Messages Count:', messages.length);
                console.log('OpenAI System Prompt Length:', systemPrompt.length);

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

                console.log('OpenAI Response Status:', response.status);

                if (response.ok) {
                    const data = await response.json();
                    const aiResponse = data.choices[0]?.message?.content || 'I apologize, but I could not generate a response at this time.';

                    console.log('OpenAI API successful');
                    return NextResponse.json({
                        response: aiResponse,
                        success: true,
                        provider: 'openai',
                        test: true
                    });
                } else {
                    const errorData = await response.text();
                    console.error('OpenAI API error:', errorData);
                    return NextResponse.json({
                        response: `OpenAI API Error: ${response.status} - ${errorData}`,
                        success: false,
                        error: `OpenAI API Error: ${response.status} - ${errorData}`,
                        test: true
                    });
                }
            } catch (error) {
                console.error('OpenAI API error:', error);
                return NextResponse.json({
                    response: `OpenAI API Error: ${error}`,
                    success: false,
                    error: `OpenAI API Error: ${error}`,
                    test: true
                });
            }
        }

        return NextResponse.json({
            response: 'No OpenAI API key found',
            success: false,
            error: 'No OpenAI API key found',
            test: true
        });

    } catch (error) {
        console.error('Chat API Test Error:', error);

        return NextResponse.json({
            response: `Chat API Test Error: ${error}`,
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error',
            test: true
        });
    }
}
