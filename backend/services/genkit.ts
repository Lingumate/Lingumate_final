
import { GoogleGenerativeAI } from '@google/generative-ai';
import { env } from '../config/env.js';

// Initialize Google AI
const genAI = new GoogleGenerativeAI(env.GOOGLE_AI_API_KEY || '');

// Create the model instance
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Export the ai object with the generateText method
export const ai = {
  generateText: async (options: any) => {
    try {
      console.log('🔧 Calling Google AI generateText with prompt:', options.prompt?.substring(0, 50) + '...');
      
      let prompt = options.prompt || '';
      
      // Handle media if provided
      if (options.media) {
        const { mimeType, data } = options.media;
        
        // For audio, we'll need to handle it differently since Gemini 2.0 doesn't support audio directly
        if (mimeType.startsWith('audio/')) {
          prompt = `Please transcribe the following audio to text. ${prompt}`;
          // For now, we'll return a placeholder since audio transcription needs special handling
          return {
            text: () => "Audio transcription placeholder - please implement proper audio handling"
          };
        }
      }
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      console.log('✅ Google AI response received:', text.substring(0, 50) + '...');
      
      return {
        text: () => text
      };
    } catch (error) {
      console.error('❌ Google AI generateText error:', error);
      throw error;
    }
  },
  
  // Mock definePrompt for compatibility
  definePrompt: (config: any) => {
    return async (input: any) => {
      const result = await ai.generateText({ prompt: config.prompt });
      return { output: result.text() };
    };
  },
  
  // Mock defineFlow for compatibility
  defineFlow: (config: any, handler: any) => {
    return async (input: any) => {
      return await handler(input);
    };
  }
};
