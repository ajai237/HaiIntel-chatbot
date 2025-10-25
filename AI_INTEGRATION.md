# HaiIntel AI Chat Integration

This document explains how to set up and use the real AI integration for the HaiIntel chat widget.

## Overview

The chat widget now uses **real AI** with **dual provider support**:

- **Primary**: OpenAI GPT-3.5-turbo
- **Fallback**: Google AI Gemini Pro

This ensures maximum reliability - if one AI service fails, it automatically falls back to the other.

## Features

- **Dual AI Providers**: OpenAI GPT-3.5-turbo (primary) + Google AI Gemini Pro (fallback)
- **Automatic Fallback**: Seamlessly switches to Google AI if OpenAI fails
- **Contextual Conversations**: Maintains conversation history for better responses
- **HaiIntel-Specific Knowledge**: AI is trained on HaiIntel's products, services, and approach
- **Triple Fallback System**: AI → Static responses → Error message
- **Streaming Simulation**: Maintains the smooth typing effect for better UX
- **Smart Follow-ups**: Generates contextual follow-up suggestions

## Setup Instructions

### 1. Get API Keys

#### OpenAI API Key (Primary)

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key (starts with `sk-`)

#### Google AI API Key (Fallback)

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the API key

### 2. Configure Environment Variables

1. Copy the example environment file:

   ```bash
   cp env.example .env.local
   ```

2. Edit `.env.local` and add both API keys:
   ```env
   OPENAI_API_KEY=sk-your-actual-openai-key-here
   GOOGLE_AI_API_KEY=your-actual-google-ai-key-here
   ```

**Note**: You can use just one API key if you prefer, but having both provides better reliability.

### 3. Install Dependencies

The required dependencies are already included in the project. No additional packages needed.

### 4. Start the Development Server

```bash
npm run dev
```

## How It Works

### API Route (`/api/chat`)

The API route handles AI requests:

- Receives user messages and conversation history
- Sends requests to OpenAI API with HaiIntel-specific system prompt
- Returns AI responses or fallback messages

### Chat Widget Updates

The chat widget now:

1. **Calls Real AI**: Sends requests to `/api/chat` endpoint
2. **Maintains Context**: Sends last 10 messages for conversation context
3. **Handles Errors**: Falls back to static responses if AI fails
4. **Smart Suggestions**: Generates contextual follow-up questions

### System Prompt

The AI is configured with a comprehensive system prompt that includes:

- HaiIntel's mission and approach
- All HaiProducts (HaiIntel-Recode, HaiReach, etc.)
- All HaiPODs (Customer Onboarding AI POD, etc.)
- Key transformation areas
- Technology approach
- Contact and engagement information

## Testing

### Test Questions

Try these questions to verify the AI integration:

1. **Basic Questions**:

   - "What is HaiIntel?"
   - "Tell me about HaiIntel's mission"

2. **Product Questions**:

   - "What are HaiProducts?"
   - "Tell me about HaiIntel-Recode"
   - "What is the Unified Intelligence Platform?"

3. **Service Questions**:

   - "What are HaiPODs?"
   - "How does HaiIntel work with CIOs?"
   - "What are the key transformation areas?"

4. **Technical Questions**:
   - "What is HaiIntel's tech stack?"
   - "How does HaiIntel ensure enterprise-grade solutions?"

### Expected Behavior

- **With API Key**: AI provides detailed, contextual responses
- **Without API Key**: Falls back to static responses
- **API Errors**: Graceful fallback with error message

## Configuration Options

### Model Settings

In `src/app/api/chat/route.ts`, you can modify:

```typescript
{
  model: 'gpt-3.5-turbo',        // Change model (gpt-4, gpt-4-turbo, etc.)
  max_tokens: 500,               // Response length
  temperature: 0.7,              // Creativity level (0-1)
  stream: false,                 // Enable streaming
}
```

### Context Length

In `src/components/ChatWidget.tsx`:

```typescript
conversationHistory: messages.slice(-10), // Change number for more/fewer messages
```

## Troubleshooting

### Common Issues

1. **"API Key Not Found"**

   - Ensure `.env.local` exists and contains `OPENAI_API_KEY`
   - Restart the development server after adding the key

2. **"OpenAI API Error"**

   - Check if API key is valid
   - Verify you have credits in your OpenAI account
   - Check API rate limits

3. **"Fallback Responses Only"**
   - Check browser console for error messages
   - Verify API endpoint is accessible
   - Check network connectivity

### Debug Mode

Add console logging to debug issues:

```typescript
// In ChatWidget.tsx
console.log("API Response:", data);
console.log("Error:", error);
```

## Security Considerations

- **API Key Protection**: Never commit `.env.local` to version control
- **Rate Limiting**: Consider implementing rate limiting for production
- **Input Validation**: API route validates input before processing
- **Error Handling**: Graceful fallbacks prevent sensitive information leakage

## Production Deployment

### Environment Variables

Set these in your production environment:

- `OPENAI_API_KEY`: Your OpenAI API key

### Vercel Deployment

1. Add environment variable in Vercel dashboard
2. Deploy normally with `npm run deploy`

### Other Platforms

Ensure your hosting platform supports:

- Environment variables
- Server-side API routes
- External API calls

## Cost Considerations

- **GPT-3.5-turbo**: ~$0.002 per 1K tokens
- **Typical Response**: ~100-200 tokens
- **Estimated Cost**: ~$0.0002-0.0004 per response

Monitor usage in OpenAI dashboard to track costs.

## Alternative AI Services

To use different AI services, modify `src/app/api/chat/route.ts`:

### Anthropic Claude

```typescript
const response = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "x-api-key": process.env.ANTHROPIC_API_KEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "claude-3-sonnet-20240229",
    max_tokens: 500,
    messages: messages,
  }),
});
```

### Google AI

```typescript
const response = await fetch(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: systemPrompt + userMessage }] }],
    }),
  }
);
```

## Support

For issues with:

- **AI Integration**: Check this documentation
- **OpenAI API**: Contact OpenAI support
- **HaiIntel Services**: Use the chat widget itself!
