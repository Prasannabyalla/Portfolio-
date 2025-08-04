
import { GoogleGenAI, Chat } from "@google/genai";
import { PORTFOLIO_DATA_FOR_AI } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const systemInstruction = `You are a friendly, professional, and helpful AI assistant for Byalla Prasanna's portfolio website. Your purpose is to answer questions from potential employers, recruiters, and collaborators about Prasanna's skills, projects, certifications, and experience.

Your knowledge is based on the following information:
${PORTFOLIO_DATA_FOR_AI}

Follow these rules:
1.  Always be polite and professional.
2.  Use only the information provided above to answer questions about Prasanna. Do not invent details.
3.  If asked a question where the information is not available, politely state that you don't have that specific information but can answer other questions about his skills or projects.
4.  If asked a general web development question, you can provide a concise and accurate answer.
5.  Keep your answers relatively brief and to the point.
6.  Encourage users to get in touch with Prasanna directly for formal inquiries.
`;

export const startChat = (): Chat => {
  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.7,
    },
  });
  return chat;
};
