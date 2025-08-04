
import React, { useState, useEffect, useRef } from 'react';
import type { ChatMessage } from '../types';
import { startChat } from '../services/geminiService';
import type { Chat } from '@google/genai';

interface CareerBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const CareerBot: React.FC<CareerBotProps> = ({ isOpen, onClose }) => {
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const initChat = () => {
        const session = startChat();
        setChatSession(session);
        setMessages([
          { sender: 'bot', text: "Hello! I'm Prasanna's AI assistant. Ask me anything about his skills, projects, or experience." }
        ]);
      };
      initChat();
    }
  }, [isOpen]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading || !chatSession) return;

    const userMessage: ChatMessage = { sender: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
        const response = await chatSession.sendMessageStream({ message: userInput });
        let botResponse = '';
        setMessages(prev => [...prev, { sender: 'bot', text: '' }]);
        
        for await (const chunk of response) {
            botResponse += chunk.text;
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].text = botResponse;
                return newMessages;
            });
        }
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      const errorMessage: ChatMessage = { sender: 'bot', text: "Sorry, I'm having trouble connecting right now. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center" onClick={onClose}>
      <div 
        className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-lg h-[80vh] flex flex-col border border-sky-500/30 transform transition-all duration-300 scale-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">AI Career Bot</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-sky-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
              <div className="bg-gray-700 p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="h-2 w-2 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="h-2 w-2 bg-sky-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t border-gray-700">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask about projects, skills, etc."
              className="flex-1 bg-gray-800 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              disabled={isLoading}
            />
            <button type="submit" className="bg-sky-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors disabled:bg-gray-500" disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerBot;
